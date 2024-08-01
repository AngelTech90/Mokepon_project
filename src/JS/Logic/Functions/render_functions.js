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