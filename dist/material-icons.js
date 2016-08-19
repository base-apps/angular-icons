(function () {
  'use strict';

  angular.module('angularIcons.materialIcons', [])
    .provider('MaterialIcons', MaterialIcons)
    .directive('baMaterialIcons', baMaterialIcons)
  ;

  function MaterialIcons() {
    // default path
    var assetPath = 'assets/img/material-icons/';

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

  baMaterialIcons.$inject = ['MaterialIcons'];

  function baMaterialIcons(MaterialIcons) {
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
