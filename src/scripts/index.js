$(document).ready(function() {
    var leftUIEl = $(".carousel_arrow_left");
    var rightUIEl = $(".carousel_arrow_right");
    var elementsList = $(".carousel_list");

    var pixelsOffset = 250;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 800;
            elementsList.animate({ marginLeft : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 800;
            elementsList.animate({ marginLeft : currentLeftValue + "px"}, 500);
        }
    });
});