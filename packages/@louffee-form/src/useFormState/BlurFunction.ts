import type UseFormStateReturnType from './UseFormStateReturnType'

type BlurFunction<FormValues extends object> = UseFormStateReturnType<FormValues>['blur']

export default BlurFunction
