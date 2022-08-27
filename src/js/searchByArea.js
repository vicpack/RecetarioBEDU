const xhrarea = new XMLHttpRequest();
const HTMLall=document.getElementById("searchByArea")
function areaAll() {
        if(this.readyState === 4 && this.status === 200){
        const data=Object.entries(JSON.parse(this.response))
        
        let allAreas= data[0][1].map(function(element){ //Here I´m moving all the areas from thier object to an array
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


HTMLall.addEventListener('change',(e)=>{
   var area= e.target.value
   console.log(area)
})



