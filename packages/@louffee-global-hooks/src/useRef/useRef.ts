import * as React from 'react'

import type MutableRefObject from './MutableRefObject'

const useRef = <TReferenceValue>(initialValue: TReferenceValue): MutableRefObject<TReferenceValue> => {
  const ref = React.useRef<TReferenceValue>(initialValue)

  return ref
}

export default useRef
