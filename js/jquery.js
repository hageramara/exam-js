
/*$(document).ready(function(){
    $(".spinner").fadeOut(500, function(){
        $("#loadind").fadeOut(1000);
        $("#loadind").remove(1000)

    })
})
*/

let sideBarinnerWidth=$(".sideBar-inner").innerWidth();
$("#sideBar").animate({left:-sideBarinnerWidth}, 1000);


$("#close").click(function () { 
    let sideBarinnerWidth=$(".sideBar-inner").innerWidth();
    if($("#sideBar").css('left')=="0px"){
        $("#sideBar").animate({left:-sideBarinnerWidth}, 1000);
        $(".links").slideUp(1000);
       // $("#bar").css('display', 'block')
       // $("#close").css('display', 'none')
      //  $(".links").hide(1000);

    }
    else{
        $("#sideBar").animate({left:'0px'}, 1000);
        //$("#bar").css('display','none')
       // $("#close").css('display', 'block')
        $(".links").slideDown(1500);
    }
});






   
 

