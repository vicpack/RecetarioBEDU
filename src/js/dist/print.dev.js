"use strict";

// const printResults = document.getElementById("printResults");
var searchByName = document.getElementById("searchByName");
var inputByName = document.getElementById("inputByName");
var divCardsResult = document.getElementById("cardsResultados");
var divResult = document.getElementById("results");
var titleResults = document.getElementById("titleResults");
var totalResult = document.getElementById("totalResults");
var divNoRresults = document.getElementById("noResults");
var titleNoResults = document.getElementById("titleNoResults");

function cleanResults() {
  while (divCardsResult.lastElementChild) {
    divCardsResult.removeChild(divCardsResult.lastElementChild);
  }
}

function showResult(num) {
  titleResults.innerHTML = "Recipes of '".concat(inputByName.value, "'");
  totalResult.innerHTML = "".concat(num, " recipes found");
  divNoRresults.classList.add('d-none');
  divResult.classList.remove('d-none');
}

function noResult(search) {
  console.log("noResult");
  divResult.classList.add("d-none");
  titleNoResults.innerText = "Sorry, we couldn't find recipes for '".concat(search, "'");
  divNoRresults.classList.remove("d-none");
  cleanResults();
}

function print() {
  console.log("function print is running");
  var searchBtn = inputByName.value.toUpperCase();
  console.log("Buscar: ", searchBtn);
  apiByName(searchBtn);
  console.log(data); // Esperar a que se ejecute la funcion apiByName()

  setTimeout(function () {
    // Creé las variables dataHead y dataMeals para acceder a elementos del array
    var dataHead = data[0][0];
    var dataMeals = data[0][1];
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
      var node = document.createElement(type);

      if (typeof child === "string") {
        var text = document.createTextNode(child);
        node.appendChild(text);
      } else {
        node.appendChild(child);
      }

      return node;
    }

    if (!dataMeals) {
      console.log("dataMeals is null");
      noResult(searchBtn); // const noResults = document.createElement("p");
      // const text = document.createTextNode("No hay resultados");
      // noResults.appendChild(text);
      // divCardsResult.appendChild(noResults);
      // HTMLResponse.replaceChild(divCardsResult, HTMLResponse.childNodes[0]);
    } //Imprimir un card a partir de cada elemento del array
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


    console.log(Array.isArray(dataMeals));

    if (Array.isArray(dataMeals)) {
      cleanResults();
      showResult(dataMeals.length);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = dataMeals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var meal = _step.value;
          var col = document.createElement("div");
          col.className = "col"; // Add <div class="card shadow-sm">

          var card = document.createElement("div");
          card.className = "card h-100";
          col.appendChild(card); //Add img with class "bd-placeholder-img card-img-top"

          var img = document.createElement("img");
          img.className = "bd-placeholder-img card-img-top"; // img.height = "225";

          img.alt = "" + meal.strMeal;
          img.role = "img";
          img.src = "" + meal.strMealThumb;
          card.appendChild(img); // <div class="card-body"> 

          var cardBody = document.createElement("div");
          cardBody.className = "card-body";
          card.appendChild(cardBody); // Add <h5 class="card-title">Card title</h5>

          var cardMeal = createNode("h5", meal.strMeal);
          cardMeal.className = "card-title";
          cardBody.appendChild(cardMeal); // Add <p class="card-text"> con strMeal strCategory y strArea

          var cardCategory = createNode("p", meal.strCategory);
          cardBody.appendChild(cardCategory);
          var cardArea = createNode("p", meal.strArea);
          cardArea.className = "card-text";
          cardBody.appendChild(cardArea); // Add <div class="d-flex justify-content-between align-items-center">

          var botones = document.createElement("div");
          botones.className = "d-flex justify-content-between align-items-center";
          cardBody.appendChild(botones); // Add <div class="btn-group">

          var btnGroup = document.createElement("div");
          btnGroup.className = "btn-group";
          botones.appendChild(btnGroup); // <button type="button" class="btn btn-sm btn-outline-secondary">View</button>

          var viewButton = createNode("button", "Ver detalles");
          var secButton = createNode("button", "Otro botón");
          viewButton.className = "btn btn-sm btn-outline-secondary";
          secButton.className = "btn btn-sm btn-outline-secondary";
          btnGroup.appendChild(viewButton);
          btnGroup.appendChild(secButton);
          console.log(col);
          divCardsResult.appendChild(col);
        } // Reemplaza los resultados anteriores con los resultados de búsqqueda nuevos

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      HTMLResponse.replaceChild(divCardsResult, HTMLResponse.childNodes[0]);
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