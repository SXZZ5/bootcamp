var a = 2;
foo();
function foo() {
    a = 3;
    console.log( a );
    var a;
    bar();
    this.fxname = "foo";
    function bar(){
        this.fxname = "bar";
        var c = 5;
        c = c * 10;
        console.log(c);
    }
}
console.log( a );

(function iife(){
    var d = 5;
    console.log(d);
})();
