App.games = App.cable.subscriptions.create({
   channel: "GamesChannel",
 room: 'global' }, {
     connected: function(){
       console.log('Hello Test')
     },

    received: function(data){
    $('#game_list').append('<button>')
   	console.log( "data" , data);
  	}
});
