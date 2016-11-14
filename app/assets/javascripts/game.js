$(document).on('turbolinks:load', function(){

$('#start_button').on('click', function(e){
  e.preventDefault();
  $('#game_list').append('<button>')
  $.ajax({
    url: "/",
    method: 'post',
    data: {name: "test"},
    dataType: 'json'
  })
})



});
