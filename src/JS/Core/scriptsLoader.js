let mainHTML = document.querySelector('head');

let scripts = "
    
      <!-- *First we render all our elements of our program like vars, classes, objects and data structures: -->
<script defer src= './src/JS/Logic/Functions/global_functions.js'></script>
<script defer src='./src/JS/Logic/global/combat_vars.js'></script>
<script defer src='./src/JS/Logic/global/DOM_vars.js'></script>
<script defer src='./src/JS/Logic/global/map_vars.js'></script>
<script defer src='./src/JS/Logic/Data_structures/combat_data_structures.js'></script>
<script defer src='./src/JS/Logic/Data_structures/global_data_structures.js'></script>
<script defer src='./src/JS/Logic/Data_structures/map_data_structures.js'></script>
<script defer src= './src/JS/Logic/Classes/global_classes.js'></script>
<script defer src= './src/JS/Logic/Objects/global_objects.js'></script>

<!-- *Now we load our logi functions and animations -->
<script defer src= './src/JS/Logic/Functions/combat_functions.js'></script>
<script defer src= './src/JS/Logic/Functions/render_functions.js'></script>
<script defer src= './src/JS/Logic/Functions/map_functions.js'></script>
<script defer src= './src/JS/Logic/Functions/information_functions.js'></script>
<script defer src='./src/JS/Animations/map_animations.js'></script>
<script defer src= './src/JS/Animations/set_map_enemies.js'></script>

<!-- *Now we Boot all our program functions using our core main file: -->
<script defer src = './src/JS/Core/main.js'></script>
    
     <script src="https://kit.fontawesome.com/09fe3c9c5c.js" crossorigin="anonymous"></script>

      <link rel = "icon" href = "assets/images/joka.ico">

  <!-- * Css modules: -->
    <link rel ="stylesheet" href="./src/CSS/main.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1"> 


";

mainHTML.innerHTML = scripts;

console.log('im connected')