(()=>{var n=document.getElementById("meal");document.addEventListener("DOMContentLoaded",(function(){fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((function(n){return n.json()})).then((function(t){console.log("res"),function(t){for(var s=[],r=1;r<=20&&t["strIngredient".concat(r)];r++)s.push("".concat(t["strIngredient".concat(r)]," - ").concat(t["strMeasure".concat(r)]));console.log(s),n.innerHTML='\n  <div class="card-body" id="contenedor">\n  <div class="row g-3">\n      <div class="col-12 col-md-6 col-lg-4">\n          <div class="border-0 shadow cursor" style="width: 18rem; border-radius: 10px">\n              <img class="card-img-top" style="width: 18rem; border-radius: 10px 10px 0 0" src="'.concat(t.strMealThumb,'" alt="Meal Img" />\n              <div class="card-body">\n                  <p class="card-text"><strong>Category: </strong>').concat(t.strCategory,'</p>\n                  <p class="card-text"><strong>Area: </strong>').concat(t.strArea,'</p>\n\n                  <p class="card-text"><strong>Tags: </strong>').concat("string"==typeof t.strTags?t.strTags.split(",").join(", "):"unknown tag",'</p>\n\n              </div>\n              <br>\n              <div class="card-body">\n                  <h5 class="card-title">Ingredients</h5>\n                  <ul class="list-group list-group-flush">\n                      ').concat(s.map((function(n){return'<li class="list-group-item">'.concat(n,"</li>")})).join(""),'\n                  </ul>\n              </div>\n          </div>\n      </div>\n      <div class="col-12 col-md-6 col-lg-4">\n          <div class="col-md-8">\n              <div class="card border-0 shadow cursor" style="width: 55rem; border-radius: 10px">\n                  <h4 class="card-title text-center">').concat(t.strMeal,"</h4>\n                  <br>\n                  <p>").concat(t.strInstructions,'</p>\n              </div>\n              <br>\n              <div class="card border-0 shadow cursor" style="width: 55rem; border-radius: 10px">\n                  <br>\n                  <h4 class="card-title text-center">Meal video</h4>\n                  <div class="videoWrapper" style="width: 55rem; border-radius: 10px">\n                      <iframe src="https://www.youtube.com/embed/').concat(t.strYoutube.slice(-11),'" />\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n    '),console.log(t.strMealThumb)}(t.meals[0])}))}))})();