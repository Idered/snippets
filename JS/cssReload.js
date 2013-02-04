/**
 * Reload css without refreshing page
 */
function cssReload() {

	var links = document.getElementsByTagName("link");

	for(var i = 0; i < links.length; i++) {
		var link = links[i];
		if(link.rel === "stylesheet")
			link.href = link.href.replace(/\.css.*/, '.css?reload=' + new Date().getTime());
	}

}