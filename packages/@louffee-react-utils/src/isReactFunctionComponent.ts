// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isReactFunctionComponent = (component: any) =>
  typeof component === 'function' && String(component).includes('return React.createElement')

export default isReactFunctionComponent
