'use strict';

describe( 'FitText directive with a width of 500px', function() {

	var element, $scope;

	beforeEach( module( 'ngFitText' ));
	beforeEach( inject( function( $compile, $rootScope ) {

		element = document.createElement('div');
		element.innerHTML = 'FitText';
		element.setAttribute('data-fittext','');
		element.setAttribute('style','width:500px');
		document.body.appendChild(element);
	}));

	describe( 'font-size with default compressor value of 1', function() {

		beforeEach( inject( function( $compile, $rootScope ) {
			element = $compile( element )($rootScope);
		}));

		it( 'should equal 50px', function() {
			expect( element.scope().fontSize )
				.toEqual( '50px' );
		});
	});

	describe( 'font-size with custom compressor value of .25', function() {

		beforeEach( inject( function( $compile, $rootScope ) {
			element.setAttribute('data-fittext','.25');
			element = $compile( element )($rootScope);
		}));

		it( 'should equal 200px', function() {
			expect( element.scope().fontSize )
				.toEqual( '200px' );
		});
	});

	describe( 'font-size with min values', function() {

		describe( 'font-size with min value of 80', function() {

			beforeEach( inject( function( $compile, $rootScope ) {
				element.setAttribute('data-fittext-min','80');
				element = $compile( element )($rootScope);
			}));

			it( 'should equal 80px', function() {
				expect( element.scope().fontSize )
					.toEqual( '80px' );
			});
		});

		describe( 'font-size with min value of 10', function() {

			beforeEach( inject( function( $compile, $rootScope ) {
				element.setAttribute('data-fittext-min','10');
				element = $compile( element )($rootScope);
			}));

			it( 'should equal 50px', function() {
				expect( element.scope().fontSize )
					.toEqual( '50px' );
			});
		});
	});

	describe( 'font-size with max values', function() {

		describe( 'font-size with max value of 10', function() {

			beforeEach( inject( function( $compile, $rootScope ) {
				element.setAttribute('data-fittext-max','10');
				element = $compile( element )($rootScope);
			}));

			it( 'should equal 10px', function() {
				expect( element.scope().fontSize )
					.toEqual( '10px' );
			});
		});

		describe( 'font-size with max value of 100', function() {

			beforeEach( inject( function( $compile, $rootScope ) {
				element.setAttribute('data-fittext-max','100');
				element = $compile( element )($rootScope);
			}));

			it( 'should equal 50px', function() {
				expect( element.scope().fontSize )
					.toEqual( '50px' );
			});
		});
	});
});
