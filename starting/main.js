const { goUp, goDown, goLeft, goRight, generateFieldmc} = require('./gameEnginer');
const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let GameContinue = false;

class Field {
    constructor(field, xCoord, yCoord){
        this.field = field;
        this._xCoord = xCoord;
        this._yCoord = yCoord;
    }
    get Field(){
        return this.field;
    }
    get xCoord(){
        return this._xCoord;
    }
    get yCoord(){
        return this._yCoord;
    }

    set xCoord(value){
        this._xCoord = value;
    }

    set yCoord(value){
        this._yCoord = value;
    }

    generateField(x,y){
        generateFieldmc(x,y);
    }
    //setter later if needed
    print(){
        for(let i=0; i<this.field.length; i++){
            console.log(this.field[i].join(""))
        }
    }
}


//storing field

//let x = field1.xCoord; 
//let y = field1.yCoord;  // x,y at top-left corner (default)

let field2 = new Field([],5,5);
field2.generateField(5,5);
field2.print();
//prompting users for starting the game:
while (!GameContinue) {
    field1.print();
    const userInput = prompt("Pressing the directions w, a, s, d to solve the maze:");

    let result = -1; // Initialize result

    if (userInput === "w") {
        result = goUp(field1.Field, x, y);
        if (result !== 1) x--; // Update x only if the move is valid
    } else if (userInput === "s") {
        result = goDown(field1.Field, x, y);
        if (result !== 1) x++; // Update x only if the move is valid
    } else if (userInput === "a") {
        result = goLeft(field1.Field, x, y);
        if (result !== 1) y--; // Update y only if the move is valid
    } else if (userInput === "d") {
        result = goRight(field1.Field, x, y);
        if (result !== 1) y++; // Update y only if the move is valid
    } else {
        console.log("Invalid input. Please enter w, a, s, or d.");
        continue; // Skip the rest of the loop and prompt for input again
    }

    if (result === 1) {
        GameContinue = true;
    }
}

