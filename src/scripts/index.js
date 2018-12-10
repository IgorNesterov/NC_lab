$(document).ready(function() {
    var leftUIEl = $(".carousel-arrow-left");
    var rightUIEl = $(".carousel-arrow-right");
    var elementsList = $(".carousel-list");

    var pixelsOffset = 225;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var elementsCountR=elementsCount-4;
    var elementsCountL=0;
    var minimumOffset = - ((elementsCount - 4) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
        if (currentLeftValue != maximumOffset) {
            if(elementsCountL<4){
            currentLeftValue += pixelsOffset*elementsCountL;
            elementsCountR+=elementsCountL;
            elementsCountL=0;
            }
            else{
            currentLeftValue += 900;
            elementsCountL-=4;
            elementsCountR+=4;
            }
            elementsList.animate({ marginLeft : currentLeftValue + "px"}, 700);
        }
    });

    rightUIEl.click(function() {
        if (currentLeftValue > minimumOffset){
            if(elementsCountR<4){
            currentLeftValue -= pixelsOffset*elementsCountR;
            elementsCountL+=elementsCountR;
            elementsCountR=0;
            }
            else{
            currentLeftValue -= 900;
            elementsCountR-=4;
            elementsCountL+=4;
            }
            elementsList.animate({ marginLeft : currentLeftValue + "px"}, 700);
        }
    });
});
$(function(){
  $('.list-toggle').click(function(){
    $('.u-list').toggleClass('open');
  });
});