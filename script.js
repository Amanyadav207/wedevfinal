document.addEventListener('DOMContentLoaded', () => {
    loadTweets();
});
function postTweet() {
    const tweetText = document.getElementById('tweet-text').value;
    if (tweetText) {
        const tweet = { id: Date.now(), text: tweetText, likes: 0, comments: [] };
        saveTweet(tweet);
        displayTweet(tweet);
        document.getElementById('tweet-text').value = ''; // Clear input field
    }
}
function saveTweet (tweet) {

}
function displayTweet(tweet){
    
}