import type DialogProps from '../DialogProps'

type UseBackdropControlsProps<TElement extends HTMLElement> = Required<Pick<DialogProps<TElement>, 'onClose'>>

export default UseBackdropControlsProps
