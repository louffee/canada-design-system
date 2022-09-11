function toRem(value: number, base: number = 16): string {
  return `${value / base}rem`
}

export default toRem
