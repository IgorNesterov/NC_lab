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
  $('.list-toggle1').click(function(){
    $('.u-list').toggleClass('open');
    $('.reviews-button1').style.display: none;
    $('.reviews-button2').style.display: show;
  });
});

$(function(){
  $('.list-toggle2').click(function(){
    $('.u-list').toggleClass('close');
    $('.reviews-button2').style.display: none;
    $('.reviews-button1').style.display: show;
  });
});

$(document).ready(function() {
    var leftUIEl = $(".popup-carousel-arrow-left");
    var rightUIEl = $(".popup-carousel-arrow-right");
    var elementsList = $(".popup-carousel-list");

    var pixelsOffset = 225;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var elementsCountR=elementsCount-1;
    var elementsCountL=0;
    var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
        //if (currentLeftValue != maximumOffset) {

            if(elementsCountL<1){
         /*   currentLeftValue += pixelsOffset*elementsCountL;
            elementsCountR+=elementsCountL;
            elementsCountL=0;
         */
          //  /*
            currentLeftValue = - ((elementsCount - 1) * pixelsOffset);
            elementsCountR = 0;
            elementsCountL = elementsCount-1;
          //  */
            }
            else{
            currentLeftValue += 225;
            elementsCountL-=1;
            elementsCountR+=1;
            }
            elementsList.animate({ marginLeft : currentLeftValue + "px"}, 250);
        //}
    });
    rightUIEl.click(function() {
        if (currentLeftValue >= minimumOffset){
            if(elementsCountR<1){
            currentLeftValue = 0;
            elementsCountR=elementsCount-1;
            elementsCountL=0;
            minimumOffset = - ((elementsCount - 1) * pixelsOffset);
            }
            else{
            currentLeftValue -= 225;
            elementsCountR-=1;
            elementsCountL+=1;
            }
            elementsList.animate({ marginLeft : currentLeftValue + "px"}, 250);
         }
    });
});

/*
$('.gallery-line-image').click(openModal);
function openModal(element){
var popup = element.target;


}*/