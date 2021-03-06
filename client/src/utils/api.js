const api = "http://localhost:3001"//"https://busara-test-leon.herokuapp.com"//"http://localhost:3001"

let token = localStorage.getItem('token')
/* if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8)
} */

const processResponse = (data) => {
  console.log('data returned..' + JSON.stringify(data))
  let rtn_status = data["status"]
   if (rtn_status === 200) {
    let rtn_msg = data["message"]
    
    localStorage.setItem('user_id', data["user_id"])
    //localStorage.setItem('user_email', user_data["email"])
    localStorage.setItem('token', data["auth_token"])
    token = data["auth_token"]
    console.log('processResponse..' + JSON.stringify(data))
    return data
  }
  else if (rtn_status == 400) {
    console.log('processResponse..' + JSON.stringify(data))
    let rtn_err = data["message"]
    return data
  }
  else if (rtn_status => 500) {
    //internal server error
    return data
  }
  
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
    .then(data => (processResponse(data)))

// LOGIN USER
export const authenticateUser = (user_params) => 
  fetch(`${api}/auth/login`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(user_params)
    })
    .then(res => res.json())
    .then(data => (processResponse(data)))

// CREATE CONTACT /users/:user_id/contacts
let user_id = localStorage.user_id
export const createContact = (contact_params) => 
  fetch(`${api}/users/${user_id}/contacts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(contact_params)
    })
    .then(res => res.json())
    .then(data => (data))

// FETCH CONTACTS /users/:user_id/contacts
export const fetchUserContacts = () => 
  fetch(`${api}/users/${user_id}/contacts`, {
    method: 'GET',
    headers: headers
    })
    .then(res => res.json())
    .then(data => (data))
