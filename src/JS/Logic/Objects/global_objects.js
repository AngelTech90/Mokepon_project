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

//*This is for frozen our principal objects for get our mokepons information for our game
Object.freeze(Raykiou,Joka,Truthler,Rocker,Crabster,Quetzal)

//*Here we have our array to take the enemies objects and render all our enemies in our map
mapEnemies.push(enemyRaykiou,enemyCrabster,enemyJoka,enemyQuetzal,enemyRocker,enemyTruthler, copiedEnemyRaykiou, copiedEnemyCrabster, copiedEnemyJoka, copiedEnemyTruthler, copiedEnemyRocker, copiedEnemyQuetzal);
