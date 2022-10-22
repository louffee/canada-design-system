import type * as React from 'react'

import type DialogCloseEvent from './DialogCloseEvent'
import type DialogCloseEventHandler from './DialogCloseEventHandler'
import type DialogKeyboardCloseEvent from './DialogKeyboardCloseEvent'
import type DialogMouseCloseEvent from './DialogMouseCloseEvent'

type HTMLDivElementAttributes = React.HTMLAttributes<HTMLElement>
type OmittedHTMLDivElementAttributes = Omit<HTMLDivElementAttributes, 'style'>

interface DialogProps<TElement extends HTMLElement> extends OmittedHTMLDivElementAttributes {
  /**
   * The content of the `<Dialog />` component.
   *
   * @see https://reactjs.org/docs/react-component.html#children
   * @see {@link React.ReactNode}
   */
  children: React.ReactNode

  /**
   * The boolean property which determines whether the dialog is open or not.
   *
   * @default false
   */
  open: boolean

  /**
   * The callback function which works as an event handler to be invoked when the
   * dialog is closed.
   *
   * @see {@link DialogCloseEventHandler}
   * @see {@link DialogCloseEvent}
   * @see {@link DialogKeyboardCloseEvent}
   * @see {@link DialogMouseCloseEvent}
   */
  onClose: DialogCloseEventHandler<TElement>
  /**
   * The boolean property which determines whether the dialog is closed by the
   * keyboard or not.
   *
   * It either accepts `true` (which renders the default close button component)
   * or a `React.ReactNode` to be just rendered inside the scope at the top-right
   * corner of the dialog.
   *
   * @see {@link React.ReactNode}
   */
  closeButton?: true | ((renderProps: { onClose: DialogCloseEventHandler<TElement> }) => React.ReactNode)
}

export type __EXTERNAL_DUMMY_EVENT__ = DialogCloseEvent<never>
export type __EXTERNAL_DUMMY_EVENT_HANDLER__ = DialogCloseEventHandler<never>
export type __EXTERNAL_DUMMY_KEYBOARD_EVENT__ = DialogKeyboardCloseEvent<never>
export type __EXTERNAL_DUMMY_MOUSE_EVENT__ = DialogMouseCloseEvent<never>

export default DialogProps
