const xhrarea = new XMLHttpRequest();
const HTMLall=document.getElementById("searchByArea")

function areaAll() {
        if(this.readyState === 4 && this.status === 200){
        const data=Object.entries(JSON.parse(this.response))
        
        let allAreas= data[0][1].map(function(element){ //Here I´m moving all the areas from their object to an array
            return `${element.strArea}`
        })
        for (const i of allAreas) { //Here I created a lop to insert each area into the option list
            const option=document.createElement('option')
            const valor = i
            option.value=valor
            option.text=valor
            HTMLall.appendChild(option)
            
        }

    } 
  
}

xhrarea.addEventListener('load',areaAll)
xhrarea.open("GET",`${API_URL}/api/json/v1/1/list.php?a=list`);
xhrarea.send();


const xhraread= new XMLHttpRequest();

// These elements are already declare so we are just going to call them to replace the data.
// const divCardsResult = document.getElementById("cardsResultados");   
// const divResult = document.getElementById("results");
// const titleResults = document.getElementById("titleResults");
// const totalResult = document.getElementById("totalResults");
// const divNoRresults = document.getElementById("noResults");
// const titleNoResults = document.getElementById("titleNoResults");



HTMLall.addEventListener('change',getdishesbyarea)

function getSelectedValue(){var selectedvalue=document.getElementById("searchByArea").value
return selectedvalue}

// Exponer data2 al scope global
let data2;

function dish() {
    if(this.readyState === 4 && this.status === 200){
    data2=Object.entries(JSON.parse(this.response))
    let allDishesByAreas= data2[0][1].map(function(element){ //Here I´m moving all the areas from their object to an array of objects
        return {'strMeal':`${element.strMeal}`,
                'strMealThumb':`${element.strMealThumb}`,
                'idMeal':`${element.idMeal}`}
    })
    console.log(allDishesByAreas)
    data = data2;
    document.getElementById('inputByName').value=''
    document.getElementById('searchBycategories').value='0'
    createCards();

  

} 

}

function getdishesbyarea(e){

    xhraread.addEventListener('load',dish)
    console.log(e.target.value)
    xhraread.open("GET",`${API_URL}/api/json/v1/1/filter.php?a=${e.target.value}`);
    xhraread.send();
   
}














