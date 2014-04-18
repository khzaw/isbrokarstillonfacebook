$(function() {
  $('.question').textillate({ 
    in: { effect: 'fadeIn', shuffle: true, delayScale: 1.5 },
  });

  var brokar = '1431546801';
  $.get('http://graph.facebook.com/' + brokar, function(data, status, xhr) {
    $(".answer").text("Yes :)");
  }).fail(function() {
    $(".answer").text("No :(");
  }).always(function() {
    $(".answer").show({duration: 1200});
  });
});
