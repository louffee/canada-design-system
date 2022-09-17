import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import '../../packages/@louffee-utility-classes'

export default {
  title: 'Miscellaneous/CSS/Utility Classes',
} as ComponentMeta<never>

export const BackgroundColors: ComponentStory<never> = () => (
  <div className='background-primary-main'>I should be colored in the background with Louffee's primary color =)</div>
)

export const Padding: ComponentStory<never> = () => (
  <div>
    <div className='bg-secondary-50'>I've got no padding</div>
    <div className='bg-grey-30 p-12'>I've got a padding of 12px</div>
    <div className='bg-grey-main p-30'>I've got a padding of 30px</div>
    <div className='bg-primary-main p-64'>I've got a padding of 64px</div>
  </div>
)

export const Margin: ComponentStory<never> = () => (
  <div>
    <div className='bg-secondary-50'>I've got no margin</div>
    <div className='bg-grey-30 m-12'>I've got a margin of 12px</div>
    <div className='bg-grey-main m-30'>I've got a margin of 30px</div>
    <div className='bg-primary-main m-64'>I've got a margin of 64px</div>
  </div>
)

export const Border: ComponentStory<never> = () => (
  <div>
    <div className='bg-secondary-50'>I've got no border</div>
    <div className='border-primary-10 border-solid bg-primary-80 border-1'>I've got a border of 1px</div>
    <div className='border-primary-10 border-solid bg-grey-30 border-12'>I've got a border of 12px</div>
    <div className='border-primary-10 border-solid bg-grey-main border-30'>I've got a border of 30px</div>
    <div className='border-primary-10 border-solid bg-primary-main border-64'>I've got a border of 64px</div>
  </div>
)
