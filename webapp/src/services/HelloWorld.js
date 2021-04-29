const URL = 'http://localhost:4500'

export const fetchText = () => fetch(URL).then(res => res.text())
