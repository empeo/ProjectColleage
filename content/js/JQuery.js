// #region services page

$(document).ready(function () {
  $("cards_services .cards p").hide();
  $(".cards_services h2").click(function(){
    $(".cards_services h2").css({
      "color":"red",
      "text-shadow":"0 0 10px rgb(25, 240, 240)",
      "font-weight":"bold",
      "background-color":"black",
      "transition-duration":"2s"
    })
  })
  $(".car_sailing").click(function () {
    $(".car_sailing p").toggle(2000);
    $(".car_sailing .btn").css({
      "color":"red",
      "text-shadow":"0 0 10px rgb(25, 240, 240)",
      "font-weight":"bold",
      "background-color":"black",
      "transition-duration":"2s"

    });
  });
  $(".parts_repaire").click(function () {
    $(".parts_repaire p").toggle(2000);
    $(".parts_repaire .btn").css({
      "color":"red",
      "text-shadow":"0 0 10px rgb(25, 240, 240)",
      "font-weight":"bold",
      "background-color":"black",
      "transition-duration":"2s"

    });
  });
  $(".car-insurance").click(function () {
    $(".car-insurance p").toggle(2000);
    $(".car-insurance .btn").css({
      "color":"red",
      "text-shadow":"0 0 10px rgb(25, 240, 240)",
      "font-weight":"bold",
      "background-color":"black",
      "transition-duration":"2s"

    });
  });
  $(".battary_replacement").click(function () {
    $(".battary_replacement p").toggle(2000);
    $(".battary_replacement .btn").css({
      "color":"red",
      "text-shadow":"0 0 10px rgb(25, 240, 240)",
      "font-weight":"bold",
      "background-color":"black",
      "transition-duration":"2s"


    });
  });
  $(".oil-change").click(function () {
    $(".oil-change p").toggle(2000);
    $(".oil-change .btn").css({
      "color":"red",
      "text-shadow":"0 0 10px rgb(25, 240, 240)",
      "font-weight":"bold",
      "background-color":"black",
      "transition-duration":"2s"

    });
  });
  $(".support").click(function () {
    $(".support p").toggle(2000);
    $(".support .btn").css({
      "color":"red",
      "text-shadow":"0 0 10px rgb(25, 240, 240)",
      "font-weight":"bold",
      "background-color":"black",
      "transition-duration":"2s"

    });
  });
});
// #endregion

// #region home page 
$(document).ready(function(){
  $(".vehicles .head").click(function(){
    $(".vehicles .head").css({
      "color":"red",
      "text-shadow":"0 0 10px rgb(25, 240, 240)",
      "font-weight":"bold",
      "background-color":"black",
      "transition-duration":"2s"
     })
  
  
    
  
  })
  $(".vehicles .head").dblclick(function(){

    $(".vehicles .head").css({
      "color":"black",
      "text-shadow":"0 0 10px rgb(25, 240, 240)",
      "font-weight":"bold",
      "background-color":"white",
      "transition-duration":"2s"
      
    })
  
  
    
  
  })
  
  
  $("#jq-review").click(function(){
  
    
      $("#jq-review").css({
        
      "color":"red",
      "text-shadow":"0 0 10px rgb(25, 240, 240)",
      "font-weight":"bold",
      "background-color":"black",
      "transition-duration":"2s"
      })

      
    
  
  })
  $("#jq-review").dblclick(function(){
  
    
    $("#jq-review").css({
      
    "color":"black",
    "text-shadow":"0 0 10px rgb(25, 240, 240)",
    "font-weight":"bold",
    "background-color":"white",
    "transition-duration":"2s"
    })
  
  })
  $("#jq-message").click(function(){
  
    
      $("#jq-message").css({
        
      "color":"red",
      "text-shadow":"0 0 10px rgb(25, 240, 240)",
      "font-weight":"bold",
      "background-color":"black",
      "transition-duration":"2s"
      })

      
    
  
  })
  $("#jq-message").dblclick(function(){
  
    
    $("#jq-message").css({
      
    "color":"black",
    "text-shadow":"0 0 10px rgb(25, 240, 240)",
    "font-weight":"bold",
    "background-color":"white",
    "transition-duration":"2s"
    })
  
  })
})


// #endregion

// #region car

$(document).ready(function(){
  $(".cars__section .card-title").hide();
  $(".cars__section img").click(function(){
    $(".cars__section .card-title").fadeToggle(3000);
  })
  $(".cars__section .card .remove").click(function(){
      $(this).parents(".card").fadeOut(3000);
  })
  $(".cars__section .card .add").click(function(){
      $(this).parents(".card").css({
        "border-color":"green",
        "transition-duration":"2s",
        "background-color":"green"
      });
  })

  $(".cars__section .cars__title").click(function(){

    $(".cars__section .cars__title").css({
      "color":"red",
      "text-shadow":"0 0 10px rgb(25, 240, 240)",
      "font-weight":"bold",
      "background-color":"black",
      "transition-duration":"2s"
      
    })
  
  
    
  
  })
  $(".cars__section .cars__title").dblclick(function(){

    $(".cars__section .cars__title").css({
      "color":"black",
      "text-shadow":"0 0 10px rgb(25, 240, 240)",
      "font-weight":"bold",
      "background-color":"white",
      "transition-duration":"2s"
      
    })
})

})
// #endregion