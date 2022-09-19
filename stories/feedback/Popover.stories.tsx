import * as React from 'react'
import { ThemeProvider } from '@louffee/canada-style-system'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Popover from '../../packages/@louffee-popover/src/Popover'

import '@louffee/canada-utility-classes'

export default {
  title: 'Components/Feedback/Popover',
  component: Popover,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Popover>

export const Default: ComponentStory<typeof Popover> = () => (
  <div>
    <Popover
      alignOffset={5}
      render={
        <div className='flex flex-col gap-2'>
          <h4>Lorem ipsum</h4>

          <p className='max-width-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem commodi eum eveniet totam laudantium
            ex ipsam ad. Eos vero beatae fugit, deleniti vitae aut minima architecto optio rerum, recusandae maxime
            tempora, perferendis dolor? Nisi incidunt sapiente repellat maiores cumque at accusamus tempore, amet quasi,
            voluptatum pariatur nihil recusandae aliquam, dolor delectus praesentium hic totam? Beatae deleniti
            perferendis laboriosam delectus sed itaque sint non obcaecati, assumenda amet consequatur aliquam tenetur
            libero molestiae, unde sapiente nihil accusantium ea similique repudiandae magnam asperiores quaerat. Qui
            dolores molestias distinctio, aut aliquid reprehenderit mollitia voluptatem odio beatae quo autem porro
            quaerat accusantium illo ad ullam.
          </p>
        </div>
      }
      axis='bottom'
      align='center'>
      <div className='w-70'>Hover me</div>
    </Popover>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eligendi qui minus at iste totam expedita magni,
      praesentium placeat tempore modi esse dolor laboriosam, quaerat facilis exercitationem ipsum illo cupiditate
      voluptatem non dolorum doloremque fugit! Ducimus natus itaque temporibus tempore veritatis corrupti rerum placeat
      delectus architecto debitis, asperiores quo suscipit distinctio voluptates repudiandae eligendi possimus nemo,
      dolores, nobis laboriosam commodi. Deleniti, labore ipsa, eveniet odio ad est cupiditate porro illum suscipit
      obcaecati inventore repellat earum natus aspernatur dolorem, ratione architecto accusantium magni? Quia aperiam
      officia repellendus? Excepturi voluptatibus, quos accusantium commodi, tenetur quo, culpa minus in perspiciatis
      laborum soluta. Quibusdam?
    </div>
  </div>
)
