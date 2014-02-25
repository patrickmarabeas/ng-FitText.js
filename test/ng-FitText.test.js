'use strict';

describe( 'FitText directive with a width of 500px', function() {

	var element, $scope;

	beforeEach( module( 'ngFitText' ));
	beforeEach( inject( function( $compile, $rootScope ) {
		$scope = $rootScope;
		element = angular.element("<div data-fittext>Sample Text</div>");
		$compile(element)($rootScope);

		element.scope().elementWidth = 500;
	}));

	describe( 'font-size with default compressor value of 1', function() {
		it( 'should equal 50px', function() {
			element.scope().compressor = 1;
			element.scope().resizer();

			expect( element.scope().fontSize )
				.toEqual( '50px' );
		});
	});

	describe( 'font-size with custom compressor value of .25', function() {
		it( 'should equal 200px', function() {
			element.scope().compressor = .25;
			element.scope().resizer();

			expect( element.scope().fontSize )
				.toEqual( '200px' );
		});
	});

	describe( 'font-size with min values', function() {

		describe( 'font-size with min value of 80', function() {
			it( 'should equal 80px', function() {
				element.scope().minFontSize = 80;
				element.scope().resizer();

				expect( element.scope().fontSize )
					.toEqual( '80px' );
			});
		});

		describe( 'font-size with min value of 10', function() {
			it( 'should equal 50px', function() {
				element.scope().minFontSize = 10;
				element.scope().resizer();

				expect( element.scope().fontSize )
					.toEqual( '50px' );
			});
		});
	});

	describe( 'font-size with max values', function() {

		describe( 'font-size with max value of 10', function() {
			it( 'should equal 10px', function() {
				element.scope().maxFontSize = 10;
				element.scope().resizer();

				expect( element.scope().fontSize )
					.toEqual( '10px' );
			});
		});

		describe( 'font-size with max value of 100', function() {
			it( 'should equal 50px', function() {
				element.scope().maxFontSize = 100;
				element.scope().resizer();

				expect( element.scope().fontSize )
					.toEqual( '50px' );
			});
		});
	});
});