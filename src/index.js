// fetches dog images
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((data) => renderImgs(data.message))

// fetches dog breeds
fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((data) => {
        renderBreeds(Object.keys(data.message))
        filterBreeds(Object.keys(data.message))
    })

function renderImgs(urlArr) {
    // console.log(urlArr)

    // 1. forEach loop to get each url from array
    // 2. create image tag
    // 3. set image src to url
    // 4. append image to div with id of dog-image-container

    const divForImgs = document.querySelector('#dog-image-container')

    urlArr.forEach((url) => {
        
        const img = document.createElement('img')

        img.src = url

        divForImgs.append(img)

    })
}

function renderBreeds(breedArr) {
    // console.log(breedArr)

    // 1. grab ul with id of dog-breeds
    // 2. loop over breedArr with forEach to get each breed
    // 3. make li for each breed
    // 4. make li textContent = breed
    // 5. append li to ul

    const ulForBreeds = document.querySelector('#dog-breeds')

    breedArr.forEach((breed) => {
        
        const li = document.createElement('li')

        li.textContent = breed

        li.addEventListener('click', (e) => {
            // 'e.target' and 'li' are equivalent
            e.target.style.color = 'pink'
        })

        ulForBreeds.appendChild(li)

    })
}

function filterBreeds(breedArr) {
    // console.log(breedArr)

    // 1. get all dog breeds
    // 2. filter dog breeds based on dropdown letter (change event?)
        // change event for dropdown
        // get letter changed to
    // 3. render filtered dog breeds to that ul

    const dropdown = document.querySelector('#breed-dropdown')

    dropdown.addEventListener('change', (e) => handleChange(e))

    function handleChange(e) {
        // 'e.target.value' is the selected letter
        const filteredBreeds = breedArr.filter((breed) => {
            return breed[0] == e.target.value
            return breed.startsWith(e.target.value)

            if (breed[0] == e.target.value) {
                return true
            }
            else {
                return false
            }
        })

        const ul = document.querySelector('#dog-breeds')

        ul.textContent = ""

        renderBreeds(filteredBreeds)
    }

}