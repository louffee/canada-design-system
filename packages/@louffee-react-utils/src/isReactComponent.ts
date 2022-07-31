import isReactClassComponent from './isReactClassComponent'
import isReactFunctionComponent from './isReactFunctionComponent'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isReactComponent = (component: any) => isReactClassComponent(component) || isReactFunctionComponent(component)

export default isReactComponent
