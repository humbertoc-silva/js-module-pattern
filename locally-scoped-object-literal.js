// Locally Scoped Object Literal - indicated to files over 100 lines
var Module = (function () {

    var myObject = {};

    var privateMethod = function () {
        console.log('private method');
    };

    myObject.publicMethod = function () {
        console.log('public method');
        privateMethod();
    };

    return myObject;

})();
