// Private Naming Conventions
var Module = (function () {

    // Using _ prefix
    var _privateMethod = function () {
        console.log('private method');
    };

    var publicMethod = function () {
        console.log('public method');
    }

    return {
      publicMethod: publicMethod
    }

})();
