//Obtenemos los elementos del id meal
const mealContainer = document.getElementById("meal");

//Funcion que obtiene las recetas aleatoreas cuando se carge el DOM
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      /*lo colocamos en la posición 0 por que la API
            viene solo con un objeto */
      console.log("res");
      createMeal(res.meals[0]);
    });
});

function createMeal(meal) {
  const ingredients = [];
  /* Recorreremos todo el arreglo puesto que no todas las recetas tienen 20 ingredientes
    algunas mas otras menos. En este caso si tienen las agregamos al arreglo
    sino salimos del for */
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  mealContainer.innerHTML = `
    <div class="row g-4 mt-2">
      <div class="col-12 col-md-6 col-lg-5">
        <div class="card">
          <img class="card-img-top" src="${meal.strMealThumb}" alt="Meal Img" />
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="card-text catArea">Category: <span>${meal.strCategory}</span></p>
              <p class="card-text catArea">Area: <span>${meal.strArea}</span></p>
            </div>
            <p class="card-text tags">Tags:
              ${
                typeof meal.strTags === "string"
                ? meal.strTags.split(",").map(
                  (data) =>`<span>${data}</span>`
                ).join("")
                : "<span class=d-none>unknown tag</none>"
              }
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-7">
        <h1>${meal.strMeal}</h1>

        <div class="card mb-4">
          <div class="card-header">
          <h5 class="card-title text-center m-0">Ingredients</h5>
          </div>
          <div class="card-body">
            <ul class="m-0">
              ${ingredients
                .map(
                  (ingredient) =>`<li>${ingredient}</li>`
                  )
                .join("")
              }
            </ul>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header">
            <h5 class="card-title text-center m-0">Instructions</h5>
          </div>
          <div id="instructions" class="card-body">
            ${meal.strInstructions
              .split('.')
              .map(
                (data) =>`<p>${data}.</p>`
              )
              .join("")
            }
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-header">
            <h5 class="card-title text-center m-0">Meal video</h5>
          </div>
          <div class="videoWrapper">
            <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}" />
          </div>
        </div>
      </div>
    </div>
    `;

}
