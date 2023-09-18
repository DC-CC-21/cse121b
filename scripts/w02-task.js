/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Derek Christensen'
const currentYear = new Date().getFullYear()
const profilePicture = './images/profile.JPG'


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name')
const foodElement = document.getElementById('food')
const yearElement = document.querySelector('#year')
const imageElement = document.querySelector('picture img')



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = currentYear
imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute('alt', `Profile image of ${fullName}`)



/* Step 5 - Array */
let favoriteFoods = ['Pizza', 'Steak', 'Chicken']
foodElement.innerHTML = favoriteFoods

let newFood = 'Apple'
favoriteFoods.push(newFood)
foodElement.innerHTML += `<br> ${favoriteFoods}`

favoriteFoods.splice(0, 1)
foodElement.innerHTML += `<br> ${favoriteFoods}`

favoriteFoods.splice(-1, 1)
foodElement.innerHTML += `<br> ${favoriteFoods}`
