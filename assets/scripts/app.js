//roster object contains array called players
var newPlayerForm = $('#new-player');
newPlayerForm.submit(function(e){
    e.preventDefault();
    addPlayer(this);
    this.reset()
})

var roster = {
    players:[]
}
var playerName = "";
// Create a constructor for Player that accepts 3 arguments
// , Name, Position, Number.

function Player(name, position, num, id) {
   
    this.name = name;
    this.position = position;
    this.num = num;
    this.id = id;
    
};


function addPlayer(form) {
   // get values from input fields
   var playerName = form['playerName'].value;
   var position = form['playerPosition'].value
   var num = form['jerseyNumber'].value
   var newPlayer = new Player(playerName, position, num, 0);
   roster.players.push(newPlayer); 
   drawAll(); 
} 

function drawAll(){
 //find the container - .player-roster 
 //clear the container...  
 //Loop through all the players
 //call the createPlayerCard
 var container = $('.player-roster');
 container.empty();
 for (var i = 0; i < roster.players.length; i++) {
     var player = roster.players[i];
     var $card = creatPlayerCard(player);
     //append the card to the roster
     container.append($card);
 }
}

function creatPlayerCard(playerObj){
    var $card = $('<div class="player-card">');
    var $removeButton = $('<button class="btn btn-danger inline">Remove to Save $$$</button>');
    $removeButton.click(function(){
        var redrawAll = true;
      
        dropPlayer(playerObj, redrawAll);
        // option to remove card w/o redrawing the array.
        if(!redrawAll){
          $card.remove();
        }
    });
    
    var btnWarpper = $('<p>');
    btnWarpper.append($removeButton);
    $card.append(btnWarpper);
    //shorthand for the above...
    //$('<p>').append($removeButton).appendTo($card);
    $card.append('<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="Profile Picture">')
    $card.append('<p>' + playerObj.name + '</p>')
    $card.append('<p>' + playerObj.position + '</p>')
    $card.append('<p>' + playerObj.num + '</p>')
    return $card;  
}

function dropPlayer(player, doRedraw){
    //remove the player from the array
   
    var index = roster.players.indexOf(player);
    
    roster.players.splice(index,1);
    if(doRedraw){
        drawAll();
    }
}

function getIndex(e){
   
    var elem = $(e.target);
    var currentId = elem.closest('[id]').attr('id');
    for (var i = 0; i < roster.players.length; i++){
        if(currentId === roster.players[i].name){
           var index = i;
           removePlayer(index);
        }
    }
    return -1;
}

// remove
function removePlayer(index){
    var playerIndex = getIndex(name);

    if(playerIndex === -1){
        return;
    }
// at this index - remove 1 object and return updated array
    roster.players.splice(index, 1)   
}

// When the Add button is pressed, a new player
//  is created and added to the Players array.

// function draw(obj) {
// //    obj.id = obj.name;
//    var playerElem = document.createElement('div');
//    playerElem.id = obj.id;
//    $(".player-roster").prepend("<div class='player-card'></div>")
//     $(".player-roster").prepend("<div id='max'></div>")
//    var pCard = $(".player-roster").find(".player-card")[0];
//    pCard = $(pCard);

//    pCard.append('<p><button onclick="getIndex(event)" class="btn btn-danger" role="button">Cut</button></p>')
//    pCard.append('<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="Profile Picture">')
//    pCard.append('<p>' + obj.name + '</p>')
//    pCard.append('<p>' + obj.position + '</p>')
//    pCard.append('<p>' + obj.num + '</p>')
   
   
// } 



