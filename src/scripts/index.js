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
    $('.reviews-list-item-li4').toggleClass('more');
    $('.list-toggle1').hide();
    $('.list-toggle2').show();
  });
});

$(function(){
  $('.list-toggle2').click(function(){
    $('.u-list').toggleClass('open',false);
    $('.reviews-list-item-li4').toggleClass('more',false);
    $('.list-toggle2').hide();
    $('.list-toggle1').show();
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

function OffScroll () {
var winScrollTop = $(window).scrollTop();
$(window).bind('scroll',function () {
  $(window).scrollTop(winScrollTop);
});}

$('.gallery-line-image').click(openModal);
function openModal(element){
var image = $(element.currentTarget);
var secondClass = image.className.split(' ')[1];
switch (secondClass) {
  case o1 :
    $('.popup-carousel-element-image1').toggleClass('image_g1_1');
    $('.popup-carousel-element-image2').toggleClass('image_g1_2');
    $('.popup-carousel-element-image3').toggleClass('image_g1_3');
    break;
  case o2 :
    $('.popup-carousel-element-image1').toggleClass('image_g2_1');
    $('.popup-carousel-element-image2').toggleClass('image_g2_2');
    $('.popup-carousel-element-image3').toggleClass('image_g2_3');
    break;
  case o3 :
    $('.popup-carousel-element-image1').toggleClass('image_g3_1');
    $('.popup-carousel-element-image2').toggleClass('image_g3_2');
    $('.popup-carousel-element-image3').toggleClass('image_g3_3');
    break;
  case o4 :
    $('.popup-carousel-element-image1').toggleClass('image_g4_1');
    $('.popup-carousel-element-image2').toggleClass('image_g4_2');
    $('.popup-carousel-element-image3').toggleClass('image_g4_3');
    break;
  case o5 :
    $('.popup-carousel-element-image1').toggleClass('image_g5_1');
    $('.popup-carousel-element-image2').toggleClass('image_g5_2');
    $('.popup-carousel-element-image3').toggleClass('image_g5_3');
    break;
  case o6 :
    $('.popup-carousel-element-image1').toggleClass('image_g6_1');
    $('.popup-carousel-element-image2').toggleClass('image_g6_2');
    $('.popup-carousel-element-image3').toggleClass('image_g6_3');
    break;
  case o7 :
    $('.popup-carousel-element-image1').toggleClass('image_g7_1');
    $('.popup-carousel-element-image2').toggleClass('image_g7_2');
    $('.popup-carousel-element-image3').toggleClass('image_g7_3');
    break;
  case o8 :
    $('.popup-carousel-element-image1').toggleClass('image_g8_1');
    $('.popup-carousel-element-image2').toggleClass('image_g8_2');
    $('.popup-carousel-element-image3').toggleClass('image_g8_3');
    break;
  default :
    $('.popup-carousel-element-image1').toggleClass('image_g1_1');
    $('.popup-carousel-element-image2').toggleClass('image_g1_2');
    $('.popup-carousel-element-image3').toggleClass('image_g1_3');
}
$(".modal").style.display='block';
OffScroll ();
};

$('.closes').click(function()
{
   $(this).parent().parent().hide();
   $(window).unbind('scroll');
});
