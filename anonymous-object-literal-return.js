// Anonymous Object Literal Return
var Module = (function () { // Immediately-Invoked-Function-Expressions

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
