
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


//*With this we start an animation for our enemy 4:
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




