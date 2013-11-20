# ng-FitText

## ng-FitText makes font-sizes flexible. Use this AngularJS directive in your fluid or responsive layout to achieve scalable headlines that fill the width of a parent element.

This is a rework of the original jQuery plugin which can be found here: https://github.com/davatron5000/FitText.js.

Include it in your AngularJS application

	var myApp = angular.module( 'myApp', [ 'ngFitText' ] );

Apply it to your text

	<h1 data-fittext>FitText</h1>

There are also additional attributes which can be used.

Specifying a value for data-fittext allows you to fine tune the text size. The default is 1. Increasing this number (ie 1.5) will resize the text more aggressively. Decreasing this number (ie 0.5) will reduce the aggressiveness of resize. data-fittext-min and data-fittext-max allow you to set upper and lower limits.

	<h1 data-fittext=".315" data-fittext-min="12" data-fittext-max="50">ng-FitText</h1>

The element needs to either be a block element or an inline-block element with a width specified (% or px).