import useEffect from '../useEffect/useEffect'
import useLayoutEffect from '../useLayoutEffect/useLayoutEffect'

const useIsomorphicEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

export default useIsomorphicEffect
