//Main JS archive of the project

const logIn = valor => console.log(valor);//We are asigning "the console.log()" for only need "logIn()" to use it

const $ = selector => document.getElementById(selector);//Here we are asigning the value of the function "document.getElementById()" for only need write "$("")" to use it

const T = selectir => document.getElementsByClassName(selectir);//We can take elements by class

const seeAll = selectora => document.querySelectorAll(selectora);//We use this command in the console for a quicker DOM work

//This function is for generate random Numbers
function randomMonster(min,max) {

   return Math.floor(Math.random() * (max - min + 1) + min) ;

} 

//*We are making an asyncronus request using fetch to access for our backend part
function joinGame(){

   fetch("http://localhost:8081/join")
      .then(function(res){

      logIn(res);
      if(res.ok){

            res.text()
               .then(function(response){

                  logIn(response);

                  playerId = response;//*Here we save our player id

               })

      }

   })

}


//*When we'll use this with "player" const like param:
function postPlayerInfo(player){

   fetch(`http://localhost:8081/mokeponPlayer/:${playerId}`,{

   method: "post",//*Here we define our method

   headers:{

      "Content-Type": "application/json"//*Here we define the data type of the response

   },

  //*Here we define our json response body and change it for a string type object: 
   body: JSON.stringify({

     mokepon: player //*Here we put the info

   })
})
}

//*This is a function that take constanly the positions of our player and send it in jsons for our backend with Node.js
function takePlayerPosition(x,y){

   //*Here we are fetching with our backend.
      fetch(`http://localhost:8081/mokeponPlayer/:${playerId}/position`,{

            method: "post",//*Here we define our method

            headers:{

               "Content-Type": "application/json"//*Here we define the data type of the response

            },

    //*Here we define our json response body and change it for a string type object: 
            body: JSON.stringify({

               x,//*x player position
               y//*y player position

            })
      })

}


//*Global Vars:

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

const mapBox = $('mapContainer');//*Div that contains our canvas 

const mokeponMap = $('mokeponMap');//*Canvas of our map

let mapDimension = mokeponMap.getContext("2d");//*This var is for take our dimension of our canvas. that is 2d

const resetMoveButton = $('resetMoveButton');//*This buttons is for reset our game

let mapBackground = new Image();//*This var is a new object created for render our map image inside our canvas

let renameButton = $("Rename-mokepon");//*This buttons is for rename our mokepon visible in our html, we don't affect any internal feature

const mokeponName = $("mokepon-name");

const renameInput = $("rename-button");

let btnNotCallMk = $('No-Rename-Mokepon');//*This is for click and hide the section of our html

let Fire;//*This var is for represents our Raykiou selection input.

let Ice;//*This var is for represents our Crabster selection input.

let Earth;//*This var is for represents our Joka selection input.

let Quetza;//*This var is for represents our Quetzal selection input.

let Rock;//*This var is for represents our Rocker selection input.


/*Combat function elements */

let atackStructure;//*Var for the template iterals

let i  = 0;//*Iterator vars for our loops

let mokepons = [];//*Array for contain our Mks

let enemyMokepons = []//*Array for contain enemy's Mks

let enemy = {}//*This var is for take the info of the enemy were we are having colisions.

let sequency = 5;//*var with the turns sequency

let mkClass = '';//*var to contain the Class of all the attacks that we will use

let mkClassEnemy = '';//*Var to contain the class of the atacks of enemy

let typeMk = [],typeMkEnemy = [];//* Arrays for contain the type info of our mk 

let turn = 1;//*This is a dinamic var that we will reset in every button of our atacks

let atkMokepon = [];//*Array for abstract the information of the atack name of Every mk that we selected

let elementalAttack;//*Var for contain every attack that we clicked

let elementalAttackEnemy;//*Var for contain every random generate attack enemy

let victoriesPlayer = 0 ;//*Var for contain the number of our victories

let victoriesEnemy = 0;//*Var fo contain the enemy number of victories

let advantagePlayer = 0;//*Var for give more turns for our Mk

let advantageEnemy = 0;//*Var for give more turns for the enemy

let mkMapImage = new Image();//*Var for generate a image object for our mkMap rendering

let enemyImage = new Image();//*Var for generate an image object for our enemies map rendering

let player = {};//*This is our dimanic object efor very time we select a mokepon we get the information of the selected Mokepon.

let mapEnemies = [];//*This arrays is for take all the objects of the mokepons that we see in our map

let speed = 4;//*This var is for the default value for move our mokepon in our map.

let maxValue = 4;//*This value is for 

let speedEnemy = 2;//*This is the default value for move our enemies mk in maps.

let index = 0;//*This var is for take the index of atack of our enemy mokepon in combat and take it out

let endCombat = false;//*This var is chech if our combat end.

let inputChecked = false//*This var let us valid if we select a mokepon.

let mkColision = 0;//*This is a very important var, because with this we moderate the colisions and functions calls 

let downPlayer = 0;//*Var for the down box of our player.

let upPlayer = 0;//*Var for the up box of our player.

let leftPlayer = 0;//*Var for the left box of our player.

let rightPlayer = 0;//*Var for the right box of our player.


//*This object is for management and take all the intervals for our animations and enemies move ins our map, just like we have 12 total enemies, our object have 12 total properties for take every single animation:
let intervalsIdList = {

    repeaterLists: "",
    repeaterReverseLists: "",

    repeaterLists2: "",
    repeaterReverseLists2: "",

    repeaterLists3: "",
    repeaterReverseLists3: "",

    repeaterLists4: "",
    repeaterReverseLists4: "",

    repeaterLists5: "",
    repeaterListsReverse5: "",

    repeaterLists6: "",
    repeaterListsReverse6: "",

    repeaterLists7: "",
    repeaterReverseLists7: "",

    repeaterLists8: "",
    repeaterReverseLists8: "",

    repeaterLists9: "",
    repeaterReverseLists9: "",

    repeaterLists10: "",
    repeaterReverseLists10: "",

    repeaterLists11: "",
    repeaterReverseLists11: "",

    repeaterLists12: "",
    repeaterReverseLists12: "",

   }



//*Here we are creating the spawn point using a random number in diferent specific parameters of our enemies, the +22 was for modify to convenience the spawn number faster.

//*The first "[0]" element represents the "x" position value in our map, the second "[1]" element represents the "y"
let enemiesPositions = {

    enemy1:[randomMonster(189,222 + 12),randomMonster(272,294 + 12)],
    enemy2:[randomMonster(476,498 + 12),randomMonster(450,490 + 12)],
    enemy3:[randomMonster(291,313 + 12),randomMonster(376,398 + 12)],
    enemy4:[randomMonster(67,89 + 12),randomMonster(193,265 + 12)],
    enemy5:[randomMonster(91,103 + 12),randomMonster(382,404 + 12)],
    enemy6:[randomMonster(494,516 + 12),randomMonster(387,409 + 12)],

    enemy7:[randomMonster(162,184 + 12),randomMonster(367,389 + 12)],
    enemy8:[randomMonster(382,404 + 12),randomMonster(125,147 + 12)],
    enemy9:[randomMonster(291,313 + 12),randomMonster(128,150 + 12)],
    enemy10:[randomMonster(178,204 + 12),randomMonster(201,223 + 12)],
    enemy11:[randomMonster(303,313 + 12),randomMonster(31,43 + 12)],
    enemy12:[randomMonster(78,100 + 12),randomMonster(56,78 + 12)],

}



/*This let us create mokepons creating objects using the constructor of our class, to make memory spaces 
were we can idex specific information for ever single mokepon that we are creating in our game*/
      class Mokepon {

         constructor(image,input,label,name,x,y,width,height,idMk){

         this.image =image;
         this.input = input;
         this.atacks = [];
         this.label = label;
         this.name = name;
         this.type = [];
         this.x = x;
         this.y = y;
         this.width = 70;
         this.height = 70;
         this.idMk = randomMonster(1,1000000);
   
         }

      }


   //*This class is for every default atack of our mokepons, takin the id from our html, color too and other visible properties:
      class Atack{

         constructor(atkName,id,classMk,color,atackId){

         this.atkName = atkName;
         this.id = id;
         this.classMk = classMk;
         this.color = color;
         this.atackId = atackId

         }

      }



      /* Here we create 6 mokepons using our class and idexing information inside our new objects */
      let Raykiou = new Mokepon("assets/images/i03_raykiou.png",'Raykiou-input',"label-raykiou","Raykiou",0,0);
      
      let Joka = new Mokepon("assets/images/i01_joka.png",'Joka-input',"label-joka","Joka",0,0);
      
      let Crabster = new Mokepon("assets/images/i02_Crabster.png",'crabster-input',"label-crabster","Crabster",0,0);
      
      let Rocker = new Mokepon("assets/images/Rocker.png","Rocker-input","label-rocker","Rocker",0,0);
      
      let Truthler = new Mokepon("assets/images/Truthler.png","Truthler-input","label-truthler","Truthler",0,0);
      
      let Quetzal = new Mokepon("assets/images/Quetzal.png","Quetzal-input","label-quetzal","Quetzal",0,0);
      
   
//*Here we define our first enemies, and we use like positions our enemiesPositions object for take the random spawn position in map:
   let enemyRaykiou = new Mokepon("assets/images/i03_raykiou.png",'Raykiou-input',"label-raykiou","Raykiou",enemiesPositions.enemy3[0],enemiesPositions.enemy3[1]);

   let enemyJoka = new Mokepon("assets/images/i01_joka.png",'Joka-input',"label-joka","Joka",enemiesPositions.enemy1[0],enemiesPositions.enemy1[1]);
      
   let enemyCrabster = new Mokepon("assets/images/i02_Crabster.png",'crabster-input',"label-crabster","Crabster",enemiesPositions.enemy7[0],enemiesPositions.enemy7[1]);

   let enemyRocker = new Mokepon("assets/images/Rocker.png","Rocker-input","label-rocker","Rocker",enemiesPositions.enemy6[0],enemiesPositions.enemy6[1]);

   let enemyTruthler = new Mokepon("assets/images/Truthler.png","Truthler-input","label-truthler","Truthler",enemiesPositions.enemy4[0],enemiesPositions.enemy4[1]);

   let enemyQuetzal = new Mokepon("assets/images/Quetzal.png","Quetzal-input","label-quetzal","Quetzal",enemiesPositions.enemy9[0],enemiesPositions.enemy9[1]);

   
   //*Copied enemies objects for add to our map enemies array to use it in our map and combat:
   let copiedEnemyRaykiou = new Mokepon("assets/images/i03_raykiou.png",'Raykiou-input',"label-raykiou","Raykiou",enemiesPositions.enemy2[0],enemiesPositions.enemy2[1]);

   let copiedEnemyJoka = new Mokepon("assets/images/i01_joka.png",'Joka-input',"label-joka","Joka",enemiesPositions.enemy8[0],enemiesPositions.enemy8[1]);
   
   let copiedEnemyCrabster = new Mokepon("assets/images/i02_Crabster.png",'crabster-input',"label-crabster","Crabster",enemiesPositions.enemy5[0],enemiesPositions.enemy5[1]);

   let copiedEnemyTruthler = new Mokepon("assets/images/Truthler.png","Truthler-input","label-truthler","Truthler",enemiesPositions.enemy10[0],enemiesPositions.enemy10[1]);

   let copiedEnemyQuetzal = new Mokepon("assets/images/Quetzal.png","Quetzal-input","label-quetzal","Quetzal",enemiesPositions.enemy11[0],enemiesPositions.enemy11[1]);


   let copiedEnemyRocker = new Mokepon("assets/images/Rocker.png","Rocker-input","label-rocker","Rocker",enemiesPositions.enemy12[0],enemiesPositions.enemy12[1]);



/* In the properties of our class we have some arrays, so we are using the "push()" to idex new objects with the information of our mokepons atacks */
   mokepons.push(Raykiou,Joka,Crabster,Quetzal,Rocker,Truthler);


   enemyMokepons = [...mokepons];//* Here we are using our spread operator to take another arrays with our mokepons for use it in our enemy atacks


   //*Here we have our array to take the enemies objects and render all our enemies in our map
   mapEnemies.push(enemyRaykiou,enemyCrabster,enemyJoka,enemyQuetzal,enemyRocker,enemyTruthler, copiedEnemyRaykiou, copiedEnemyCrabster, copiedEnemyJoka, copiedEnemyTruthler, copiedEnemyRocker, copiedEnemyQuetzal);


//*Here we create the Raykiou atacks and properties
      Raykiou.atacks.push(

         new Atack("Flare",'flare','fire','Fire','flareAtack'),
         new Atack("Ionic Roar", 'ionicRoar', 'thunder', 'Thunder','ionicRoarAtack'),
         new Atack("Incinerate",'incinerate','fire','Fire', 'incinerateAtack'),
         new Atack("Fire Punch",'fire-punch','fire','Fire', 'firePunchAtack'),
         new Atack("Rock Spikes",'rock-spikes','earth','Earth','rockSpikesAtack'),
         
      );

   Raykiou.type.push('fire','thunder');//*We push the types in the Raykiou type propertie


//*Here we create the Joka atacks and properties
      Joka.atacks.push(

         new Atack("Water Stream",'waterStream' ,'water','Water','waterStreamAtack'),
         new Atack("Spring" ,'spring' , 'water', 'Water', 'springAtack'),
         new Atack("Vine",'vine' ,'earth','Earth','vineAtack'),
         new Atack("Avalanche",'avalanche' ,'earth','Earth', 'avalancheAtack'),
         new Atack("EarthQuake",'earthQuake' ,'earth','Earth', 'earthquakeAtack'),

      );
   Joka.type.push('earth','water');//*We push the types in the Joka type propertie


//*Here we create the Crabsters atacks and properties
      Crabster.atacks.push(

         new Atack("Ice Spikes",'iceSpikes','ice','Ice','iceSpikesAtack'),
         new Atack("Blizzard",'blizzard','ice','Ice','blizzardAtack'),
         new Atack("Frost",'frost','ice','Ice','frostAtack'),
         new Atack("Fire Punch",'fire-punch','fire','Fire','firePunchAtack'),
         new Atack("Steel Claw",'steelClaw','steel','Steel','steelClawAtack'),
      );

   Crabster.type.push('ice','steel');//*We push the types in the Crabster type propertie


//*Here we create the Truthler atacks and properties
      Truthler.atacks.push(

         new Atack("Bolt", 'bolt', 'thunder', 'Thunder', 'boltAtack'),
         new Atack("Rain of Spikes",'rainOfSpikes','steel','Steel','rainOfSpikes'),
         new Atack("Fire Shoot",'fireShoot','fire','Fire','fireShootAtack'),
         new Atack("Blitz",'blitz','thunder','Thunder','blitzAtack'),
         new Atack("Iron Whip",'ironWhip','steel','Steel','ironWhipAtack')

      );

   Truthler.type.push('thunder','steel');//*We push the types in the Truthler type propertie


//*Here we create the Quetzal atacks and properties
      Quetzal.atacks.push(


         new Atack("Tornado",'tornado','air','Air','tornadoAtack'),
         new Atack("Water Stream",'waterStream','water','Water','waterStreamAtack'),
         new Atack("Storm",'storm','water','Water','stormAtack'),
         new Atack("Hurricane",'hurricane','air','Air','hurricaneAtack'),
         new Atack("Breath",'breath','air','Air','breathAtack')

      );

   Quetzal.type.push('air','water');//*We push the types in the Quetzal type propertie

//*Here we create the Rocker atacks and properties
      Rocker.atacks.push(


   new Atack("Fracture",'fracture','earth','Earth','fractureAtack'),
   new Atack("Metal Smash",'metalSmash','steel','Steel','metalSmashAtack'),
   new Atack("Titanium Kick",'titaniumKick','steel','Steel','titaniumKickAtack'),
   new Atack("Rock Shoter",'rockShooter','earth','Earth','rockShooterAtack'),
   new Atack("Meteor",'meteor','earth','Earth','meteorAtack')

      );

   Rocker.type.push('earth','steel');//*We push the types in the Rocker type propertie
   

   //*This is for when our page load we start the game  
      window = addEventListener('load',startGame);



   //*This is for frozen our principal objects for get our mokepons information for our game
      Object.freeze(Raykiou,Joka,Truthler,Rocker,Crabster,Quetzal)



//*With this function we generate a unic id number for every single mokepon object in our program:
function setIdsOfAllMokepons(){

   //*We define the idMk propertie using our random Monster function for asign the number value of our propertie:
   
   Raykiou.idMk = randomMonster(1,1000000);
   Joka.idMk = randomMonster(1,1000000);
   Crabster.idMk = randomMonster(1,1000000);
   Truthler.idMk = randomMonster(1,1000000);
   Rocker.idMk = randomMonster(1,1000000);
   Quetzal.idMk = randomMonster(1,1000000);
   
   enemyRaykiou.idMk = randomMonster(1,1000000);
   enemyJoka.idMk = randomMonster(1,1000000);
   enemyCrabster.idMk = randomMonster(1,1000000);
   enemyTruthler.idMk = randomMonster(1,1000000);
   enemyRocker.idMk = randomMonster(1,1000000);
   enemyQuetzal.idMk = randomMonster(1,1000000);
   
   copiedEnemyRaykiou.idMk = randomMonster(1,1000000);
   copiedEnemyJoka.idMk = randomMonster(1,1000000);
   copiedEnemyCrabster.idMk = randomMonster(1,1000000);
   copiedEnemyTruthler.idMk = randomMonster(1,1000000);
   copiedEnemyRocker.idMk = randomMonster(1,1000000);
   copiedEnemyQuetzal.idMk = randomMonster(1,1000000);
   
}

//*This function is for constanly draw and clear our player in map and all our enemies in map:
function startAnimationsForever(){ 
   
   //*We start our interval 
   setInterval(() => {
         
      mapDimension.clearRect(player.x,player.y,player.width,player.height);//*We clear our player image in our map

   //*We use a loop for abstract all our objects of our array that contains the info or the 12 enemies that will be rended in our map, and we clear their images
      for ( let index = 0; index < mapEnemies.length; index++) {
      
         mapDimension.clearRect(mapEnemies[index].x,mapEnemies[index].y,mapEnemies[index].width,mapEnemies[index].height);
         
      }
      
      //*Here we render our map:
      mapDimension.drawImage(mapBackground,0,0,mokeponMap.width,mokeponMap.height);

      //*Here we render our player image in our map:
      mapDimension.drawImage(mkMapImage,player.x,player.y,player.width,player.height);

      //*Here we draw all our enemies:
      mapEnemiesRendering();

}, 30);

}


//*This function is for take of our mokepons all the defined and unmutable atacks in our enemies:
function setAllenemiesAtacks(){

   for(let i = 0; i < Joka.atacks.length; i++){

      enemyCrabster.atacks.push(Crabster.atacks[i]);
      enemyRaykiou.atacks.push(Raykiou.atacks[i]);
      enemyRocker.atacks.push(Rocker.atacks[i]);
      enemyQuetzal.atacks.push(Quetzal.atacks[i]);
      enemyJoka.atacks.push(Joka.atacks[i]);
      enemyTruthler.atacks.push(Truthler.atacks[i]);

      copiedEnemyCrabster.atacks.push(Crabster.atacks[i]);
      copiedEnemyJoka.atacks.push(Joka.atacks[i]);
      copiedEnemyQuetzal.atacks.push(Quetzal.atacks[i]);
      copiedEnemyRaykiou.atacks.push(Raykiou.atacks[i]);
      copiedEnemyRocker.atacks.push(Rocker.atacks[i]);
      copiedEnemyTruthler.atacks.push(Truthler.atacks[i]);

   }
}


//*This is for prevent troubles and bugs separating the source that our enemy and player takes for their Mokepons, exactly when the enemy Mokepon are the same Mokepon that the player Mokepon:
function enemySeparatorOfPlayer(){

   if(player.idMk == enemy.idMk){

   //*Statement for check Raykiou
   if(enemy.idMk == mapEnemies[0].idMk){

       enemy = new Mokepon(Raykiou.image, Raykiou.input, Raykiou.label, Raykiou.name, Raykiou.x, Raykiou.y, Raykiou.width, Raykiou.height, Raykiou.idMk);

   }  else if(enemy.idMk == mapEnemies[6].idMk){

       enemy = new Mokepon(Raykiou.image, Raykiou.input, Raykiou.label, Raykiou.name, Raykiou.x, Raykiou.y, Raykiou.width, Raykiou.height, Raykiou.idMk);

   }


      //*Statement for check Joka
   if(enemy.idMk == mapEnemies[2].idMk){

       enemy = new Mokepon(Joka.image, Joka.input, Joka.label, Joka.name, Joka.x, Joka.y, Joka.width, Joka.height, Joka.idMk);

   }  else if(enemy.idMk == mapEnemies[8].idMk){

       enemy = new Mokepon(Joka.image, Joka.input, Joka.label, Joka.name, Joka.x, Joka.y, Joka.width, Joka.height, Joka.idMk);

   }


      //*Statement for check Crabster
   if(enemy.idMk == mapEnemies[1].idMk){

       enemy = new Mokepon(Crabster.image, Crabster.input, Crabster.label, Crabster.name, Crabster.x, Crabster.y, Crabster.width, Crabster.height, Crabster.idMk);

   }  else if(enemy.idMk == mapEnemies[7].idMk){

       enemy = new Mokepon(Crabster.image, Crabster.input, Crabster.label, Crabster.name, Crabster.x, Crabster.y, Crabster.width, Crabster.height, Crabster.idMk);

   }

      //*Statement of Quetzal
   if(enemy.idMk == mapEnemies[3].idMk){

       enemy = new Mokepon(Quetzal.image, Quetzal.input, Quetzal.label, Quetzal.name, Quetzal.x, Quetzal.y, Quetzal.width, Quetzal.height, Quetzal.idMk);

   }  else if(enemy.idMk == mapEnemies[11].idMk){

       enemy = new Mokepon(Quetzal.image, Quetzal.input, Quetzal.label, Quetzal.name, Quetzal.x, Quetzal.y, Quetzal.width, Quetzal.height, Quetzal.idMk);

   }


      //*Statement of Rocker
   if(enemy.idMk == mapEnemies[4].idMk){

       enemy = new Mokepon(Rocker.image, Rocker.input, Rocker.label, Rocker.name, Rocker.x, Rocker.y, Rocker.width, Rocker.height, Rocker.idMk);

   }  else if(enemy.idMk == mapEnemies[10].idMk){

       enemy = new Mokepon(Rocker.image, Rocker.input, Rocker.label, Rocker.name, Rocker.x, Rocker.y, Rocker.width, Rocker.height, Rocker.idMk);

   }

      //*Statement of Truthler
   if(enemy.idMk == mapEnemies[5].idMk){

       enemy = new Mokepon(Truthler.image, Truthler.input, Truthler.label, Truthler.name, Truthler.x, Truthler.y, Truthler.width, Truthler.height, Truthler.idMk);

   }  else if(enemy.idMk == mapEnemies[9].idMk){

       enemy = new Mokepon(Truthler.image, Truthler.input, Truthler.label, Truthler.name, Truthler.x, Truthler.y, Truthler.width, Truthler.height, Truthler.idMk);

   }


   setAllenemiesAtacks();

   }

}



//*This function cleans and reset our combat elements for a new combat once a combat ends, hide our combat elements and render again our map:
function cleanAtacksOfCombat(){


   //*If our combat Ends we render again our map and we hide our combat elements
   if(endCombat == true){
   
      sequency = 5;//*Our combat ends so we reset our combat sequency for restart our combat


      hideAttackElements();//*We hide our combat elements.
      mapRendering();//*We rendr again our map.


   //*Here we are taking every atack of our player in creen by their id and we are removing it of our html.
      for(atackIdMk of player.atacks){
   
         removedCombatElement = $(`${atackIdMk.atackId}`);
         removedCombatElement.remove();

      }

      enemySectionMessage.innerHTML = '';//*Here we clean our enemy atacks of screen

      //*Our combat ends, so we are reseting the victories of our enemy and player:
      victoriesEnemy = 0;//*
      victoriesPlayer = 0;

      //*And here we are showing the reseted victories in our HTML:
      $("victories-Span-Player").innerHTML = victoriesPlayer;
      $('victories-Span-enemy').innerHTML = victoriesEnemy;

      //*Every single time that we make an attack we disble our atack button, here we are making it abled again for a new combat:
      for(let i = 0; i < player.atacks.length; i++){

         $(`${player.atacks[i].id}`).disabled = false;

      }
      
      removeDefeatedEnemyOfMap()//*Here we check if we have to restore our enemy's atack.

   }//*This condition render our map and hide our combat elements once a combat ends.

}


//*This function hides all the combat elements:
function hideAttackElements(){

         //HIDE ELEMENTS

      /*We will acceed for the "style" 
      propertie for hide the elements that 
      we don't need at the start of the game"*/
   
      hideAttacks.style.display = "none";//Here we show our div attacks
      
      atkBox.style.display = "none";

      hideCombatTables.style.display = "none";

      playerSectionMessage.style.display = "none";

      enemySectionMessage.style.display = "none";

      mkMapBox.style.display = 'none';

   // mapBox.style.display = "none";

}


//*In this function we use four params for define the advantages our disavantages of our player and enemy:
/*We use Mk1 for manipulate the 1st advantage of our player, Mk2 for 2nd. And we do the dame with MkEnemy1 and Mkenemy2 */
function typeSetter(Mk1,MkEnemy1,Mk2,MkEnemy2){
   
      //* Statement for every time that our First Type got an advantage:

         //*Situatios were Fire wins:
         if(Mk1 == 'fire' && MkEnemy1 == 'ice'|| Mk1 == 'fire' && MkEnemy1 == 'thunder' || Mk1 == 'fire' && MkEnemy1 == 'steel'||
   
         //*Situatios were Ice wins:
         Mk1 == 'ice' && MkEnemy1 == 'water' || Mk1 == 'ice' && MkEnemy1 == 'earth' || Mk1 == 'ice' && MkEnemy1 == 'air'||
   
         //*Situatios were Earth wins:
         Mk1 == 'earth' && MkEnemy1 == 'fire' || Mk1 == 'earth' && MkEnemy1 == 'thunder' || Mk1 == 'earth' && MkEnemy1 == 'steel'||
   
         //*Situatios were Thunder wins:
         Mk1 == 'thunder' && MkEnemy1 == 'ice' || Mk1 == 'thunder' && MkEnemy1 == 'steel' || Mk1 == 'thunder' && MkEnemy1 == 'air' || 
         
         //*Situatios were Water wins:
         Mk1 == 'water' && MkEnemy1 == 'fire' || Mk1 == 'water' && MkEnemy1 == 'earth' || Mk1 == 'water' && MkEnemy1 == 'thunder' || 
   
         //*Situatios were Steel wins:
         Mk1 == 'steel' && MkEnemy1 == 'ice' || Mk1 == 'steel' && MkEnemy1 == 'water' || Mk1 == 'steel' && MkEnemy1 == 'air' || 
   
         //*Situatios were Air wins:
         Mk1 == 'air' && MkEnemy1 == 'fire' || Mk1 == 'air' && MkEnemy1 == 'water' || Mk1 == 'air' && MkEnemy1 == 'earth'){
   
               advantagePlayer++;//*We increase our advantage in combat for our player.
   
               } else {
   
                  advantageEnemy++;//*We increase our advantage in combat for our enemy.
   
               }
   

            //*Statement for every time that our Second Type got an advantage: 

               //*Situatios were fire wins:
            if( Mk2 == 'fire' && MkEnemy2 == 'ice'|| Mk2 == 'fire' && MkEnemy2 == 'thunder' || Mk2 == 'fire' && MkEnemy2 == 'steel'||
   
               //*Situatios were ice wins:
               Mk2 == 'ice' && MkEnemy2 == 'water' || Mk2 == 'ice' && MkEnemy2 == 'earth' || Mk2 == 'ice' && MkEnemy2 == 'air'||
         
               //*Situatios were earth wins:
               Mk2 == 'earth' && MkEnemy2 == 'fire' || Mk2 == 'earth' && MkEnemy2 == 'thunder' || Mk2 == 'earth' && MkEnemy2 == 'steel'||
         
               //*Situatios were thunder wins:
               Mk2 == 'thunder' && MkEnemy2 == 'ice' || Mk2 == 'thunder' && MkEnemy2 == 'steel' || Mk2 == 'thunder' && MkEnemy2 == 'air' || 
               
               //*Situatios were water wins:
               Mk2 == 'water' && MkEnemy2 == 'fire' || Mk2 == 'water' && MkEnemy2 == 'earth' || Mk2 == 'water' && MkEnemy2 == 'thunder' || 
         
               //*Situatios were steel wins:
               Mk2 == 'steel' && MkEnemy2 == 'ice' || Mk2 == 'steel' && MkEnemy2 == 'water' || Mk2 == 'steel' && MkEnemy2 == 'air' || 
         
               //*Situatios were air wins:
               Mk2 == 'air' && MkEnemy2 == 'fire' || Mk2 == 'air' && MkEnemy2 == 'water' || Mk1 == 'air' && MkEnemy2 == 'earth' ){
   
                  advantagePlayer++;//*We increase our advantage in combat for our player.
   
                  } else{
   
                     advantageEnemy++;//*We increase our advantage in combat for our enemy.
   
                  }
   
}

//*This functions is for load or virtual buttons in screen:
function startVirtualMoveButtons(){

   $('move-up').onmousedown = () => {

      player.y = player.y - 8

      checkMkColisions();//*Here we check our colisions

   }

   $('move-down').onmousedown = () => {

      player.y = player.y + 8;

      checkMkColisions();//*Here we check our colisions

   }

   $('move-right').onmousedown = () => {

      player.x = player.x + 8;

      checkMkColisions();//*Here we check our colisions

   }

   $('move-left').onmousedown = () => {

      player.x = player.x - 8;

      checkMkColisions();//*Here we check our colisions

   }

}


//*This function is for put in our dom the selection MK inputs:
function renderInputsMk(){

   mokepons.forEach((mokepon) => {


      /*We can abstract HTML code pieces inside our js vars and objects, and we can index information of js inside our html directly  */
         selectionStructure = `
         
         <input type ="radio" name ="pets" id =${mokepon.input} class ="button-selection-mokepon" />
               <label id = ${mokepon.label} class ="label-mokepon" for = ${mokepon.input}> 
   
                  <img src= ${mokepon.image} class = "image-label-mokepon">
                  <p class = "name-label-mokepon">${mokepon.name}</p>
   
               </label>
               
               `;
   
               selectionBox.innerHTML += selectionStructure
      })
   
      /*Here we abstract the input of our mk to check if someone is checked or isn't */
      Fire = $(Raykiou.input);
      
      Ice = $(Crabster.input);
         
      Earth = $(Joka.input);
   
      Quetza= $(Quetzal.input);
   
      Truth = $(Truthler.input);
   
      Rock = $(Rocker.input);

}


//*This function is used in every move function of our player have colisions with every enemy in map:
function checkMkColisions(){

   /*This is for see our map colisions and but the borders of it*/

   //*We use like reference the max amount of positions of our map, just like the "border", and we define the limit were our player can move.

   //*This is for the border on left side:
         if(player.x === 564){
   
           speed = 0;
           player.x = player.x - 4;
   
       }

      //*Here we are giving again our player speed once of we don't try to go our of our map:
         if(player.x != 564){
   
              speed = maxValue;
   
       }


   //*this is for border of down side:
         if (player.y === 564){
   
              speed = 0;
           player.y = player.y - 4;
   
       }

         //*Here we are giving again our player speed once of we don't try to go our of our map: 
         if(player.y != 564){
   
              speed = maxValue;
   
       }
   
   
   //*This is for border on top side:
         if(player.y < 0){
   
              speed = 0;
           player.y = player.y + 4;
   
       } 

         //*Here we are giving again our player speed once of we don't try to go our of our map:
         if(player.y > 0){
   
              speed = maxValue;
   
       }
   
   
   //*This is for the colsion with the 
         if(player.x < 0){
   
              speed = 0;
           player.x = player.x + 4;
   
       }

         //*Here we are giving again our player speed once of we don't try to go our of our map:
         if(player.x > 0){
   
              speed = maxValue;
   
       }     
   

         //*Here we use a box 2d model to get colisions to our map:
               downPlayer = player.y + player.width;
               upPlayer = player.y;
               rightPlayer = player.x + player.width;
               leftPlayer = player.x;
   
   //*In this loop we work with mapEnemies list
   for (let index = 0; index < mapEnemies.length; index++) {

   
   //*With this we see if at least once map enemie have colisions with our player, then we check who enemy and why:
       if(

           downPlayer < mapEnemies[index].y + 43||
           upPlayer > mapEnemies[index].y + mapEnemies[index].height - 43||
           rightPlayer < mapEnemies[index].x + 43 ||
           leftPlayer > mapEnemies[index].x + mapEnemies[index].width - 43

       ){
   } else{

//*This for check 1 mk
       if(

               downPlayer < mapEnemies[0].y + 43||
               upPlayer > mapEnemies[0].y + mapEnemies[0].height - 43||
               rightPlayer < mapEnemies[0].x + 43 ||
               leftPlayer > mapEnemies[0].x + mapEnemies[0].width - 43

       ){}   else{

           mkColision = mkColision + 1;//*Here we check our amount of colisions

         if(mkColision == 1){

           enemy = {...mapEnemies[0]}//*We make that our object enemy have the information of the map enemy were our player makes colision.

           enemySeparatorOfPlayer();//*Here we are checkin if our player mokepon is equal to our enemy mokepon.

           createEnemies(enemy);//*Here we define in our dom how is our enemy for combat

           gameRendering();//*Here we are showing the elements for start the combat

           enemy.image = mapEnemies[0].image;//*Here we are defining oue enemy image for don't have troubles showing it in screen.

       }

   }

      //*This is for check 2 mk
       if(

               downPlayer < mapEnemies[1].y + 43||
               upPlayer > mapEnemies[1].y + mapEnemies[1].height - 43||
               rightPlayer < mapEnemies[1].x + 43 ||
               leftPlayer > mapEnemies[1].x + mapEnemies[1].width - 43

       ){}   else{

           mkColision = mkColision + 1;//*Here we check our amount of colisions

         if(mkColision == 1){

           enemy = {...mapEnemies[1]};//*We make that our object enemy have the information of the map enemy were our player makes colision.

           enemySeparatorOfPlayer();//*Here we are checkin if our player mokepon is equal to our enemy mokepon.

           createEnemies(enemy);//*Here we define for our dom who is our enemy for combat.

           gameRendering();//*Here we are showing the elements for start the combat

           enemy.image = mapEnemies[1].image;//*Here we are defining oue enemy image for don't have troubles showing it in screen.

       }

   }

      //*This is for check 3 mk
       if(

           downPlayer < mapEnemies[2].y + 43||
           upPlayer > mapEnemies[2].y + mapEnemies[2].height - 43||
           rightPlayer < mapEnemies[2].x + 43 ||
           leftPlayer > mapEnemies[2].x + mapEnemies[2].width - 43

       ){}   else{

       mkColision = mkColision + 1;//*Here we check our amount of colisions

       if(mkColision == 1){

           enemy = {...mapEnemies[2]};

           createEnemies(enemy);

           enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.

           gameRendering();

           enemy.image = mapEnemies[2].image;

   }

}


      //*This is for check 4 mk
       if(

           downPlayer < mapEnemies[3].y + 43||
           upPlayer > mapEnemies[3].y + mapEnemies[3].height - 43||
           rightPlayer < mapEnemies[3].x + 43 ||
           leftPlayer > mapEnemies[3].x + mapEnemies[3].width - 43

       ){}   else{

       mkColision = mkColision + 1;//*Here we check our amount of colisions

       if(mkColision == 1){

           enemy = {...mapEnemies[3]};

           createEnemies(enemy);

           enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.

           gameRendering();

           enemy.image = mapEnemies[3].image;

   }

}


      //*This is for check 5 mk
       if(

           downPlayer < mapEnemies[4].y + 43||
           upPlayer > mapEnemies[4].y + mapEnemies[4].height - 43||
           rightPlayer < mapEnemies[4].x + 43 ||
           leftPlayer > mapEnemies[4].x + mapEnemies[4].width - 43

       ){}   else{

       mkColision = mkColision + 1;//*Here we check our amount of colisions

       if(mkColision == 1){

           enemy = {...mapEnemies[4]}
           createEnemies(enemy);

           enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.

           gameRendering();

           enemy.image = mapEnemies[4].image;

   }

}


      //*This is for check 6 mk 
       if(

           downPlayer < mapEnemies[5].y + 43||
           upPlayer > mapEnemies[5].y + mapEnemies[5].height - 43||
           rightPlayer < mapEnemies[5].x + 43 ||
           leftPlayer > mapEnemies[5].x + mapEnemies[5].width - 43

       ){}   else{

       mkColision = mkColision + 1;//*Here we check our amount of colisions

       if(mkColision == 1){

           enemy = {...mapEnemies[5]};

           enemySeparatorOfPlayer();//*Here we see if our enemy and player get information of the same object and we separe it for avoid problems when we modify the atacks

           createEnemies(enemy);

           gameRendering();

           enemy.image = mapEnemies[5].image;

   }

}


      //*This is for check 7 mk 
       if(

           downPlayer < mapEnemies[6].y + 43||
           upPlayer > mapEnemies[6].y + mapEnemies[6].height - 43||
           rightPlayer < mapEnemies[6].x + 43 ||
           leftPlayer > mapEnemies[6].x + mapEnemies[6].width - 43

       ){}   else{

       mkColision = mkColision + 1;//*Here we check our amount of colisions

       if(mkColision == 1){

           enemy = {...mapEnemies[6]};

           createEnemies(enemy);

           enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.;

           gameRendering();

           enemy.image = mapEnemies[6].image;

   }

}


      //*This is for check 8 mk 
       if(

           downPlayer < mapEnemies[7].y + 43||
           upPlayer > mapEnemies[7].y + mapEnemies[7].height - 43||
           rightPlayer < mapEnemies[7].x + 43 ||
           leftPlayer > mapEnemies[7].x + mapEnemies[7].width - 43

       ){}   else{

       mkColision = mkColision + 1;//*Here we check our amount of colisions

       if(mkColision == 1){

           enemy = {...mapEnemies[7]};

           createEnemies(enemy);

           enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.;

           gameRendering();

           enemy.image = mapEnemies[7].image;

   }

}


      //*This is for check 9 mk 
       if(

           downPlayer < mapEnemies[8].y + 43||
           upPlayer > mapEnemies[8].y + mapEnemies[8].height - 43||
           rightPlayer < mapEnemies[8].x + 43 ||
           leftPlayer > mapEnemies[8].x + mapEnemies[8].width - 43

       ){}   else{

       mkColision = mkColision + 1;//*Here we check our amount of colisions

       if(mkColision == 1){

           enemy = {...mapEnemies[8]};//*Here we are taking the enemy that we got a colision in our map.

           createEnemies(enemy);//*Here we are creating a new enemy for fight.

           enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.;

           gameRendering();//*Here we are rendering our fight elements.

           enemy.image = mapEnemies[8].image;//*Here we are setting again our image enemy for show it in map

   }

}


      //*This is for check 10 mk 
       if(

           downPlayer < mapEnemies[9].y + 43||
           upPlayer > mapEnemies[9].y + mapEnemies[9].height - 43||
           rightPlayer < mapEnemies[9].x + 43 ||
           leftPlayer > mapEnemies[9].x + mapEnemies[9].width - 43

       ){}   else{

       mkColision = mkColision + 1;//*Here we check our amount of colisions

       if(mkColision == 1){

           enemy = {...mapEnemies[9]};

           createEnemies(enemy);
           enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.;

           gameRendering();

           enemy.image = mapEnemies[9].image;//*Here we ara setting again our image of our enemy
   }

}


      //*This is for check 11 mk 
       if(

           downPlayer < mapEnemies[10].y + 43||
           upPlayer > mapEnemies[10].y + mapEnemies[10].height - 43||
           rightPlayer < mapEnemies[10].x + 43 ||
           leftPlayer > mapEnemies[10].x + mapEnemies[10].width - 43

       ){}   else{

       mkColision = mkColision + 1;//*Here we check our amount of colisions

       if(mkColision == 1){

           enemy = {...mapEnemies[10]};

           createEnemies(enemy);

           enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.;

           gameRendering();

           enemy.image = mapEnemies[10].image;

   }

}


      //*This is for check 12 mk 
       if(

           downPlayer < mapEnemies[11].y + 43||
           upPlayer > mapEnemies[11].y + mapEnemies[11].height - 43||
           rightPlayer < mapEnemies[11].x + 43 ||
           leftPlayer > mapEnemies[11].x + mapEnemies[11].width - 43

       ){}   else{

       mkColision = mkColision + 1;//*Here we check our amount of colisions

       if(mkColision == 1){

           enemy = {...mapEnemies[11]};

           createEnemies(enemy);

           enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.;

           gameRendering();

           enemy.image = mapEnemies[11].image;
           
   }

}

}

}

}


//*This function is used in every enemy in our map for have colision with our player:
function checkEnemyColisions(){

   //*In this loop we work with mapEnemies list
   for (let index = 0; index < mapEnemies.length; index++) {

   
       //*With this we see if at least once map enemie have colisions with our player, then we check who enemy and why:
         if(
   
               downPlayer < mapEnemies[index].y + 43||
               upPlayer > mapEnemies[index].y + mapEnemies[index].height - 43||
               rightPlayer < mapEnemies[index].x + 43 ||
               leftPlayer > mapEnemies[index].x + mapEnemies[index].width - 43
   
           ){
       } else{
   
    //*This for check 1 mk
         if(
   
                   downPlayer < mapEnemies[0].y + 43||
                   upPlayer > mapEnemies[0].y + mapEnemies[0].height - 43||
                   rightPlayer < mapEnemies[0].x + 43 ||
                   leftPlayer > mapEnemies[0].x + mapEnemies[0].width - 43
   
           ){}   else{
   
              mkColision = mkColision + 1;//*Here we check our amount of colisions
   
         if(mkColision == 1){
   
               enemy = {...mapEnemies[0]}//*We make that our object enemy have the information of the map enemy were our player makes colision.
   
               enemySeparatorOfPlayer();//*Here we are checkin if our player mokepon is equal to our enemy mokepon.
   
               createEnemies(enemy);//*Here we define in our dom how is our enemy for combat
   
               gameRendering();//*Here we are showing the elements for start the combat
   
               enemy.image = mapEnemies[0].image;//*Here we are defining oue enemy image for don't have troubles showing it in screen.
   
           }
   
       }
   
          //*This is for check 2 mk
         if(
   
                   downPlayer < mapEnemies[1].y + 43||
                   upPlayer > mapEnemies[1].y + mapEnemies[1].height - 43||
                   rightPlayer < mapEnemies[1].x + 43 ||
                   leftPlayer > mapEnemies[1].x + mapEnemies[1].width - 43
   
           ){}   else{
   
              mkColision = mkColision + 1;//*Here we check our amount of colisions
   
         if(mkColision == 1){
   
               enemy = {...mapEnemies[1]};//*We make that our object enemy have the information of the map enemy were our player makes colision.
   
               enemySeparatorOfPlayer();//*Here we are checkin if our player mokepon is equal to our enemy mokepon.
   
               createEnemies(enemy);//*Here we define for our dom who is our enemy for combat.
   
               gameRendering();//*Here we are showing the elements for start the combat
   
               enemy.image = mapEnemies[1].image;//*Here we are defining oue enemy image for don't have troubles showing it in screen.
   
           }
   
       }
   
          //*This is for check 3 mk
         if(
   
               downPlayer < mapEnemies[2].y + 43||
               upPlayer > mapEnemies[2].y + mapEnemies[2].height - 43||
               rightPlayer < mapEnemies[2].x + 43 ||
               leftPlayer > mapEnemies[2].x + mapEnemies[2].width - 43
   
           ){}   else{
   
           mkColision = mkColision + 1;//*Here we check our amount of colisions
   
         if(mkColision == 1){
   
               enemy = {...mapEnemies[2]};
   
               createEnemies(enemy);
   
               enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.
   
               gameRendering();
   
               enemy.image = mapEnemies[2].image;
   
       }
   
   }
   
   
          //*This is for check 4 mk
         if(
   
               downPlayer < mapEnemies[3].y + 43||
               upPlayer > mapEnemies[3].y + mapEnemies[3].height - 43||
               rightPlayer < mapEnemies[3].x + 43 ||
               leftPlayer > mapEnemies[3].x + mapEnemies[3].width - 43
   
           ){}   else{
   
           mkColision = mkColision + 1;//*Here we check our amount of colisions
   
         if(mkColision == 1){
   
               enemy = {...mapEnemies[3]};
   
               createEnemies(enemy);
   
               enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.
   
               gameRendering();
   
               enemy.image = mapEnemies[3].image;
   
       }
   
   }
   
   
          //*This is for check 5 mk
         if(
   
               downPlayer < mapEnemies[4].y + 43||
               upPlayer > mapEnemies[4].y + mapEnemies[4].height - 43||
               rightPlayer < mapEnemies[4].x + 43 ||
               leftPlayer > mapEnemies[4].x + mapEnemies[4].width - 43
   
           ){}   else{
   
           mkColision = mkColision + 1;//*Here we check our amount of colisions
   
         if(mkColision == 1){
   
               enemy = {...mapEnemies[4]}
               createEnemies(enemy);
   
               enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.
   
               gameRendering();
   
               enemy.image = mapEnemies[4].image;
   
       }
   
   }
   
   
          //*This is for check 6 mk 
         if(
   
               downPlayer < mapEnemies[5].y + 43||
               upPlayer > mapEnemies[5].y + mapEnemies[5].height - 43||
               rightPlayer < mapEnemies[5].x + 43 ||
               leftPlayer > mapEnemies[5].x + mapEnemies[5].width - 43
   
           ){}   else{
   
           mkColision = mkColision + 1;//*Here we check our amount of colisions
   
         if(mkColision == 1){
   
               enemy = {...mapEnemies[5]};
   
               enemySeparatorOfPlayer();//*Here we see if our enemy and player get information of the same object and we separe it for avoid problems when we modify the atacks
   
               createEnemies(enemy);
   
               gameRendering();
   
               enemy.image = mapEnemies[5].image;
   
       }
   
   }
   
   
          //*This is for check 7 mk 
         if(
   
               downPlayer < mapEnemies[6].y + 43||
               upPlayer > mapEnemies[6].y + mapEnemies[6].height - 43||
               rightPlayer < mapEnemies[6].x + 43 ||
               leftPlayer > mapEnemies[6].x + mapEnemies[6].width - 43
   
           ){}   else{
   
           mkColision = mkColision + 1;//*Here we check our amount of colisions
   
         if(mkColision == 1){
   
               enemy = {...mapEnemies[6]};
   
               createEnemies(enemy);
   
               enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.;
   
               gameRendering();
   
               enemy.image = mapEnemies[6].image;
   
       }
   
   }
   
   
          //*This is for check 8 mk 
         if(
   
               downPlayer < mapEnemies[7].y + 43||
               upPlayer > mapEnemies[7].y + mapEnemies[7].height - 43||
               rightPlayer < mapEnemies[7].x + 43 ||
               leftPlayer > mapEnemies[7].x + mapEnemies[7].width - 43
   
           ){}   else{
   
           mkColision = mkColision + 1;//*Here we check our amount of colisions
   
         if(mkColision == 1){
   
               enemy = {...mapEnemies[7]};
   
               createEnemies(enemy);
   
               enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.;
   
               gameRendering();
   
               enemy.image = mapEnemies[7].image;
   
       }
   
   }
   
   
          //*This is for check 9 mk 
         if(
   
               downPlayer < mapEnemies[8].y + 43||
               upPlayer > mapEnemies[8].y + mapEnemies[8].height - 43||
               rightPlayer < mapEnemies[8].x + 43 ||
               leftPlayer > mapEnemies[8].x + mapEnemies[8].width - 43
   
           ){}   else{
   
           mkColision = mkColision + 1;//*Here we check our amount of colisions
   
         if(mkColision == 1){
   
               enemy = {...mapEnemies[8]};//*Here we are taking the enemy that we got a colision in our map.
   
               createEnemies(enemy);//*Here we are creating a new enemy for fight.
   
               enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.;
   
               gameRendering();//*Here we are rendering our fight elements.
   
               enemy.image = mapEnemies[8].image;//*Here we are setting again our image enemy for show it in map
   
       }
   
   }
   
   
          //*This is for check 10 mk 
         if(
   
               downPlayer < mapEnemies[9].y + 43||
               upPlayer > mapEnemies[9].y + mapEnemies[9].height - 43||
               rightPlayer < mapEnemies[9].x + 43 ||
               leftPlayer > mapEnemies[9].x + mapEnemies[9].width - 43
   
           ){}   else{
   
           mkColision = mkColision + 1;//*Here we check our amount of colisions
   
         if(mkColision == 1){
   
               enemy = {...mapEnemies[9]};
   
               createEnemies(enemy);
               enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.;
   
               gameRendering();
   
               enemy.image = mapEnemies[9].image;//*Here we ara setting again our image of our enemy
       }
   
   }
   
   
          //*This is for check 11 mk 
         if(
   
               downPlayer < mapEnemies[10].y + 43||
               upPlayer > mapEnemies[10].y + mapEnemies[10].height - 43||
               rightPlayer < mapEnemies[10].x + 43 ||
               leftPlayer > mapEnemies[10].x + mapEnemies[10].width - 43
   
           ){}   else{
   
           mkColision = mkColision + 1;//*Here we check our amount of colisions
   
         if(mkColision == 1){
   
               enemy = {...mapEnemies[10]};
   
               createEnemies(enemy);
   
               enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.;
   
               gameRendering();
   
               enemy.image = mapEnemies[10].image;
   
       }
   
   }
   
   
          //*This is for check 12 mk 
         if(
   
               downPlayer < mapEnemies[11].y + 43||
               upPlayer > mapEnemies[11].y + mapEnemies[11].height - 43||
               rightPlayer < mapEnemies[11].x + 43 ||
               leftPlayer > mapEnemies[11].x + mapEnemies[11].width - 43
   
           ){}   else{
   
           mkColision = mkColision + 1;//*Here we check our amount of colisions
   
         if(mkColision == 1){
   
               enemy = {...mapEnemies[11]};
   
               createEnemies(enemy);
   
               enemySeparatorOfPlayer()//*Here we are checkin if our player mokepon is equal to our enemy mokepon.;
   
               gameRendering();
   
               enemy.image = mapEnemies[11].image;

       }
   
   }
   
   }
   
}

}

//*With this function we see if our enemy is defeated for remove it of our map, and if our enemy is alive, we will reset thier atacks
function removeDefeatedEnemyOfMap(){

   
if(finalResult.innerHTML == 'VICTORY'){

   for (let i = 0; i < mapEnemies.length; i++) {

      if(enemy.idMk == mapEnemies[i].idMk){

         mapEnemies[i].x = 2000;
         Object.freeze(mapEnemies[i]);

      }

}

}


if(finalResult.innerHTML == 'DRAW' || finalResult.innerHTML == 'DEFEAT'){

   //*Raykiou enemies in map statement:
      if(enemy.idMk == mapEnemies[0].idMk){

            mapEnemies[0].atacks = [];

            Raykiou.atacks.forEach((atk) => {

               mapEnemies[0].atacks.push(atk);

            });

      }
      
      if(enemy.idMk == mapEnemies[6].idMk){

            mapEnemies[6].atacks = [];

            Raykiou.atacks.forEach((atk) => {

               mapEnemies[6].atacks.push(atk);

            });

      }


      //*Joka enemies in map if statement:
      if(enemy.idMk == mapEnemies[2].idMk){

            mapEnemies[2].atacks = [];

            Joka.atacks.forEach((atk) => {

               mapEnemies[2].atacks.push(atk);

            });

      }
      
      if(enemy.idMk == mapEnemies[8].idMk){

            mapEnemies[8].atacks = [];

            Joka.atacks.forEach((atk) => {

               mapEnemies[8].atacks.push(atk);

            });

   }


      //*Crabster enemies in map if statement:
      if(enemy.idMk == mapEnemies[1].idMk){

            mapEnemies[1].atacks = [];

            Crabster.atacks.forEach((atk) => {

               mapEnemies[1].atacks.push(atk);

            });

      }
      
      if(enemy.idMk == mapEnemies[7].idMk){

            mapEnemies[7].atacks = [];

            Crabster.atacks.forEach((atk) => {

               mapEnemies[7].atacks.push(atk);

            })

      }


      //*Truthler enemies in map if statement:
      if(enemy.idMk == mapEnemies[5].idMk){

            mapEnemies[5].atacks = [];

            Truthler.atacks.forEach((atk) => {

               mapEnemies[5].atacks.push(atk);

            });

      }
         
      if(enemy.idMk == mapEnemies[9].idMk){

            mapEnemies[9].atacks = [];

            Truthler.atacks.forEach((atk) => {

               mapEnemies[9].atacks.push(atk);

            });

      }


      //*Quetzal enemies in map if statement:
      if(enemy.idMk == mapEnemies[3].idMk){

            mapEnemies[3].atacks = [];

            Quetzal.atacks.forEach((atk) => {

               mapEnemies[3].atacks.push(atk);

            });

      }
      
      if(enemy.idMk == mapEnemies[11].idMk){

            mapEnemies[11].atacks = [];

            
            Quetzal.atacks.forEach((atk) => {

               mapEnemies[11].atacks.push(atk);

            });

      }


      //*Rocker enemies in map if statement:
      if(enemy.idMk == mapEnemies[4].idMk ){

            mapEnemies[4].atacks = [];

            Rocker.atacks.forEach((atk) => {

               mapEnemies[4].atacks.push(atk);

            });

      }
      
      if(enemy.idMk == mapEnemies[10].idMk){

            mapEnemies[10].atacks = [];

            
            Rocker.atacks.forEach((atk) => {

               mapEnemies[10].atacks.push(atk);

            });

   }

}

}






//*With this function we set the name of our player in screen when we render our map:
function mkMapRendering(){

   mkMapSpan.innerHTML = player.name;

}


//*Here we have a function for draw once our enemy 1:
function mapEnemySetter1(){

   enemyImage.src = enemyCrabster.image;

   mapDimension.drawImage(enemyImage,enemyCrabster.x, enemyCrabster.y, enemyCrabster.width,enemyCrabster.height);

}


//*Here we have a function for draw once our enemy 2:
function mapEnemySetter2(){

   enemyImage.src = enemyTruthler.image;

   mapDimension.drawImage(enemyImage, enemyTruthler.x, enemyTruthler.y, enemyTruthler.width, enemyTruthler.height);

}


//*Here we have a function for draw once our enemy 3:
function mapEnemySetter3(){

   enemyImage.src = enemyJoka.image;

   mapDimension.drawImage(enemyImage, enemyJoka.x, enemyJoka.y, enemyJoka.width, enemyJoka.height);

}


//*Here we have a function for draw once our enemy 4:
function mapEnemySetter4(){

   enemyImage.src = enemyRaykiou.image;

   mapDimension.drawImage(enemyImage,enemyRaykiou.x ,enemyRaykiou.y , enemyRaykiou.width, enemyRaykiou.height);

}


//*Here we have a function for draw once our enemy 5:
function mapEnemySetter5(){

   enemyImage.src = enemyQuetzal.image;
   
   mapDimension.drawImage(enemyImage, enemyQuetzal.x, enemyQuetzal.y, enemyQuetzal.width, enemyQuetzal.height);

}


//*Here we have a function for draw once our enemy 6:
function mapEnemySetter6(){

   enemyImage.src = enemyRocker.image;

   mapDimension.drawImage(enemyImage, enemyRocker.x, enemyRocker.y, enemyRocker.width, enemyRocker.height);

}


//*Here we have a function for draw once our enemy 7:
function mapEnemySetter7(){

   enemyImage.src = copiedEnemyRocker.image;

   mapDimension.drawImage(enemyImage, copiedEnemyRocker.x, copiedEnemyRocker.y, copiedEnemyRocker.width, copiedEnemyRocker.height);

}


//*Here we have a function for draw once our enemy 8:
function mapEnemySetter8(){

   enemyImage.src = copiedEnemyCrabster.image;

       mapDimension.drawImage(enemyImage, copiedEnemyCrabster.x, copiedEnemyCrabster.y, copiedEnemyCrabster.width, copiedEnemyCrabster.height);

}


//*Here we have a function for draw once our enemy 9:
function mapEnemySetter9(){

   enemyImage.src = copiedEnemyRaykiou.image;

   mapDimension.drawImage(enemyImage, copiedEnemyRaykiou.x, copiedEnemyRaykiou.y, copiedEnemyRaykiou.width, copiedEnemyRaykiou.height);

}


//*Here we have a function for draw once our enemy 10:
function mapEnemySetter10(){

   enemyImage.src = copiedEnemyQuetzal.image;

   mapDimension.drawImage(enemyImage, copiedEnemyQuetzal.x, copiedEnemyQuetzal.y, copiedEnemyQuetzal.width, copiedEnemyQuetzal.height);

}


//*Here we have a function for draw once our enemy 11:
function mapEnemySetter11(){

   enemyImage.src = copiedEnemyJoka.image;

   mapDimension.drawImage(enemyImage, copiedEnemyJoka.x, copiedEnemyJoka.y, copiedEnemyJoka.width, copiedEnemyJoka.height);

}

//*Here we have a function for draw once our enemy 12:
function mapEnemySetter12(){

   enemyImage.src = copiedEnemyTruthler.image;

      mapDimension.drawImage(enemyImage, copiedEnemyTruthler.x,copiedEnemyTruthler.y, copiedEnemyTruthler.width, copiedEnemyTruthler.height);

}



//*With this function we draw at the same time all our 12 enemies:
function mapEnemiesRendering(){

   mapEnemySetter1();

   mapEnemySetter2();

   mapEnemySetter3();

   mapEnemySetter4();

   mapEnemySetter5();

   mapEnemySetter6();

   mapEnemySetter7();

   mapEnemySetter8();

   mapEnemySetter9();

   mapEnemySetter10();

   mapEnemySetter11();

   mapEnemySetter12();

}

//*With this function we render our map:
function mapRendering(){

   removeDefeatedEnemyOfMap();//*We take our of our map our defeated enemy, or we restart the atacks
    
    mapBackground.src = 'assets/images/mokemap.png';//*Here we set the image of our map

    endCombat = false;//*We reset our combat every time we finish once.


    mokeponMap.width = 630;//*We set the width of our canvas
    mokeponMap.height = 630;//*We set the height of our canvas


    //*Here we change the displays of our HTML elements for show our map:
    selectionBox.style.display = "none";

    hideDivSubTittles.style.display = "none";

    hideSelectionButton.style.display = "none";

    hideSelectionDiv.style.display = 'none';

    mkMapBox.style.display = 'flex';


    mkMapPlayerSelection();//*We asign the mokepon of our player.
    mkMapRendering();//*Here we
    mapEnemiesRendering();

    mkColision = 0;//*This is for reset our amount of colisions every time we render our map.

    moveDown();//*We reset our player colisions for avoid troubles with the renderings of our enemy atacks

}


/* This function works with the "player" var for take the entire object for use the specific information of our selected Mk for render ir in the map and work with his colisions */
function mkMapPlayerSelection(){

   //*Raykiou if statement:
   if(Fire.checked){
    
      player = {...Raykiou}
  
      }
  
  //*Crabster if statement:
      if(Ice.checked){
  
      player = {...Crabster}
  
      }
  
  //*Joka if statement:
      if(Earth.checked){
  
      player = {...Joka}
  
      }
  
  //*Quetzal if statement:
      if(Quetza.checked){
  
      player = {...Quetzal}
  
      }
  
  //*Rocker if statement:
      if(Rock.checked){
  
      player = {...Rocker}
  
      }
  
  //*Truthler if statement:
      if(Truth.checked){
  
      player = {...Truthler}
  
      }
  
      mkMapImage.src = player.image;//*We define the mk image like resource of our image
  
      postPlayerInfo();//*Here we send our player info to our backend.

}

/*Function for change the display of our battle HTML elements and show it*/
function gameRendering(){

   //*HIDE ELEMENTS
   selectionBox.style.display = "none";

   hideDivSubTittles.style.display = "none";

   hideSelectionButton.style.display = "none";

   hideSelectionDiv.style.display = 'none';

   mkMapBox.style.display = 'none';


//*SHOW ELEMENTS

   atkBox.style.display = "flex";//*flex



/* Here we are set our css properties to center in screen our new atacks*/

//*Here we are making a validation for work with our display for the resposive design, we use a element for valid if we are working with the normals styles without media queries, but it could be any other HTML element:
   if(hideCombatTables.style.gap === '25px'){

      hideCombatTables.style.display = "grid";//*grid

   }  else{

      hideCombatTables.style.display = "flex";//*flex

   }


   playerSectionMessage.style.display = 'block';//*block

   enemySectionMessage.style.display = 'block';//*block
}


//*With this we move up our player
function moveUp(valueY){

   valueY = speed;

   player.y -= valueY;

   checkMkColisions();
   takePlayerPosition();

}

 //*With this we move down our player
function moveDown(valueY){

   valueY = speed;

   player.y += valueY;

   checkMkColisions();
   takePlayerPosition();

}

 //*With this we move left our player
function moveLeft(valueX){

      valueX = speed;

      player.x -=  valueX;

      checkMkColisions();
      takePlayerPosition();

}

 //*With this we move right our player
function moveRight(valueX){

      valueX = speed;

      player.x += valueX;

      checkMkColisions();
      takePlayerPosition();

}



//*With next 24 function, is for move the 12 map enemies in linears animations, we use our object " intervalsIdList" for save all our setInterval functions and have a reference for then clear that interval and start the reverse animation function to get our enemy to their original point.

//*Other important thing is that every animation have a unic time of execution, and only we can move our enemies of:

   //* down to up.
   //* up to down.
   //* right to left.
   //* left to right.


//*With this we start an animation for our enemy 1:
function moveEnemies1(){

   intervalsIdList.repeaterLists = setInterval(() => {

   mapEnemies[0].x += speedEnemy;

   checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);



   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists);

           requestAnimationFrame(moveEnemiesReverse1);


       }, 2200);


}

function moveEnemiesReverse1(){

   //*Mk1
       intervalsIdList.repeaterReverseLists = setInterval(() => {

       mapEnemies[0].x -= speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);

   
   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterReverseLists);

           requestAnimationFrame(moveEnemies1);

       }, 2200);


} 


//*With this we start an animation for our enemy 2:
function moveEnemies2(){

/* enemy Raykiou 1 */
   intervalsIdList.repeaterLists7 = setInterval(() => {

   mapEnemies[1].x -= speedEnemy;

   checkEnemyColisions();//*Here we are checking our colisions.

   }, 50);



   setTimeout(() => {
   
       clearInterval(  intervalsIdList.repeaterLists7);

       requestAnimationFrame(moveEnemiesReverse2);

   }, 2400);

}

function moveEnemiesReverse2(){

/* enemy Raykiou 1 */
   intervalsIdList.repeaterLists7 = setInterval(() => {

   mapEnemies[1].x += speedEnemy;

   checkEnemyColisions();//*Here we are checking our colisions.

   }, 50);



   setTimeout(() => {
   
       clearInterval(  intervalsIdList.repeaterLists7);

       requestAnimationFrame(moveEnemies2);

   }, 2400);

}


//*With this we start an animation for our enemy 3:
function moveEnemies3(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists3 = setInterval(() => {

       mapEnemies[2].x -= speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);



   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists3);

           requestAnimationFrame(moveEnemiesReverse3);


       }, 1600);

}

function moveEnemiesReverse3(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists3 = setInterval(() => {

       mapEnemies[2].x += speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);


   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists3);

           requestAnimationFrame(moveEnemies3);

   }
   , 2600);

}



function moveEnemies4(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists4 = setInterval(() => {

       mapEnemies[3].y -= speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);



   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists4);

           requestAnimationFrame(moveEnemiesReverse4);


       }, 3900);

}

function moveEnemiesReverse4(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists4 = setInterval(() => {

       mapEnemies[3].y += speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);



   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists4);

           requestAnimationFrame(moveEnemies4);

   }
   , 3900);

}


//*With this we start an animation for our enemy 5:
function moveEnemies5(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists5 = setInterval(() => {

       mapEnemies[4].y -= speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);



   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists5);

           requestAnimationFrame(moveEnemiesReverse5);


       }, 1900);

}

function moveEnemiesReverse5(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists5 = setInterval(() => {

       mapEnemies[4].y += speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);



   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists5);

           requestAnimationFrame(moveEnemies5);

   }
   , 1900);

}


//*With this we start an animation for our enemy 6:
function moveEnemies6(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists6 = setInterval(() => {

       mapEnemies[5].x = mapEnemies[5].x + speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);



   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists6);

           requestAnimationFrame(moveEnemiesReverse6);


       }, 2700);

}

function moveEnemiesReverse6(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterListsReverse6 = setInterval(() => {

       mapEnemies[5].x = mapEnemies[5].x - speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);



   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterListsReverse6);

           requestAnimationFrame(moveEnemies6);

   }
   , 2700);

}


//*With this we start an animation for our enemy 7:
function moveEnemies7(){

    /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists2 = setInterval(() => {

       copiedEnemyRaykiou.x -= speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);
   


   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists2);

           requestAnimationFrame(moveEnemiesReverse7);

       }, 7500);

}

function moveEnemiesReverse7(){

      /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists2 = setInterval(() => {

       copiedEnemyRaykiou.x += speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);


   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists2);

           requestAnimationFrame(moveEnemies7);

       }, 7500);

}


//*With this we start an animation for our enemy 8:
function moveEnemies8(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists8 = setInterval(() => {

       copiedEnemyJoka.y += speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);



   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists8);

           requestAnimationFrame(moveEnemiesReverse8);

       }, 4600);

}

function moveEnemiesReverse8(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterReverseLists8 = setInterval(() => {
       
       copiedEnemyJoka.y -= speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);


   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterReverseLists8);

           requestAnimationFrame(moveEnemies8);

   }
   , 4600);

}


//*With this we start an animation for our enemy 9:
function moveEnemies9(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists9 = setInterval(() => {

       copiedEnemyCrabster.y += speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);



   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists9);

           requestAnimationFrame(moveEnemiesReverse9);


       }, 3200);

}

function moveEnemiesReverse9(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists9 = setInterval(() => {

       copiedEnemyCrabster.y -= speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);


   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists9);

           requestAnimationFrame(moveEnemies9);

   }
   , 3200);

}


//*With this we start an animation for our enemy 10:
function moveEnemies10(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists10 = setInterval(() => {

       copiedEnemyTruthler.y -= speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);



   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists10);

           requestAnimationFrame(moveEnemiesReverse10)
       ;

       }, 4900);

}

function moveEnemiesReverse10(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists10 = setInterval(() => {

       copiedEnemyTruthler.y += speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);


   setTimeout(() => {
         
           clearInterval(  intervalsIdList.repeaterLists10);

           requestAnimationFrame(moveEnemies10);

   
       }, 4900);

}


//*With this we start an animation for our enemy 11:
function moveEnemies11(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists11 = setInterval(() => {

       copiedEnemyQuetzal.x += speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);



   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists11);

           requestAnimationFrame(moveEnemiesReverse11)
       ;

       }, 4200);

}

function moveEnemiesReverse11(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists11 = setInterval(() => {

       copiedEnemyQuetzal.x -= speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);


   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists11);

           requestAnimationFrame(moveEnemies11);

   
       }, 4200);

}


//*With this we start an animation for our enemy 12:
function moveEnemies12(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists12 = setInterval(() => {

       copiedEnemyRocker.x -= speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);



   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists12);

           requestAnimationFrame(moveEnemiesReverse12)
       ;

       }, 2100);

}

function moveEnemiesReverse12(){

   /* enemy Raykiou 1 */
       intervalsIdList.repeaterLists12 = setInterval(() => {

       copiedEnemyRocker.x += speedEnemy;

       checkEnemyColisions();//*Here we are checking our colisions.

       }, 50);


   setTimeout(() => {

           clearInterval(  intervalsIdList.repeaterLists12);

           requestAnimationFrame(moveEnemies12);

   
       }, 2100);

}


//*This function is a global caller that will start all the animations of our map enmies:
function animationsCaller(){

   moveEnemies1();
   moveEnemies2();
   moveEnemies3();
   moveEnemies4();
   moveEnemies5();
   moveEnemies6();
   moveEnemies7();
   moveEnemies8();
   moveEnemies9();
   moveEnemies10();
   moveEnemies11();
   moveEnemies12();

}


function letKeyEvent(){

   window.addEventListener('keypress',keyPress);

}


//*This function is for alow us to work with our  w a s d  keys:
function keyPress(event){

   switch(event.key){

      //* w a s d move keys
      case 'w':
              moveUp();
      break;

      case 's':
          moveDown();
      break;

      case 'a':
          moveLeft();
      break;

      case 'd':
          moveRight();
      break;

  default:

      mkMapRendering();

      break;

  }
         
   
}

//*This function let us able again our selection button if we selected one mokepon:
function letUseSelectionButton(){

    setInterval(() => {

       //*If once input is cheched we valid to use our selection button:
        if(Fire.checked == true || Rock.checked == true || Truth.checked == true || Quetza.checked == true || Earth.checked == true || Ice.checked == true){

            inputChecked = true;

        }

        if(inputChecked == true){

            $('Select').disabled = false;

        }  else{

            $('Select').disabled = true;

        }

    },50)

}


hideAttackElements();//*Here we hide our atacks, because we don't load our combat functions yet.

startVirtualMoveButtons()//*Here we make functional our buttons.+

setAllenemiesAtacks();//*Here we push inside all the atacks to our map enemies.

setIdsOfAllMokepons();//*Here we create the id of all our objects


function startGame(){

   // joinGame();//*We generate a new user in our game to our backend

   renderInputsMk();//*We create and render our selection inputs to our mokepons:

   letUseSelectionButton()//*Here we able our selection button if we selected on mokepon.

   startAnimationsForever();//*Here we are starting our constant draws of our animations.

   animationsCaller();//*Here we start the loop of moves of our enemy.
      
   //*SELECTION BOTTOMS
      $('Select').onclick = () =>{

         enemy = new Mokepon();//*Here we generate our enemy for later redefine their properties in combat.

         letKeyEvent();//*Here we alow to our program get keys event.

      /* Raykiou if statement */
      if(Fire.checked){

         mapRendering();//*Here we render our map once we select a mokepon:

         /*Here we are inyecting the name of the pokemon that we selected in our html */
            petName.innerHTML = Raykiou.name;//*We Index our Mk info in the HTML span
      
            /*Here we are inyecting the name of the pokemon that we selected in our html */
               nameMkSpan.innerHTML = Raykiou.name;//*We Index our Mk info in the HTML span

               imageMkPlayerBox.innerHTML =`<img class = 'player_image' src = "${Raykiou.image}">`;//*We are the image of our Mk Putting inside our element

            typeSetter(Raykiou.type[0],enemy.type[0],Raykiou.type[1],enemy.type[1]);//*

         /* Here we are aplying a loop that generate atacks for every if statement for our mokepons */
            do{
               atackStructure = `<button id = ${Raykiou.atacks[i].id} class = ${Raykiou.atacks[i].classMk} > ${Raykiou.atacks[i].atkName} </button>  ` 

         atkBox.innerHTML += atackStructure;

         i++;
            }

         while(i != Raykiou.atacks.length)

         i = 0;//*We reset our iterator

/*Loop to idex the information that make works our buttons */
   do{

      atkMokepon.push(Raykiou.atacks[i].atkName);

         i++;


   }while( i != Raykiou.atacks.length)

                                                                           /*Raykiou buttons */

                     //*First attack button "Llamarada"
   $('flare').onclick = () =>{
                     
      elementalAttack = atkMokepon[0]; 
      
      mkClass = 'fire';
      
      playerSectionMessage.innerHTML += `<p id = "${Raykiou.atacks[0].atackId}" class = "${Raykiou.atacks[0].color}">${elementalAttack}</p>`;
      
      logIn(mkClass); 
      
      attackEnemy(enemy); 
      
      sequency-- ; 
      
      logIn("There are "+sequency+" turns at least");
      
      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }else{ 
         
         $('flare').disabled = true; 
         $('flare').style.backgroundColor = "#9e1212"
      } 
      
      combat();
   
   }

                     //*Second attack button "Rugido Ionico"
   $('ionicRoar').onclick = () =>{
      
      elementalAttack = atkMokepon[1];
      playerSectionMessage.innerHTML += `<p id = "${Raykiou.atacks[1].atackId}" class = "${Raykiou.atacks[1].color}">${elementalAttack}</p>`; 
      
      mkClass = 'thunder'; 
      
      logIn(mkClass); 
      
      attackEnemy(enemy);  
      
      sequency-- ; 
      
      logIn("There are "+sequency+" turns at least");

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{ 
         
            $('ionicRoar').disabled = true; 
            $('ionicRoar').style.backgroundColor = "#888124" 
         
         } 
         
         combat();
      
   }

                     //*Third attack button "Incinerar"
   $('incinerate').onclick = () =>{
      
      elementalAttack = atkMokepon[2];

      playerSectionMessage.innerHTML += `<p id = "${Raykiou.atacks[2].atackId}" class = "${Raykiou.atacks[2].color}">${elementalAttack}</p>`; 

      mkClass= 'fire'; 

      logIn(mkClass.innerText); 
      
      attackEnemy(enemy); 
      
      sequency-- ; 
      
      logIn("There are "+sequency+" turns at least"); 

      if(advantagePlayer == 1 || advantagePlayer == 2){ 
         
         advantagePlayer--; 
      
      }  else{ 
         
            $('incinerate').disabled = true; 
            $('incinerate').style.backgroundColor = "#9e1212" 
         
         }

      combat();

   }

                     //*Fourth attack button "Puño de Fire"
   $('fire-punch').onclick = () =>{
      
      elementalAttack = atkMokepon[3];
      
      playerSectionMessage.innerHTML += `<p id = "${Raykiou.atacks[3].atackId}" class = "${Raykiou.atacks[3].color}">${elementalAttack}</p>`; 
      
      mkClass = 'fire'; 

      logIn(mkClass);

      attackEnemy(enemy);

      sequency--;

      logIn("There are "+sequency+" turns at least"); 

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{ 
         
         $('fire-punch').disabled = true; $('fire-punch').style.backgroundColor = "#9e1212" 
      
      } 
      
      combat();
   
   }

         //*Fifth  attack button "Roca Afilada"
   $('rock-spikes').onclick = () =>{
      
      elementalAttack = atkMokepon[4];
      
      playerSectionMessage.innerHTML += `<p id = "${Raykiou.atacks[4].atackId}" class = "${Raykiou.atacks[4].color}">${elementalAttack}</p>`; 
      
      mkClass = 'earth';

      logIn(mkClass); 
      
      attackEnemy(enemy); 
      
      sequency-- ; 
      
      logIn("There are "+sequency+" turns at least");

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{ 
         
            $('rock-spikes').disabled = true;  
            $('rock-spikes').style.backgroundColor = "#0b861c"} 
            
            combat();
         
   }
                     
      }


      /* Crabster if statement */
      if(Ice.checked){

         mapRendering();//*Here we render our map once we select a mokepon:

         petName.innerHTML = Crabster.name;//*We Index our Mk info in the HTML span

         nameMkSpan.innerHTML= Crabster.name;//*We Index our Mk info in the HTML span

         imageMkPlayerBox.innerHTML =`<img class = 'player_image' src = "${Crabster.image}">`;//*We are the image of our Mk Putting inside our element

         

         typeSetter(Crabster.type[0],enemy.type[0],Crabster.type[1],enemy.type[1]);

      /* Here we are aplying a loop that generate atacks for every if statement for our mokepons */
            do{

               atackStructure = `<button id = ${Crabster.atacks[i].id} class = ${Crabster.atacks[i].classMk}> ${Crabster.atacks[i].atkName} </button>  `  

               atkBox.innerHTML += atackStructure

               i++;

               }  while(i != Crabster.atacks.length)

                  i = 0;//*We reset our iterator


               /*Loop to idex the information that make works our buttons */
            do{

               atkMokepon.push(Crabster.atacks[i].atkName);

               i++;

            }  while( i != Crabster.atacks.length)

                                                                         /*Crabster atacks buttons */
                        //*First atack button "Picos de Ice"
   $('iceSpikes').onclick = () =>{
      
      elementalAttack = atkMokepon[0];
      
      playerSectionMessage.innerHTML += `<p id = "${Crabster.atacks[0].atackId}" class = "${Crabster.atacks[0].color}">${elementalAttack}</p>`;

      mkClass = 'ice';
      
      logIn(mkClass); 
      
      attackEnemy(enemy); 
      
      sequency-- ; 
      
      logIn("There are "+sequency+" turns at least"); 

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{
         
         $('iceSpikes').disabled = true; 
         $('iceSpikes').style.backgroundColor = "#1c509c";
      
      } 
      
      combat();
   
   }

//*Second atack button "Ventisca"
   $('blizzard').onclick = () =>{
      
      elementalAttack = atkMokepon[1];
      
      playerSectionMessage.innerHTML += `<p id = "${Crabster.atacks[1].atackId}" class = "${Crabster.atacks[1].color}">${elementalAttack}</p>`; 
      
      mkClass = 'ice';
      
      logIn(mkClass);

      attackEnemy(enemy); 
      
      sequency-- ; 
      
      logIn("There are "+sequency+" turns at least");

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{
         
         $('blizzard').disabled = true; 
         $('blizzard').style.backgroundColor = "#1c509c"
      
      } 
      
      combat();
   
   }

//*Third atack button "Helada"
   $('frost').onclick = () =>{
      
      elementalAttack = atkMokepon[2];
      
      playerSectionMessage.innerHTML += `<p id = "${Crabster.atacks[2].atackId}" class = "${Crabster.atacks[2].color}">${elementalAttack}</p>`; 
      
      mkClass = 'ice';

      logIn(mkClass); attackEnemy(enemy); 
      
      sequency-- ; 
      
      logIn("There are "+sequency+" turns at least"); 

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }else{
         
         $('frost').disabled = true; 
         
         $('frost').style.backgroundColor = "#1c509c";
      
      } 
      
      combat();
   
   }

//*Fourth atack button "Puño de Fire"
   $('fire-punch').onclick = () =>{
      
      elementalAttack = atkMokepon[3];
      
      playerSectionMessage.innerHTML += `<p id = "${Crabster.atacks[3].atackId}" class = "${Crabster.atacks[3].color}">${elementalAttack}</p>`; 
      
      mkClass = 'fire'; 

      logIn(mkClass); 
      
      attackEnemy(enemy); 
      
      sequency-- ; 
      
      logIn("There are "+sequency+" turns at least");

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{
         
         $('fire-punch').disabled = true; 
         $('fire-punch').style.backgroundColor = "#9e1212";
      
      } 
      
      combat();
   
   }

 //*Fifth atack button "Garra de Acero"
   $('steelClaw').onclick = () =>{
      
      elementalAttack = atkMokepon[4];

      playerSectionMessage.innerHTML += `<p id = "${Crabster.atacks[4].atackId}" class = "${Crabster.atacks[4].color}">${elementalAttack}</p>`; 

      mkClass = 'steel';

      logIn(mkClass); 
      
      attackEnemy(enemy); 
      
      sequency--; 
      
      logIn("There are "+sequency+" turns at least"); 

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;

      }  else{$('steelClaw').disabled = true;

         $('steelClaw').style.backgroundColor = "#4d504e";
      
      } 
      
      combat();
   
   }

      }


         /* Joka if statement */
      if(Earth.checked){

         mapRendering();//*Here we render our map once we select a mokepon:

         petName.innerHTML = Joka.name;//*We Index our Mk info in the HTML span
      
         nameMkSpan.innerHTML = Joka.name;//*We Index our Mk info in the HTML span

         imageMkPlayerBox.innerHTML =`<img class = 'player_image' src = "${Joka.image}">`;//*We are the image of our Mk Putting inside our element

         typeSetter(Joka.type[0],enemy.type[0],Joka.type[1],enemy.type[1]);

         /* Here we are aplying a loop that generate atacks for every if statement for our mokepons */
         do{
            
            atackStructure = `<button id = ${Joka.atacks[i].id} class = ${Joka.atacks[i].classMk}> ${Joka.atacks[i].atkName} </button>  `;  

            atkBox.innerHTML += atackStructure;

            i++;

         }  while(i != Joka.atacks.length)

            i = 0;//*We reset our iterator

         do{

            atkMokepon.push(Joka.atacks[i].atkName);
         
            i++;

         }  while( i != Joka.atacks.length)


                                                                        /*Joka atacks buttons */

         //*first attack button "Water Stream"
   $('waterStream').onclick = () =>{
      
      elementalAttack = atkMokepon[0]; 
      
      playerSectionMessage.innerHTML += `<p id = "${Joka.atacks[0].atackId}" class = "${Joka.atacks[0].color}">${elementalAttack}</p>`; 

      mkClass = 'water';

      logIn(mkClass.innerText); 
      
      attackEnemy(enemy); 
      
      sequency--; 
      
      logIn("There are "+sequency+" turns at least");

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{ 
         
         $('waterStream').disabled = true; 
         $('waterStream').style.backgroundColor = "#0f1a5c";

      }

   combat();

   }

//*second attack button "Manantial"
   $('spring').onclick = () =>{
      
      elementalAttack = atkMokepon[1]; 
      
      playerSectionMessage.innerHTML += `<p id = "${Joka.atacks[1].atackId}" class = "${Joka.atacks[1].color}">${elementalAttack}</p>`; 
      
      mkClass = 'water';

      logIn(mkClass.innerText);  
      
      attackEnemy(enemy); 
      
      sequency--; 
      
      logIn("There are "+sequency+" turns at least");

   if(advantagePlayer == 1 || advantagePlayer == 2){
      
      advantagePlayer--;
   
   }  else{ 
      
      $('spring').disabled = true; 
      $('spring').style.backgroundColor = "#0f1a5c";

   } 
   
   combat();

   }

   //*third attack button "enredadera"
   $('vine').onclick = () =>{
      
      elementalAttack = atkMokepon[2]; 
      
      playerSectionMessage.innerHTML += `<p id = "${Joka.atacks[2].atackId}" class = "${Joka.atacks[2].color}">${elementalAttack}</p>`; 
      
      mkClass = 'earth';

      logIn(mkClass.innerText); 
      
      attackEnemy(enemy); 
      
      sequency--; 
      
      logIn("There are "+sequency+" turns at least");

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{
         
         $('vine').disabled = true; 
         $('vine').style.backgroundColor = "#0b861c"; 

      } 

      combat();

   }

//*fourth attack "Avalancha"
   $('avalanche').onclick = () =>{
      
      elementalAttack = atkMokepon[3];
      
      playerSectionMessage.innerHTML += `<p id = "${Joka.atacks[3].atackId}" class = "${Joka.atacks[3].color}">${elementalAttack}</p>`;

      mkClass = 'earth';

   logIn(mkClass.innerText);

   attackEnemy(enemy); 
   
   sequency-- ; 
   
   logIn("There are "+sequency+" turns at least");

   if(advantagePlayer == 1 || advantagePlayer == 2){
      
      advantagePlayer--;
   
   }  else{ 
      
      $('avalanche').disabled = true; 
      $('avalanche').style.backgroundColor = "#0b861c";
   } 
   
   combat();

}

//*fith attack "Terremoto"
   $('earthQuake').onclick = () =>{
      
      elementalAttack = atkMokepon[4];
      
      playerSectionMessage.innerHTML += `<p id = "${Joka.atacks[4].atackId}" class = "${Joka.atacks[4].color}">${elementalAttack}</p>`; 
      
      mkClass = 'earth';

      logIn(mkClass.innerText);  
      
      attackEnemy(enemy); 
      
      sequency-- ; 
      
      logIn("There are "+sequency+" turns at least");

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{ 
         
         $('earthQuake').disabled = true; 
         $('earthQuake').style.backgroundColor = "#0b861c"; 
      
      } 
      
      combat();
   
   }

      } 

   /*Truthler if statement*/
      if(Truth.checked){
   
      mapRendering();//*Here we render our map once we select a mokepon:

      petName.innerHTML = Truthler.name;//*We Index our Mk info in the HTML span

      nameMkSpan.innerHTML = Truthler.name;//*We Index our Mk info in the HTML span

      imageMkPlayerBox.innerHTML =`<img class = 'player_image' src = "${Truthler.image}">`;//*We are the image of our Mk Putting inside our element

      typeSetter(Truthler.type[0],enemy.type[0],Truthler.type[1],enemy.type[1]);

/* Here we are aplying a loop that generate atacks for every if statement for our mokepons */
      do{

         atackStructure = `<button id = ${Truthler.atacks[i].id} class = ${Truthler.atacks[i].classMk} > ${Truthler.atacks[i].atkName} </button>  ` 

         atkBox.innerHTML += atackStructure;

         i++;

         }  while(i != Truthler.atacks.length);

      i = 0;//*We reset our iterator

   /*Loop to idex the information that make works our buttons */
      do{

         atkMokepon.push(Truthler.atacks[i].atkName);

         i++;

      }  while( i != Truthler.atacks.length)

/*Truthler buttons */

//*First attack "Bolt"
   $('bolt').onclick = () =>{
      
      elementalAttack = atkMokepon[0];
      
      playerSectionMessage.innerHTML += `<p id = "${Truthler.atacks[0].atackId}" class = "${Truthler.atacks[0].color}">${elementalAttack}</p>`; 
      
      mkClass = 'thunder';

      logIn(mkClass); 
      
      attackEnemy(enemy); 
      
      sequency-- ; 
      
      logIn("There are "+sequency+" turns at least");

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{ $('bolt').disabled = true; 
      
      $('bolt').style.backgroundColor = "#888124"; 
   
   } 
   
   combat();

   }

//*Second attack "Rain of Spikes"
   $('rainOfSpikes').onclick = () =>{
      
      elementalAttack = atkMokepon[1];

      playerSectionMessage.innerHTML += `<p id = "${Truthler.atacks[1].atackId}" class = "${Truthler.atacks[1].color}">${elementalAttack}</p>`;

      mkClass = 'steel';

      logIn(mkClass); 
      
      attackEnemy(enemy);

      sequency-- ; 
      
      logIn("There are "+sequency+" turns at least"); 
      
      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{ 
         
         $('rainOfSpikes').disabled = true; 
         $('rainOfSpikes').style.backgroundColor = "#4d504e";

      }

      combat();
   
   }

//*Third attack "Fire Shoot"
   $('fireShoot').onclick = () =>{
      
      elementalAttack = atkMokepon[2];

      mkClassColor = "Fire";
      
      playerSectionMessage.innerHTML += `<p id = "${Truthler.atacks[2].atackId}" class = "${Truthler.atacks[2].color}">${elementalAttack}</p>`;

      mkClass= 'fire'; 
      
      logIn(mkClass.innerText); 
      
      attackEnemy(enemy); 
      
      sequency--; 
      
      logIn("There are "+sequency+" turns at least");  

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      } else{ 
         
         $('fireShoot').disabled = true; 
         $('fireShoot').style.backgroundColor = "#9e1212";
      }

      combat();
   
   }

//*Fourth attack "Blitz"
   $('blitz').onclick = () =>{
      
      elementalAttack = atkMokepon[3];
      
      playerSectionMessage.innerHTML += `<p id = "${Truthler.atacks[3].atackId}" class = "${Truthler.atacks[3].color}">${elementalAttack}</p>`;

      mkClass = 'thunder';

      logIn(mkClass);

      attackEnemy(enemy); 
      
      sequency--;

      logIn("There are "+sequency+" turns at least");

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }else{ 
         
         $('blitz').disabled = true; 
         $('blitz').style.backgroundColor = "#888124"; 
      
      } 
      
      combat();
   
   }

   //*Fifth attack "Iron Whip"
   $('ironWhip').onclick = () =>{
      
      elementalAttack = atkMokepon[4];
      
      playerSectionMessage.innerHTML += `<p id = "${Truthler.atacks[4].atackId}" class = "${Truthler.atacks[4].color}">${elementalAttack}</p>`; 
      
      mkClass = 'steel'; 
      
      logIn(mkClass); 
      
      attackEnemy(enemy); 
      
      sequency-- ; 
      
      logIn("There are " + sequency +" turns at least");   
      
      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{ 
         
         $('ironWhip').disabled = true; 
         $('ironWhip').style.backgroundColor = "#4d504e"; 
      
      } 
      
      combat();
   
   }

      }

   /* Rocker if statement */
      if(Rock.checked){

         mapRendering();//*Here we render our map once we select a mokepon:

         petName.innerHTML = Rocker.name;//*We Index our Mk info in the HTML span
         
         nameMkSpan.innerHTML = Rocker.name;//*We Index our Mk info in the HTML span

         imageMkPlayerBox.innerHTML =`<img class = 'player_image' src = "${Rocker.image}">`;//*We are the image of our Mk Putting inside our element

         typeSetter(Rocker.type[0],enemy.type[0],Rocker.type[1],enemy.type[1]);

         /* Here we are aplying a loop that generate atacks for every if statement for our mokepons */
   do{

      atackStructure = `<button id = ${Rocker.atacks[i].id} class = ${Rocker.atacks[i].classMk} > ${Rocker.atacks[i].atkName} </button>  ` 

      atkBox.innerHTML += atackStructure;

      i++;

   }  while(i != Rocker.atacks.length)

      i = 0;//*We reset our iterator

/*Loop to idex the information that make works our buttons */
   do{

      atkMokepon.push(Rocker.atacks[i].atkName);

         i++;

   }  while( i != Rocker.atacks.length)


   /*Rocker buttons */

                     //*First atack "Fracture"
   $('fracture').onclick = () =>{
      
      elementalAttack = atkMokepon[0];
      
      playerSectionMessage.innerHTML += `<p id = "${Rocker.atacks[0].atackId}" class = "${Rocker.atacks[0].color}">${elementalAttack}</p>`;
      
      mkClass = 'earth'; 

      logIn(mkClass); attackEnemy(enemy); 
      
      sequency-- ; 
      
      logIn("There are "+sequency+" turns at least");

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{ 
         
         $('fracture').disabled = true; 
         $('fracture').style.backgroundColor = "#0b861c";

      } 
      
      combat();
   
   }

   //*Second attack "Metal Smash"
   $('metalSmash').onclick = () =>{
      
      elementalAttack = atkMokepon[1];
      
      playerSectionMessage.innerHTML += `<p id = "${Rocker.atacks[1].atackId}" class = "${Rocker.atacks[1].color}">${elementalAttack}</p>`; 
      
      mkClass = 'steel';

      logIn(mkClass); 
      
      attackEnemy(enemy); 
      
      sequency--; 
      
      logIn("There are "+sequency+" turns at least"); 
      
      
      
   if(advantagePlayer == 1 || advantagePlayer == 2){
      
      advantagePlayer--;
   
   }  else{

      $('metalSmash').disabled = true;
      $('metalSmash').style.backgroundColor = "#4d504e"; 
   
   } 
   
   combat();

   }

   //*Third attack "Titanium Kick"
   $('titaniumKick').onclick = () =>{
      
      elementalAttack = atkMokepon[2];
      
      playerSectionMessage.innerHTML += `<p id = "${Rocker.atacks[2].atackId}" class = "${Rocker.atacks[2].color}">${elementalAttack}</p>`;

      mkClass= 'steel'

      logIn(mkClass.innerText); 
      
      attackEnemy(enemy); 
      
      sequency--; 
      
      logIn("There are "+sequency+" turns at least");

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{ 
         
         $('titaniumKick').disabled = true; 
         $('titaniumKick').style.backgroundColor = "#4d504e"; 
      
      }

      combat();
   
   }

   //*Fourth attack "Rock Shooter"
   $('rockShooter').onclick = () =>{
      
      elementalAttack = atkMokepon[3];
      
      playerSectionMessage.innerHTML += `<p id = "${Rocker.atacks[3].atackId}" class = "${Rocker.atacks[3].color}">${elementalAttack}</p>`; 
      
      mkClass = 'earth';

      logIn(mkClass); 
      
      attackEnemy(enemy); 
      
      sequency-- ; 
      
      logIn("There are "+sequency+" turns at least");

   if(advantagePlayer == 1 || advantagePlayer == 2){
      
      advantagePlayer--;
   
   }  else{ 
      
      $('rockShooter').disabled = true;  
      $('rockShooter').style.backgroundColor = "#0b861c"; 
   
   }

   combat();

}

   //*Fifth attack "Meteor"
   $('meteor').onclick = () =>{
      
      elementalAttack = atkMokepon[4];

      playerSectionMessage.innerHTML += `<p id = "${Rocker.atacks[4].atackId}" class = "${Rocker.atacks[4].color}">${elementalAttack}</p>`;

      mkClass = 'earth';

      logIn(mkClass); attackEnemy(enemy); 
      
      sequency-- ; 
      
      logIn("There are "+sequency+" turns at least");

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{ 
         
         $('meteor').disabled = true;  
         $('meteor').style.backgroundColor = "#0b861c"; 
      
      } 
      
      combat();
   
   }


      }

      /* Quetzal if statement */
      if(Quetza.checked){

         mapRendering();//*Here we render our map once we select a mokepon:

         petName.innerHTML = Quetzal.name;//*We Index our Mk info in the HTML span

         nameMkSpan.innerHTML = Quetzal.name;//*We Index our Mk info in the HTML span

         imageMkPlayerBox.innerHTML =`<img class = 'player_image' src = "${Quetzal.image}">`;//*We are the image of our Mk Putting inside our element

         typeSetter(Quetzal.type[0],enemy.type[0],Quetzal.type[1],enemy.type[1]);

   /* Here we are aplying a loop that generate atacks for every if statement for our mokepons */
         do{

            atackStructure = `<button id = ${Quetzal.atacks[i].id} class = ${Quetzal.atacks[i].classMk} > ${Quetzal.atacks[i].atkName} </button>  ` 

            atkBox.innerHTML += atackStructure;

            i++;

            }  while(i != Quetzal.atacks.length)

      i = 0;//*We reset our iterator

/*Loop to idex the information that make works our buttons */
   do{

      atkMokepon.push(Quetzal.atacks[i].atkName);

         i++;


   }while( i != Quetzal.atacks.length)

                                                                                  /*Quetzal buttons */

                     //*First attack "Tornado"
   $('tornado').onclick = () =>{
      
      elementalAttack = atkMokepon[0];

      playerSectionMessage.innerHTML += `<p id = "${Quetzal.atacks[0].atackId}" class = "${Quetzal.atacks[0].color}">${elementalAttack}</p>`; 

      mkClass = 'air'; 

      logIn(mkClass); 
      
      attackEnemy(enemy); 
      
      sequency--; 
      
      logIn("There are "+sequency+" turns at least");

   if(advantagePlayer == 1 || advantagePlayer == 2){
      
      advantagePlayer--;
   
   }else{ 
      
      $('tornado').disabled = true; 
      $('tornado').style.backgroundColor = "#187a59"; 
   
   } 
   
   combat();

}

//*Second attack "Water Stream"
   $('waterStream').onclick = () =>{
      
      elementalAttack = atkMokepon[1];
      
      playerSectionMessage.innerHTML += `<p id = "${Quetzal.atacks[1].atackId}" class = "${Quetzal.atacks[1].color}">${elementalAttack}</p>`; 
      
      mkClass = 'water';

      logIn(mkClass);

      attackEnemy(enemy);
      
      sequency-- ; 
      
      logIn("There are "+sequency+" turns at least");

   if(advantagePlayer == 1 || advantagePlayer == 2){
      
      advantagePlayer--;
   
   }  else{ 
      
      $('waterStream').disabled = true;  
      $('waterStream').style.backgroundColor = "#0f1a5c"; 
   
   }

   combat();

}

//*Third attack "Storm"
   $('storm').onclick = () =>{
      
      elementalAttack = atkMokepon[2];
      
      playerSectionMessage.innerHTML += `<p id = "${Quetzal.atacks[2].atackId}" class = "${Quetzal.atacks[2].color}">${elementalAttack}</p>`; 
      
      mkClass= 'water'; 

      logIn("There's your atack class",mkClass.innerText); 
      
      attackEnemy(enemy); 
      
      sequency-- ; 
      
      logIn("There are "+sequency+" turns at least");

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{ 
         
         $('storm').disabled = true; 
         $('storm').style.backgroundColor = "#0f1a5c"; 
      
      } 
      
      combat();
   
   }

//*Fourth attack "Hurricane"
   $('hurricane').onclick = () =>{
      
      elementalAttack = atkMokepon[3];
      
      playerSectionMessage.innerHTML += `<p id = "${Quetzal.atacks[3].atackId}" class = "${Quetzal.atacks[3].color}">${elementalAttack}</p>`; 
      
      mkClass = 'air'; 

      logIn(mkClass); 
      
      attackEnemy(enemy); 
      
      sequency--; 
      
      logIn("There are "+sequency+" turns at least");

      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{ 
         
         $('hurricane').disabled = true; 
         $('hurricane').style.backgroundColor = "#187a59"; 
      
      } 
      
      combat();
   
   }

//*Fifth attacks "Breath"
   $('breath').onclick = () =>{
      
      elementalAttack = atkMokepon[4];
      
      playerSectionMessage.innerHTML += `<p id = "${Quetzal.atacks[4].atackId}" class = "${Quetzal.atacks[4].color}">${elementalAttack}</p>`; 
      
      mkClass = 'air';
      
      logIn(mkClass); 
      
      attackEnemy(enemy); sequency-- ; 
      
      logIn("There are "+sequency+" turns at least");
   
      if(advantagePlayer == 1 || advantagePlayer == 2){
         
         advantagePlayer--;
      
      }  else{
         
         $('breath').disabled = true; 
         $('breath').style.backgroundColor = "#187a59"; 
      
      } 
      
      combat();
   
   }

      }



   }

   //*Here we program our button to rename our mokepon:
   renameButton.onclick = () => {

      mokeponName.innerHTML = renameInput.value;//*Here we define the name of our player's mokepon.

      $('game-functionality').style.display = "none";//*Here we hide again our rename mokepon elements

   }

   //*With this button we hide our atacks element at once our user don't want to rename their mokepon:
   btnNotCallMk.onclick = () => {

      $('game-functionality').style.display = "none";

   }
   

 /* Here we are reloading our page when we click the button */
   $("new-game").onclick = () => {

      location.reload();

   }

//*There is a button in our map that reset the game:
   $("reset_button").onclick = () => {

      location.reload();

   }

}

//*With this function we define our enemy name in screen and the image too once we 1 colision in our map, the "bot" param is for the colisioned enemy:
function createEnemies(bot){

//*If we have one colision with our enemy is because we only will create 1 enemy
if(mkColision == 1){
   
   /*condition to generate a enemy */

   let enemyName = $("name-enemy");

   enemyName.innerText = bot.name;//*We Index our Mk info in the HTML span

   imageMkEnemyBox.innerHTML = `<img src = "${bot.image}"  class = 'enemy_image'>`;

}

}


/* This function works with the object of the enemy were we have colisions */
function attackEnemy(bot){

   /* We are defining a random number from our iterator */
   i = randomMonster(0,bot.atacks.length-1)
   
   /* We take one attack of the 15 atacks we have */
   elementalAttackEnemy = bot.atacks[i];

   /* We are puttting inside our var the color of our enemy's attack message */
   mkClassEnemy = elementalAttackEnemy.classMk;
         logIn(mkClassEnemy);


   /* We are putting enemy's message inside our HTML */
      enemySectionMessage.innerHTML += `<p id = "${elementalAttackEnemy.atackId}" class = "${elementalAttackEnemy.color}">${elementalAttackEnemy.atkName}</p>`;

    /*We are put the number were we have the enemy's attack  form remove it later */
      let index = bot.atacks.indexOf(bot.atacks[i]); ;

   //*With this statement we see our enemy's advantages and we will modify it once our enemy atacks:
   if(advantageEnemy == 1){

         advantageEnemy--; 
         
         }   else if(advantageEnemy == 2){ 

            advantageEnemy--; 

         }   else if(advantageEnemy == 0){

            //* Here we delete the attack that we our enemy use once he don't have more advantage:
            bot.atacks.splice(index,1);
         
         }

}


//*This function use like reference the atacks mkClass of our player and our enemy to give points to our enemy or our player, and if we have less or more victories or defeats we give a final Victory a final Defeat or a final Draw:
function combat(){

   //*We abstract in vars the info about our Mk inputs selection buttons:
    
   Fire = $(Raykiou.input);//*Raykiou input.

   Ice = $(Crabster.input);//*Crabster input.

   Earth = $(Joka.input);//*Joka input.

   Truth = $(Truthler.input);//*Truthler input.

   Rock = $(Rocker.input);//*Rocker input.

   Quetza = $(Quetzal.input);//*Quetzal input.


  //*Victory Situations:
   if(

        //*Situations were Fire win 
       mkClass == 'fire' && mkClassEnemy == 'ice'|| mkClass == 'fire' && mkClassEnemy == 'thunder' || mkClass == 'fire' && mkClassEnemy == 'steel'||

        //*Situations were Ice win:
       mkClass == 'ice' && mkClassEnemy == 'water' || mkClass == 'ice' && mkClassEnemy == 'earth' || mkClass == 'ice' && mkClassEnemy == 'air'||

        //* Situations were Earth win: 
       mkClass == 'earth' && mkClassEnemy == 'fire' || mkClass == 'earth' && mkClassEnemy == 'thunder' || mkClass == 'earth' && mkClassEnemy == 'steel'||

        //*Situations were Thunder win:
       mkClass == 'thunder' && mkClassEnemy == 'ice' || mkClass == 'thunder' && mkClassEnemy == 'steel' || mkClass == 'thunder' && mkClassEnemy == 'air' || 

       mkClass == 'water' && mkClassEnemy == 'fire' || mkClass == 'water' && mkClassEnemy == 'earth' || mkClass == 'water' && mkClassEnemy == 'thunder' || 

        //* Situations were Steel win: 
       mkClass == 'steel' && mkClassEnemy == 'ice' || mkClass == 'steel' && mkClassEnemy == 'water' || mkClass == 'steel' && mkClassEnemy == 'air' || 

        //* Situations were Air win:
       mkClass == 'air' && mkClassEnemy == 'fire' || mkClass == 'air' && mkClassEnemy == 'water' || mkClass == 'air' && mkClassEnemy == 'earth'

       )

       {

       victoriesPlayer++;//*Player got a Victory.


       $("victories-Span-Player").innerHTML = victoriesPlayer;//*We show in screen our victory score.


           finalResult.innerHTML ="YOU WIN";//*We show in our general result if we get a point.


       } else if(elementalAttack == elementalAttackEnemy){

           finalResult.innerHTML = "DRAW";//*We got a final draw.


       } else if(mkClass == mkClassEnemy){

           finalResult.innerHTML = "DRAW";//*We got a final draw.


       } else {

   victoriesEnemy++;//*Enemy got a Victory.

       finalResult.innerHTML = "YOU LOOSE";//*We got a loose.


     $('victories-Span-enemy').innerHTML = victoriesEnemy;//*We show the result in screen.

     }



  //*Raykiou statement:
   if(Fire.checked){

     /* Stop game if we won statement */
       if(sequency == 0 && victoriesEnemy < victoriesPlayer ){

               finalResult.innerHTML = "VICTORY";//*We got a final victory.


               endCombat = true;//*We define if our combat ends for work with other functions in our game.

           } 

     /* Stop game if we lose statement */
       if(sequency == 0 && victoriesPlayer < victoriesEnemy ){

               finalResult.innerHTML = "DEFEAT";//*We got a final defeat.


               endCombat = true;//*We define if our combat ends for work with other functions in our game.


           } } else if(sequency === 0 && victoriesPlayer == victoriesEnemy ){

               finalResult.innerHTML = "DRAW";//*We got a final draw.


               endCombat = true;//*We define if our combat ends for work with other functions in our game.

           } else if(finalResult == "DRAW" || finalResult == "DEFEAT" || finalResult == "VICTORY"){

              /* We will disable the buttons of Raykiou */
               $('flare').disabled = true;
               $('ionicRoar').disabled = true;
               $('incinerate').disabled = true;
               $('fire-punch').disabled = true;
               $('rock-spikes').disabled = true;

           }

  /* Crabster statement */
   if(Ice.checked){

        /* Stop game if we won statement */
       if(sequency === 0 && victoriesEnemy < victoriesPlayer ){

               finalResult.innerHTML = "VICTORY";//*We got a final victory.


               endCombat = true;//*We define if our combat ends for work with other functions in our game.

           } 
           
     /* Stop game if we lose statement */
       if(sequency === 0 && victoriesPlayer < victoriesEnemy ){

               finalResult.innerHTML = "DEFEAT";//*We got a final defeat.


               endCombat = true;//*We define if our combat ends for work with other functions in our game.

           } } else if(sequency === 0 && victoriesPlayer == victoriesEnemy){

               finalResult.innerHTML = "DRAW";//*We got a final draw.


               endCombat = true;//*We define if our combat ends for work with other functions in our game.


           } else if(finalResult == "DRAW" || finalResult == "DEFEAT" || finalResult == "VICTORY"){

              /* We will disable the buttons of Crabster */
               $('iceSpikes').disabled = true;
               $('blizzard').disabled = true;
               $('frost').disabled = true;
               $('fire-punch').disabled = true;
               $('steelClaw').disabled = true;

           }


  /* Joka statement */
   if(Earth.checked){

        /* Stop game if we won statement */
       if(sequency === 0 && victoriesEnemy < victoriesPlayer ){

               finalResult.innerHTML = "VICTORY";//*We got a final victory.


               endCombat = true;//*We define if our combat ends for work with other functions in our game.

           } 

     /* Stop game if we lose statement */
       if(sequency === 0 && victoriesPlayer < victoriesEnemy){

               finalResult.innerHTML = "DEFEAT";//*We got a final defeat.


               endCombat = true;//*We define if our combat ends for work with other functions in our game.

           } } else if(sequency === 0 && victoriesPlayer == victoriesEnemy ){

               finalResult.innerHTML = "DRAW";//*We got a final draw.


               endCombat = true;//*We define if our combat ends for work with other functions in our game.


           }  else if(finalResult == "DRAW" || finalResult == "DEFEAT" || finalResult == "VICTORY"){

              /* We will disable the buttons of Joka */
               $('waterStream').disabled = true;
               $('spring').disabled = true;
               $('vine').disabled = true;
               $('avalanche').disabled = true;
               $('earthQuake').disabled = true;

           }


  /* Truthler statement */
   if(Truth.checked){

     /* Stop game if we won statement */
       if(sequency === 0 && victoriesEnemy < victoriesPlayer ){

               finalResult.innerHTML = "VICTORY";//*We got a final victory.


               endCombat = true;//*We define if our combat ends for work with other functions in our game.

           } 

     /* Stop game if we lose statement */
       if(sequency === 0 && victoriesPlayer < victoriesEnemy){

               finalResult.innerHTML = "DEFEAT";//*We got a final defeat.


               endCombat = true;//*We define if our combat ends for work with other functions in our game.

           } } else if(sequency === 0 && victoriesPlayer == victoriesEnemy ){

               finalResult.innerHTML = "DRAW";//*We got a final draw.


               endCombat = true;//*We define if our combat ends for work with other functions in our game.


           }  else if(finalResult == "DRAW" || finalResult == "DEFEAT" || finalResult == "VICTORY"){

              /* We will disable the buttons of Joka */
               $('bolt').disabled = true;
               $('rainOfSpikes').disabled = true;
               $('fireShoot').disabled = true;
               $('blitz').disabled = true;
               $('ironWhip').disabled = true;

           }


  /* Quetzal statement */
   if(Quetza.checked){

        /* Stop game if we won statement */
       if(sequency === 0 && victoriesEnemy < victoriesPlayer ){

               finalResult.innerHTML = "VICTORY";//*We got a final victory.


               endCombat = true;//*We define if our combat ends for work with other functions in our game.

           } 

     /* Stop game if we lose statement */
   if(sequency === 0 && victoriesPlayer < victoriesEnemy){

           finalResult.innerHTML = "DEFEAT";//*We got a final defeat.


           endCombat = true;//*We define if our combat ends for work with other functions in our game.

       } } else if(sequency === 0 && victoriesPlayer == victoriesEnemy ){

           finalResult.innerHTML = "DRAW";//*We got a final draw.


           endCombat = true;//*We define if our combat ends for work with other functions in our game.

           }  else if(finalResult == "DRAW" || finalResult == "DEFEAT" || finalResult == "VICTORY"){

              /* We will disable the buttons of Joka */
               $('tornado').disabled = true;
               $('waterStream').disabled = true;
               $('storm').disabled = true;
               $('hurricane').disabled = true;
               $('breath').disabled = true;

           }



  /* Rocker Statement */
   if(Rock.checked){

        /* Stop game if we won statement */
      if(sequency === 0 && victoriesEnemy < victoriesPlayer ){

               finalResult.innerHTML = "VICTORY";//*We got a final victory.


               endCombat = true;//*We define if our combat ends for work with other functions in our game.

         } 

     /* Stop game if we lose statement */
      if(sequency === 0 && victoriesPlayer < victoriesEnemy){

               finalResult.innerHTML = "DEFEAT";//*We got a final defeat.


               endCombat = true;//*We define if our combat ends for work with other functions in our game.


         } } else if(sequency === 0 && victoriesPlayer == victoriesEnemy ){

               finalResult.innerHTML = "DRAW";//*We got a final draw.


               endCombat = true;//*We define if our combat ends for work with other functions in our game.


         }  else if(finalResult == "DRAW" || finalResult == "DEFEAT" || finalResult == "VICTORY"){

              /* We will disable the buttons of Joka */
               $('fracture').disabled = true;
               $('metalSmash').disabled = true;
               $('titaniumKick').disabled = true;
               $('rockShooter').disabled = true;
               $('meteor').disabled = true; 

         }


      //*Here we set the time for see when we'll clean our atacks
         setTimeout(()=>{

            cleanAtacksOfCombat();

         },4000);

         

//*condition to check if the user's mokepon are name or isn't
}

