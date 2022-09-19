import * as React from 'react'
import Typography from '@louffee/canada-typography'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import useTheme from '../packages/@louffee-style-system/src/useTheme'
import styled from '../packages/@louffee-style-system/src/styled'
import ThemeProvider from '../packages/@louffee-style-system/src/ThemeProvider'

import '@louffee/canada-utility-classes'

export default {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
} as ComponentMeta<typeof ThemeProvider>

const Container = styled('main')(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.025)',
  paddingInline: theme.spacing.large,
  borderRadius: theme.radii.medium,
  boxShadow: theme.shadows.slight,

  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
}))

const ColourGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  margin: theme.spacing.extraSmall,
}))

const ThemeConsumer: React.FC = () => {
  const { colors } = useTheme()

  const rectangleSize = React.useMemo(() => 80, [])

  return (
    <Container id='theme-consumer-render'>
      {Object.entries(colors).map(([paletteName, value]) => (
        <div className='flex flex-col' key={paletteName}>
          <Typography variant='headlineSmall'>{paletteName}</Typography>

          <ColourGrid>
            {Object.entries(value).map(([colorScale, colorValue]) => (
              <div key={`#${paletteName}[${colorScale}]`}>
                <div className='flex align-center'>
                  <Typography variant='bodyLarge'>Variant</Typography>
                  &nbsp;
                  <Typography variant='titleMedium'>{colorScale}</Typography>
                </div>
                <svg
                  fill={colorValue}
                  viewBox={`0 0 ${rectangleSize} ${rectangleSize}`}
                  height={rectangleSize}
                  width={rectangleSize}>
                  <rect height={rectangleSize} width={rectangleSize} />
                </svg>
              </div>
            ))}
          </ColourGrid>
        </div>
      ))}
    </Container>
  )
}

const Template: ComponentStory<typeof ThemeProvider> = () => (
  <ThemeProvider>
    <ThemeConsumer />
  </ThemeProvider>
)

export const Default: ComponentStory<typeof ThemeProvider> = Template.bind({})
Default.storyName = 'Default behaviour'
