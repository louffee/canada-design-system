import type * as React from 'react'

type HTMLElementAttributes = React.HTMLAttributes<HTMLElement>
type OmittedHTMLElementAttributes = Omit<HTMLElementAttributes, 'children' | 'style'>

interface DialogTitleProps extends OmittedHTMLElementAttributes {
  children: React.ReactNode
}

export default DialogTitleProps
