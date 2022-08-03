import useEffectOnce from '../useEffectOnce/useEffectOnce'

const useMount = (onMount: () => void) => {
  useEffectOnce(() => {
    onMount()
  })
}

export default useMount
