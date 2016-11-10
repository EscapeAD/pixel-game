App.games = App.cable.subscriptions.create({
   channel: "GamesChannel" }, {
    received: function(data){
    // $('#game_list').append(data.message);
    $('#game_list').append('<button>')
  }
});
