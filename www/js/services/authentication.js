var app = angular.module('app');
app.factory('Authentication', function ($http, SessionService, $q, $timeout, $location, GeturlService) {



    // 1.
    var login = function (credentials) {
        var backendServiceUrl = GeturlService.geturl();
        return $http.post(backendServiceUrl + 'api/v1.0/login', credentials);

    };

    // 2.
    var isAuthenticated = function () {
        return sessionStorage.getItem('authenticated');
    };


    var user = { userId: '', city: '', state: '', country: '', subjectId: '', PACode: '', fingerprintAuth: 'notSet', PIN: 'notSet', sessionExpired: false, pinPass: '', lastLoginTime: '', customerSessionEnabled: false ,dealerDetails :'', role : '', token : ''};
    var cacheSession = function (response) {
        //sessionStorage.setItem('authenticated', 'true');
       
    };


 
    var checkFingerprintSupport = function () {
        var deferred = $q.defer();




        console.log('fingerprint service for iOS');
        window.plugins.touchid.isAvailable(function () {

            $timeout(deferred.resolve(true));

        }, function (msg) {
            //alert('not available, message: ' + msg)
            $timeout(deferred.resolve(false));
        }); // error handler: no TouchID available


        return deferred.promise;
    };



    var checkPreference = function () {
        var backendServiceUrl = GeturlService.geturl();
        var user = SessionService.getUser();
        var pacode = user.PACode;
        $http.defaults.headers.common.Authorization =  user.token;
        var url = backendServiceUrl + 'api/v1.0/users/find?DealerPACode=' + pacode + '&UserId=' + user.userId;
        return $http.get(url);
    };
            
            
            
            






    return {
        login: login,
        cacheSession: cacheSession,
        isAuthenticated: isAuthenticated,
    };

});
