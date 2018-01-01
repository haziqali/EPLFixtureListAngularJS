myApp.directive('headerinfo', function() {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.templateUrl = "views/header-view.html";

    return directive;
})

myApp.directive('footerinfo', function() {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.templateUrl = "views/footer-view.html";

    return directive;
})

myApp.directive('navbar', function() {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.templateUrl = "views/navbar-view.html";

    return directive;
})

