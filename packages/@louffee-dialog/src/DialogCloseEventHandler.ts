import DialogCloseEvent from './DialogCloseEvent'

type DialogCloseEventHandler<TElement extends HTMLElement> = (event: DialogCloseEvent<TElement>) => void

export default DialogCloseEventHandler
