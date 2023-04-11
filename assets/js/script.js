$(document).ready(function(){
let firstImg   = $('#img');
let imgSection = $('#img-section');
let textSection = $('#text-section');
// second img
let secondImg   = $('#img2');
let imgSection2 = $('#img-section2');
let textSection2 = $('#text-section2');
// third img
let thirdImg   = $('#img3');
let imgSection3 = $('#img-section3');
let textSection3 = $('#text-section3');
// fourth img
let fourthImg     = $('#img4');
let imgSection4   = $('#img-section4');
let textSection4  = $('#text-section4');
// fifth img
let fifthImg     = $('#img5');
let imgSection5   = $('#img-section5');
let textSection5  = $('#text-section5');
// sixth img
let sixthImg     = $('#img6');
let imgSection6   = $('#img-section6');
let textSection6  = $('#text-section6');
// seventh img
let seventhImg     = $('#img7');
let imgSection7   = $('#img-section7');
let textSection7  = $('#text-section7');
// eighth img
let eighth     = $('#img8');
let imgSection8   = $('#img-section8');
let textSection8  = $('#text-section8');
// functions


$(firstImg).on('mouseover' ,function(){
    imgSection.addClass('img-section2');
    textSection.addClass('text-section2');
})
$(firstImg).on('mouseleave' ,function(){
    imgSection.removeClass('img-section2');
    textSection.removeClass('text-section2');

})
// 2nd card

$(secondImg).on('mouseover' ,function(){
    imgSection2.addClass('img-section2');
    textSection2.addClass('text-section2');
})
$(secondImg).on('mouseleave' ,function(){
    imgSection2.removeClass('img-section2');
    textSection2.removeClass('text-section2');

});
// 3rd card
$(thirdImg).on('mouseover' ,function(){
    imgSection3.addClass('img-section2');
    textSection3.addClass('text-section2');
})
$(thirdImg).on('mouseleave' ,function(){
    imgSection3.removeClass('img-section2');
    textSection3.removeClass('text-section2');

});
// 4th
$(fourthImg).on('mouseover' ,function(){
    imgSection4.addClass('img-section2');
    textSection4.addClass('text-section2');
})
$(fourthImg).on('mouseleave' ,function(){
    imgSection4.removeClass('img-section2');
    textSection4.removeClass('text-section2');

});
// 5th
$(fifthImg).on('mouseover' ,function(){
    imgSection5.addClass('img-section2');
    textSection5.addClass('text-section2');
})
$(fifthImg).on('mouseleave' ,function(){
    imgSection5.removeClass('img-section2');
    textSection5.removeClass('text-section2');

});
// 6th
$(sixthImg).on('mouseover' ,function(){
    imgSection6.addClass('img-section2');
    textSection6.addClass('text-section2');
})
$(sixthImg).on('mouseleave' ,function(){
    imgSection6.removeClass('img-section2');
    textSection6.removeClass('text-section2');

});
// 7th
$(seventhImg).on('mouseover' ,function(){
    imgSection7.addClass('img-section2');
    textSection7.addClass('text-section2');
})
$(seventhImg).on('mouseleave' ,function(){
    imgSection7.removeClass('img-section2');
    textSection7.removeClass('text-section2');

});
// 8th
$(eighth).on('mouseover' ,function(){
    imgSection8.addClass('img-section2');
    textSection8.addClass('text-section2');
})
$(eighth).on('mouseleave' ,function(){
    imgSection8.removeClass('img-section2');
    textSection8.removeClass('text-section2');

});

});