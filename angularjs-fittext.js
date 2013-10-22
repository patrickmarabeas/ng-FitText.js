var module = angular.module('fittext', []);

module.directive('fittext', [ '$window', function( $window ) {
	return {
		restrict: 'A',
		scope: true,
		link: function( $scope, $element, $attrs ) {
			$scope.compressor = $attrs.compressor || 1;
			$scope.minFontSize = $attrs.min || Number.NEGATIVE_INFINITY;
			$scope.maxFontSize = $attrs.max || Number.POSITIVE_INFINITY;

			var resizer = function() {
				$scope.fontSize = Math.max(
					Math.min(
						$element.width() / ( $scope.compressor*10 ),
						parseFloat( $scope.maxFontSize )
					),
					parseFloat( $scope.minFontSize )
				);
			};

			var readyStateCheckInterval = setInterval( function() {
				if ( document.readyState === "complete" ) {
					clearInterval( readyStateCheckInterval );
					$scope.$apply( function() {
						resizer();
					});
				}
			}, 10);

			angular.element( $window ).bind( 'resize', function() {
				$scope.$apply( function() {
					resizer();
				});
			});

		}
	}
}]);