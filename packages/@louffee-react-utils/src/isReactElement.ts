import * as React from 'react'

const isReactElement = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _object: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): _object is React.ReactElement<unknown, string | React.JSXElementConstructor<any>> => React.isValidElement(_object)

export default isReactElement
