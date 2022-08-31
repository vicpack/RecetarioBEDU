// const printResults = document.getElementById("printResults");
const searchByName = document.getElementById("searchByName");
var inputByName = document.getElementById("inputByName");

const divCardsResult = document.getElementById("cardsResultados");
    
const divResult = document.getElementById("results");
const titleResults = document.getElementById("titleResults");
const totalResult = document.getElementById("totalResults");
const divNoRresults = document.getElementById("noResults");
const titleNoResults = document.getElementById("titleNoResults");

function apiByName(nameSearch) {
  const xhrequest = new XMLHttpRequest();

  xhrequest.addEventListener("load", function(){
      if(this.readyState === 4 && this.status === 200){
      //0 = UNSET no se ha llamado al metodo open
      //1 = OPENED , se ha llamado al metodo opened
      //2 = HEADERS_RECEIVED, se está llamando al metodo send()
      //3 = LOADING, esta cargando, es decir, esta recibiendo la respuesta
      //4 = DONE , se ha completado la operacion del
      data = Object.entries(JSON.parse(this.response));
      // const template = data.map((meals) => `<li>${meals.strMeal}</li>`);
      console.log("Array: ",Array.isArray(data));
      console.log("data:", data);

  }
  });
  xhrequest.open("GET",`${API_URL}/api/json/v1/1/search.php?s=${nameSearch}`);
  xhrequest.send();    
}
/*
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET",`${API_URL}/api/json/v1/1/random.php`);
xhr.send();*/


// Exponer HTMLResponse al scope global

const HTMLResponse = document.querySelector("#app");

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

// Crear tarjetas para imprimir los resultados
function createCards(){

    // Limpia el buscador despues de buscar una comida
    const mealDetailsSection = document.getElementById('meal-details-section');
    mealDetailsSection.innerHTML = "";

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
    // <a href="#meal-details-section" style="text-decoration: none; color: black;">
    //     <div class="card h-100">
    //         <img src="..." class="card-img-top" alt="...">
    //         <div class="card-body">
    //             <h5 class="card-title">Card title</h5>
    //             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
    //             content. This content is a little bit longer.</p>
    //         </div>
    //     </div>
    // </a>
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
        if (meal.strCategory){
          const cardCategory = createNode("p", meal.strCategory);
          cardBody.appendChild(cardCategory);
          const cardArea = createNode("p", meal.strArea);
          cardArea.className = "card-text";
          cardBody.appendChild(cardArea);
        }

        // Add <div class="d-flex justify-content-between align-items-center">
        const botones = document.createElement("div");
        botones.className = "d-flex justify-content-between align-items-center";
        cardBody.appendChild(botones);

        // Add <div class="btn-group">
        const btnGroup = document.createElement("div");
        btnGroup.className = "btn-group";
        botones.appendChild(btnGroup);

        // <a href="#meal-details-section" style="text-decoration: none;">
        const ahref = document.createElement("a");
        ahref.href="#meal-details-section";
        ahref.style="text-decoration: none;";
        btnGroup.appendChild(ahref);

        // <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
        // const viewButton = createNode("button", "Ver detalles");
        // const secButton = createNode("button", "Otro botón");
        // viewButton.className = "btn btn-sm btn-outline-secondary";
        // secButton.className = "btn btn-sm btn-outline-secondary";
        // btnGroup.appendChild(viewButton);
        // btnGroup.appendChild(secButton);
        const viewInfo = `
        <button onclick="getMealInfo(${meal.idMeal})" type="button" class="btn btn-sm btn-outline-secondary">Ver detalles</button>
            `
        ahref.innerHTML = viewInfo;
        // const mealInfoDiv = document.createElement('div');
        // mealInfoDiv.className = 'col-xm-1 col-sm-1 col-md-3 p-3 d-flex justify-content-center';
        // mealInfoDiv.innerHTML = mealInfo;
        // mealInfoSection.appendChild(mealInfoDiv);


        console.log(col)
        divCardsResult.appendChild(col);
      }

      // Reemplaza los resultados anteriores con los resultados de búsqqueda nuevos
      // HTMLResponse.replaceChild(divCardsResult, HTMLResponse.childNodes[0]);
    
  }
}

let searchBtn;

function print() {
  console.log("function print is running");

    if (inputByName.value) {
      console.log("input is true")
      searchBtn = inputByName.value.toUpperCase();
    console.log("Buscar: ", searchBtn)
    apiByName(searchBtn);
    // console.log(data);

    // Esperar a que se ejecute la funcion apiByName()
    setTimeout(createCards, 500);
  } else {
    console.log("input is empty");
    cleanResults();

    // Limpia el buscador despues de buscar una comida
    const mealDetailsSection = document.getElementById('meal-details-section');
    mealDetailsSection.innerHTML = "";

    const emptyTag = document.createElement("p");
    const emptyText = document.createTextNode("No has ingresado nada");
    emptyTag.appendChild(emptyText);
    divCardsResult.appendChild(emptyTag);
  }  
}

searchByName.addEventListener("click", print);
inputByName.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    print();
  }
});

function getMealInfo (mealID) {
  // Limpia el buscador despues de buscar una comida



  const mealDetailsSection = document.getElementById('meal-details-section');
  mealDetailsSection.innerHTML = "";

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
  fetch(url)
      .then(res => res.json())
      .then(data => showMealDetailsDiv(data));
} 

// Mostrar detalles de la comida 

const showMealDetailsDiv = data => {
    const meal = data.meals[0];
    const mealPhoto = meal.strMealThumb;
    const mealName = meal.strMeal;
    const mealInstructions = meal.strInstructions;
    window.location.href += `/${meal.idMeal}`; // regresa la URL mostrando el ID de la receta

    console.log(meal.strInstructions)


    // Establecer estructura de división de detalles de comidas
    const mealDetailsSection = document.getElementById('meal-details-section');
    mealDetailsSection.innerHTML = ` 
        <div id="meal-details" class="card px-0 pb-1 border-0 shadow col-xm-12 col-sm-12 col-md-6" style="border-radius: 10px;">
            <img src="${mealPhoto}" class="card-img-top" style="border-radius: 10px 10px 0 0;" alt=" ...">
            <div class="card-body">
                <h2 class="card-title text-center my-3">${mealName}</h2>
                <p class= "card-instruc text-center my-3">${mealInstructions}</p>
                <hr>
                <h5 class="card-title mt-4">Meal Ingredients</h5>
                <div id="meal-ingredients"></div>
            </div>
        </div>
    `

    const mealIngredients = document.getElementById('meal-ingredients');

    // // Establecer el contenido de cada párrafo dentro de la estructura de la división de detalles de la comida
    for (let i = 1; meal[`strIngredient${i}`]; i++) {
        const ingredients = `
        ✔ ${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]} 
        `
        const mealDetailsP = document.createElement('p');
        mealDetailsP.className = 'card-text';
        mealDetailsP.innerText = ingredients;
        mealIngredients.appendChild(mealDetailsP);
    }
}