import * as React from 'react'
import { useFormState as useFinalFormState, useForm as useFinalForm } from 'react-final-form'

import type UseFormStateReturnType from './UseFormStateReturnType'
import type FormErrorSchema from '../FormErrorSchema'

type UpdateFunction<FormValues extends object> = UseFormStateReturnType<FormValues>['update']
type FocusFunction<FormValues extends object> = UseFormStateReturnType<FormValues>['focus']
type BlurFunction<FormValues extends object> = UseFormStateReturnType<FormValues>['blur']
type BatchUpdatesNextRenderFunction<FormValues extends object> =
  UseFormStateReturnType<FormValues>['batchUpdatesNextRender']
type ForceSubmitFunction<FormValues extends object> = UseFormStateReturnType<FormValues>['forceSubmit']

function useFormState<FormValues extends object>(): UseFormStateReturnType<FormValues> {
  const { errors, submitting, validating, values, modifiedSinceLastSubmit } = useFinalFormState<FormValues>()
  const { change, blur: __blur, focus: __focus, batch, submit } = useFinalForm()

  const update = React.useCallback<UpdateFunction<FormValues>>(
    (fieldName, value) => change(fieldName as string, value),
    [change]
  )

  const blur = React.useCallback<BlurFunction<FormValues>>((fieldName) => __blur(fieldName as string), [__blur])
  const focus = React.useCallback<FocusFunction<FormValues>>((fieldName) => __focus(fieldName as string), [__focus])
  const batchUpdatesNextRender = React.useCallback<BatchUpdatesNextRenderFunction<FormValues>>(
    (batchingFunction) => batch(batchingFunction),
    [batch]
  )
  const forceSubmit = React.useCallback<ForceSubmitFunction<FormValues>>(submit, [submit])

  const formState = React.useMemo<UseFormStateReturnType<FormValues>>(
    () => ({
      errors: errors as FormErrorSchema<FormValues>,
      values,
      isSubmitting: submitting,
      isValidating: validating,
      modifiedSinceLastSubmit,
      update,
      blur,
      focus,
      batchUpdatesNextRender,
      forceSubmit,
    }),
    [
      errors,
      values,
      submitting,
      validating,
      modifiedSinceLastSubmit,
      update,
      blur,
      focus,
      batchUpdatesNextRender,
      forceSubmit,
    ]
  )

  return formState
}

export default useFormState
