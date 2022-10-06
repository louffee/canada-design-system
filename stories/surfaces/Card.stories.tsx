import * as React from 'react'
import Typography from '@louffee/canada-typography'
import { ThemeProvider } from '@louffee/canada-style-system'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Card from '../../packages/@louffee-card/src/Card'

const meta: ComponentMeta<typeof Card> = {
  title: 'Components/Surfaces/Card',
  component: Card,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
}

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Simple: ComponentStory<typeof Card> = Template.bind({})
Simple.args = {
  children: (
    <>
      <Typography variant='titleSmall'>Lorem ipsum</Typography>
      <br />
      <Typography variant='bodyMedium'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates eaque blanditiis quasi accusamus
        deserunt nisi ullam autem nostrum aliquam, ratione fuga exercitationem quam consectetur ipsum sapiente enim
        placeat eveniet voluptatibus ea nobis! Odit dolore eius sapiente, a vitae veniam hic autem ipsum eveniet iure
        magni, earum voluptatum alias impedit, repellat quo omnis eaque! Eius possimus, repellendus porro error debitis
        nam quam, magni in a recusandae dolores quae dolorum, ullam ab placeat reiciendis architecto? Ut itaque quasi
        perspiciatis sequi error possimus sint. Eligendi perspiciatis consectetur animi commodi delectus. Et maiores
        quisquam commodi expedita accusantium repudiandae mollitia debitis vero perferendis deleniti!
      </Typography>
    </>
  ),
  radii: 'medium',
  elevation: 'slight',
}

export default meta
