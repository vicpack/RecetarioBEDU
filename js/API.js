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
    const keys = Object.keys(meals);
    const pairs = [];

    for(let i = 0; i < keys.length;i++){
        pairs.push([keys[i],meals[keys[i]]]);
    }

    console.log("EStos son los pairs : ",pairs);

    const template = entries.map(meal => `<li>${meal.strMeal}🍔${meal.strMealThumb}</li>`);
    HTMLResponse.innerHTML = `<ul>${template}</ul>`;
});

