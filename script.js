const generateRandomNumber = (num) =>{
    return Math.random(Math.floor() * num);
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
        case "food":
            CustomerOrder.push(`with the option of ${RestaurantMessage.price[option]} dish please?`);
            break;
        case "food":
            CustomerOrder.push(`'\n' - ${RestaurantMessage.waitorResponse[option]}`);
            break;
        default:
            CustomerOrder.push('There is not enough info.');    
    }
}
    

//"Thank you. We will be right back!"
//console.log("a");