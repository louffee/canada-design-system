import * as React from 'react'

import type MutableReferenceObject from './MutableReferenceObject'

const useReference = <TReferenceValue>(initialValue: TReferenceValue): MutableReferenceObject<TReferenceValue> => {
  const reference = React.useRef<TReferenceValue>(initialValue)

  return reference
}

export default useReference
