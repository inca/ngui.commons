(function(window, document, angular, undefined) {

  var module = angular.module('ngui.commons', []);

  module.directive('uiHl', function() {
    return {
      restrict: 'AE',
      link: function ($scope, $element, $attrs) {
        var className = $attrs.uiHlClass || 'active';
        var nodes = document.querySelectorAll($attrs.uiHl);
        [].forEach.call(nodes, function(node) {
          angular.element(node).addClass(className);
        });
        $element.on('$destroy', function() {
          [].forEach.call(nodes, function(node) {
            angular.element(node).removeClass(className);
          });
        });
      }
    }
  });

  module.directive('uiFocus', function() {
    return {
      restrict: 'A',
      link: function ($scope, $element, $attrs) {
        $element[0].focus();
      }
    }
  });

})(window, document, angular);
