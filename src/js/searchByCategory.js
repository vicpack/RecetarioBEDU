const xhrcat = new XMLHttpRequest();
const HTMLallcat=document.getElementById("searchBycategories")

function areaAllcat() {
        if(this.readyState === 4 && this.status === 200){
        const data3=Object.entries(JSON.parse(this.response))
        
        let allCategories= data3[0][1].map(function(element){ //Here I´m moving all the areas from their object to an array
            return `${element.strCategory}`
        })
        for (const i of allCategories) { //Here I created a lop to insert each area into the option list
            const option=document.createElement('option')
            const valor = i
            option.value=valor
            option.text=valor
            HTMLallcat.appendChild(option)
            
        }

    } 
  
}

xhrcat.addEventListener('load',areaAllcat)
xhrcat.open("GET",`${API_URL}/api/json/v1/1/list.php?c=list`);
xhrcat.send();


const xhrcatd= new XMLHttpRequest();

// These elements are already declare so we are just going to call them to replace the data.
// const divCardsResult = document.getElementById("cardsResultados");   
// const divResult = document.getElementById("results");
// const titleResults = document.getElementById("titleResults");
// const totalResult = document.getElementById("totalResults");
// const divNoRresults = document.getElementById("noResults");
// const titleNoResults = document.getElementById("titleNoResults");



HTMLallcat.addEventListener('change',getdishesbycategory)

function dishcat() {
    if(this.readyState === 4 && this.status === 200){
    const data4=Object.entries(JSON.parse(this.response))
    let allDishesByCategory= data4[0][1].map(function(element){ //Here I´m moving all the areas from their object to an array of objects
        return {'strMeal':`${element.strMeal}`,
                'strMealThumb':`${element.strMealThumb}`,
                'idMeal':`${element.idMeal}`}
    })
    console.log(allDishesByCategory)


} 

}

function getdishesbycategory(e){
    xhrcatd.addEventListener('load',dishcat)
    console.log(e.target.value)
    xhrcatd.open("GET",`${API_URL}/api/json/v1/1/filter.php?c=${e.target.value}`);
    xhrcatd.send();
   
}