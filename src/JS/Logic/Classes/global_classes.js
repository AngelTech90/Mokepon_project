/*This let us create mokepons creating objects using the constructor of our class, to make memory spaces 
were we can idex specific information for ever single mokepon that we are creating in our game*/
class Mokepon {

    constructor(image,input,label,name,x,y,width,height,idMk){

    this.image =image;
    this.input = input;
    this.atacks = [];
    this.label = label;
    this.name = name;
    this.type = [];
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 70;
    this.idMk = randomMonster(1,1000000);

    }

}


//*This class is for every default atack of our mokepons, takin the id from our html, color too and other visible properties:
class Atack{

    constructor(atkName,id,classMk,color,atackId){

    this.atkName = atkName;
    this.id = id;
    this.classMk = classMk;
    this.color = color;
    this.atackId = atackId

    }

}
