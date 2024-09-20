
const script1 = document.createElement('script');
const script2 = document.createElement('script');
const script3 = document.createElement('script');
const script4 = document.createElement('script');
const script5 = document.createElement('script');
const script6 = document.createElement('script');
const script7 = document.createElement('script');
const script8 = document.createElement('script');
const script9 = document.createElement('script');
const script10 = document.createElement('script');
const script11 = document.createElement('script');
const script12 = document.createElement('script');
const script13 = document.createElement('script');
const script14 = document.createElement('script');
const script15 = document.createElement('script');

script1.defer = true;
script2.defer = true;
script3.defer = true;
script4.defer = true;
script5.defer = true;
script6.defer = true;
script7.defer = true;
script8.defer = true;
script9.defer = true;
script10.defer = true;
script11.defer = true;
script12.defer = true;
script13.defer = true;
script14.defer = true;
script15.defer = true;

script1.src = './src/JS/Logic/Functions/global_functions.js';
script2.src = './src/JS/Logic/global/combat_vars.js';
script3.src = './src/JS/Logic/global/map_vars.js';
script4.src = './src/JS/Logic/Data_structures/combat_data_structures.js';
script5.src = './src/JS/Logic/Data_structures/global_data_structures.js';
script6.src = './src/JS/Logic/Data_structures/map_data_structures.js';
script7.src = './src/JS/Logic/Classes/global_classes.js';
script8.src = './src/JS/Logic/Objects/global_objects.js';
script9.src = './src/JS/Logic/Functions/combat_functions.js';
script10.src = './src/JS/Logic/Functions/render_functions.js';
script11.src = './src/JS/Logic/Functions/map_functions.js';
script12.src = './src/JS/Logic/Functions/information_functions.js';
script13.src = './src/JS/Animations/map_animations.js';
script14.src = './src/JS/Animations/set_map_enemies.js';
script15.src = './src/JS/Core/main.js';

const sorteredScripts = [

    script1,
    script2,
    script3,
    script4,
    script5,
    script6,
    script7,
    script8,
    script9,
    script10,
    script11,
    script12,
    script13,
    script14,
    script15

]

let mainHead = document.getElementById('head');

for (let i = 0; i < sorteredScripts.length; i++) {
    
    mainHead.appendChild(sorteredScripts[i])

}

