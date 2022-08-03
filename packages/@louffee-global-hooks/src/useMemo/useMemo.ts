import * as React from 'react'

const useMemo = <TMemoizedValue>(factory: () => TMemoizedValue, deps: readonly unknown[]): TMemoizedValue =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useMemo(factory, deps)

export default useMemo
