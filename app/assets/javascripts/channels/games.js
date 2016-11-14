App.games = App.cable.subscriptions.create({
   channel: "GamesChannel",
 room: 'global' }, {
     connected: function(){
       console.log('Hello Test')
     },

    received: function(data){
    // $('#game_list').append(data.message);
    console.log('test');
    // $('#game_list').append('<button>')
  }
});
