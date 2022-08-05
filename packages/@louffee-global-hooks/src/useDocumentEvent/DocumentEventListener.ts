import type DocumentEventName from './DocumentEventName'

type DocumentEventListener<TEventName extends DocumentEventName> = (event: DocumentEventMap[TEventName]) => void

export default DocumentEventListener
