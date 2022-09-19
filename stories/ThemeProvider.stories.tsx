import * as React from 'react'
import Typography from '@louffee/canada-typography'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { capitalize } from 'quebec'

import useTheme from '../packages/@louffee-style-system/src/useTheme'
import styled from '../packages/@louffee-style-system/src/styled'
import ThemeProvider from '../packages/@louffee-style-system/src/ThemeProvider'
import type LouTheme from '../packages/@louffee-style-system/src/LouTheme'

import '@louffee/canada-utility-classes'

export default {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
} as ComponentMeta<typeof ThemeProvider>

const Container = styled('main')(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.025)',
  paddingInline: theme.spacing.large,
  boxShadow: theme.shadows.slight,

  borderRadius: theme.radii.medium,

  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
}))

const ColourGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  margin: theme.spacing.extraSmall,
}))

const RECTANGLE_SIZE = 80

const renderColourBlock = (colour: string, theme: typeof LouTheme): React.ReactElement => (
  <svg
    fill={colour}
    viewBox={`0 0 ${RECTANGLE_SIZE} ${RECTANGLE_SIZE}`}
    height={RECTANGLE_SIZE}
    width={RECTANGLE_SIZE}
    strokeWidth={1}
    stroke={theme.colors.grey[80]}>
    <rect height={RECTANGLE_SIZE} width={RECTANGLE_SIZE} />
  </svg>
)

const ThemeConsumer: React.FC = () => {
  const theme = useTheme()

  return (
    <Container id='theme-consumer-render'>
      {Object.entries(theme.colors).map(([paletteName, value]) => (
        <div className='flex flex-col' key={paletteName}>
          <Typography variant='headlineSmall'>{capitalize(paletteName)}</Typography>

          <ColourGrid>
            {typeof value === 'object' &&
              Object.entries(value).map(([colorScale, colorValue]) => (
                <div key={`#${paletteName}[${colorScale}]`}>
                  <div className='flex align-center'>
                    <Typography variant='bodyLarge'>Variant</Typography>
                    &nbsp;
                    <Typography variant='titleMedium'>{colorScale}</Typography>
                  </div>
                  {renderColourBlock(colorValue, theme)}
                </div>
              ))}
            {typeof value === 'string' && renderColourBlock(value, theme)}
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
