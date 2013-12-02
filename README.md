angular-moegraph
================
angular directive for moedict opengraph

#Demo:
http://embed.plnkr.co/loRyofbu6nZKmPaGXTyE/preview

#Usage
* download angular-moegraph.js
* include it
```
<script type="text/javascript" src="angular-moegraph.js"></script>
```
and
```
angular.module('YourApp', ['ngMoegraph'])
```
* mockup your element 
```
<div ng-moegraph="moetext"> ... </div>
```
* working with your scope in controller
```
$scope.moetext = "blah .."
```

#License

MIT
