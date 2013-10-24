var module = angular.module('fitText', []);

module.directive('fittext', [ '$window', '$document', function( $window, $document ) {
	return {
		restrict: 'A',
		scope: true,
		link: function( $scope, $element, $attrs ) {
			$scope.compressor = $attrs.compressor || 1;
			$scope.minFontSize = $attrs.min || Number.NEGATIVE_INFINITY;
			$scope.maxFontSize = $attrs.max || Number.POSITIVE_INFINITY;

			var resizer = function() {
				$scope.$apply( function() {
					$scope.fontSize = Math.max(
						Math.min(
							$element[0].offsetWidth / ( $scope.compressor * 10 ),
							parseFloat( $scope.maxFontSize )
						),
						parseFloat( $scope.minFontSize )
					) + 'px';
				});
			};

			angular.element( $document ).ready( function () {
				resizer();
			});

			angular.element( $window ).bind( 'resize', function() {
				resizer();
			});

		}
	}
}]);