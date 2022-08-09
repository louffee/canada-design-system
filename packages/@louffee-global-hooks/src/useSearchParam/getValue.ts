const getValue = (search: string, param: string) => new URLSearchParams(search).get(param)

export default getValue
