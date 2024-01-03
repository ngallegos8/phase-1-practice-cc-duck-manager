const duckNav = document.querySelector("#duck-nav")
const duckDisplayName = document.querySelector("duck-display-name")
const duckDisplayImage = document.querySelector("duck-display-image")
const duckDisplayLikes = document.querySelector("duck-display-likes")
const newDuckForm = document.querySelector("new-duck-form")

let currentDuck

function renderDuckCard(duckObj) {
    const duckImg = document.createElement("img")
    duckImg.src = duckObj.img_url
    duckNav.append(duckImg)
    duckImg.addEventListener("click", () => {
        duckDisplayName.textContent = duckObj.name
        duckDisplayImage.src = duckObj.img_url
        duckDisplayLikes.textContent = `${duckObj.likes} likes`
        currentDuck = duckObj
    })
}

fetch("http://localhost:3000/ducks")
    .then(res => res.json())
    .then(ducksArray => ducksArray.forEach(renderDuckCard))

duckDisplayLikes.addEventListener("click", () => {
    if (currentDuck) {
        currentDuck.likes++
        duckDisplayLikes.textContent = `${currentDuck.likes} likes`
    }
})

newDuckForm.addEventListener("submit", event => {
    event.preventDefault()
    const name = event.target["duck-name-input"].value
    const img_url = event.target["duck-image-input"].value

    const newDuck = { name, img_url, likes: 0 }

    renderDuckCard(newDuck)
})

















// // ELEMENTS
// const duckNav = document.querySelector('#duck-nav')
// const duckDisplayName = document.querySelector('#duck-display-name')
// const duckDisplayImage = document.querySelector('#duck-display-image')
// const duckDisplayLikes = document.querySelector('#duck-display-likes')
// const newDuckForm = document.querySelector('#new-duck-form')

// let currentDuck

// // RENDER DUCK CARD FUNC
// function renderDuckCard(duckObj) {
//     const duckImg = document.createElement('img')
//     duckImg.src = duckObj.img_url
//     duckNav.append(duckImg)
//     duckImg.addEventListener("click", () => {
//         duckDisplayName.textContent = duckObj.name
//         duckDisplayImage.src = duckObj.img_url
//         duckDisplayLikes.textContent = `${duckObj.likes} likes`
//         currentDuck = duckObj
//     })
// }

// // ON LOAD FETCH
// fetch("http://localhost:3000/ducks")
// .then(res => res.json())
// .then(ducksArray => ducksArray.forEach(renderDuckCard) )

// // LIKE BUTTON EVENT
// duckDisplayLikes.addEventListener("click", () => {
//     if (currentDuck) {
//         currentDuck.likes++
//         duckDisplayLikes.textContent = `${currentDuck.likes} likes`
//     }
// })

// // NEW DUCK SUBMIT EVENT
// newDuckForm.addEventListener("submit", event => {
//     event.preventDefault()
//     const name = event.target["duck-name-input"].value
//     const img_url = event.target["duck-image-input"].value

//     const newDuck = { name, img_url, likes: 0 }

//     renderDuckCard(newDuck)
// })