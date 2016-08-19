(function () {
  'use strict';

  angular.module('angularIcons.materialIcons', [])
    .provider('MaterialIcons', MaterialIcons)
    .directive('baMaterialIcon', baMaterialIcon)
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

  baMaterialIcon.$inject = ['MaterialIcons'];

  function baMaterialIcon(MaterialIcons) {
    var directive = {
      restrict: 'EA',
      replace: true,
      templateUrl: function(element, attrs) {
        return MaterialIcons.getAssetPath() + attrs.icon + ".svg";
      },
      scope: {
        icon: '@'
      },
      link: link
    };

    return directive;

    function link(scope, element) {
      element.addClass("material-icons");
    }
  }

})();
