import type UseFormStateReturnType from './UseFormStateReturnType'

type BatchUpdatesNextRenderFunction<FormValues extends object> =
  UseFormStateReturnType<FormValues>['batchUpdatesNextRender']

export default BatchUpdatesNextRenderFunction
