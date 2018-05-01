var friendsListArray = require('../data/friend.js');

app = function (app){
  app.get('/api/friends', function(req,res){
    res.json(friendsListArray);
  });

  app.post('/api/friends', function(req,res){
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendsCount = 0;
    var match = 0;

   
    for(var i=0; i<friendsListArray.length; i++){
      var diff = 0;
      for(var d=0; j<newFriendScores.length; d++){
        //   need the logic for finding the difference in score
      }
    }
// still need to find best match, return best match and push data to array
    
  });
};