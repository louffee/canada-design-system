import * as React from 'react'

import type DependencyList from '../DependencyList'

// eslint-disable-next-line react-hooks/exhaustive-deps
const useEffect = (effect: () => void, deps?: DependencyList): void => React.useEffect(effect, deps)

export default useEffect
