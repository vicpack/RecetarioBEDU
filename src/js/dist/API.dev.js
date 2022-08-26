"use strict";

var API_URL = 'https://www.themealdb.com';
var xhr = new XMLHttpRequest();

function onRequestHandler() {
  if (this.readyState === 4 && this.status === 200) {
    //0 = UNSET no se ha llamado al metodo open
    //1 = OPENED , se ha llamado al metodo opened
    //2 = HEADERS_RECEIVED, se está llamando al metodo send()
    //3 = LOADING, esta cargando, es decir, esta recibiendo la respuesta
    //4 = DONE , se ha completado la operacion del
    console.log(this.response);
    var data = Object.entries(JSON.parse(this.response));
    console.log(Array.isArray(data));
    console.log(data);
    var HTMLResponse = document.querySelector("#app");
    var template = data.map(function (meals) {
      return "<li>".concat(meals.strMeal, "</li>");
    });
    HTMLResponse.innerHTML = "<ul>".concat(template, "</ul>");
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
      var data = Object.entries(JSON.parse(this.response));
      var template = data.map(function (meals) {
        return "<li>".concat(meals.strMeal, "</li>");
      });
      console.log("Array: ", Array.isArray(data));
      console.log("data:", data);
    }
  });
  xhrequest.open("GET", "".concat(API_URL, "/api/json/v1/1/search.php?s=").concat(nameSearch));
  xhrequest.send();
}
/*
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET",`${API_URL}/api/json/v1/1/random.php`);
xhr.send();*/