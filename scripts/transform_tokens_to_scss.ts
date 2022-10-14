import * as fs from 'node:fs/promises'

import { LouTheme, toRem } from '@louffee/canada-style-system'
import * as chalk from 'chalk'
import { kebabCase } from 'quebec'

// We use this variable to store the whole SCSS/SASS file content which is yet to be created hereby.
let stylesContent =
  '// This file is auto-generated. Do not edit it manually, instead rerun "transform-tokens-to-scss" script.\n\n'

function transpileTokensToVariables(): string {
  const { colors, radii, spacing, shadows, breakpoints, transitions, typography } = LouTheme

  Object.keys(colors).forEach((colorSchema) => {
    const colorSchemaAsKey = colorSchema as keyof typeof colors

    switch (colorSchema) {
      case 'object': {
        for (const colorVariant in Object.keys(colors[colorSchemaAsKey])) {
          const colorVariantAsKey = colorVariant as keyof typeof colors[typeof colorSchemaAsKey]
          const colorValue = colors[colorSchemaAsKey][colorVariantAsKey]

          // Observe that any SCSS variable begins with a $ symbol.
          stylesContent += `$color-${colorSchema}-${colorVariant}: ${colorValue};\n`
        }
        break
      }
      case 'string': {
        stylesContent = `$color-${colorSchema}: ${colors[colorSchemaAsKey]};\n`
        break
      }
      default:
        break
    }
  })

  Object.keys(radii).forEach((radiiSchema) => {
    const radiiSchemaAsKey = radiiSchema as keyof typeof radii
    const radiiValue = radii[radiiSchemaAsKey]

    stylesContent += `$radii-${radiiSchema}: ${radiiValue}px;\n`
  })

  Object.keys(spacing).forEach((spacingSchema) => {
    const spacingSchemaAsKey = spacingSchema as keyof typeof spacing
    const spacingValue = spacing[spacingSchemaAsKey]

    stylesContent += `$spacing-${kebabCase(spacingSchema)}: ${spacingValue};\n`
  })

  Object.keys(shadows).forEach((shadowsSchema) => {
    const shadowsSchemaAsKey = shadowsSchema as keyof typeof shadows
    const shadowsValue = shadows[shadowsSchemaAsKey]

    stylesContent += `$shadows-${shadowsSchema}: ${shadowsValue};\n`
  })

  Object.keys(breakpoints)
    .filter((val) => val !== 'xs')
    .forEach((breakpointsSchema) => {
      const breakpointsSchemaAsKey = breakpointsSchema as keyof typeof breakpoints
      const breakpointsValue = breakpoints[breakpointsSchemaAsKey]

      stylesContent += `$breakpoints-${breakpointsSchema}: ${toRem(Number(breakpointsValue))};\n`
    })

  Object.keys(transitions).forEach((transitionsSchema) => {
    const transitionsSchemaAsKey = transitionsSchema as keyof typeof transitions
    const transitionsValue = transitions[transitionsSchemaAsKey]

    stylesContent += `$transitions-${transitionsSchema}: ${transitionsValue};\n`
  })

  stylesContent += `$font-family: ${typography.fontFamily};\n`
  stylesContent += `$font-weight-bold: ${typography.fontWeightBold};\n`
  stylesContent += `$font-weight-medium: ${typography.fontWeightMedium};\n`
  stylesContent += `$font-weight-regular: ${typography.fontWeightRegular};\n`
  stylesContent += `$font-weight-light: ${typography.fontWeightLight};\n`

  Object.keys(typography.variants).forEach((variant) => {
    const variantAsKey = variant as keyof typeof typography.variants
    const kebabVariantAsKey = kebabCase(variant)
    const { fontSize, fontWeight, lineHeight } = typography.variants[variantAsKey]

    stylesContent += `$font-size-${kebabVariantAsKey}: ${toRem(fontSize)};\n`
    stylesContent += `$font-weight-${kebabVariantAsKey}: ${fontWeight};\n`
    stylesContent += `$line-height-${kebabVariantAsKey}: ${lineHeight};\n`
  })

  return stylesContent
}

async function writeStylesContentToFile(): Promise<void> {
  console.log('🎟 Updating tokens content to file...')

  const stylesContent = transpileTokensToVariables()
  const output = `${process.cwd()}/packages/@louffee-utility-classes/src/_tokens.scss`

  await fs.writeFile(output, stylesContent)

  console.log(`🏆 Tokens updated and written to ${chalk.green(output)}`)
}

writeStylesContentToFile()
