$(document).ready(function () {
    
    var w = window.innerWidth;
    console.log(w);
    if (w>760) {
        $('#home').css('height',w*0.5);
    } else if (w>480 && w<760) {
        $('#home').css('height',w*0.12);
    } else {
        $('#home').css('height',w*1.8);
    }

// ---------------------------------------------

    var s = window.innerHeight;
    var w = window.innerWidth;
    if (w>760) {
        $('.scroll-down').css('bottom', s*0.24);
    } else if (w>480 && w<760) {
        $('.scroll-down').css('bottom',s*0.12);
    } else {
        $('.mobile-scroll-dowm').css('bottom',s*0.2);
    }

// ----------------------------------------------


    $(".navbar-toggle").click(function(){

        $(".mobile-nav-bar-hide").slideToggle("slow");
    
    });

// -----------------------------------------------

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.aboutme-right-intro').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
            
        }); 
    
    });

// -------------------------------------------------

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

// -----------------------------------------------------
    $(window).scroll( function(){
    
        $('.barra-nivel').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var valorLargura = $(this).data('nivel');
            var valorNivel = $(this).html("<span class='valor-nivel'>"+valorLargura+"</span>");

            if( bottom_of_window >= bottom_of_object ){   
                $(this).animate({
                    'width: valorLargura'
                :'1'},300); 
                // return;
            }else{
                $(this).css('width',valorLargura);
            }
        }); 
    
    });
    


});

