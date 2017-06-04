# hotkeys.js
A realy simple Javascript library (without dependencies) for capturing keyboard input. This libary is 100% wrote in Vanilla.js :D

## Installation/Run

For install the hotkeys.js in your project
```
<script type="text/javascript" src="hotkeys.js"></script>
```

To add your keyboard combination as follow.

```
(function(window) {
  hotkeys( ALT,'m', function(){ alert('alt+m'); });
  hotkeys( CTRL_ALT,'d', function(){ alert('ctrl+alt+d'); });
})(window, document);

```

#License

* [GNU General Public License] (https://en.wikipedia.org/wiki/GNU_General_Public_License)
