angular-moegraph
================
angular directive for moedict opengraph

#Demo:
http://embed.plnkr.co/loRyofbu6nZKmPaGXTyE/preview

#Usage
## method 1 
* git clone repo and run `npm run build`
* see example/index.html

## method 2
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
```
* support font -> ["kai", "ebas", "sung"]
```
$scope.moefont = "kai";
```

#License
================
MIT
