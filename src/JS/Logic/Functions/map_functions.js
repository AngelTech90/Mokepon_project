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
 
 //*With this function we set the name of our player in screen when we render our map:
 function mkMapRendering(){
 
    mkMapSpan.innerHTML = player.name;
 
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