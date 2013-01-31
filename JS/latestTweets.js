/**
 * Get latest tweets
 * @param  {string} username
 * @param  {int}    num      Number of tweets to get
 */
function getTweets(username, num) {

    $.getJSON("http://api.twitter.com/1/statuses/user_timeline/"+username+".json?count="+num+"&include_rts=1&callback=?", function(tweets) {
         $('.js-get-tweet').html(parseTweet(tweets[0].text));
    });

} // getTweets