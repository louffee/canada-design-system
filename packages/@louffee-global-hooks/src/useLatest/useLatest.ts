import useRef from '../useRef/useRef'

const useLatest = <TReferenceValue>(value: TReferenceValue): { readonly current: TReferenceValue } => {
  const ref = useRef(value)
  ref.current = value

  return ref
}

export default useLatest
