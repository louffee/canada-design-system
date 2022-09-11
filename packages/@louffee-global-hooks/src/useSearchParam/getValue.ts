// eslint-disable-next-line compat/compat
const getValue = (search: string, parameter: string) => new URLSearchParams(search).get(parameter)

export default getValue
