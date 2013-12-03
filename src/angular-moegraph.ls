angular.module \ngMoegraph, []
	.directive \ngMoegraph, ->
		link: (scope, element, attrs) ->
			img = angular.element \<img>
			element.addClass \moegraph
			img.attr \width, \500px
			img.attr \height, \500px
			element.html ''
			moetext = attrs.ng-moegraph
			moefont = attrs.font
			scope.$watchCollection '[moetext, moefont]', ->
				base-url = \https://www.moedict.tw/
				padding = 0
				if it.0
					font = "kai" || it.1.name
					len = it.0.length
					w = Math.ceil (len / Math.sqrt (len * 0.5))
					total = Math.ceil (len / w) * w
					if total > len and len % 4 isnt 0 => padding = total - len
					for i from 1 to padding 
						it.0 += ' '
					img-src = base-url + encodeURIComponent(it.0) + '.png?font=' + font
					console.log img-src
					img.attr \src, img-src 	
					element.append img#