import "/src/css/generator.css";
import "/src/css/styles.css";

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
  console.log(ingredients);

  mealContainer.innerHTML = `
  <div class="card-body" id="contenedor">
  <div class="row g-3">
      <div class="col-12 col-md-6 col-lg-4">
          <div class="border-0 shadow cursor" style="width: 18rem; border-radius: 10px">
              <img class="card-img-top" style="width: 18rem; border-radius: 10px 10px 0 0" src="${
                meal.strMealThumb
              }" alt="Meal Img" />
              <div class="card-body">
                  <p class="card-text"><strong>Category: </strong>${
                    meal.strCategory
                  }</p>
                  <p class="card-text"><strong>Area: </strong>${
                    meal.strArea
                  }</p>

                  <p class="card-text"><strong>Tags: </strong>${
                    typeof meal.strTags === "string"
                      ? meal.strTags.split(",").join(", ")
                      : "unknown tag"
                  }</p>

              </div>
              <br>
              <div class="card-body">
                  <h5 class="card-title">Ingredients</h5>
                  <ul class="list-group list-group-flush">
                      ${ingredients
                        .map(
                          (ingredient) =>
                            `<li class="list-group-item">${ingredient}</li>`
                        )
                        .join("")}
                  </ul>
              </div>
          </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
          <div class="col-md-8">
              <div class="card border-0 shadow cursor" style="width: 55rem; border-radius: 10px">
                  <h4 class="card-title text-center">${meal.strMeal}</h4>
                  <br>
                  <p>${meal.strInstructions}</p>
              </div>
              <br>
              <div class="card border-0 shadow cursor" style="width: 55rem; border-radius: 10px">
                  <br>
                  <h4 class="card-title text-center">Meal video</h4>
                  <div class="videoWrapper" style="width: 55rem; border-radius: 10px">
                      <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(
                        -11
                      )}" />
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
    `;
  console.log(meal.strMealThumb);
}
