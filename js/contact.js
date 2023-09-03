let navContactUs=document.querySelector('#navContact')
navContactUs.addEventListener('click', function(){
   let Contact=document.querySelector('#Contact')
   Contact.classList.replace('d-none', 'd-block')
   
})


let Contact=document.querySelector('#Contact')
let header=document.querySelector('#header')
navContactUs.addEventListener('click', function(){
   Contact.classList.replace('d-none', 'd-block')
header.classList.add('d-none')
})