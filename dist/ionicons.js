(function () {
  'use strict';

  angular.module('angularIcons.ionicons', [])
    .provider('Ionicons', Ionicons)
    .directive('baIonicons', baIonicons)
  ;

  function Ionicons() {
    // default path
    var assetPath = 'assets/img/ionicons/';

    /**
     * Sets the path used to locate the iconic SVG files
     * @param {string} path - the base path used to locate the iconic SVG files
     */
    this.setAssetPath = function (path) {
      assetPath = angular.isString(path) ? path : assetPath;
    };

    /**
     * Service implementation
     * @returns {{}}
     */
    this.$get = function () {
      var service = {
        getAssetPath: getAssetPath
      };

      return service;

      /**
       *
       * @returns {string}
       */
      function getAssetPath() {
        return assetPath;
      }
    };
  }

  baIconic.$inject = ['Ionicons'];

  function baIconic(Ionicons) {
    var directive = {
      restrict: 'A',
      transclude: true,
      replace: true,
      scope: {
      },
      compile: compile
    };

    return directive;

    function compile() {
    }
  }
})();
