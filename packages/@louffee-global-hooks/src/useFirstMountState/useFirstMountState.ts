import useReference from '../useReference/useReference'

const useFirstMountState = () => {
  const isFirst = useReference(true)

  if (isFirst.current) {
    isFirst.current = false

    return true
  }

  return isFirst.current
}

export default useFirstMountState
