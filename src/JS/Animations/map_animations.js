
//*With next 24 function, is for move the 12 map enemies in linears animations, we use our object " intervalsIdList" for save all our setInterval functions and have a reference for then clear that interval and start the reverse animation function to get our enemy to their original point.

//*Other important thing is that every animation have a unic time of execution, and only we can move our enemies of:

   //* down to up.
   //* up to down.
   //* right to left.
   //* left to right.



// Store the movement duration for each enemy in arrays
const msMoveEnemies = [2200, 2400, 1600, 3900, 1900, 2700, 7500, 4600, 3200, 4900, 4200, 2100];
const msMoveEnemiesReverse = [2200, 2400, 2600, 3900, 1900, 2700, 7500, 4600, 3200, 4900, 4200, 2100];

// Function to move enemies forward
function moveEnemies() {
    mapEnemies.forEach((enemy, index) => {
        intervalsIdList[`repeaterLists${index}`] = setInterval(() => {
            enemy.x += enemy.hasOwnProperty("x") ? speedEnemy : 0;
            enemy.y += enemy.hasOwnProperty("y") ? speedEnemy : 0;
            checkEnemyColisions();
        }, 50);

        setTimeout(() => {
            clearInterval(intervalsIdList[`repeaterLists${index}`]);
            requestAnimationFrame(() => moveEnemiesReverse(index));
        }, msMoveEnemies[index]);
    });
}

// Function to move enemies in reverse
function moveEnemiesReverse(index) {
    intervalsIdList[`repeaterReverseLists${index}`] = setInterval(() => {
        mapEnemies[index].x -= mapEnemies[index].hasOwnProperty("x") ? speedEnemy : 0;
        mapEnemies[index].y -= mapEnemies[index].hasOwnProperty("y") ? speedEnemy : 0;
        checkEnemyColisions();
    }, 50);

    setTimeout(() => {
        clearInterval(intervalsIdList[`repeaterReverseLists${index}`]);
        requestAnimationFrame(moveEnemies);
    }, msMoveEnemiesReverse[index]);
}