// const printResults = document.getElementById("printResults");
const searchByName = document.getElementById("searchByName");
var inputByName = document.getElementById("inputByName");

const divCardsResult = document.getElementById("cardsResultados");
    
const divResult = document.getElementById("results");
const titleResults = document.getElementById("titleResults");
const totalResult = document.getElementById("totalResults");
const divNoRresults = document.getElementById("noResults");
const titleNoResults = document.getElementById("titleNoResults");

function cleanResults(){
  while (divCardsResult.lastElementChild) {
    divCardsResult.removeChild(divCardsResult.lastElementChild);
  }
}

function showResult(num){
  titleResults.innerHTML = `Recipes of '${inputByName.value}'`;
  totalResult.innerHTML = `${num} recipes found`;
  divNoRresults.classList.add('d-none');
  divResult.classList.remove('d-none');
}

function noResult(search){
  console.log("noResult");
  divResult.classList.add("d-none");
  titleNoResults.innerText = `Sorry, we couldn't find recipes for '${search}'`;
  divNoRresults.classList.remove("d-none");

  cleanResults();
}


function print() {
  console.log("function print is running");
  let searchBtn = inputByName.value.toUpperCase();
  console.log("Buscar: ", searchBtn)
  apiByName(searchBtn);
  console.log(data);

  // Esperar a que se ejecute la funcion apiByName()
  setTimeout(function () {
    // Creé las variables dataHead y dataMeals para acceder a elementos del array
    const dataHead = data[0][0];
    const dataMeals = data[0][1];
    console.log(dataHead); // logs "meals" 
    console.log(dataMeals); // logs an array with 25 meal objects


    // Crear el node divCardsResult <section id="indexResultados" class="row row-cols-1 row-cols-md-3 g-4 mt-4">
    

    //Imprimir el nombre del primer platillo al HTML
    // const HTMLResponse = document.querySelector("#app");
    // HTMLResponse.innerHTML = `<ul></ul>`;
    // const template = data.map((meals) => `<li>${meals.strMeal}</li>`);
    // HTMLResponse.firstChild.innerHTML = `<li>${dataMeals[0].strMeal}</li>`;

    // Cree la function createNode
    function createNode(type, child) {
      const node = document.createElement(type);
      if (typeof child === "string") {
        const text = document.createTextNode(child);
        node.appendChild(text);
      } else {
        node.appendChild(child);
      }
      return node;
    }

    if (!dataMeals) {
      console.log("dataMeals is null");
      noResult(searchBtn);

      // const noResults = document.createElement("p");
      // const text = document.createTextNode("No hay resultados");
      // noResults.appendChild(text);
      // divCardsResult.appendChild(noResults);

      // HTMLResponse.replaceChild(divCardsResult, HTMLResponse.childNodes[0]);
    }
    //Imprimir un card a partir de cada elemento del array
    // <div class="col">
    //     <div class="card h-100">
    //         <img src="..." class="card-img-top" alt="...">
    //         <div class="card-body">
    //             <h5 class="card-title">Card title</h5>
    //             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
    //             content. This content is a little bit longer.</p>
    //         </div>
    //     </div>
    // </div>
    console.log(Array.isArray(dataMeals))
    if (Array.isArray(dataMeals)) {
      cleanResults()
      showResult(dataMeals.length);
      for (const meal of dataMeals) {
        const col = document.createElement("div");
        col.className = "col";

        // Add <div class="card shadow-sm">
        const card = document.createElement("div");
        card.className = "card h-100";
        col.appendChild(card);

        //Add img with class "bd-placeholder-img card-img-top"
        const img = document.createElement("img");
        img.className = "bd-placeholder-img card-img-top";
        // img.height = "225";
        img.alt = "" + meal.strMeal;
        img.role = "img";
        img.src = "" + meal.strMealThumb;
        card.appendChild(img);

        // <div class="card-body"> 
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.appendChild(cardBody);

        // Add <h5 class="card-title">Card title</h5>
        const cardMeal = createNode("h5", meal.strMeal);
        cardMeal.className = "card-title";
        cardBody.appendChild(cardMeal);

        // Add <p class="card-text"> con strMeal strCategory y strArea
        const cardCategory = createNode("p", meal.strCategory);
        cardBody.appendChild(cardCategory);
        const cardArea = createNode("p", meal.strArea);
        cardArea.className = "card-text";
        cardBody.appendChild(cardArea);

        // Add <div class="d-flex justify-content-between align-items-center">
        const botones = document.createElement("div");
        botones.className = "d-flex justify-content-between align-items-center";
        cardBody.appendChild(botones);

        // Add <div class="btn-group">
        const btnGroup = document.createElement("div");
        btnGroup.className = "btn-group";
        botones.appendChild(btnGroup);

        // <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
        const viewButton = createNode("button", "Ver detalles");
        const secButton = createNode("button", "Otro botón");
        viewButton.className = "btn btn-sm btn-outline-secondary";
        secButton.className = "btn btn-sm btn-outline-secondary";
        btnGroup.appendChild(viewButton);
        btnGroup.appendChild(secButton);

        console.log(col)
        divCardsResult.appendChild(col);
      }

      // Reemplaza los resultados anteriores con los resultados de búsqqueda nuevos
      // HTMLResponse.replaceChild(divCardsResult, HTMLResponse.childNodes[0]);
    }
  }, 500);
}

searchByName.addEventListener("click", print);
inputByName.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    print();
  }
});