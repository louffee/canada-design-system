import type UseFormStateReturnType from './UseFormStateReturnType'

type FocusFunction<FormValues extends object> = UseFormStateReturnType<FormValues>['focus']

export default FocusFunction
