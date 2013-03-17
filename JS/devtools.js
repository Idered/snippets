/**
 * Developer tools:
 * - CSS Refresher
 * - Window size viewier
 */
var DEVTools = {

	CSSRefresher: {

		styleSheets: [],

		init: function(interval) {

			var CSSRefresher = this,
				links = document.getElementsByTagName("link"),
				lastModified;

			for(var i = 0; i < links.length; i++) {
				if(links[i].rel === "stylesheet" && links[i].href.indexOf(window.location.host) !== -1) {
					lastModified = CSSRefresher.getFiletime(links[i].href) || 0;
					links[i].lastModified = lastModified;
					CSSRefresher.styleSheets.push(links[i]);
				}
			}

			var timer = setInterval(function() {
				var lastModified,
					ss;
				for (var i = CSSRefresher.styleSheets.length - 1; i >= 0; i--) {
					ss = CSSRefresher.styleSheets[i];
					lastModified = CSSRefresher.getFiletime(ss.href);
					if (lastModified != ss.lastModified) {
						ss.lastModified = lastModified;
						ss.href = ss.href.replace(/\.css.*/, '.css?reload=' + new Date().getTime());
					}
				};
			}, interval || 250);

		},

		getFiletime: function(file) {
			var req = new XMLHttpRequest();
			req.open('GET', file, false);
			req.send(null);
			return req.getResponseHeader('Last-Modified');
		}

	},

	windowSize: function() {

		var debug = document.createElement('div');

		debug.id = '#debug-window';
		debug.style.font = '16px/1.5 Arial';
		debug.style.color = '#fff';
		debug.style.textAlign = 'right';
		debug.style.background = '#333';
		debug.style.padding = '.5em 1em';
		debug.style.position = 'fixed';
		debug.style.bottom = 0;
		debug.style.right = 0;
		debug.style.borderRadius = '3px 0 0 0';

		document.getElementsByTagName('body')[0].appendChild(debug);

		window.onresize = function() {
		    debug.innerHTML = window.innerWidth + 'x' + window.innerHeight + 'px';
		};

		window.onresize();

	}

};