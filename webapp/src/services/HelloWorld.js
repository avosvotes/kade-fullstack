const URL = 'http://localhost:4500'

export const fetchText = token =>
  fetch(URL, { headers: { authorization: token } }).then(res => res.text())
