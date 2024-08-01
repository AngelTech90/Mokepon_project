//*HTML elements:

let selectionStructure;//*Var for the template iterals of our selection menu options

let playerId = null;//*This is our var for take the player Id in our post player position function

const selectionBox = $("div-selection-mokepon");//* Const for the div that contain our menu options

let petName = $("span-rename-mokepon");//*Var that contain the span were we see our Mk name

let enemyName = $("name-enemy");//*Var that contain the span were we see our enemy Mk name

let nameMkSpan = $("mokepon-name");//*Span for rename our Mk with a personal name

let finalResult = $("span-combat-result");//*span to show the result of our combat

let atkBox = $("attack-buttons");//*Var that contain our div with the attack buttons

const playerSectionMessage = $("life-score-Player");//* Const with our visible attacks table

const enemySectionMessage = $("enemy-atacks-box");//* Const with the visible enemys attacks table

const hideAttacks = $("game-functionality");//*Div were we contain our elements for rename our Mks

const hideCombatTables = $("div-lifes-game");//*Div were we have our score tables

const hideDivSubTittles = $("div-tittle");//*Div were we have our subtittle

const hideSelectionButton = $("selection-button");//*Div were we contain our Selection Mk button

const hideSelectionDiv = $("div-selection-mokepon");//*Div were we will put our elements of our selection

const imageMkPlayerBox = $("imageMkPlayer");

const imageMkEnemyBox = $("imageMkEnemy");

const mkMapBox = $('mapContainer');//*div with our map

let mkMapSpan = $('mkMapSpan');//*Var four our name in the map

let mkClassColor;//*This var is for change de message color of every attack that we use

let mkClassColorEnemy;//*Thi var is for change the message color of every attack of our enemy

let renameButton = $("Rename-mokepon");//*This buttons is for rename our mokepon visible in our html, we don't affect any internal feature

const mokeponName = $("mokepon-name");

const renameInput = $("rename-button");

let btnNotCallMk = $('No-Rename-Mokepon');//*This is for click and hide the section of our html

let Fire;//*This var is for represents our Raykiou selection input.

let Ice;//*This var is for represents our Crabster selection input.

let Earth;//*This var is for represents our Joka selection input.

let Quetza;//*This var is for represents our Quetzal selection input.

let Truth;

let Rock;//*This var is for represents our Rocker selection input.
