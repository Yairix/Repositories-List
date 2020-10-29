let url = "https://api.github.com/"
let userName = "Yairix"
let endpoint = `users/${userName}/repos`

let request = url + endpoint

function displayRepository(dataRepo) {
    let section = document.querySelector("#repositorios")
    
    for ( let infoRepo of dataRepo ) {
        let archive = document.createElement("a")
        archive.textContent = infoRepo.name
        archive.href = infoRepo.link
        archive.target = "_blank"
        archive.rel = "noopener"
        archive.classList.add("archive")
        section.appendChild(archive)
    }  
};

fetch(request)
.then(resp => {
    if (resp.ok) {
        return resp.json()
    } else {
        throw new Error("Código " + resp.status)
    }
})
.then(data => {
    let dataRepo = []
    data.forEach(infoRepo => {
        dataRepo.push({
            name: infoRepo.name,
            link: infoRepo.html_url
        })
    })
    displayRepository(dataRepo)
})
.catch(err => console.log(err));