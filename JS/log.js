/**
 * Custom log function wrapper
 */
var _log = function() {

	var debug = true;

    debug && window.console && console.log.apply(console, arguments);

} // log