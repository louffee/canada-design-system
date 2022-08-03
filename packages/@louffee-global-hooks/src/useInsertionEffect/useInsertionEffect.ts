import * as React from 'react'

import type DependencyList from '../DependencyList'

// eslint-disable-next-line react-hooks/exhaustive-deps
const useInsertionEffect = (effect: () => void, deps?: DependencyList): void => React.useInsertionEffect(effect, deps)

export default useInsertionEffect
