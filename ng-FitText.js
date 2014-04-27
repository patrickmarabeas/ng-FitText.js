/* ng-FitText.js v2.4.0
 * https://github.com/patrickmarabeas/ng-FitText.js
 *
 * Original jQuery project: https://github.com/davatron5000/FitText.js
 * Includes use of Underscore's debounce function
 *
 * Copyright 2014, Patrick Marabeas http://marabeas.io
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * Date: 28/04/2014
 */

'use strict';

angular.module( 'ngFitText', [] )
  .value( 'config', {
    'debounce': false,
    'delay': 250,
    'min': undefined,
    'max': undefined
  })

  .directive( 'fittext', [ 'config', 'fitTextConfig', function( config, fitTextConfig ) {
    return {
      restrict: 'A',
      scope: true,
      transclude: true,
      replace: true,
      template: function( element, attrs ) {
        var tag = element[0].nodeName;
        return "<" + tag + " data-ng-transclude data-ng-style='{fontSize:fontSize}'></" + tag + ">";
      },
      link: function( scope, element, attrs ) {
        angular.extend( config, fitTextConfig.config );

        scope.compressor = attrs.fittext || 1;
        scope.minFontSize = attrs.fittextMin || config.min || Number.NEGATIVE_INFINITY;
        scope.maxFontSize = attrs.fittextMax || config.max || Number.POSITIVE_INFINITY;
        scope.elementWidth = element[0].offsetWidth;

        ( scope.resizer = function() {
          scope.elementWidth = element[0].offsetWidth;
          scope.fontSize = Math.max(
            Math.min(
              scope.elementWidth / ( scope.compressor * 10 ),
              parseFloat( scope.maxFontSize )
            ),
            parseFloat( scope.minFontSize )
          ) + 'px';

        })();

        config.debounce == true
          ? angular.element( window ).bind( 'resize', _debounce( function(){ scope.$apply( scope.resizer )}, config.delay ))
          : angular.element( window ).bind( 'resize', function(){ scope.$apply( scope.resizer )});

        function _debounce(a,b,c){var d;return function(){var e=this,f=arguments;clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b),c&&!d&&a.apply(e,f)}}
      }
    }
  }])

  .provider( 'fitTextConfig', function() {
    var self = this;
    this.config = {};
    this.$get = function() {
      var extend = {};
      extend.config = self.config;
      return extend;
    };
    return this;
  });