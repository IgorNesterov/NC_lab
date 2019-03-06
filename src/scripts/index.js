
$(document).ready(function() {

$(function(){

    var elementsList = $(".carousel-list");

    var pixelsOffset = 225;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var elementsCountR=elementsCount-4;
    var elementsCountL=0;
    var minimumOffset = - ((elementsCount - 4) * pixelsOffset);
    var maximumOffset = 0;

    $(".carousel__arrow-left").click(function() {
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
    $(".carousel__arrow-right").click(function() {
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
})
    function OffScroll () {
        var winScrollTop = $(window).scrollTop();
        $(window).bind('scroll',function () {
            $(window).scrollTop(winScrollTop);
        })
    }


    $('.list-toggle1').click(function(){
        $('.u-list').toggleClass('open');
        $('.reviews-list__item-li4').toggleClass('more');
        $('.list-toggle1').hide();
        $('.list-toggle2').show();
      });

    $('.list-toggle2').click(function(){
        $('.u-list').toggleClass('open',false);
        $('.reviews-list__item-li4').toggleClass('more',false);
        $('.list-toggle2').hide();
        $('.list-toggle1').show();
      });

        var leftUI = $(".popup-carousel__arrow-left");
        var rightUI = $(".popup-carousel__arrow-right");

        var _elementsList = $(".popup-carousel__list");

        var _pixelsOffset = 225;
        var _currentLeftValue = 0;
        var _elementsCount = _elementsList.find('li').length;
        var _elementsCountR=_elementsCount-1;
        var _elementsCountL=0;
        var _minimumOffset = - ((_elementsCount - 1) * _pixelsOffset);
        var _maximumOffset = 0;

        leftUI.click(function() {
                if(_elementsCountL<1){

                _currentLeftValue = - ((_elementsCount - 1) * _pixelsOffset);
                _elementsCountR = 0;
                _elementsCountL = _elementsCount-1;
                }
                else{
                _currentLeftValue += 225;
                _elementsCountL-=1;
                _elementsCountR+=1;
                }
                _elementsList.animate({ marginLeft : _currentLeftValue + "px"}, 250);

        });
        rightUI.click(function() {
            if (_currentLeftValue >= _minimumOffset){
                if(_elementsCountR<1){
                _currentLeftValue = 0;
                _elementsCountR=_elementsCount-1;
                _elementsCountL=0;
                _minimumOffset = - ((_elementsCount - 1) * _pixelsOffset);
                }
                else{
                _currentLeftValue -= 225;
                _elementsCountR-=1;
                _elementsCountL+=1;
                }
                _elementsList.animate({ marginLeft : _currentLeftValue + "px"}, 250);
             }
        });
});

$(function() {

    var secondClass;
    $('.gallery__image').click(openModal);

    $('.popup-content__closes').click(function() {
       $(this).parent().parent().hide();
       $(window).unbind('scroll');
       switch (secondClass) {
                    case 'o1' :
                      $('.popup-carousel__image1').toggleClass('image_g1_1',false);
                      $('.popup-carousel__image2').toggleClass('image_g1_2',false);
                      $('.popup-carousel__image3').toggleClass('image_g1_3',false);
                      $('.p1').hide();
                      break;
                    case 'o2' :
                      $('.popup-carousel__image1').toggleClass('image_g2_1',false);
                      $('.popup-carousel__image2').toggleClass('image_g2_2',false);
                      $('.popup-carousel__image3').toggleClass('image_g2_3',false);
                      $('.p2').hide();
                      break;
                    case 'o3' :
                      $('.popup-carousel__image1').toggleClass('image_g3_1',false);
                      $('.popup-carousel__image2').toggleClass('image_g3_2',false);
                      $('.popup-carousel__image3').toggleClass('image_g3_3',false);
                      $('.p3').hide();
                      break;
                    case 'o4' :
                      $('.popup-carousel__image1').toggleClass('image_g4_1',false);
                      $('.popup-carousel__image2').toggleClass('image_g4_2',false);
                      $('.popup-carousel__image3').toggleClass('image_g4_3',false);
                      $('.p4').hide();
                      break;
                    case 'o5' :
                      $('.popup-carousel__image1').toggleClass('image_g5_1',false);
                      $('.popup-carousel__image2').toggleClass('image_g5_2',false);
                      $('.popup-carousel__image3').toggleClass('image_g5_3',false);
                      $('.p5').hide();
                      break;
                    case 'o6' :
                      $('.popup-carousel__image1').toggleClass('image_g6_1',false);
                      $('.popup-carousel__image2').toggleClass('image_g6_2',false);
                      $('.popup-carousel__image3').toggleClass('image_g6_3',false);
                      $('.p6').hide();
                      break;
                    case 'o7' :
                      $('.popup-carousel__image1').toggleClass('image_g7_1',false);
                      $('.popup-carousel__image2').toggleClass('image_g7_2',false);
                      $('.popup-carousel__image3').toggleClass('image_g7_3',false);
                      $('.p7').hide();
                      break;
                    case 'o8' :
                      $('.popup-carousel__image1').toggleClass('image_g8_1',false);
                      $('.popup-carousel__image2').toggleClass('image_g8_2',false);
                      $('.popup-carousel__image3').toggleClass('image_g8_3',false);
                      $('.p8').hide();
                      break;
                    default :
                      $('.popup-carousel__image1').toggleClass('image_g1_1',false);
                      $('.popup-carousel__image2').toggleClass('image_g1_2',false);
                      $('.popup-carousel__image3').toggleClass('image_g1_3',false);
                      $('.p1').hide();
                  }
    });

    function openModal(element){

    var image = $(element.currentTarget);
    secondClass = image[0].className.split(' ')[1];

    switch (secondClass) {
      case 'o1' :
        $('.popup-carousel__image1').toggleClass('image_g1_1');
        $('.popup-carousel__image2').toggleClass('image_g1_2');
        $('.popup-carousel__image3').toggleClass('image_g1_3');
        $('.p1').show();
        break;
      case 'o2' :
        $('.popup-carousel__image1').toggleClass('image_g2_1');
        $('.popup-carousel__image2').toggleClass('image_g2_2');
        $('.popup-carousel__image3').toggleClass('image_g2_3');
        $('.p2').show();
        break;
      case 'o3' :
        $('.popup-carousel__image1').toggleClass('image_g3_1');
        $('.popup-carousel__image2').toggleClass('image_g3_2');
        $('.popup-carousel__image3').toggleClass('image_g3_3');
        $('.p3').show();
        break;
      case 'o4' :
        $('.popup-carousel__image1').toggleClass('image_g4_1');
        $('.popup-carousel__image2').toggleClass('image_g4_2');
        $('.popup-carousel__image3').toggleClass('image_g4_3');
        $('.p4').show();
        break;
      case 'o5' :
        $('.popup-carousel__image1').toggleClass('image_g5_1');
        $('.popup-carousel__image2').toggleClass('image_g5_2');
        $('.popup-carousel__image3').toggleClass('image_g5_3');
        $('.p5').show();
        break;
      case 'o6' :
        $('.popup-carousel__image1').toggleClass('image_g6_1');
        $('.popup-carousel__image2').toggleClass('image_g6_2');
        $('.popup-carousel__image3').toggleClass('image_g6_3');
        $('.p6').show();
        break;
      case 'o7' :
        $('.popup-carousel__image1').toggleClass('image_g7_1');
        $('.popup-carousel__image2').toggleClass('image_g7_2');
        $('.popup-carousel__image3').toggleClass('image_g7_3');
        $('.p7').show();
        break;
      case 'o8' :
        $('.popup-carousel__image1').toggleClass('image_g8_1');
        $('.popup-carousel__image2').toggleClass('image_g8_2');
        $('.popup-carousel__image3').toggleClass('image_g8_3');
        $('.p8').show();
        break;
      default :
        $('.popup-carousel__image1').toggleClass('image_g1_1');
        $('.popup-carousel__image2').toggleClass('image_g1_2');
        $('.popup-carousel__image3').toggleClass('image_g1_3');
        $('.p1').show();
    }

        $(".popup")[0].style.display='block';
        OffScroll();
    };
})