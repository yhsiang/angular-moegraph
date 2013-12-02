angular.module('ngMoegraph', [])
  .directive('ngMoegraph', function () {
    return {
      link: function(scope, element, attrs) {
        var moetext, moefont;
        var img = angular.element('<img>');
        element.addClass('moegraph');
        img.attr('width', '500px');
        img.attr('height', '500px');
        element.html('');
        moetext = attrs.ngMoegraph;
        moefont = attrs.font;
        scope.$watchCollection('[moetext, moefont]', function(thatMoetext) {
          var w, len, padding, total, font;
          padding = 0;
          if (thatMoetext[0]) {
            font = thatMoetext[1].name;
            len = thatMoetext.length
            w = Math.ceil(len / Math.sqrt(len * 0.5))
            total = Math.ceil(len / w) * w
            if (total > len && len % 4 !== 0) {
              padding = total - len;
            }
            for (i = 0; i < padding; i++) {
              thatMoetext += ' ';
            }
            img.attr('src', 'https://www.moedict.tw/' + encodeURIComponent(thatMoetext[0])+'.png?font='+font);
            element.append(img);
          }
        })
      }
    }
  })
