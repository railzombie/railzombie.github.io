window.onload = function() {
    var quote = new Array()
    var quoteBox = document.querySelector(".quoteBox");
    var pressQuote = document.querySelector(".pressQuote");
    var randomquote;
    quote[0] = '" Go for it now. The future is promised to no one." Wayne Dyer.'
    quote[1] = '" In order to succeed, we must first believe that we can." Nikos Kazantzakis'
    quote[2] = '" The secret of getting ahead is getting started." Mark Twain'
    quote[3] = '" Do one thing every day that scares you." Eleanor Roosevelt.'
    quote[4] = '" I am not a product of my circumstances. I am a product of my decisions." Stephen Covey.'
    quote[5] = '" Change your thoughts and you change your world." Norman Vincent Peale.'
    quote[6] = '" Build your own dreams, or someone else will hire you to build theirs." Farrah Gray.'
    quote[7] = '" A person who never made a mistake never tried anything new." Albert Einstein.'
    quote[8] = '" Everything has beauty, but not everyone can see." Confucius.'
    quote[9] = '" Opportunities don\'t happen, you create them." Chris Grosser.'
    quote[10] = '" I have not failed. I\'ve just found 10,000 ways that won\'t work." Thomas A. Edison.'
    quote[11] = '" No masterpiece was ever created by a lazy artist." Anonymous.'
    quote[12] = '" Motivation is what gets you started. Habit is what keeps you going." Jim Ryun.'
    quote[13] = '" Be miserable. Or motivate yourself. Whatever has to be done, it\'s always your choice." Wayne Dyer.'
    quote[14] = '" Nothing is as important as passion. No matter what you want to do with your life, be passionate." Jon Bon Jovi.'
    quote[15] = '" The best proof of love is trust." Joyce Brothers.'
    quote[16] = '" Be the chief but never the lord." Lao Tzu.'
    quote[17] = '" The best dreams happen when you’re awake." Cherie Gilderbloom.'
    quote[18] = '" The difference between ordinary and extraordinary is that little extra." Jimmy Johnson.'
    quote[19] = '" A year from now you may wish you had started today." Karen Lamb.'
    quote[20] = '" If there is no struggle, there is no progress." Frederick Douglass.'
    quote[21] = '" To avoid criticism, do nothing, say nothing, be nothing." Elbert Hubbard.'
    quote[22] = '" The more I want to get something done, the less I call it work." Richard Bach.'
    quote[23] = '" Do what you love and the money will follow." Marsha Sinetar.'
    quote[24] = '" The purpose of our lives is to be happy." Dalai Lama.'
    quote[25] = '" Someday is not a day of the week." Denise Brennan-Nelson.'
    quote[26] = '" The best way to predict the future is to invent it." Alan Kay.'
    pressQuote.addEventListener("click", function(event) {
        event.preventDefault();
        randomquote = Math.floor(Math.random() * (quote.length));
        quoteBox.innerHTML = (quote[randomquote]);
    });
};
