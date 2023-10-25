export function createElementCard(element, molecules, elementsContainer) {
  let cardDiv = document.createElement("div");
  cardDiv.classList.add(element.category.replaceAll(" ", ""));
  cardDiv.classList.add("element");
  cardDiv.style.backgroundColor = molecules.colors[element.category].background;
  cardDiv.style.color = molecules.colors[element.category].color;
  cardDiv.style.gridColumn = `${element.xpos}/${element.xpos + 1}`;
  cardDiv.style.gridRow = `${element.ypos}/${element.ypos + 1}`;

  let symbolP = document.createElement("p");
  symbolP.innerHTML = element.symbol;
  symbolP.classList.add("elementSymbol");

  let atomicNumP = document.createElement("p");
  atomicNumP.innerHTML = element.number;
  atomicNumP.classList.add("atomicNumber");

  let nameP = document.createElement("p");
  nameP.innerHTML = element.name;
  nameP.classList.add("elementName");

  cardDiv.append(atomicNumP, symbolP, nameP);
  elementsContainer.appendChild(cardDiv);
}

export function createElementDetails(
  elementSymbol,
  molecules,
  erase,
  detailsElement,
  elementsList
) {
  erase(detailsElement);
  detailsElement.style.display = "block";
  let currentElement = elementsList.filter(
    (element) => element.symbol === elementSymbol
  )[0];
  let keys = [
    "number",
    "symbol",
    "name",
    "atomic_mass",
    "category",
    "density",
    "discovered_by",
    "period",
    "phase",
    "summary",
  ];

  let cardDiv = document.createElement("div");
  cardDiv.style.backgroundColor =
    molecules.colors[currentElement.category].background;
  cardDiv.style.color = molecules.colors[currentElement.category].color;

  keys.forEach((key) => {
    let p = document.createElement("p");
    if (!"number symbol name summary".includes(key)) {
      p.innerHTML = `${key.toTitleCase()}: ${(currentElement[key]
        ? currentElement[key]
        : "unknown"
      )
        .toString()
        .toTitleCase()}`;
    } else if (key === "summary") {
      p.innerHTML = `${key.toTitleCase()}:<br><pre>        ${
        currentElement[key]
      }</pre>`;
    } else {
      p.innerHTML = currentElement[key];
      p.classList.add(key);
    }
    cardDiv.appendChild(p);
  });
  detailsElement.appendChild(cardDiv);
  pElementFit();
}

export function pElementFit() {
  let pAll = Array.from(document.querySelectorAll("p"));
  pAll.forEach((p) => {
    if (p.classList.value.includes("atomicNumber")) {
      let width = Number(getComputedStyle(p.parentElement).width.slice(0, -2));
      let fontSize = width / 4;
      p.style.fontSize = `${fontSize}px`;
      p.style.left = `${fontSize * 0.1}px`;
      p.style.top = `${fontSize * 0.1}px`;
    } else if (p.classList.value.includes("elementSymbol")) {
      let width = Number(getComputedStyle(p.parentElement).width.slice(0, -2));
      p.style.fontSize = `${width / 2}px`;
    } else if (p.classList.value.includes("elementName")) {
      let width = Number(getComputedStyle(p.parentElement).width.slice(0, -2));
      p.style.fontSize = `${width / 6}px`;
    } else if (p.classList.value.includes("legendP")) {
      let width = Number(getComputedStyle(p.parentElement).width.slice(0, -2));
      p.style.fontSize = `${width * 0.05}px`;

      let div = p.previousElementSibling;
      div.style.width = `${width * 0.05}px`;
      div.style.height = `${width * 0.05}px`;
    } else {
      let width = Number(getComputedStyle(p.parentElement).width.slice(0, -2));
      if (p.classList.value.includes("symbol")) {
        p.style.fontSize = `${Math.min(width * 0.03, 30)}px`;
      } else {
        p.style.fontSize = `${Math.min(width * 0.04, 24)}px`;
      }
    }
  });
}

export function buildLegend(elementList, molecules, parent) {
  let types = Array.from(new Set(elementList.map((el) => el.category)));
  let masterDiv = document.createElement("div");
  masterDiv.id = "legend";
  types.forEach((mType) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerHTML = mType;
    p.classList.add("legendP");

    let colorEl = document.createElement("div");
    colorEl.style.backgroundColor = molecules.colors[mType].background;

    div.append(colorEl, p);
    masterDiv.appendChild(div);
  });
  parent.appendChild(masterDiv);
}
