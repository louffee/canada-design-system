import * as React from 'react'

import { ThemeProvider } from '@louffee/canada-style-system'
import Typography from '@louffee/canada-typography'
import Icon from '@louffee/canada-icon'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import TopBar from '../../packages/@louffee-top-bar/src/TopBar'

import '@louffee/canada-utility-classes'

export default {
  title: 'Components/Navigation/TopBar',
  component: TopBar,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof TopBar>

const Template: ComponentStory<typeof TopBar> = (args) => <TopBar {...args} />

export const Default: ComponentStory<typeof TopBar> = Template.bind({})
Default.storyName = 'Default behaviour'
Default.args = {
  left: <div>Left</div>,
  children: <div>Center</div>,
  right: <div>Right</div>,
}

export const WithStringAsLeftProp: ComponentStory<typeof TopBar> = Template.bind({})
WithStringAsLeftProp.storyName = 'With string as left prop'
WithStringAsLeftProp.args = {
  left: 'Left',
  children: <div>Center</div>,
  right: <div>Right</div>,
}

export const WithIcon: ComponentStory<typeof TopBar> = Template.bind({})
WithIcon.storyName = 'With icon'
WithIcon.args = {
  left: <Icon name='credit-card' color='var(--black)' size={24} />,
  children: <div>Center</div>,
  right: <div>Right</div>,
}

export const WithTopBarButton: ComponentStory<typeof TopBar> = Template.bind({})
WithTopBarButton.storyName = 'With TopBar.Button'
WithTopBarButton.args = {
  left: <TopBar.Button>Left</TopBar.Button>,
  children: <div>Center</div>,
  right: <TopBar.Button>Right</TopBar.Button>,
}

export const WithLouffeeLogo: ComponentStory<typeof TopBar> = Template.bind({})
WithLouffeeLogo.storyName = 'With Louffee logo'
WithLouffeeLogo.args = {
  left: <Icon name='louffee-logo' color='#A92A2A' size={24} />,
  children: <div>Center</div>,
  right: <div>Right</div>,
}

export const NicePresentationComponent: ComponentStory<typeof TopBar> = Template.bind({})
NicePresentationComponent.storyName = 'Nice presentation component'
NicePresentationComponent.args = {
  left: <Icon name='louffee-logo' color='#A92A2A' size={24} />,
  children: (
    <>
      <TopBar.Button>Invest</TopBar.Button>
      <TopBar.Button>Rent</TopBar.Button>
      <TopBar.Button>Move in</TopBar.Button>
    </>
  ),
  right: (
    <div className='flex align-center gap-2 cursor-pointer'>
      <div className='relative top-2'>
        <Icon name='search' color='#141414' size={18} />
      </div>
      <Typography variant='bodyMedium'>Search</Typography>
    </div>
  ),
}
