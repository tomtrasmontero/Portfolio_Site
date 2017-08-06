app.directive('navbar', function ($rootScope, AuthService, AUTH_EVENTS, $state, $window) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function (scope) {

            scope.items = [
                { label: 'Home', state: 'home' },
                { label: 'Portfolio', state: 'portfolio' },
                { label: 'About', state: 'about' },
                { label: 'Contact', state: 'contact' },
                { label: 'Members Only', state: 'membersOnly', auth: true }
            ];

            //check screen size to acctivate auto collapse in navbar for mobile sizes
            scope.screenWidth = $window.innerWidth;

            scope.checkWidth = function () {
                if ($window.innerWidth !== scope.screenWidth) {
                    scope.screenWidth = $window.innerWidth;
                }
            };

            // active tabs
            scope.select = function(item) {
                    scope.selected = item;
            };

            scope.isActive = function(item) {
                    return scope.selected === item;
            };

            scope.user = null;


            scope.isLoggedIn = function () {
                return AuthService.isAuthenticated();
            };

            scope.logout = function () {
                AuthService.logout().then(function () {
                   $state.go('home');
                });
            };

            var setUser = function () {
                AuthService.getLoggedInUser().then(function (user) {
                    scope.user = user;
                });
            };

            var removeUser = function () {
                scope.user = null;
            };

            setUser();

            $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
            $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
            $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

        }

    };

});
