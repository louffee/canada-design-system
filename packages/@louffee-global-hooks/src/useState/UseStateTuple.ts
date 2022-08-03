import type UseStateDispatch from './UseStateDispatch'

type UseStateTuple<TStateValue> = [TStateValue, UseStateDispatch<TStateValue>]

export default UseStateTuple
