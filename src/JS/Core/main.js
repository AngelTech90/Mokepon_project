
//Main JS archive of the project


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

//*This is for when our page load we start the game  
window = addEventListener('load',startGame);


hideAttackElements();//*Here we hide our atacks, because we don't load our combat functions yet.

startVirtualMoveButtons()//*Here we make functional our buttons.+

setAllenemiesAtacks();//*Here we push inside all the atacks to our map enemies.

setIdsOfAllMokepons();//*Here we create the id of all our objects


//*This function will able all our dom elements for work with them:
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
