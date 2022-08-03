import useEffect from '../useEffect/useEffect'

import type EffectCallback from '../EffectCallback'

const useEffectOnce = (effect: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, [])
}

export default useEffectOnce
