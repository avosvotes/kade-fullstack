const URL = 'http://localhost:4500'

export const login = () =>
  fetch([URL, 'login'].join('/')).then(res => res.text())
