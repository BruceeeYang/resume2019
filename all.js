$(document).ready(function () {
    
    
    $(".navbar-toggle").click(function(){

        $(".mobile-nav-bar-hide").slideToggle("slow");
    
    });



    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.aboutme-right-intro').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            // if( bottom_of_window > bottom_of_object ){
                
            //     $(this).animate({'opacity':'1'},500);
                    
            // }

            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
            
        }); 
    
    });




    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('#timeline').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            // if( bottom_of_window > bottom_of_object ){
                
            //     $(this).animate({'opacity':'1'},500);
                    
            // }

            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
            
        }); 
    
    });


});

