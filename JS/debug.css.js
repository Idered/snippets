javascript:

var CSSRefresh = {

	styleSheets: [],

	init: function() {
		var links = document.getElementsByTagName("link"),
			lastModified;

		for(var i = 0; i < links.length; i++) {
			if(links[i].rel === "stylesheet" && links[i].href.indexOf(window.location.host) !== -1) {
				lastModified = CSSRefresh.getFiletime(links[i].href) || 0;
				links[i].lastModified = lastModified;
				CSSRefresh.styleSheets.push(links[i]);
			}
		}

		var timer = setInterval(CSSRefresh.refresh, 150);

	},

	getFiletime: function(file) {
		var req = new XMLHttpRequest();
		req.open('GET', file, false);
		req.send(null);
		return req.getResponseHeader('Last-Modified');
	},

	refresh: function() {
		var lastModified,
			ss;
		for (var i = CSSRefresh.styleSheets.length - 1; i >= 0; i--) {
			ss = CSSRefresh.styleSheets[i];
			lastModified = CSSRefresh.getFiletime(ss.href);
			if (lastModified != ss.lastModified) {
				ss.lastModified = lastModified;
				ss.href = ss.href.replace(/\.css.*/, '.css?reload=' + new Date().getTime());
			}
		};
	}

};

CSSRefresh.init();