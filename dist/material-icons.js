(function () {
  'use strict';

  angular.module('angularIcons.materialIcons', [])
    .provider('MaterialIcons', MaterialIcons)
    .directive('baMaterialIcon', baMaterialIcon)
  ;

  function MaterialIcons() {
    // default path
    var assetPath = '';
    var assetCdn = 'npmcdn';

    /**
     * Sets the path used to locate the iconic SVG files
     * @param {string} path - the base path used to locate the iconic SVG files
     */
    this.setAssetPath = function (path) {
      assetPath = angular.isString(path) ? path : assetPath;

      // make sure ends with /
      if (assetPath.charAt(assetPath.length - 1) !== '/') {
        assetPath += '/';
      }
    };

    /**
     * Configures which CDN to use
     * @param {string} cdn - options are 'jsdelivr', 'npmcdn' (default 'npmcdn')
     */
    this.setCdn = function (cdn) {
      switch (cdn) {
        case 'jsdelivr':
        case 'npmcdn':
          assetCdn = cdn;
        default:
          assetCdn = 'npmcdn';
      }
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
        switch (assetCdn) {
          case 'npmcdn':
            return 'https://npmcdn.com/angular-icons@0.1.3/dist/icons/material-icons/';
          case 'jsdelivr':
            return 'https://cdn.jsdelivr.net/angular-icons/0.1.3/icons/material-icons/';
          default:
            return assetPath;
        }
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
