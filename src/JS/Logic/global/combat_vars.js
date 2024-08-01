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