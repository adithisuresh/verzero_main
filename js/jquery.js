$(document).ready(function(){
    
    
    var flag= 0;
    $('.ul_2 .lifestyle').css('background-color', 'green');
    $('.ul_2 li').click(function(){
        $(this).css('background-color', 'green');
        $(this).siblings().css('background-color','#2c3e50');
    });
    $('.lifestyle').click(function(){
                            flag = 0;
                            $('.photos_lifestyle').css('display', 'block');
                            $('.photo').animate({height:'200px', width:'240px'} );
                            $('.photo').siblings().css('display', 'block');
                            $('.photos_lifestyle').siblings().css('display', 'none');
                            });

    $('.seaside_bunglows').click(function(){
                            flag = 0;
                            $('.photos_seaside_bunglows').css('display' , 'block');
                            $('.photo').animate({height: '200px', width: '240px'});
                            $('.photo').siblings().css('display', 'block');
                            $('.photos_seaside_bunglows').siblings().css('display', 'none');
                            });
     $('.vintage_house').click(function(){
                            flag = 0;
                            $('.photos_vintage_house').css('display', 'block');
                            $('.photo').animate({height:'200px', width:'240px'} );
                            $('.photo').siblings().css('display', 'block');
                            $('.photos_vintage_house').siblings().css('display', 'none');
                            });
    $('.villa').click(function(){
                            flag = 0;
                            $('.photos_villa').css('display', 'block');
                            $('.photo').animate({height:'200px', width:'240px'} );
                            $('.photo').siblings().css('display', 'block');
                            $('.photos_villa').siblings().css('display', 'none');
                            });
     $('.apartment').click(function(){
                             flag = 0;
                            $('.photos_apartment').css('display', 'block');
                            $('.photo').animate({height:'200px', width:'240px'} );
                            $('.photo').siblings().css('display', 'block');
                            $('.photos_apartment').siblings().css('display', 'none');
                            });
$(".photo").click(function(){
    flag++;
    if (flag % 2 == 1){
        $(this).animate({
            height: '100%' , 
            width: '100%'
        } , 1000);
        $(this).siblings().css('diaplay', 'none');
        $('.price').parent().css('display', 'block');
        $('.price').html($(this).attr('value'));
        $('.price').fadeIn(2000);
    
    }else{
        $('.price').fadeOut(100);
        $(this).animate({
            height:'200px',
            width:'240px'
        } ,500 ,function(){
            $(this).siblings().css('display', 'block');
        });
    }
    
});

});