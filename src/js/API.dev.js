"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var API_URL = 'https://www.themealdb.com';
var xhr = new XMLHttpRequest();
var data; // function onRequestHandler() {
//     if(this.readyState === 4 && this.status === 200){
//         //0 = UNSET no se ha llamado al metodo open
//         //1 = OPENED , se ha llamado al metodo opened
//         //2 = HEADERS_RECEIVED, se está llamando al metodo send()
//         //3 = LOADING, esta cargando, es decir, esta recibiendo la respuesta
//         //4 = DONE , se ha completado la operacion del
//         console.log(this.response);
//         data = Object.entries(JSON.parse(this.response));
//         console.log(Array.isArray(data));
//         console.log(data);
//         const HTMLResponse = document.querySelector("#app");
//         const template = data.map((meals) => `<li>${meals.strMeal}</li>`);
//         HTMLResponse.innerHTML = `<ul>${template}</ul>`;
//     }
// }

function onRequestHandler() {
  if (this.readyState === 4 && this.status === 200) {
    //0 = UNSET no se ha llamado al metodo open
    //1 = OPENED , se ha llamado al metodo opened
    //2 = HEADERS_RECEIVED, se está llamando al metodo send()
    //3 = LOADING, esta cargando, es decir, esta recibiendo la respuesta
    //4 = DONE , se ha completado la operacion del
    console.log(this.response);

    var _data = Object.entries(JSON.parse(this.response));

    console.log(Array.isArray(_data));
    console.log(_data);

    var _HTMLResponse = document.querySelector("#app");

    var template = _data.map(function (meals) {
      return "<li>".concat(meals.strMeal, "</li>");
    });

    _HTMLResponse.innerHTML = "<ul>".concat(template, "</ul>");
  }
}

function apiByName(nameSearch) {
  var xhrequest = new XMLHttpRequest();
  xhrequest.addEventListener("load", function () {
    if (this.readyState === 4 && this.status === 200) {
      //0 = UNSET no se ha llamado al metodo open
      //1 = OPENED , se ha llamado al metodo opened
      //2 = HEADERS_RECEIVED, se está llamando al metodo send()
      //3 = LOADING, esta cargando, es decir, esta recibiendo la respuesta
      //4 = DONE , se ha completado la operacion del
<<<<<<< eder
      _data2 = (_readOnlyError("data"), Object.entries(JSON.parse(this.response))); // const template = data.map((meals) => `<li>${meals.strMeal}</li>`);

      var _data2 = Object.entries(JSON.parse(this.response));

      var template = _data2.map(function (meals) {
        return "<li>".concat(meals.strMeal, "</li>");
      });

      console.log("Array: ", Array.isArray(_data2));
      console.log("data:", _data2);
=======
      var data = Object.entries(JSON.parse(this.response));
      var template = data.map(function (meals) {
        return "<li>".concat(meals.strMeal, "</li>");
      });
      console.log("Array: ", Array.isArray(data));
      console.log("data:", data);
>>>>>>> main
    }
  });
  xhrequest.open("GET", "".concat(API_URL, "/api/json/v1/1/search.php?s=").concat(nameSearch));
  xhrequest.send();
}
/*
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET",`${API_URL}/api/json/v1/1/random.php`);
<<<<<<< eder
xhr.send();*/


console.log("nueva linea de texto, data antes de buscar: ", data);
var printResults = document.getElementById("printResults"); // Exponer HTMLResponse al scope global

var HTMLResponse = document.querySelector("#app");

function print() {
  console.log("function print is running");
  console.log(data); // Creé las variables dataHead y dataMeals para acceder a elementos del array

  var dataHead = data[0][0];
  var dataMeals = data[0][1];
  console.log(dataHead); // logs "meals" 

  console.log(dataMeals); // logs an array with 25 meal objects
  // Crear el node HTMLReplace <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

  var HTMLReplace = document.createElement("div");
  HTMLReplace.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"; //Imprimir el nombre del primer platillo al HTML
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
    var noResults = document.createElement("p");
    var text = document.createTextNode("No hay resultados");
    noResults.appendChild(text);
    HTMLReplace.appendChild(noResults);
    HTMLResponse.replaceChild(HTMLReplace, HTMLResponse.childNodes[0]);
  } //Imprimir un card a partir de cada elemento del array


  console.log(Array.isArray(dataMeals));

  if (Array.isArray(dataMeals)) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = dataMeals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var meal = _step.value;
        var col = document.createElement("div");
        col.className = "col"; // Add <div class="card shadow-sm">

        var card = document.createElement("div");
        card.className = "card shadow-sm";
        col.appendChild(card); //Add img with class "bd-placeholder-img card-img-top"

        var img = document.createElement("img");
        img.className = "bd-placeholder-img card-img-top"; // img.height = "225";

        img.role = "img";
        img.src = "" + meal.strMealThumb;
        card.appendChild(img); // <div class="card-body"> 

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.appendChild(cardBody); // Add <p class="card-text"> con strMeal strCategory y strArea

        var cardMeal = createNode("p", meal.strMeal);
        cardBody.appendChild(cardMeal);
        var cardCategory = createNode("p", meal.strCategory);
        cardBody.appendChild(cardCategory);
        var cardArea = createNode("p", meal.strArea);
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
        HTMLReplace.appendChild(col);
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

    HTMLResponse.replaceChild(HTMLReplace, HTMLResponse.childNodes[0]);
  }
}

printResults.addEventListener("click", print);
=======
xhr.send();*/
>>>>>>> main
