const mapBox = $('mapContainer');//*Div that contains our canvas 

const mokeponMap = $('mokeponMap');//*Canvas of our map

let mapDimension = mokeponMap.getContext("2d");//*This var is for take our dimension of our canvas. that is 2d

const resetMoveButton = $('resetMoveButton');//*This buttons is for reset our game

let mapBackground = new Image();//*This var is a new object created for render our map image inside our canvas

let mkColision = 0;//*This is a very important var, because with this we moderate the colisions and functions calls 

let downPlayer = 0;//*Var for the down box of our player.

let upPlayer = 0;//*Var for the up box of our player.

let leftPlayer = 0;//*Var for the left box of our player.

let rightPlayer = 0;//*Var for the right box of our player.