const baseUrl = 'http://localhost:3000/users';

export let errors = false;
const handleErrors = (err) => {
    errors = true;
    console.warn('Error occured!!',err);
}

export const loadUsers = () => {
    errors = false;
    return fetch(baseUrl,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).catch((err) => handleErrors(err))
        .then( (res) => res.json())
}
export const createUser = (user) => {
     errors = false;
     return fetch(baseUrl, {
               method: 'POST',
               headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
               },
                     body: JSON.stringify(user)
               }).catch((err) => handleErrors(err))
               .then((res) => {
                if(res) res.json();
               })
}
export const saveUser = (user) => {
    errors = false;
    return fetch(`${baseUrl}/${user.id}`, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
                  body: JSON.stringify(user)
    }).then(res => res.json())
}
export const destroyUser = (id) => {
    errors = false;
    return fetch(`${baseUrl}/${id}`, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
    })
}
