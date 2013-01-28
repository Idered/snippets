/**
 * Get latest tweet
 * @param  {string} username
 */
function latestTweet(username) {

    $.getJSON("http://api.twitter.com/1/statuses/user_timeline/"+username+".json?count=1&include_rts=1&callback=?", function(data) {
         $('.js-latest-tweet').html(parseTweet(data[0].text));
    });

} // latestTweet