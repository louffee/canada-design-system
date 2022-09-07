import type UseFormStateReturnType from './UseFormStateReturnType'

type ForceSubmitFunction<FormValues extends object> = UseFormStateReturnType<FormValues>['forceSubmit']

export default ForceSubmitFunction
