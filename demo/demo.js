angular.module('demobs', ['ngRoute', 'ngui'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/#', {
                templateUrl: '/demo/view.html',
                controller: SyspanelCtrl,
                controllerAs: 'SyspanelCtrl',
                page:'syspanel'
            })
            .otherwise({
                redirectTo: '/#'
            });

        //$locationProvider.html5Mode(true);
    })
    .run(['$rootScope', '$route', function ($rootScope, $route) {

        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.$pageName = document.title = $route.current.page;
        });
    }])
    ;
;

angular.module('ngui', [
    'ngui-syspanel'
])
    .config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });
;
