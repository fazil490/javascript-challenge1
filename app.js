const populationData = {
  countryName: "World",
  population: 8019876189,
  countries: [
    {
      countryName: "India",
      population: 1428627663,
    },
    {
      countryName: "China",
      population: 1425671352,
    },
    {
      countryName: "USA",
      population: 339996563,
    },
    {
      countryName: "Indonesia",
      population: 277534122,
    },
    {
      countryName: "Pakistan",
      population: 240485658,
    },
  ],
};

const languagesData = [
  {
    languageName: "English",
    spokenBy: 91,
  },
  {
    languageName: "French",
    spokenBy: 45,
  },
  {
    languageName: "Arabic",
    spokenBy: 25,
  },
  {
    languageName: "Spanish",
    spokenBy: 24,
  },
  {
    languageName: "Portugese",
    spokenBy: 9,
  },
  {
    languageName: "Russian",
    spokenBy: 9,
  },
];

const dataDesc = document.getElementById("data-desc");
const btnPop = document
  .getElementById("btn-pop")
  .addEventListener("click", () => {
    displayCountries();
  });
const btnLang = document
  .getElementById("btn-lang")
  .addEventListener("click", () => {
    displayLanguages();
  });

function createElementWithClass(tag, className, text) {
const element = document.createElement(tag);
element.className = className; 
element.innerText = text
return element;
}


function displayCountries() {
  dataDesc.innerText = "10 most populated countries in the world.";
  const outputDiv = document.getElementById("data-sec");
  outputDiv.innerHTML = "";

  const worldPopulationDiv = document.createElement("div");
  worldPopulationDiv.className = "data-div";

  const worldPopulation = document.createElement("p");
  worldPopulation.className = "country-name";
  worldPopulation.innerText = populationData.countryName;

  const worldPopulationBarContainer = document.createElement("div");
  worldPopulationBarContainer.className = "population-bar-container";

  const worldPopulationBar = document.createElement("div");
  worldPopulationBar.className = "population-bar";
  worldPopulationBar.style.width = "80%";
  worldPopulationBarContainer.appendChild(worldPopulationBar);

  const worldPopulationValue = document.createElement("p");
  worldPopulationValue.className = "population-value";
  worldPopulationValue.innerText = populationData.population;

  worldPopulationDiv.appendChild(worldPopulation);
  worldPopulationDiv.appendChild(worldPopulationBarContainer);
  worldPopulationDiv.appendChild(worldPopulationValue);
  outputDiv.appendChild(worldPopulationDiv);

  populationData.countries.map((country) => {
    const countriesAndPop = document.createElement("div");
    countriesAndPop.className = "data-div";

    const countryNameP = document.createElement("p");
    countryNameP.className = "country-name";
    countryNameP.innerText = country.countryName;

    const populationBarContainer = document.createElement("div");
    populationBarContainer.className = "population-bar-container";
    const populationBarDiv = document.createElement("div");
    populationBarDiv.className = "population-bar";
    populationBarContainer.appendChild(populationBarDiv);
    const barWidth = (country.population / populationData.population) * 100;
    populationBarDiv.style.width = barWidth + "%";

    const populationP = document.createElement("p");
    populationP.className = "population-value";
    populationP.innerText = country.population;

    countriesAndPop.appendChild(countryNameP);
    countriesAndPop.appendChild(populationBarContainer);
    countriesAndPop.appendChild(populationP);

    outputDiv.appendChild(countriesAndPop);
  });
}

function displayLanguages() {
  dataDesc.innerText = "10 most spoken languages in the world.";
  const outputDiv = document.getElementById("data-sec");
  outputDiv.innerHTML = "";
  languagesData.map((lang) => {
    const langAndSpokenBy = createElementWithClass("div", "data-div", "")
    outputDiv.appendChild(langAndSpokenBy);

    const languageNameP = createElementWithClass("p", "languageNameP", lang.languageName) 
    langAndSpokenBy.appendChild(languageNameP);

    const langBarContainer = document.createElement("div");
    langBarContainer.className = "lang-bar-container";
    const langBarDiv = document.createElement("div");
    langBarDiv.className = "lang-bar";
    const barWidth = (lang.spokenBy /100) * 100;
    langBarDiv.style.width = barWidth + "%";
    langBarContainer.appendChild(langBarDiv)
    langAndSpokenBy.appendChild(langBarContainer);

    const spokenByP = document.createElement("p");
    spokenByP.innerText = lang.spokenBy;
    spokenByP.className = "spokenByP";
    langAndSpokenBy.appendChild(spokenByP);
  });
}
