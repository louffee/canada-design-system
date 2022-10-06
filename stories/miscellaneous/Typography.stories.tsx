import * as React from 'react'
import { ThemeProvider, styled } from '@louffee/canada-style-system'
import { ComponentStory, type ComponentMeta } from '@storybook/react'

import Typography from '../../packages/@louffee-typography/src/Typography'
import type TypographyVariant from '../../packages/@louffee-typography/src/TypographyVariant'

import '@louffee/canada-utility-classes'

export default {
  title: 'Components/Miscellaneous/Typography',
  component: Typography,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Typography>

const VARIANTS: TypographyVariant[] = [
  'bodyLarge',
  'bodyMedium',
  'bodySmall',
  'displayLarge',
  'displayMedium',
  'displaySmall',
  'headlineLarge',
  'headlineMedium',
  'headlineSmall',
  'labelLarge',
  'labelMedium',
  'labelSmall',
  'titleLarge',
  'titleMedium',
  'titleSmall',
]

const Snippet = styled('div')(({ theme }) => ({
  backgroundColor: theme.colors.grey[99],
  padding: theme.spacing.extraLarge,
  borderRadius: theme.radii.medium,
  boxShadow: theme.shadows.slight,

  minHeight: 100,
}))

const CodeTag = styled('code')(({ theme }) => ({
  color: theme.colors.primary.main,
  backgroundColor: theme.colors.white,
  padding: theme.spacing.medium,
  borderRadius: theme.radii.small,
  fontFamily: 'monospace !important',
  width: 'fit-content',
}))

export const Catalogue: ComponentStory<typeof Typography> = (args) => (
  <div className='max-width-900 margin-x-auto flex flex-col gap-24'>
    {VARIANTS.map((variant) => (
      <Snippet key={variant} className='flex flex-col gap-4'>
        <CodeTag>{variant}</CodeTag>
        <br />
        <Typography {...args} variant={variant}>
          Lorem ipsum dolor sit amet.
        </Typography>
      </Snippet>
    ))}
  </div>
)
