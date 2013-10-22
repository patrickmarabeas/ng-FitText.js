#AngularJS-FitText.js

## AngularJS directive for inflating web type

This is a rework of the original FitText which can be found here, and functions in the exact same manner: https://github.com/davatron5000/FitText.js.

	<h1 data-fittext data-ng-style="{'font-size':fontSize}">My Title</h1>

The following attributes can also be used:
	
	<h1 data-fittext 
		data-compressor="1" //the compressor - aggressiveness of resize
		data-min="12"  //minimum font size
		data-max="50" //maximum font size
		data-ng-style="{'font-size':fontSize}">DrewDev</h1>