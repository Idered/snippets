/**
 * Custom log function wrapper
 */
var _log = function() {

    Utils.settings.debug && window.console && console.log.apply(console, arguments);

} // log