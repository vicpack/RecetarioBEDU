"use strict";

//Obtenemos los elementos del id meal
var mealContainer = document.getElementById("meal"); //Funcion que obtiene las recetas aleatoreas cuando se carge el DOM

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(function (res) {
    return res.json();
  }).then(function (res) {
    /*lo colocamos en la posición 0 por que la API
          viene solo con un objeto */
    console.log("res");
    createMeal(res.meals[0]);
  });
});

function createMeal(meal) {
  var ingredients = [];
  /* Recorreremos todo el arreglo puesto que no todas las recetas tienen 20 ingredientes
    algunas mas otras menos. En este caso si tienen las agregamos al arreglo
    sino salimos del for */

  for (var i = 1; i <= 20; i++) {
    if (meal["strIngredient".concat(i)]) {
      ingredients.push("".concat(meal["strIngredient".concat(i)], " - ").concat(meal["strMeasure".concat(i)]));
    } else {
      break;
    }
  }

  mealContainer.innerHTML = "\n    <div class=\"row g-4 mt-2\">\n      <div class=\"col-12 col-md-6 col-lg-5\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"".concat(meal.strMealThumb, "\" alt=\"Meal Img\" />\n          <div class=\"card-body\">\n            <div class=\"d-flex justify-content-between\">\n              <p class=\"card-text catArea\">Category: <span>").concat(meal.strCategory, "</span></p>\n              <p class=\"card-text catArea\">Area: <span>").concat(meal.strArea, "</span></p>\n            </div>\n            <p class=\"card-text tags\">Tags:\n              ").concat(typeof meal.strTags === "string" ? meal.strTags.split(",").map(function (data) {
    return "<span>".concat(data, "</span>");
  }).join("") : "<span class=d-none>unknown tag</none>", "\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-6 col-lg-7\">\n        <h1>").concat(meal.strMeal, "</h1>\n\n        <div class=\"card mb-4\">\n          <div class=\"card-header\">\n          <h5 class=\"card-title text-center m-0\">Ingredients</h5>\n          </div>\n          <div class=\"card-body\">\n            <ul class=\"m-0\">\n              ").concat(ingredients.map(function (ingredient) {
    return "<li>".concat(ingredient, "</li>");
  }).join(""), "\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"card mb-4\">\n          <div class=\"card-header\">\n            <h5 class=\"card-title text-center m-0\">Instructions</h5>\n          </div>\n          <div id=\"instructions\" class=\"card-body\">\n            ").concat(meal.strInstructions.split('.').map(function (data) {
    return "<p>".concat(data, ".</p>");
  }).join(""), "\n          </div>\n        </div>\n        <div class=\"card mb-4\">\n          <div class=\"card-header\">\n            <h5 class=\"card-title text-center m-0\">Meal video</h5>\n          </div>\n          <div class=\"videoWrapper\">\n            <iframe src=\"https://www.youtube.com/embed/").concat(meal.strYoutube.slice(-11), "\" />\n          </div>\n        </div>\n      </div>\n    </div>\n    ");
}