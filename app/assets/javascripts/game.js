$(document).on('turbolinks:load', function(){

$('#start_button').on('click', function(e){
  var donut = $('li').add('text')
  e.preventDefault();
  $('#game_list').append('<button>')
  console.log('test');
})



});
