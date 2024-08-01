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