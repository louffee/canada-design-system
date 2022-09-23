import * as React from 'react'
import { useDeveloperChecks } from '@louffee/canada-global-hooks'
import { render } from '@testing-library/react'

beforeEach(() => {
  jest.spyOn(console, 'warn').mockImplementation(() => {})
  jest.spyOn(console, 'error').mockImplementation(() => {})
  jest.spyOn(console, 'debug').mockImplementation(() => {})
})

describe('Test useDeveloperChecks', () => {
  it('should NOT log anything', () => {
    const spy = jest.spyOn(console, 'warn')

    const validateFunction = jest.fn()

    const SUT = () => {
      useDeveloperChecks({ prop: undefined }, validateFunction)

      return <React.Fragment />
    }

    render(<SUT />)

    expect(spy).not.toHaveBeenCalled()
  })

  it('should log a warn type', () => {
    const spy = jest.spyOn(console, 'warn')

    const SUT = () => {
      useDeveloperChecks({ prop: 'i-am-a-prop' }, (componentProps) => {
        if (componentProps.prop) {
          return {
            type: 'warn',
            message: 'This is a warning',
          }
        }
      })

      return <React.Fragment />
    }

    render(<SUT />)

    expect(spy).toHaveBeenCalled()
  })

  it('should log a error type', () => {
    const spy = jest.spyOn(console, 'error')

    const SUT = () => {
      useDeveloperChecks({ prop: 'i-am-a-prop' }, (componentProps) => {
        if (componentProps.prop) {
          return {
            type: 'error',
            message: 'Let us blow it out!',
          }
        }
      })

      return <React.Fragment />
    }

    render(<SUT />)

    expect(spy).toHaveBeenCalled()
  })

  it('should log a debug', () => {
    const spy = jest.spyOn(console, 'debug')

    const SUT = () => {
      useDeveloperChecks({ prop: 'i-am-a-prop' }, (componentProps) => {
        if (componentProps.prop) {
          return {
            type: 'error',
            message: 'Just an error thing',
          }
        }
      })

      return <React.Fragment />
    }

    render(<SUT />)

    expect(spy).toHaveBeenCalled()
  })
})
