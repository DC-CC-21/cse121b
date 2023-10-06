/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
  name: "Derek Christensen",
  photo: "./images/profile.JPG",
  favoriteFoods: ["Pizza", "Steak", "Chicken"],
  hobbies: ["Programming", "3D Printing", "Hiking"],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  place: "Douglas, MA",
  length: "18 years",
});

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.getElementById("photo");
photoElement.src = myProfile.photo;
photoElement.setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((favoriteFood) => {
  let li = document.createElement("li");
  li.textContent = favoriteFood;
  document.querySelector("#favorite-foods").append(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
  let li = document.createElement("li");
  li.textContent = hobby;
  document.querySelector("#hobbies").append(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((place) => {
  let dt = document.createElement("dt");
  let dd = document.createElement("dd");
  dt.textContent = place.place;
  dd.textContent = place.length;
  document.querySelector("#places-lived").append(dt, dd);
});
