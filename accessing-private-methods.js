// Accessing Private Methods
var ModuleOne = (function () {

    var privateMethod = function (message) {
        console.log(message);
    };

    var publicMethod = function (text) {
        privateMethod(text);
    }

    return {
        publicMethod: publicMethod
    };

})();

// Accessing Private Properties
var ModuleTwo = (function () {

    var privateArray = [];

    var publicMethod = function (item) {
        privateArray.push(item);
    };

    return {
        publicMethod: publicMethod
    };

})();
