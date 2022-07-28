import type UseDeveloperChecksDebugType from './UseDeveloperChecksDebugType'

interface UseDeveloperChecksValidateFunction<P extends object> {
  (componentProps: P): { type: UseDeveloperChecksDebugType; message: string } | undefined
}

export default UseDeveloperChecksValidateFunction
