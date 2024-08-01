function setTypesMokepons(){
    Raykiou.type.push('fire','thunder');//*We push the types in the Raykiou type propertie
    Joka.type.push('earth','water');//*We push the types in the Joka type propertie
    Crabster.type.push('ice','steel');//*We push the types in the Crabster type propertie
    Truthler.type.push('thunder','steel');//*We push the types in the Truthler type propertie
    Quetzal.type.push('air','water');//*We push the types in the Quetzal type propertie    
    Rocker.type.push('earth','steel');//*We push the types in the Rocker type propertie
}

function createAtacksMokepons(){
    //*Here we create the Raykiou atacks and properties
    Raykiou.atacks.push(
        new Atack("Flare",'flare','fire','Fire','flareAtack'),
        new Atack("Ionic Roar", 'ionicRoar', 'thunder', 'Thunder','ionicRoarAtack'),
        new Atack("Incinerate",'incinerate','fire','Fire', 'incinerateAtack'),
        new Atack("Fire Punch",'fire-punch','fire','Fire', 'firePunchAtack'),
        new Atack("Rock Spikes",'rock-spikes','earth','Earth','rockSpikesAtack'),
    );

//*Here we create the Joka atacks and properties
    Joka.atacks.push(
        new Atack("Water Stream",'waterStream' ,'water','Water','waterStreamAtack'),
        new Atack("Spring" ,'spring' , 'water', 'Water', 'springAtack'),
        new Atack("Vine",'vine' ,'earth','Earth','vineAtack'),
        new Atack("Avalanche",'avalanche' ,'earth','Earth', 'avalancheAtack'),
        new Atack("EarthQuake",'earthQuake' ,'earth','Earth', 'earthquakeAtack'),
    );

//*Here we create the Crabsters atacks and properties
    Crabster.atacks.push(
        new Atack("Ice Spikes",'iceSpikes','ice','Ice','iceSpikesAtack'),
        new Atack("Blizzard",'blizzard','ice','Ice','blizzardAtack'),
        new Atack("Frost",'frost','ice','Ice','frostAtack'),
        new Atack("Fire Punch",'fire-punch','fire','Fire','firePunchAtack'),
        new Atack("Steel Claw",'steelClaw','steel','Steel','steelClawAtack'),
    );

//*Here we create the Truthler atacks and properties
    Truthler.atacks.push(
        new Atack("Bolt", 'bolt', 'thunder', 'Thunder', 'boltAtack'),
        new Atack("Rain of Spikes",'rainOfSpikes','steel','Steel','rainOfSpikes'),
        new Atack("Fire Shoot",'fireShoot','fire','Fire','fireShootAtack'),
        new Atack("Blitz",'blitz','thunder','Thunder','blitzAtack'),
        new Atack("Iron Whip",'ironWhip','steel','Steel','ironWhipAtack')
    );

//*Here we create the Quetzal atacks and properties
    Quetzal.atacks.push(
        new Atack("Tornado",'tornado','air','Air','tornadoAtack'),
        new Atack("Water Stream",'waterStream','water','Water','waterStreamAtack'),
        new Atack("Storm",'storm','water','Water','stormAtack'),
        new Atack("Hurricane",'hurricane','air','Air','hurricaneAtack'),
        new Atack("Breath",'breath','air','Air','breathAtack')
    );

//*Here we create the Rocker atacks and properties
    Rocker.atacks.push(
        new Atack("Fracture",'fracture','earth','Earth','fractureAtack'),
        new Atack("Metal Smash",'metalSmash','steel','Steel','metalSmashAtack'),
        new Atack("Titanium Kick",'titaniumKick','steel','Steel','titaniumKickAtack'),
        new Atack("Rock Shoter",'rockShooter','earth','Earth','rockShooterAtack'),
        new Atack("Meteor",'meteor','earth','Earth','meteorAtack')
    );
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


/* *Here we run our functions for define our combat objects: */
setTypesMokepons();
createAtacksMokepons();