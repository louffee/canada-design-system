// @louffee/style-system -> ThemeProvider
import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import useTheme from '../packages/@louffee-style-system/src/useTheme'
import ThemeProvider from '../packages/@louffee-style-system/src/ThemeProvider'

export default {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
} as ComponentMeta<typeof ThemeProvider>

const ThemeConsumer: React.FC = () => {
  const theme = useTheme()

  return (
    <div id="theme-consumer-render">
      {Object.entries(theme.colors).map(([paletteName, value]) => (
        <div key={paletteName}>
          <div>
            {Object.entries(value).map(([colorScale, colorValue]) => (
              <ul key={colorScale}>
                <div>
                  {paletteName}:{colorScale}
                </div>
                <svg>
                  <rect width={300} height={300} fill={colorValue} strokeWidth={4} stroke="#ccc" strokeMiterlimit={1} />
                </svg>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const Template: ComponentStory<typeof ThemeProvider> = () => (
  <ThemeProvider>
    <ThemeConsumer />
  </ThemeProvider>
)

export const Default: ComponentStory<typeof ThemeProvider> = Template.bind({})
Default.storyName = 'Default behaviour'
