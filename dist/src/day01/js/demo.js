$(function() {
    'use strict';
    $(function() {
        function a() {
            var a = '111';
            return see = function() {
                alert(a);
            }
        }
        function b() {
            var b = 'b111';
        }
        b.prototype.__proto__ = a.prototype;


        //b.prototype = new a();
        console.log(b()());

        console.log(b.prototype.__proto__  == Object.prototype);


        //var single = a => a;
        //single('hello, world');
        //x => x * x;
        //var Person = (name, age) => {
        //    this.name = name;
        //    this.age = age;
        //    alert(this.name + " : " + this.age);
        //};
        //var p = new Func('John', 33);
        ////apple = () => {
        ////    console.log('11');
        //}
    });
});