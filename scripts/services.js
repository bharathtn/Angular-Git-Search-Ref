'use strict';

angular.module('angularRestfulAuth')
    .factory('GitService', ['$http', function ($http) {
            var baseUrl = "https://api.github.com/search/repositories";
            return {

                search: function (q) {
                    var config = {
                        params: {}
                    };
                    if (q) {
                        config.params.q = q;
                    }
                    return $http.get(baseUrl, config);
                }
            };
        }
    ]);
