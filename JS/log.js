/**
 * Custom log function wrapper
 */
function _log() {

    var debug = true;

    debug && window.console && console.log.apply(console, arguments);

} // log


/**
 * Grouped logging
 * @param {string} Group name
 * @param {mixed}  Params to log
 *
 * Usage: log('group-name', var1, var2, varN);
 * Sample: log('user-actions', 'Action: ', action);
 */
var debug = ['user-actions'],
	log = function() {
	var args = [],
		first;

	// clone arguments
	Array.prototype.push.apply(args, arguments);

	// we need at least 2 arguments: group name and variable to log
	if (args.length > 1) {
		// get group name
		first = args.shift();

		// look for group name in debug array
		for (var i = 0; i < debug.length; i++)
			if (first === debug[i])
				console.log.apply(console, args);

	} else {
		// We have only 1 argument, there's no group name
		console.log.apply(console, args);
	}
};