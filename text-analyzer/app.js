var countUniq = function(tokens){
  var uniq = [];
  tokens.forEach(function(wrd){
    if(uniq.indexOf(wrd) === -1) uniq.push(wrd);
  });
  return uniq.length;
}

var analyze = function(){
  $('.js-form').submit(function(event){
    event.preventDefault();
    var userText = $(this).find('#user-text').val();
    // console.log(userText);
    var tokens = userText.toLowerCase().match(/\b[^\s]+\b/g).sort();
    uniqWords = countUniq(tokens);
    // console.log(uniqWords);
    var totalwrds = tokens.length;
    var result = $('.text-report');
    result.find('.js-unq-cnt').text(uniqWords);
    result.find('.js-wrd-cnt').text(totalwrds);
    result.removeClass('hidden');
  });
}
$(function(){
  analyze()
});
