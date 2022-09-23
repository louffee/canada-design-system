import useMemo from '../useMemo/useMemo'

function useClasses(...classes: string[]): string {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const className = useMemo(() => classes.filter(Boolean).join(' '), classes)

  return className
}

export default useClasses
