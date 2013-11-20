/* ng-FitText v1.0.0
 * https://github.com/patrickmarabeas/ng-FitText
 *
 * Original jQuery project: https://github.com/davatron5000/FitText.js
 *
 * Copyright 2013, Patrick Marabeas http://pulse-dev.com
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * Date: 18/11/2013
 */

var module = angular.module( 'ngFitText', [] );

module.directive( 'fittext', [ function() {
	return {
		restrict: 'A',
		scope: true,
		link: function( scope, element, attrs ) {
			scope.compressor = attrs.fittext || 1;
			scope.minFontSize = attrs.fittextMin || Number.NEGATIVE_INFINITY;
			scope.maxFontSize = attrs.fittextMax || Number.POSITIVE_INFINITY;

			var resizer = function() {
				scope.$apply( function() {
					scope.fontSize = Math.max(
						Math.min(
							element[0].offsetWidth / ( scope.compressor * 10 ),
							parseFloat( scope.maxFontSize )
						),
						parseFloat( scope.minFontSize )
					) + 'px';

					// data-ng-style="{'font-size':fontSize}" can also be used on the element instead of the following:
					element[0].style.fontSize = scope.fontSize;
				});
			};

			angular.element( document ).ready( function() {
				resizer();
			});

			angular.element( window ).bind( 'resize', function() {
				resizer();
			});

		}
	}
}]);