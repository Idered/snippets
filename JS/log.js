/**
 * Custom log function wrapper
 */
function _log() {

    var debug = true;

    debug && window.console && console.log.apply(console, arguments);

} // log