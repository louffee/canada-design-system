import type UseFormStateReturnType from './UseFormStateReturnType'

type UpdateFunction<FormValues extends object> = UseFormStateReturnType<FormValues>['update']

export default UpdateFunction
