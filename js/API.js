//import '../css/style.css';
//import image from '../assets/capterra.png';

//const imageLogo = document.getElementById('capterra');
//imageLogo.src = image.src;

const API_URL = 'https://www.themealdb.com';

const HTMLResponse = document.querySelector('#app');
const arrayMeals = [];

fetch(`${API_URL}/api/json/v1/1/filter.php?c=Seafood`)
.then((response) => response.json())
.then((meals)=>{
    //console.log(Array.isArray(meals));
    console.log(Object.values(meals));
    const entries = Object.entries(meals);
    console.log(entries);
    const template = entries.map(meal => `<li>${meal.strMeal}🍔${meal.strMealThumb}</li>`);
    HTMLResponse.innerHTML = `<ul>${template}</ul>`;
});

