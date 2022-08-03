import * as React from 'react'

import type DependencyList from '../DependencyList'

// eslint-disable-next-line react-hooks/exhaustive-deps
const useLayoutEffect = (effect: () => void, deps?: DependencyList): void => React.useLayoutEffect(effect, deps)

export default useLayoutEffect
