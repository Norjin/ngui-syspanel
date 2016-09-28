/**
 * Created by Administrator on 6/17/2016.
 */

(function () {
    'use strict';
    /* global angular */
    var app = angular.module('ngui-syspanel', []);

    app.provider("$nguiSyspanelConfig", function () {
        var baseTemplateUrl = "/tpl-bootstrap";

        return {
            setBaseTemplateUrl: function (url) {
                baseTemplateUrl = url;
            },
            $get: function () {
                return {
                    get baseTemplateUrl() {
                        return baseTemplateUrl;
                    }
                };
            }
        };
    });

    app.directive('nguiSyspanel', ['$nguiSyspanelConfig',
        function ($nguiSyspanelConfig) {
            return {

                restrict: 'A',
                transclude: {
                    'header': 'panelHeader',
                    'menu': 'panelMenu',
                    'body': 'panelBody'
                },
                scope: {
                    open: '=menuOpen',
                    title: '@', titleVar: '='
                },
                templateUrl: function (elem, attrs) {
                    return attrs.templateUrl || $nguiSyspanelConfig.baseTemplateUrl + '/syspanel.htm';
                },
                link: function ($scope, $ele) {
                    $ele.addClass('syspanel');
                    $scope.$watch('open', function (open) {
                        if (!open) {
                            $ele.addClass('closed-menu');
                        } else {
                            $ele.removeClass('closed-menu');
                        }
                    });
                    $scope.$data = {
                        get title() {
                            return $scope.titleVar || $scope.title;
                        }
                    };
                }
            };
        }
    ]);
})();
