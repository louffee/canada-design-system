import * as React from 'react'

import type DependencyList from '../DependencyList'

const useCallback = <TCallbackFunction extends Function>(
  callbackFunction: TCallbackFunction,
  deps: DependencyList
  // eslint-disable-next-line react-hooks/exhaustive-deps
): TCallbackFunction => React.useCallback(callbackFunction, deps)

export default useCallback
