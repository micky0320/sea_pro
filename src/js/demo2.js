$(function() {
    var color = 'blue';

    function changeColor() {
        var anotherColor = 'red';
        function swapColors() {

                console.log( tempColor + '  ' + anotherColor + ' ' + color);
                var tempColor = anotherColor;
                //var color = tempColor;
                var color = 'skyblue';
                    anotherColor = color;
                console.log( tempColor + '  ' + anotherColor + ' ' + color);

        }
        swapColors();
    }
    changeColor();

    var i = 0;
    $('.box').on('click', function() {
        i++;
        $(this).html(i);
    });



});