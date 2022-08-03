/* eslint-disable indent */
import * as React from 'react'

const useReducer = <
  TReducerState,
  TReducerAction,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TReducer extends React.Reducer<any, any> = React.Reducer<TReducerState, TReducerAction>
>(
  reducer: TReducer,
  initialState: React.ReducerState<TReducer>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): [TReducerState, (action: TReducerAction) => any] => {
  const [state, dispatchAction] = React.useReducer<TReducer>(reducer, initialState)

  return [state, dispatchAction]
}

export default useReducer
