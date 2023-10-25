import { createElementDetails, createElementCard ,pElementFit, buildLegend} from "./projectImports.js";

String.prototype.toTitleCase = function () {
  return this.replaceAll("_", " ")
    .split(" ")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1, x.length).toLowerCase())
    .join(" ");
};

const elementsContainer = document.getElementById("elementsTable");
const selectMenu = document.getElementById("filter");
const detailsElement = document.getElementById("elementDetails");

const URLS = [
  "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json",
  "./molecules.json",
];

let elementsList = [];
let molecules = [];

const fetchData = async () => {
  let response1 = await fetch(URLS[0]);
  let response2 = await fetch(URLS[1]);

  elementsList = (await response1.json()).elements;
  molecules = await response2.json();

  createElements(elementsList);
};
fetchData();

function createElements(lst) {
  lst.forEach((lst) => createElementCard(lst, molecules, elementsContainer));
  Object.keys(molecules.colors).sort().forEach(fillSelect);
  buildLegend(lst, molecules, elementsContainer)
  pElementFit()

}

function fillSelect(category) {
  let option = document.createElement("option");
  option.innerHTML = category.toTitleCase();
  selectMenu.append(option);
}

const erase = (parent) => {
  parent.innerHTML = "";
};

selectMenu.addEventListener("change", () => {
  let selected = selectMenu.value.replaceAll(" ", "").toLowerCase();
  let children = Array.from(elementsContainer.children);

  children.forEach((child) => {
    child.classList.remove("notPicked");
    if (
      !child.classList.value.split(" ").includes(selected) &&
      selected !== "all"
    ) {
      child.classList.add("notPicked");
    }
  });
});

detailsElement.addEventListener("click", (e) => {
  if (e.target.id === "elementDetails") {
    detailsElement.style.display = "none";
  }
});

elementsContainer.addEventListener("click", (e) => {
  if (e.target.classList.value.includes("element")) {
    createElementDetails(
      e.target.querySelector(".elementSymbol").innerHTML,
      molecules,
      erase,
      detailsElement,
      elementsList
    );
  }
});


window.onresize = pElementFit
