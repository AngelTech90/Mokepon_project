//This function is for generate random Numbers
function randomMonster(min,max) {

    return Math.floor(Math.random() * (max - min + 1) + min) ;

} 


const logIn = valor => console.log(valor);//We are asigning "the console.log()" for only need "logIn()" to use it

const $ = selector => document.getElementById(selector);//Here we are asigning the value of the function "document.getElementById()" for only need write "$("")" to use it

const T = selectir => document.getElementsByClassName(selectir);//We can take elements by class

const seeAll = selectora => document.querySelectorAll(selectora);//We use this command in the console for a quicker DOM work

//*This function is for make able in our widow to take the keys events:
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
 
 


