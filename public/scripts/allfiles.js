fetch('/dashboard/files', {
    method: 'GET'
}).then((response) => {
    response.json().then((value) => {
        let counter = {counter: 0}
        let listContainer = document.getElementById('list')
        listContainer.innerHTML = ''

        let addFile = () => {
            let li = document.createElement('li')
            let link = document.createElement('a')

            link.target = '_blank'
            link.innerText = value.files[counter.counter++]
            li.appendChild(link)
            listContainer.appendChild(li)
            link.id = value.files[counter.counter - 1]

            link.addEventListener('click', () => {
                let link_json = {'filename': link.id}

                let getFile =  async () => {
                    await fetch('/dashboard/download', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(link_json)
                    })

                    window.open("http://localhost:3000/dashboard/download")
                }

                getFile().then(() => {
                    console.log('Done')
                }).catch((reason) => {
                    console.log(reason)
                })
            })
        }

        value.files.forEach(addFile)
    })
})