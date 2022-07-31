import type * as React from 'react'

import type FormRenderFunctionProps from './FormRenderFunctionProps'

type FormRenderFunction<V extends object> = (props: FormRenderFunctionProps<V>) => React.ReactNode

export default FormRenderFunction
