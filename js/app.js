(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.brunch = true;
})();

var buildGif;
buildGif = function(images, cb){
  var width, height, gif, loadImage;
  width = 1500;
  height = 1500;
  gif = new GIF({
    workers: 4,
    width: width,
    height: height
  });
  gif.on('finished', function(blob){
    return cb(blob);
  });
  loadImage = function(src, cb){
    var img;
    img = new Image();
    img.onload = function(){
      return cb(null, img);
    };
    img.onerror = function(){
      return cb(new Error('not load' + src));
    };
    img.crossOrigin = 'Anonymous';
    return img.src = src;
  };
  angular.forEach(images, function(i, k){
    return loadImage(i, function(it, img){
      return gif.addFrame(img, {
        copy: true,
        delay: 1000
      });
    });
  });
  return setTimeout(function(){
    return gif.render();
  }, 1000);
};
angular.module('ngMoegraph', []).controller('gifCtrl', ['$scope'].concat(function($scope){
  return $scope.moetext = ['拆政府原地重建！', '寫程式改造社會！', '我們是零時政府！'];
})).directive('ngMoegraph', function(){
  return {
    link: function(scope, element, attrs){
      var img, moetext, moefont;
      img = angular.element('<img>');
      element.addClass('moegraph');
      img.attr('width', '500px');
      img.attr('height', '500px');
      element.html('');
      moetext = attrs.ngMoegraph;
      moefont = attrs.font;
      console.log('test');
      return scope.$watchCollection('moetext', function(it){
        var images, i$, len$, t;
        if (!it) {
          return;
        }
        images = [];
        for (i$ = 0, len$ = it.length; i$ < len$; ++i$) {
          t = it[i$];
          images.push('https://www.moedict.tw/' + t + '.png');
        }
        return buildGif(images, function(blob){
          img.attr('src', URL.createObjectURL(blob));
          console.log(img);
          return element.append(img);
        });
      });
    }
  };
});
;

