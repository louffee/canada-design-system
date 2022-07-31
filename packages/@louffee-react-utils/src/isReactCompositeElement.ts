import isReactElement from './isReactElement'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isReactCompositeElement = (_object: any) => isReactElement(_object) && typeof _object?.type === 'function'

export default isReactCompositeElement
