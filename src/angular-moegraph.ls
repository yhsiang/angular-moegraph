angular.module \ng-moegraph, []
	.directive \ng-moegraph, ->
		link: (scope, element. attrs) ->
			img = angular.element \img
			element.addClass \moegraph
			img.attr \width, \500px
			img.attr \height, \500px
			element.html ''
			{ng-moegraph, font} = attrs
			scope.$watchCollection '[ng-moegraph, font]', ->
				base-url = \https://www.moedict.tw/
				padding = 0
				if it.0
					font = it.1.name
					len = it.0.length
					w = Math.ceil (len / Math.sqrt (len * 0.5))
					total = Math.ceil (len / w) * w
					if total > len and len % 4 isnt 0 => padding = total - len
					for i from 1 to padding 
						it.0 += ' '
					img.attr \src, 	base-url + encodeURIComponent it.0 + '.png?font=' + font
					element.append img