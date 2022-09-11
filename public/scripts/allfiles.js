fetch('/dashboard/files', {
    method: 'GET'
}).then((response) => {
    response.json().then((value) => {
        console.log(value)
    })
})