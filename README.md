# ng-FitText.js

### ng-FitText.js makes font-sizes flexible. Use this AngularJS directive in your fluid or responsive layout to achieve scalable headlines that fill the width of a parent element.

This is a rework of the original jQuery plugin which can be found here: https://github.com/davatron5000/FitText.js.

### Install and Inclusion

Grab it with Bower: `bower install ngFitText`

Include it in your AngularJS application

    var myApp = angular.module('myApp', ['ngFitText']);

Apply it to your text

    <h1 data-fittext>FitText</h1>
    
## v3.0.0 - NEW! Text now defaults to 100% width!

Specifying a value for `data-fittext` now allows you to fine tune the font size if you run into issues where font characters visually ooze out of their element.

#### Models

The FitText directive will also watch the `ng-model` placed on the element, so go nuts with dynamic content! 

#### Limiting font size

The `data-fittext-max=""` and `data-fittext-min=""` attributes respectfully limit the font size. This can also be set globally in the `fitTextConfigProvider` via `min` and `max`.

#### New lines

To make use of new lines within a single FitText block you will need to use the `data-fittext-nl` attribute on each line wrapper. See the demo page for an example.

#### Custom fonts

Fonts may take time to load in. If this is the case, you can use `data-fittext-load-delay=""` to specify the millisecond delay before size is initially calculated.

#### Debounce

Because MODULARIZATION, this module doesn't come with debounce functionality included. Instead you will need to specify the functionality in the `fitTextConfigProvider`:

    module.config(['fitTextConfigProvider', function(fitTextConfigProvider) {
      fitTextConfigProvider.config = {
        
        // include a vender function like underscore or lodash
        debounce: _.debounce,
        
        // specify your own function
        debounce: function(a,b,c) {
          var d;return function(){var e=this,f=arguments;clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b),c&&!d&&a.apply(e,f)}
        },
        
        delay: 1000,
      };
    }]);
    

## < v2.4.0

Specifying a value for data-fittext allows you to fine tune the text size. Defaults to 1. Increasing this number (ie 1.5) will resize the text more aggressively. Decreasing this number (ie 0.5) will reduce the aggressiveness of resize. data-fittext-min and data-fittext-max allow you to set upper and lower limits.

    <h1 data-fittext=".315" data-fittext-min="12" data-fittext-max="50">ng-FitText</h1>

The element needs to either be a block element or an inline-block element with a width specified (% or px).

#### Limiting font size

The `data-fittext-max=""` and `data-fittext-min=""` attributes respectfully limit the font size. This can also be set globally in the `fitTextConfigProvider` via `min` and `max`.

#### Debounce

Debouce (limiting the rate at which FitText will be called on window resize) is available. You can pass initialization parameters to the ngFitText constructor to achieve this:

    myApp.config( function( fitTextConfigProvider ) {
        fitTextConfigProvider.config = {
            debounce: true, //default is false
            delay: 1000 //default is 250
        };

        // OR

        fitTextConfigProvider.config.debounce = true;
        fitTextConfigProvider.config.delay = 1000;
    });
