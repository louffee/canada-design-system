const getValue = (search: string, parameter: string) => new URLSearchParams(search).get(parameter)

export default getValue
