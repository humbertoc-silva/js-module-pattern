// Anonymous Object Literal return
var ModuleOne = (function () { // Immediately-Invoked-Function-Expressions

    var privateMethod = function () {
        console.log('private method');
    };

    return {
        publicMethodOne: function () {
            console.log('public method one');
        },

        publicMethodTwo: function () {
            console.log('public method two');
        },

        publicMethodThree: function () {
            console.log('public method three');
            privateMethod();
        }
    };

})();

// Locally Scoped Object Literal - indicated to files over 100 lines
var ModuleTwo = (function () {

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

// Stacked Locally Scoped Object Literal
var ModuleThree = (function () {

    var privateMethod = function () {
        console.log('private method');
    };

    var myObject = {
        publicMethodOne: function () {
            console.log('public method one');
        },

        publicMethodTwo: function () {
            console.log('public method two');
            privateMethod();
        }
    };

    return myObject;

})();

// Revealing Module Pattern
var ModuleFour = (function () {

    var privateMethod = function () {
        console.log('private method');
    };

    var someMethod = function () {
        console.log('some method');
    };

    var anotherMethod = function () {
        console.log('another method');
    }

    return {
        someMethod: someMethod,
        anotherMethod: anotherMethod
    };

})();

//******************************************************************************

// Accessing Private Methods
var ModuleFive = (function () {

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

var ModuleSix = (function () {

    var privateArray = [];

    var publicMethod = function (item) {
        privateArray.push(item);
    };

    return {
        publicMethod: publicMethod
    };

})();

//******************************************************************************
