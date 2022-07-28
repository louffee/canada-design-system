import * as React from 'react'

import type UseDeveloperChecksValidateFunction from './UseDeveloperChecksValidateFunction'

function useDeveloperChecks<P extends object>(componentProps: P, validate: UseDeveloperChecksValidateFunction<P>) {
  React.useMemo<void>(() => {
    const validation = validate(componentProps)

    if (validation) {
      switch (validation.type) {
        case 'log':
          console.log(validation.message)
          break
        case 'error':
          console.error(validation.message)
          break
        case 'debug':
          console.debug(validation.message)
          break
        case 'warn':
          console.warn(validation.message)
          break
        default:
          break
      }
    }
  }, [validate, componentProps])
}

export default useDeveloperChecks
