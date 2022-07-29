import * as React from 'react'

import { useDeveloperChecks } from '@louffee/global-hooks'

import { render } from '@testing-library/react'

beforeEach(() => {
  jest.spyOn(console, 'warn').mockImplementation(() => {})
  jest.spyOn(console, 'error').mockImplementation(() => {})
  jest.spyOn(console, 'debug').mockImplementation(() => {})
})

describe('Test useDeveloperChecks', () => {
  it('should NOT log anything', () => {
    const spy = jest.spyOn(console, 'warn')

    const SUT: React.FC = () => {
      useDeveloperChecks({ prop: undefined }, () => undefined)

      return null
    }

    render(<SUT />)

    expect(spy).not.toHaveBeenCalled()
  })

  it('should log a warn type', () => {
    const spy = jest.spyOn(console, 'warn')

    const SUT: React.FC = () => {
      useDeveloperChecks({ prop: 'i-am-a-prop' }, (componentProps) => {
        if (componentProps.prop) {
          return {
            type: 'warn',
            message: 'This is a warning',
          }
        }
      })

      return null
    }

    render(<SUT />)

    expect(spy).toHaveBeenCalled()
  })

  it('should log a error type', () => {
    const spy = jest.spyOn(console, 'error')

    const SUT: React.FC = () => {
      useDeveloperChecks({ prop: 'i-am-a-prop' }, (componentProps) => {
        if (componentProps.prop) {
          return {
            type: 'error',
            message: 'Let us blow it out!',
          }
        }
      })

      return null
    }

    render(<SUT />)

    expect(spy).toHaveBeenCalled()
  })

  it('should log a debug', () => {
    const spy = jest.spyOn(console, 'debug')

    const SUT: React.FC = () => {
      useDeveloperChecks({ prop: 'i-am-a-prop' }, (componentProps) => {
        if (componentProps.prop) {
          return {
            type: 'debug',
            message: 'Just a debug thing',
          }
        }
      })

      return null
    }

    render(<SUT />)

    expect(spy).toHaveBeenCalled()
  })
})
