const { exec } = require('child_process')
const filesystem = require('fs')

const packageNamesByDependencyLevel = {}

const scanPackages = async (callback) => {
  const baseFolderPath = `${process.cwd()}/packages`
  const metaPathname = `${baseFolderPath}/{{PACKAGE_META_NAME}}/package.json`

  console.log('🎁 Scanning packages')

  filesystem.readdir(baseFolderPath, (err, folderPackageNames) => {
    if (err) {
      console.log('🪣 Could not read the packages folder due to the following error', err)
      return
    }

    if (folderPackageNames.length === 0) {
      console.log('🪣 No package could have been found inside the "packages" folder.')
      return
    }

    for (const folderName of folderPackageNames) {
      const packageMetadataFilename = metaPathname.replace('{{PACKAGE_META_NAME}}', folderName)
      const packageMetadata = require(packageMetadataFilename)

      if (typeof packageMetadata?.dependencyLevel === 'number' && !packageMetadata?.scripts?.build) {
        console.log(
          `🪣 The package "${folderName}" has a dependencyLevel field but no "build" script. Either declare a build script or remove the dependencyLevel field from its package.json file. We will ignore this package.`
        )
        continue
      }

      if (packageMetadata?.scripts?.build) {
        if (typeof packageMetadata?.dependencyLevel !== 'number') {
          console.log(
            `🪣 The package "${folderName}" has a "build" script but its dependencyLevel field is not a number. Either declare a valid dependencyLevel value (1-10) or remove the "build" script from its package.json file. We will ignore this package.`
          )
          continue
        }

        const packageName = packageMetadata.name
        const packageDependencyLevel = packageMetadata.dependencyLevel

        if (typeof packageName !== 'string') {
          console.log(
            `🪣 The package in the folder "packages/${folderName}" does not have a name. Please declare it in order to build and publish it.`
          )
          continue
        }

        if (!packageNamesByDependencyLevel[packageDependencyLevel]) {
          packageNamesByDependencyLevel[packageDependencyLevel] = []
        }

        packageNamesByDependencyLevel[packageDependencyLevel].push({ folderPackageName: folderName, packageName })
        console.log(`🔎 Detected package "${packageName}" with dependency level ${packageDependencyLevel}`)
      }
    }

    if (typeof callback === 'function') {
      callback()
    }
  })
}

const buildPackage = async ({ folderPackageName, packageName } = {}) => {
  return new Promise((resolve) => {
    if (folderPackageName && packageName) {
      console.log(`🎁 Building ${packageName} package`)

      exec(`yarn workspace ${packageName} run build`, (err) => {
        if (err) {
          console.log(`🔥 Could not build the package "${packageName}" due to the following error`, err)
          return
        }
        console.log(`📦 Finished building ${packageName} package`)
        resolve()
      })
    }
  })
}

const buildPackages = async () => {
  const dependencyLevels = Object.keys(packageNamesByDependencyLevel)

  if (dependencyLevels.length === 0) {
    console.log(
      '🪣 No package could have been found inside the "packages" folder. Was the function scanPackages() invoked? We need it :/'
    )
    return
  }

  for (const dependencyLevel of dependencyLevels) {
    const packages = packageNamesByDependencyLevel[dependencyLevel]

    if (!packages) {
      continue
    }

    for (const packageMetadata of packages) {
      await buildPackage(packageMetadata)
    }
  }
}

scanPackages(buildPackages)
