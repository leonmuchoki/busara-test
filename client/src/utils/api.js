const api = "http://localhost:3001"

let token = localStorage.getItem('token')
/* if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8)
} */

const setToken = (data) => {
  let rtn_status = data["message"]
  if (rtn_status === "Account created successfully") {
    localStorage.setItem('token', data["auth_token"])
    token = data["auth_token"]
    console.log('setToken..' + JSON.stringify(data))
  }
  return data
}

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}


// CREATE NEW USER
export const createUser = (user_params) => 
  window.fetch(`${api}/signup`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(user_params)
    })
    .then(res => res.json())
    .then(data => (setToken(data)))

// LOGIN USER
export const authenticateUser = (user_params) => 
  fetch(`${api}/auth/login`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(user_params)
    })
    .then(res => res.json())
    .then(data => (setToken(data)))