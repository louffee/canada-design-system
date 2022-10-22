import type * as React from 'react'

type HTMLDivElementAttributes = React.HTMLAttributes<HTMLDivElement>
type OmittedHTMLDivElementAttributes = Omit<HTMLDivElementAttributes, 'children' | 'style'>

interface DialogFooterProps extends OmittedHTMLDivElementAttributes {
  children: React.ReactNode
}

export default DialogFooterProps
