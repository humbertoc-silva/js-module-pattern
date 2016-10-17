// Stacked Locally Scoped Object Literal
var Module = (function () {

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
