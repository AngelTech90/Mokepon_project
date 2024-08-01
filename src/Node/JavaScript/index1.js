/*For  Works with Expreses.js librery we could use the "require" function*/
const express = require("express");
//*For works with cors librery:
const cors = require("cors")

const playersList = []//*List for the ID of our users

class Player{
    constructor(id){
        this.id = id
    }

    asignMokepon(mokepon){
        this.mokepon = mokepon
    }

    refreshPosition(x,y){
        this.x = x,
        this.y = y
    }
};

class Mokepon{
    constructor(name){
        this.name = name
    }
};

const app = express(); //*here we use it like a function that wil call our librery and create the server were our app will be running.

app.use(cors());//*Here we use our cors librery.

app.use(express.json())//*Here we will let that our server run with json posts.



//*CONECCTING AND REGISTERING SERVICE:

//*Here we run the resquest for our server that will create and identify every user of our app.

app.get("/join",(req,res) => {

    const id = `${Math.random()}`;

    const player = new Player(id);

    playersList.push(player);

    res.setHeader("Access-Control-Allow-Origin","*")//*Here we will interact directly with the chrome header for let it connect our app for our function.

    res.send(id);//*Here we return the id of the player

})


//*Here down we configure the port number for run our librery of express,js
app.listen(3000, () => {

    console.log("server Running");
    console.log("------------------------------------------------------");//*Indent.

});


//*POSTING JSON SERVICE:

app.post("/mokeponPlayer/:playerId",(req,res) => {

    const playerId = req.params.playerId || "";//*Here we take our name var of our service and concat a void parameter if we don't take it.

    const playerMk = req.body.mokepon || "";//*Here we take our object in our json's body for take our player's mk.
    const mkPlayer = new Mokepon(playerMk);//*Here we create a new object with our player's mk.

    const playerIndex = playersList.length - 1;

        if (playersList[playerIndex]) {

            playersList[playerIndex].asignMokepon(mkPlayer);

        }

    console.log("Last player registered",playerId);//*Here we show our users id.
    console.log("------------------------------------------------------");//*Indent.

    console.log(playersList[playerIndex])//*Here we show all our users.
    console.log("------------------------------------------------------");//*Indent.

    
    res.end();//*Here we will close our service

});



//*COORDS TRANSFER SERVICE:

    app.post("/mokeponPlayer/:playerId/position", (req, res) => {


        const x = req.body.x || 1;//*Here we take our "x" position.

        const y = req.body.y || 1;//*Here we take our "y" position.

        const playerIndex = playersList.lenght - 1;//*Here we find in our players list the our id
        ;//*Here we find the position were our player id is.

        if (playersList[playerIndex] > 0) {

            player.refreshPosition(x,y);//*Here we aplied our method to take the position

        }
    
        res.end();
    });
