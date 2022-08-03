import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import '../../packages/@louffee-utility-classes'

export default {
  title: 'NonComponents/CSS/Utility Classes',
} as ComponentMeta<never>

export const BackgroundColors: ComponentStory<never> = () => (
  <div className="background-primary-main">I should be colored in the background with Louffee’s primary color =)</div>
)

export const Padding: ComponentStory<never> = () => (
  <div className="background-primary-main p-16">I should have a 1rem (aka 16px) padding on all sides</div>
)
