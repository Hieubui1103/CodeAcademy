const generateRandomNumber = (num) =>{
    return Math.floor(Math.random() * num);
}

const RestaurantMessage = {
    food: ["pho", "bun dau mam tom", "bun ca'", "xoi gac", "bun cha", "com tam"] ,
    price: ["$5", "$7", "$10", "$12", "$15"],
    waitorResponse: [
        "Is this your final choice?",
        "Do you want to change your option?",
        "This price of choice will have a lot of food. Do you want to proceed?",
        "For your children, I would suggest getting the smaller prices."
    ]
}

//version 2.0

let CustomerOrder = [];

for(let order in RestaurantMessage){
    let option = generateRandomNumber(RestaurantMessage[order].length);
    switch(order){
        case "food":
            CustomerOrder.push(`- Hi, can I have ${RestaurantMessage.food[option]}`);
            break;
        case "price":
            CustomerOrder.push(`with the option of ${RestaurantMessage.price[option]} dish please?`);
            break;
        case "waitorResponse":
            CustomerOrder.push(`'\n- ${RestaurantMessage.waitorResponse[option]}`);
            break;
        default:
            CustomerOrder.push('There is not enough info.');    
    }
}
    
//version 3.0

function getOrder(){
    const formated = CustomerOrder.join(' ');
    console.log(formated);
    const answer = ["Yes","No"];
    let answerIndex = generateRandomNumber(answer.length);
    if(!formated.includes(RestaurantMessage.waitorResponse[3])){
        console.log(`- ${answer[answerIndex]}`);
        if(answerIndex === 1){
            console.log("- Thank you. We will be right back!");
        } else {
            console.log("- What DO u want ?");
        }
    }
}

getOrder();


//version 4.0