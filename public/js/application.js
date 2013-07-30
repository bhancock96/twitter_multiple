$(document).ready(function() {
  $('#display h2').hide();
  
  $('form').on('submit', function(event){
    event.preventDefault();
    $('#display h2').show();
    $('#button').attr('disabled', 'disabled');
    $.post('/tweet', {tweet: $("#tweet").val()}, function(response){
      $('#tweet-status').html('<p>'+response+'</p>');
      $('#button').removeAttr('disabled');
      $('#display h2').hide();
    });
    
  });
});
