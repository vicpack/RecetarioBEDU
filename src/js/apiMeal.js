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
            <div class="card-body">
                <img class="card-img-top" style="width: 18rem; border-radius: 10px 10px 0 0" src="${
                  meal.strMealThumb
                }" alt="Meal Img" />
                <p><strong>Category:</strong>${meal.strCategory}</p>
                <p><strong>Area:</strong>${meal.strArea}</p>
                <p><strong>Tags:</strong>${meal.strTags
                  .split(",")
                  .join(", ")}</p>
                <h5 class="card-title text-center">Ingredientes</h5>
                <ul>
                    ${ingredients
                      .map((ingredient) => `<li>${ingredient}</li>`)
                      .join("")}
                </ul>
                </div>
            <div class="card-body">
                <h4>${meal.strMeal}</h4>
                <p>${meal.strInstructions}</p>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title text-center">Video de receta</h5>
                <div class="videoWrapper">
                    <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(
                      -11
                    )}" />
                </div>
        </div>
    `;
  console.log(meal.strMealThumb);
}
