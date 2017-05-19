(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var calculator = require('./calculator.js');
var view 	   = require('./view.js');
var dashboard  = require('./dashboard.js');

	var form = document.getElementById('frm');
	
	form.addEventListener('submit', function(e) {
		var location = view.getLocation();
		dashboard.updateBoard(location, calculator);

		e.preventDefault();
	}, false);


// var loc 	= document.getElementById('loc'),
// 	temp 	= document.getElementById('temp'),
// 	frm 	= document.getElementById('frm'),
// 	dash 	= document.getElementById('dash');

// 	frm.addEventListener('submit', function(e) {
// 		//var txt = document
// 		var convert = (temp.value - 32) * (5/9);
// 		dash.firstChild.nodeValue = "It is " + convert + " Celsius in " + loc.value;
// 		e.preventDefault();
// 	}, false);

},{"./calculator.js":2,"./dashboard.js":3,"./view.js":4}],2:[function(require,module,exports){

	function calculate(view) {
		return (view.getTemperature() - 32) * (5/9);
	}

	exports.calculate = calculate;
	
},{}],3:[function(require,module,exports){
	var calculator = require('./calculator.js');
	var view	   = require('./view.js');

	var dashboard = document.getElementById('dashboard');

	function updateBoard(loc, calculator) {
		dashboard.firstChild.nodeValue = "It is " + calculator.calculate(view) + " degree Celcius in " + loc;
	}

	exports.updateBoard = updateBoard;
	

},{"./calculator.js":2,"./view.js":4}],4:[function(require,module,exports){

	function getTemperature() {
		var temp = document.getElementById('temp');
		return temp.value;
	}

	function getLocation() {
		var loc = document.getElementById('loc');
		return loc.value;
	}

	exports.getLocation = getLocation;
	exports.getTemperature = getTemperature;
	
},{}]},{},[1]);
