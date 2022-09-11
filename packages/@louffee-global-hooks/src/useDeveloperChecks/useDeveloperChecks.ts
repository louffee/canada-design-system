import * as React from 'react'

import type UseDeveloperChecksValidateFunction from './UseDeveloperChecksValidateFunction'

function useDeveloperChecks<P extends object>(componentProps: P, validate: UseDeveloperChecksValidateFunction<P>) {
  React.useMemo<void>(() => {
    const validation = validate(componentProps)

    if (validation) {
      switch (validation.type) {
        case 'error': {
          console.error(validation.message) // eslint-disable-line no-console
          break
        }
        case 'warn': {
          console.warn(validation.message) // eslint-disable-line no-console
          break
        }
        case 'trace': {
          console.trace(validation.message) // eslint-disable-line no-console
          break
        }
        default:
          break
      }
    }
  }, [validate, componentProps])
}

export default useDeveloperChecks
