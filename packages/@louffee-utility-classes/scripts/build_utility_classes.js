// @ts-check
const { LouTheme, toRem } = require('@louffee/style-system')

const MEASURE_RANGE = 1000
const VIEW_PORT_RANGE = 100
const INSET_EDGES_RANGE = 100
const RADII_RANGE = 50
const BORDER_WIDTH_RANGE = 30
const INSET_RANGE = 1000

let output = []

function compileStyles(title, styles) {
  output.push(`/* ${title} */`, styles)
}

function generatePageNormalization() {
  compileStyles(
    'Page normalization',
    `
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
    }

    * {
      font-family: -apple-system, BlinkMacSystemFont, Inter, 'Helvetica Neue', sans-serif !important;

      box-sizing: border-box;
      outline: none;
    }

    button, a {
      cursor: pointer;
      outline: none;
      border: none;
      background: transparent;
    }
    `
  )
}
generatePageNormalization()

function generateTransition() {
  compileStyles('Transition', '.transition { transition: all 0.2s ease-in-out; }')
}
generateTransition()

function generateResetters() {
  compileStyles('Border none', '.border-none { border: none; }')
  compileStyles('Outline none', '.outline-none { outline: none; }')
  compileStyles('Background none', '.background-none { background: none; }')
  compileStyles('Background transparent', '.background-transparent { background: transparent; }')
  compileStyles('Background white', '.background-white { background: white; }')
  compileStyles('Background black', '.background-black { background: black; }')
}
generateResetters()

async function buildColors() {
  const { colors } = LouTheme

  const colorKeys = Object.keys(colors)

  let variablesUnderRootSelector = ''

  for (const colorKey of colorKeys) {
    const colorPalette = colors[colorKey]

    if (['white', 'black'].includes(colorKey)) {
      continue
    }

    const colorPaletteKeys = Object.keys(colorPalette)

    for (const scale of colorPaletteKeys) {
      const color = colorPalette[scale]

      const colorName = `${colorKey}-${scale}`

      {
        variablesUnderRootSelector += `--${colorName}: "${color}";`
      }

      {
        let styles = ''

        const className = [`.text-${colorName}`]

        const classContent = `color: ${color};`
        styles += `${className.join(',')} { ${classContent} }`

        compileStyles('Text color', styles)
      }

      {
        let styles = ''

        const classNames = [`.bg-${colorName}`, `.background-${colorName}`]

        const classContent = `background-color: ${color};`
        styles += `${classNames.join(',')} { ${classContent} }`

        compileStyles('Background color', styles)
      }

      {
        let styles = ''

        const classNames = [`.border-${colorName}`, `.border-color-${colorName}`]

        const classContent = `border-color: ${color};`
        styles += `${classNames.join(',')} { ${classContent} }`

        compileStyles('Border color', styles)
      }

      {
        let styles = ''

        const classNames = [`.border-top-${colorName}`, `.border-top-color-${colorName}`]

        const classContent = `border-top-color: ${color};`
        styles += `${classNames.join(',')} { ${classContent} }`

        compileStyles('Border top color', styles)
      }

      {
        let styles = ''

        const classNames = [`.border-left-${colorName}`, `.border-left-color-${colorName}`]

        const classContent = `border-left-color: ${color};`
        styles += `${classNames.join(',')} { ${classContent} }`

        compileStyles('Border left color', styles)
      }

      {
        let styles = ''

        const classNames = [`.border-bottom-${colorName}`, `.border-bottom-color-${colorName}`]

        const classContent = `border-bottom-color: ${color};`
        styles += `${classNames.join(',')} { ${classContent} }`

        compileStyles('Border bottom color', styles)
      }

      {
        let styles = ''

        const classNames = [`.border-right-${colorName}`, `.border-right-color-${colorName}`]

        const classContent = `border-right-color: ${color};`
        styles += `${classNames.join(',')} { ${classContent} }`

        compileStyles('Border right color', styles)
      }

      {
        let styles = ''

        const classNames = [`.border-x-${colorName}`, `.border-x-color-${colorName}`]

        const classContent = `border-left-color: ${color}; border-right-color: ${color};`
        styles += `${classNames.join(',')} { ${classContent} }`

        compileStyles('Border x color', styles)
      }

      {
        let styles = ''

        const classNames = [`.border-y-${colorName}`, `.border-y-color-${colorName}`]

        const classContent = `border-top-color: ${color}; border-bottom-color: ${color};`
        styles += `${classNames.join(',')} { ${classContent} }`

        compileStyles('Border y color', styles)
      }
    }
  }

  compileStyles('Color variables', `:root{ ${variablesUnderRootSelector} }`)
}
buildColors()

function buildMeasurements() {
  compileStyles('Width min content', '.width-min-content, .width-min { width: min-content; }')
  compileStyles('Width max content', '.width-max-content, .width-max { width: max-content; }')
  compileStyles('Width auto', '.width-auto { width: auto; }')
  compileStyles('Width fit content', '.width-fit-content, .width-fit { width: fit-content; }')
  compileStyles('Width full', '.width-full { width: 100%; }')

  compileStyles('Height min content', '.height-min-content, .height-min { height: min-content; }')
  compileStyles('Height max content', '.height-max-content, .height-max { height: max-content; }')
  compileStyles('Height auto', '.height-auto { height: auto; }')
  compileStyles('Height fit content', '.height-fit-content, .height-fit { height: fit-content; }')
  compileStyles('Height full', '.height-full { height: 100%; }')

  for (let i = 1; i <= MEASURE_RANGE; i++) {
    {
      const classNames = [`.width-${i}`, `.w-${i}`]

      const classContent = `width: ${toRem(i)};`
      compileStyles('Width', `${classNames.join(',')} { ${classContent} }`)
    }

    {
      const classNames = [`.max-width-${i}`, `.max-w-${i}`]

      const classContent = `max-width: ${i}px;`
      compileStyles('Max width', `${classNames.join(',')} { ${classContent} }`)
    }

    {
      const classNames = [`.min-width-${i}`, `.min-w-${i}`]

      const classContent = `min-width: ${i}px;`
      compileStyles('Min width', `${classNames.join(',')} { ${classContent} }`)
    }

    {
      const classNames = [`.height-${i}`, `.h-${i}`]

      const classContent = `height: ${toRem(i)};`
      compileStyles('Height', `${classNames.join(',')} { ${classContent} }`)
    }

    {
      const classNames = [`.max-height-${i}`, `.max-h-${i}`]

      const classContent = `height: ${i}px;`
      compileStyles('Height', `${classNames.join(',')} { ${classContent} }`)
    }

    {
      const classNames = [`.min-height-${i}`, `.min-h-${i}`]

      const classContent = `min-height: ${i}px;`
      compileStyles('Height', `${classNames.join(',')} { ${classContent} }`)
    }
  }

  for (let i = 1; i <= VIEW_PORT_RANGE; i++) {
    {
      const classNames = [`.view-height-${i}`, `.vh-${i}`]
      const classContent = `height: ${i}vh;`

      compileStyles('View height', `${classNames.join(',')} { ${classContent} }`)
    }

    {
      const classNames = [`.view-width-${i}`, `.vw-${i}`]
      const classContent = `width: ${i}vw;`

      compileStyles('View width', `${classNames.join(',')} { ${classContent} }`)
    }

    {
      const classNames = [`.per-height-${i}`]
      const classContent = `height: ${i}%;`

      compileStyles('Percent height', `${classNames.join(',')} { ${classContent} }`)
    }

    {
      const classNames = [`.per-width-${i}`]
      const classContent = `width: ${i}%;`

      compileStyles('Percent width', `${classNames.join(',')} { ${classContent} }`)
    }
  }
}
buildMeasurements()

function buildInsetEdges() {
  /**
   * @param {string} orientation
   * @param {number} value
   */
  function buildMargin(orientation, value) {
    const classNames = [`.margin-${orientation}-${value}`, `.m${orientation.charAt(0).toLowerCase()}-${value}`]

    const classContent = `margin-${orientation}: ${toRem(value)};`
    compileStyles(`Margin ${orientation}`, `${classNames.join(',')} { ${classContent} }`)
  }

  /**
   * @param {string} orientation
   * @param {number} value
   */
  function buildPadding(orientation, value) {
    const classNames = [`.padding-${orientation}-${value}`, `.p${orientation.charAt(0).toLowerCase()}-${value}`]

    const classContent = `padding-${orientation}: ${toRem(value)};`
    compileStyles(`Padding ${orientation}`, `${classNames.join(',')} { ${classContent} }`)
  }

  for (let i = 1; i <= INSET_EDGES_RANGE; i++) {
    ;['top', 'bottom', 'left', 'right'].forEach((orientation) => {
      buildMargin(orientation, i)
      buildPadding(orientation, i)
    })
  }
}
buildInsetEdges()

function buildRadii() {
  for (let i = 1; i <= RADII_RANGE; i++) {
    {
      const classNames = [`.radii-${i}`, `.r-${i}`]

      const classContent = `border-radius: ${toRem(i)};`
      compileStyles('Radii', `${classNames.join(',')} { ${classContent} }`)
    }
  }
}
buildRadii()

function buildBorderWidth() {
  /**
   * @param {string} orientation
   * @param {number} value
   */
  function buildBorderOrientationWidth(orientation, value) {
    const classNames = [`.border-${orientation}-${value}`, `.b${orientation.charAt(0).toLowerCase()}-${value}`]

    const classContent = `border-${orientation}-width: ${toRem(value)};`
    compileStyles(`Border ${orientation} width`, `${classNames.join(',')} { ${classContent} }`)
  }

  for (let i = 1; i <= BORDER_WIDTH_RANGE; i++) {
    {
      const classNames = [`.border-width-${i}`, `.border-${i}`]

      const classContent = `border-width: ${toRem(i)};`
      compileStyles('Border width', `${classNames.join(',')} { ${classContent} }`)
      ;['top', 'left', 'bottom', 'right'].forEach((orientation) => buildBorderOrientationWidth(orientation, i))
    }
  }
}
buildBorderWidth()

function buildInsets() {
  for (let i = 1; i <= INSET_RANGE; i++) {
    {
      const classNames = [`.inset-${i}`, `.ins-${i}`]

      const classContent = `inset: ${i}px;`
      compileStyles('Insets', `${classNames.join(',')} { ${classContent} }`)
    }
    {
      const classNames = [`.inset--${i}`, `.ins--${i}`]

      const classContent = `inset: -${i}px;`
      compileStyles('Insets', `${classNames.join(',')} { ${classContent} }`)
    }

    {
      const classNames = [`.top-${i}`]

      const classContent = `top: ${i}px;`
      compileStyles('Top', `${classNames.join(',')} { ${classContent} }`)
    }
    {
      const classNames = [`.top--${i}`]

      const classContent = `top: -${i}px;`
      compileStyles('Top', `${classNames.join(',')} { ${classContent} }`)
    }

    {
      const classNames = [`.bottom-${i}`]

      const classContent = `bottom: ${i}px;`
      compileStyles('Bottom', `${classNames.join(',')} { ${classContent} }`)
    }
    {
      const classNames = [`.bottom--${i}`]

      const classContent = `bottom: -${i}px;`
      compileStyles('Bottom', `${classNames.join(',')} { ${classContent} }`)
    }

    {
      const classNames = [`.left-${i}`]

      const classContent = `left: ${i}px;`
      compileStyles('Left', `${classNames.join(',')} { ${classContent} }`)
    }
    {
      const classNames = [`.left--${i}`]

      const classContent = `left: -${i}px;`
      compileStyles('Left', `${classNames.join(',')} { ${classContent} }`)
    }

    {
      const classNames = [`.right-${i}`]

      const classContent = `right: ${i}px;`
      compileStyles('Right', `${classNames.join(',')} { ${classContent} }`)
    }
    {
      const classNames = [`.right--${i}`]

      const classContent = `right: -${i}px;`
      compileStyles('Right', `${classNames.join(',')} { ${classContent} }`)
    }
  }
}
buildInsets()

const buildPositions = () => {
  ;['absolute', 'fixed', 'relative', 'static', 'sticky'].forEach((position) => {
    const classNames = [`.position-${position}`, `.pos-${position}`, `.${position}`]

    const classContent = `position: ${position};`
    compileStyles(`Position ${position}`, `${classNames.join(',')} { ${classContent} }`)
  })
}
buildPositions()

console.log(output.join('\n'))
