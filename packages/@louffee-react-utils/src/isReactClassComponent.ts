// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isReactClassComponent = (component: any) =>
  typeof component === 'function' && !!component?.prototype?.isReactComponent

export default isReactClassComponent
