//TO CALL hotkeys( ALT, '1', function(){ alert('Hello Nurse!!!'); } );
var CTRL = 'ctrl+';
var ALT = 'alt+';
var CTRL_ALT = 'ctrl+alt+';

(function (window) {
	'use strict';

var _hotkeys = {};

function hotkeys( modifyKeys, character, method ){
	var key = modifyKeys + character;
	_hotkeys[key] = method;
}

addEvent(document, 'keydown', function(event) {
	dispatch(event);
});

function getKey( event ){
	var key;

	var specialKeys = {
		8: "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",
		20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home",
		37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del",
		96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
		104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111 : "/",
		112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8",
		120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 188: ",", 190: ".",
		191: "/", 224: "meta" };

	var shiftNums = {
		"`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&",
		"8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ": ", "'": "\"", ",": "<",
		".": ">",  "/": "?",  "\\": "|"
	};
        var k = (event.which) ? event.which : event.keyCode;
	if( event.shiftKey ){
		key = shiftNums[ String.fromCharCode( k ).toLowerCase() ];
	}
	else {
		key = specialKeys[ k ] === undefined 
		? String.fromCharCode( k ).toLowerCase() 
		: specialKeys[ k ];
	}
	return key;
}

function dispatch( event ){
	try {
		var key = getKey( event );
		var modif = [];
		
		if ( event.ctrlKey ) {
			modif.push( CTRL );
		}

		if ( event.altKey ) {
			modif.push( ALT );
		}

		key = modif.join('') + key;
		var method = _hotkeys[key];
		if(typeof method === 'function'){
			method.call( null );
		}
	} catch( error ){
		console.error( error );
	}
}
function addEvent(object, event, method) {
    try {
    	if (object.addEventListener){
        	object.addEventListener(event, method, false);
    	} else if(object.attachEvent){
        	object.attachEvent('on'+event, function(){ method(window.event); });
    	}
    } catch (error) {
		console.log(error.message);
	}
}

window.hotkeys = hotkeys;

})(window);