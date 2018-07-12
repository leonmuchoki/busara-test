const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

// CREATE NEW USER
export const createUser = (user_params) => 
  window.fetch(`${api}/signup`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(user_params)
    })
    .then(res => res.json())