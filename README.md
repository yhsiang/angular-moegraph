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
<style>
.moegraph { ... }
</style>
```
```
angular.module('YourApp', ['ngMoegraph'])
```
* mockup your element 
```
<div ng-moegraph="moetext" font="moefont"> ... </div>
```
* working with your scope in controller
```
$scope.moetext = "blah .."

// support font -> ["kai", "ebas", "sung"]
$scope.moefont = "kai";
```

#License

MIT
