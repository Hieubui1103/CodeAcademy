const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

//pathing replacing

const goUp = (field, xCoord, yCoord) => {
    if (xCoord === 0) {
        console.log("You can't move outside of the board")
        return 1;///if uppermost row
    } else {
        //xCoord++;
        if (field[xCoord - 1][yCoord] === hole) {
            console.log("Loses by landing on (and falling in) a hole.");
            return 1;
        } else if (field[xCoord - 1][yCoord] === hat) {
            console.log("You win!");
            return 1;
        } else {
            field[xCoord - 1][yCoord] = pathCharacter;
            return 0;
        }
    }
}

const goDown = (field, xCoord, yCoord) => {
    if (xCoord === (field.length -1)) {
        console.log("You can't move outside of the board") //if uppermost row
        return 1;
    } else {
       // xCoord--;
        if (field[xCoord + 1][yCoord] === hole) {
            console.log("Loses by landing on (and falling in) a hole.");
            return 1;
        } else if (field[xCoord + 1][yCoord] === hat) {
            console.log("You win!");
            return 1;
        } else {
            field[xCoord + 1][yCoord] = pathCharacter;
            return 0;
        }
    }
}

const goLeft = (field, xCoord, yCoord) => {
    if (yCoord === 0) {
        console.log("You can't move outside of the board") //if uppermost row
        return 1;
    } else {
        //yCoord--;
        if (field[xCoord][yCoord - 1] === hole) {
            console.log("Loses by landing on (and falling in) a hole.");
            return 1;
        } else if (field[xCoord][yCoord - 1] === hat) {
            console.log("You win!");
            return 1;
        } else {
            field[xCoord][yCoord - 1] = pathCharacter;
            return 0;
        }
    }
}

const goRight = (field, xCoord, yCoord) => {
    if (yCoord === (field[xCoord].length-1)) {
        console.log("You can't move outside of the board") //if uppermost row
        return 1;
    } else {
        //yCoord++;
        if (field[xCoord][yCoord + 1] === hole) {
            console.log("Loses by landing on (and falling in) a hole.");
            return 1;
        } else if (field[xCoord][yCoord + 1] === hat) {
            console.log("You win!");
            return 1;
        } else {
            field[xCoord][yCoord + 1] = pathCharacter;
            return 0;
        }
    }
}

//generate new field
const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
}


const generateRandomNumber2 = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateTwoDifferentRandomNumbers = (min, max) => {
    let num1 = generateRandomNumber2(min, max);
    let num2;

    do {
        num2 = generateRandomNumber2(min, max);
    } while (num2 === num1); // Ensure num2 is different from num1

    return [num1, num2];
}
//array of properties:
const Prop = [hole,fieldCharacter]; //variable has been defined
/**/
const generateFieldmc = (x,y) => {
    let field = new Array(x);

    for (let i = 0; i < x; i++) {
        field[i] = new Array(y).fill(hole); // Initialize each row with empty values
    }

    // Choose a random index from the 1st row or column

    const randomIndex = generateRandomNumber(2); // 0 or 1
    const randomPosition = generateRandomNumber(randomIndex === 0 ? y : x); 

    if (randomIndex === 0) { 
        // Place pathCharacter in the first row
        field[0][randomPosition] = pathCharacter;
        field[1][randomPosition] = fieldCharacter;
    } else {
        // Place pathCharacter in the first column
        field[randomPosition][0] = pathCharacter;
        field[randomPosition][1] = fieldCharacter;
    }
    let count = 0;
    while(count <= (x*y)*5/9){
    for(let i=0; i<x; i++){
        for(let j=0; j<y; j++){
            const directions = [
                [i === 0 ? i : (i - 1), j],             // Up
                [i === x - 1 ? i : (i + 1), j],         // Down
                [i, j === 0 ? j : (j - 1)],             // Left
                [i, j === y - 1 ? j : (j + 1)]          // Right
            ];
            
        
            if(
                (field[i][j] === fieldCharacter && (field[directions[0][0]][directions[0][1]] === pathCharacter || field[directions[2][0]][directions[2][1]] === pathCharacter) ) ||(field[i][j] === fieldCharacter)
            ){
                if(randomIndex === 0 /*no extra lane*/){
                    let direction = generateRandomNumber(4);
                    field[directions[direction][0]][directions[direction][1]]= fieldCharacter;
                    count ++
                } else {
                    let k = generateTwoDifferentRandomNumbers(0,3);
                    field[directions[k[0]][0]][directions[k[0]][1]] = fieldCharacter;
                    field[directions[k[1]][0]][directions[k[1]][1]] = fieldCharacter;
                    count = count + 2;
                }

            }
        }
    }
    }
    console.log(count);
    console.log(field);
    return field;
}
generateFieldmc(6,6)
module.exports = { goUp, goDown, goLeft, goRight, generateFieldmc }