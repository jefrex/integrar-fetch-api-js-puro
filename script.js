/*por padrao fetch sem passar nada faz um GET
    fetch('https://reqres.in/api/users/')
    .then((res) => {
        console.log(res)
        if (res.ok) {
            console.log(`Status: success, ${res.status}, ${res.statusText}`)
        } else {
            console.log(`Staus: Erro, ${res.status}, ${res.statusText}`)
        }
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
*/

// Usando method POST, tambem vale para DELETE, PUT, CREATE.
fetch('https://reqres.in/api/users/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'Jeferson',
    }),
})
    .then((res) => res.json())
    .then((data) => console.log(data))