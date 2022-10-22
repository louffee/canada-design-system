import type DialogProps from '../DialogProps'

type CloseButtonProps<TElement extends HTMLElement> = Required<Pick<DialogProps<TElement>, 'closeButton' | 'onClose'>>

export default CloseButtonProps
