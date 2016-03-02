
(function() {

    'use strict';

    angular
        .module('authApp')
        .controller('AuthController', AuthController);


    function AuthController($auth, $state) {

        var vm = this;

        vm.login = function() {

            var credentials = {
                email: vm.email,
                password: vm.password
            }

            // Use Satellizer's $auth service to login
            $auth.login(credentials).then(function(data) {

                // If login is successful, redirect to the users state
                if(data.data.error == 'invalid_credentials'){
                    $state.go('error', {});
                } else {
                    $state.go('home', {});
                }

                console.log(data.data.error);

            });

        }
        //$state.go('error', {});
    }

})();