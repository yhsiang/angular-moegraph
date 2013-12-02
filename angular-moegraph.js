angular.module('ngMoegraph', [])
  .directive('ngMoegraph', function () {
    return {
      link: function (scope, element, attrs) {
        var img = angular.element('<img>');
        img.attr('width', '500px');
        img.attr('height', '500px');
        element.html('');
        
       scope.$watch(attrs.ngMoegraph, function (thatMoetext) {
          var w, len, padding, total;
          padding = 0;
          if (thatMoetext) {
            len = thatMoetext.length;
            w = Math.ceil(len / Math.sqrt(len * 0.5));
            total = Math.ceil(len/w)*w;
            if(total > len && len % 4 !== 0) {
              padding = total - len;
            }
            for(i=0; i< padding; i++) {
              thatMoetext+=' ';
            }
            img.attr('src', 'https://www.moedict.tw/'+encodeURIComponent(thatMoetext)+'.png');
            element.append(img);
          }
        })
      }
    }
  });
