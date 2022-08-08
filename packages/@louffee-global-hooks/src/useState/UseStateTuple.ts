import type * as React from 'react'

type UseStateTuple<TStateValue> = [TStateValue, React.Dispatch<React.SetStateAction<TStateValue>>]

export default UseStateTuple
