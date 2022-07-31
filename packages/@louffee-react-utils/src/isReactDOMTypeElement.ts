import isReactElement from './isReactElement'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isReactDOMTypeElement = (_object: any) => isReactElement(_object) && typeof _object?.type === 'string'

export default isReactDOMTypeElement
