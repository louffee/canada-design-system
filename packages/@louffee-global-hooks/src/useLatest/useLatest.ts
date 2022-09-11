import useReference from '../useReference/useReference'

const useLatest = <TReferenceValue>(value: TReferenceValue): { readonly current: TReferenceValue } => {
  const reference = useReference(value)
  reference.current = value

  return reference
}

export default useLatest
