

//*This object is for management and take all the intervals for our animations and enemies move ins our map, just like we have 12 total enemies, our object have 12 total properties for take every single animation:
let intervalsIdList = {

    repeaterLists: "",
    repeaterReverseLists: "",

    repeaterLists2: "",
    repeaterReverseLists2: "",

    repeaterLists3: "",
    repeaterReverseLists3: "",

    repeaterLists4: "",
    repeaterReverseLists4: "",

    repeaterLists5: "",
    repeaterListsReverse5: "",

    repeaterLists6: "",
    repeaterListsReverse6: "",

    repeaterLists7: "",
    repeaterReverseLists7: "",

    repeaterLists8: "",
    repeaterReverseLists8: "",

    repeaterLists9: "",
    repeaterReverseLists9: "",

    repeaterLists10: "",
    repeaterReverseLists10: "",

    repeaterLists11: "",
    repeaterReverseLists11: "",

    repeaterLists12: "",
    repeaterReverseLists12: "",

}


//*Here we are creating the spawn point using a random number in diferent specific parameters of our enemies, the +22 was for modify to convenience the spawn number faster.

//*The first "[0]" element represents the "x" position value in our map, the second "[1]" element represents the "y"
let enemiesPositions = {

    enemy1:[randomMonster(189,222 + 12),randomMonster(272,294 + 12)],
    enemy2:[randomMonster(476,498 + 12),randomMonster(450,490 + 12)],
    enemy3:[randomMonster(291,313 + 12),randomMonster(376,398 + 12)],
    enemy4:[randomMonster(67,89 + 12),randomMonster(193,265 + 12)],
    enemy5:[randomMonster(91,103 + 12),randomMonster(382,404 + 12)],
    enemy6:[randomMonster(494,516 + 12),randomMonster(387,409 + 12)],

    enemy7:[randomMonster(162,184 + 12),randomMonster(367,389 + 12)],
    enemy8:[randomMonster(382,404 + 12),randomMonster(125,147 + 12)],
    enemy9:[randomMonster(291,313 + 12),randomMonster(128,150 + 12)],
    enemy10:[randomMonster(178,204 + 12),randomMonster(201,223 + 12)],
    enemy11:[randomMonster(303,313 + 12),randomMonster(31,43 + 12)],
    enemy12:[randomMonster(78,100 + 12),randomMonster(56,78 + 12)],

}

