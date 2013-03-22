javascript:

var CSSRefresher = {
        styleSheets: [],
        init: function(interval) {
            var links = document.getElementsByTagName("link"),
                lastModified;
            for (var i = 0; i < links.length; i++) {
                if (links[i].rel === "stylesheet" && links[i].href.indexOf(window.location.host) !== -1) {
                    lastModified = CSSRefresher.getFiletime(links[i].href) || 0;
                    links[i].lastModified = lastModified;
                    CSSRefresher.styleSheets.push(links[i]);
                }
            }
            var timer = setInterval(function() {
                var lastModified, ss;
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
    }
};

CSSRefresh.init();