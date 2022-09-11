import { isiOSSafari } from 'quebec'

import useCallback from '../useCallback/useCallback'

function useClipboard() {
  const copy = useCallback(async (textClipboardContent: string) => {
    if (typeof window === 'undefined') {
      return
    }

    if (isiOSSafari()) {
      const input = document.createElement('input')
      input.style.display = 'none'
      input.value = textClipboardContent
      document.body.append(input)
      input.select()
      document.execCommand('copy')
      input.remove()
    } else {
      await navigator.clipboard.writeText(textClipboardContent)
    }
  }, [])

  return [copy]
}

export default useClipboard
