const numbersArray = [2,7,11,15];
const target = 9;
let result =[];

numbersArray.forEach((element, index) => {
    let diff = target - element;
    if (numbersArray.includes(diff)){
        result.push(numbersArray.findIndex(diff))
    }
    
});