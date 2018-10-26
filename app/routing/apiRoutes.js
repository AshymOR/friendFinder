
let fakeFriendsData = require("../data/friends");

module.exports = function(app) {



    app.get("/api/friends", function(req, res) {
        return res.json(fakeFriendsData);
    })
        app.post("/api/friends", function(req, res) {
               var fakeFriend = req.body
        
        
        
               var totalDifference = 1000000;
        
               for(let i in fakeFriendsData){
        
        
        
                   var diff = 0
                   for (let j in fakeFriendsData[i].scores){
                        diff += Math.abs(parseInt(fakeFriendsData[i].answers[j]) - parseInt(req.body.answers[j]));
        

               }
        
               if (diff < totalDifference) {

             console.log(diff)
             console.log(totalDifference)
        
               totalDifference = diff
               console.log(diff)
        
             var dataResults = {name:fakeFriendsData[i].name, photo: fakeFriendsData[i].photo} ;
        
        
             console.log(dataResults)
        
        }
        }
        
        fakeFriendsData.push(fakeFriend);
        res.send(dataResults)
        
           })
};