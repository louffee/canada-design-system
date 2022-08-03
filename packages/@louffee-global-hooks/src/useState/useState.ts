import * as React from 'react'

import type UseStateTuple from './UseStateTuple'

const useState = <TStateValue>(initialState: TStateValue | (() => TStateValue)): UseStateTuple<TStateValue> => {
  const [state, setState] = React.useState<TStateValue>(initialState)

  return [state, setState]
}

export default useState
