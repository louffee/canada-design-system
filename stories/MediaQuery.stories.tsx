import * as React from 'react'
import { ThemeProvider } from '@louffee/canada-style-system'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import MediaQuery from '../packages/@louffee-media-query/src/MediaQuery'

import '@louffee/canada-utility-classes'

export default {
  title: 'Components/MediaQuery',
  component: MediaQuery,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof MediaQuery>

export const Default: ComponentStory<typeof MediaQuery> = () => (
  <div>
    <div>If you are using a small screen...</div>
    <MediaQuery when='(max-width: 600px)'>You can see this.</MediaQuery>
  </div>
)
