var Module = (function () {

    var privateMethod = function () {
        console.log('private method');
    };

    var someMethod = function () {
        console.log('some method');
    };

    var anotherMethod = function () {
        console.log('another method');
    };

    return {
        someMethod: someMethod,
        anotherMethod: anotherMethod
    };

})();

var ModuleTwo = (function (Module) {

    Module.extension = function () {
        console.log('extension');
    };

    return Module;

})(Module || {});
