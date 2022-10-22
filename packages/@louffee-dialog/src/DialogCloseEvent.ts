import type DialogMouseCloseEvent from './DialogMouseCloseEvent'
import type DialogKeyboardCloseEvent from './DialogKeyboardCloseEvent'

type DialogCloseEvent<TElement extends HTMLElement> =
  | DialogMouseCloseEvent<TElement>
  | DialogKeyboardCloseEvent<TElement>

export default DialogCloseEvent
