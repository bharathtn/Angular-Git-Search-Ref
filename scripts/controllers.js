'use strict';

/* Controllers */

angular.module('angularRestfulAuth')
    .controller('GitCtrl', ['$rootScope', '$scope', 'GitService', function ($rootScope, $scope,  GitService) {

        $scope.search = function () {
            var q = $scope.q ? $scope.q : '';
            GitService.search(q).then(function (d) {
                $scope.repos = d.data.items;

            }).catch(function (e) {
                alert("Bad shit happened: "+e.data.message);

            });

        };

    }]);
