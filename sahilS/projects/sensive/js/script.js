$(document).ready(function(){
    $('#client-list').owlCarousel({
        loop : true,
        autoplay : true,
        dots : false,
        responsive : {
            0 : {
              items: 1
            },

            768 : {
              items : 2
            },
      
            992 : {
              items : 3
            },
        }
    })
})


AOS.init();

