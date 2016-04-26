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


    var show = (x,y) =>1;




});