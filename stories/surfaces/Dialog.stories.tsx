import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SoftButton, NeutralButton } from '@louffee/canada-button'
import { ThemeProvider } from '@louffee/canada-style-system'

import Dialog from '../../packages/@louffee-dialog/src/Dialog'

import '@louffee/canada-utility-classes'

const meta: ComponentMeta<typeof Dialog> = {
  title: 'Components/Surfaces/Dialog',
  component: Dialog,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
}

const Template: ComponentStory<typeof Dialog> = ({ children, ...args }) => (
  <Dialog {...args}>
    <Dialog.Title>Lorem ipsum</Dialog.Title>
    <Dialog.Content>{children}</Dialog.Content>
    <Dialog.Footer>
      <NeutralButton>Ipsum</NeutralButton>
      <SoftButton>Lorem</SoftButton>
    </Dialog.Footer>
  </Dialog>
)

export const Simple: ComponentStory<typeof Dialog> = Template.bind({})
Simple.args = {
  open: true,
  onClose: () => console.log('Close function invoked'),
}

export const WithCloseButton: ComponentStory<typeof Dialog> = Template.bind({})
WithCloseButton.args = {
  open: true,
  onClose: () => console.log('Close function invoked'),
  closeButton: true,
  children: (
    <>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat fugit ipsa quae laboriosam commodi nulla
      inventore consequatur accusamus dignissimos laudantium.
      <br /> <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore esse minus iure ab dolore recusandae voluptatem
      ipsam, consequatur consequuntur, soluta et, odio impedit illo? Officia?
    </>
  ),
}

export const Overflow: ComponentStory<typeof Dialog> = Template.bind({})
Overflow.args = {
  open: true,
  onClose: () => console.log('Close function invoked'),
  closeButton: true,
  children: (
    <>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat fugit ipsa quae laboriosam commodi nulla
      inventore consequatur accusamus dignissimos laudantium.
      <br /> <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore esse minus iure ab dolore recusandae voluptatem
      ipsam, consequatur consequuntur, soluta et, odio impedit illo? Officia?
      <br /> <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam odit necessitatibus minima praesentium deserunt
      adipisci repudiandae facere, pariatur impedit et, veritatis nisi repellat ab? Natus non, amet temporibus saepe
      veritatis, nostrum molestiae facilis magnam architecto, laboriosam ipsum? Cum deleniti optio eum illum odio modi
      blanditiis dolor minima corporis laboriosam, alias vel quia ipsa, sequi tempora facere deserunt id dolorem harum
      repudiandae. Necessitatibus possimus ab explicabo excepturi soluta amet velit. Nisi optio, deleniti consequatur
      porro saepe facere magnam animi debitis pariatur fugiat, dicta, dolore neque ducimus! Quia, tempore quae. Vitae
      voluptas distinctio odit officiis delectus vero cum quos aut minus totam.
      <br /> <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eveniet aut maiores vero ratione natus sapiente
      nam odio voluptatibus esse ullam veniam quisquam dolorem, labore dicta iusto fugit error expedita soluta ex
      perferendis ipsa dolore. Expedita sit vero delectus eveniet reiciendis odit, totam architecto sequi similique, cum
      nisi nemo asperiores? Eum natus, rem aperiam, amet itaque odio quia aliquid architecto alias est ex facere nihil
      aut earum qui facilis expedita ea in dolorum magnam asperiores sed libero nulla? Quae obcaecati pariatur ducimus
      quas voluptate sequi ipsa omnis error quidem ratione, incidunt laudantium harum modi voluptates dolores nesciunt
      sint. Quibusdam culpa inventore, laborum suscipit eveniet quia cupiditate fuga quae amet repellendus debitis quos,
      error asperiores. Soluta nulla libero quas error nam perferendis dolore, delectus ratione facilis ipsum
      accusantium deleniti pariatur dolores fugit labore consectetur aliquam voluptate, voluptatibus fuga culpa! Quidem
      aliquid accusantium expedita quibusdam necessitatibus illo laudantium, excepturi odio distinctio iusto magnam
      animi repudiandae numquam fugit laboriosam perspiciatis eaque saepe deserunt deleniti placeat cupiditate fugiat
      velit esse! Alias facilis cumque corrupti rem. Totam, incidunt suscipit, numquam sapiente, officiis praesentium
      exercitationem repudiandae iste voluptatem dolor ullam dolorum fuga quaerat nobis corporis accusantium eius saepe
      tenetur dolores! Consequatur repudiandae consequuntur voluptatum nobis tempore?
      <br /> <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam provident corporis vero optio quo
      mollitia repellendus veritatis eum sapiente amet, odio hic facere deserunt impedit voluptate fugit non aliquid ea
      explicabo voluptatum eius nostrum itaque totam. Suscipit omnis quaerat, inventore perspiciatis illo adipisci
      saepe, quam odit quos assumenda veniam excepturi. Animi sint repudiandae adipisci temporibus excepturi atque! Quod
      tenetur, asperiores aut distinctio voluptatum ipsam quae nulla ipsa ea error placeat facilis, qui, saepe soluta
      ipsum est iste earum libero sequi? Ea error mollitia voluptas cupiditate tempora voluptates soluta placeat dolorem
      adipisci distinctio! Officia mollitia minima possimus! Libero, saepe blanditiis.
    </>
  ),
}

export default meta
