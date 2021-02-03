// function doubleIt(num){
//     return num*2;
// }


// const doubleIt =function myFun(num){
//     return num*2;
// }

const doubleIt = num => num * 2;//using arrow function, single parameter
const add = (x, y) => x + y; //more then one parameter er jonno ()
const result = add(5, 7); 
const give5 = () => 5; //empty parameter

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}


//const result = doubleIt(5);
const result2 = give5();
console.log(result2);


//console.log(result);

const result3 = doMath(7, 5);
console.log(result3);