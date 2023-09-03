/*$("#nav-Search").click(function () {
    $("#header").css("display", "none");
    $("#home-inner").css("display", "none");
    $("#Categories").css("display", "none");
  });*/


let navSearch= document.querySelector("#navSearch")
let searchInput=document.querySelector("#searchByName")
let searchLetterInput= document.querySelector("#SearchByFristletter")
 let searchRow=document.querySelector('#searchRow');
 let Search =document.querySelector('#Search')

 async function searchData(NameSearch){
        let res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${NameSearch}`)
        let data= await res.json()
         console.log(data);
         displayName(data)     
 }
 
function displayName(dataName){
    let searchConatiner=''
let searchName= dataName.meals;
for(search of searchName){
   console.log(search);
  searchConatiner+=` <div class="col-md-3">
  <div class="meal-images position-relative rounded-2 overflow-hidden mt-5 ">
      <img src="${search.strMealThumb}" alt="" class="w-100 image-item">
  <div class="layer d-flex  align-items-center py-2">
      <h3 class="text-black ps-2">${search.strMeal}</h3>
  </div>
</div>
</div>`
}
console.log(searchConatiner);
  searchRow.innerHTML=searchConatiner
}
searchInput.addEventListener('keyup', function(){
   // console.log(searchInput.value);
   if(searchInput == ""){
    header.classList.replace('d-none', 'd-block')
    addApi()
   }
   else{
    searchData(searchInput.value)
    header.classList.replace('d-block', 'd-none')
   }
})

navSearch.addEventListener('click', function(){
   searchData(searchInput.value)
   Search.classList.replace('d-none', 'd-block')
})

  /*first letter*/
async function getData(searchLetter){
        let res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`)
        let data= await res.json()
         console.log(data);
         displayLetter(data)
    }


function displayLetter(dataletter){
    let letterbox=''
    let letters= dataletter.meals;
    for(let letter of letters){
       // console.log(letter);
       letterbox+=` <div class="col-md-3">
       <div class="meal-images position-relative rounded-2 overflow-hidden mt-5 ">
           <img src="${letter.strMealThumb}" alt="" class="w-100 image-item">
       <div class="layer d-flex  align-items-center py-2">
           <h3 class="text-black ps-2">${letterbox.strMeal}</h3>
       </div>
     </div>
     </div>`
    }
    console.log(letterbox);
    searchRow.innerHTML=letterbox;
}

searchLetterInput.addEventListener('keydown',function(){
   // getData(searchLetterInput.value)
   if(searchLetterInput == ""){
    header.classList.replace('d-none', 'd-block')
   
    addApi()
   }
   else{
    getData(searchInput.value)
    header.classList.replace('d-block', 'd-none')
    //searchLetterInput.value = ""
   }
})
   
