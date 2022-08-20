const API_URL = 'https://www.themealdb.com';

const xhr = new XMLHttpRequest();
let data;

// function onRequestHandler() {
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
console.log("nueva linea de texto, data antes de buscar: ", data);

const printResults = document.getElementById("printResults");
function print(){
    console.log("function print is running");
    console.log("data is: ", data);

        // Creé las variables dataHead y dataMeals para acceder a elementos del array
        const dataHead = data[0][0]; 
        const dataMeals = data[0][1];
        console.log(dataHead); // logs "meals" 
        console.log(dataMeals); // logs an array with 25 meal objects

        //Imprimir el nombre del primer platillo al HTML
        const HTMLResponse = document.querySelector("#app");
        // HTMLResponse.innerHTML = `<ul></ul>`;
        // const template = data.map((meals) => `<li>${meals.strMeal}</li>`);
        // HTMLResponse.firstChild.innerHTML = `<li>${dataMeals[0].strMeal}</li>`;
        
        // Cree la function createNode
        function createNode(type, child){
            const node = document.createElement(type);
            if (typeof child === "string"){
             const text = document.createTextNode(child);
             node.appendChild(text);
            } else {
             node.appendChild(child);
            }
            return node;
        }

        //Imprimir un card a partir de cada elemento del array
        for (const meal of dataMeals) {
            const col = document.createElement("div");
            col.className="col";

            // Add <div class="card shadow-sm">
            const  card = document.createElement("div");
            card.className =  "card shadow-sm";
            col.appendChild(card);

            //Add <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            const img = document.createElement("img");
            img.className = "bd-placeholder-img card-img-top";
            // img.height = "225";
            img.role="img";
            img.src=""+meal.strMealThumb;
            card.appendChild(img);

            console.log(col)
            HTMLResponse.appendChild(col);
          }
  
    }
printResults.addEventListener("click", print);