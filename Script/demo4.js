angular.module('initExample', [])

            .controller('MyCtrl', ['$scope', function MyCtrl($scope) {
                $scope.action = function () {
                    $scope.name = 'OK';
                    //setTimeout(function () {  }, 0);
                }

                //$scope.name = 'World';
            }]);