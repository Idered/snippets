/**
 * Change user names, hashtags and links to active links
 * @param  {string} text Just a tweet
 * @return {string}      Parsed tweet
 */
function parseTweet(text) {

    var patterns = {
        link: /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
        user: /(^|\s)@(\w+)/g,
        hash: /(^|\s)#(\w+)/g
    };
    return text
        .replace(patterns.link,'<a href="$1" target="_blank">$1</a>')
        .replace(patterns.user, '$1@<a href="http://www.twitter.com/$2" target="_blank">$2</a>')
        .replace(patterns.hash, '$1#<a href="http://search.twitter.com/search?q=%23$2" target="_blank">$2</a>');

} // parseTweet