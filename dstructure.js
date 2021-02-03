const person = {name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', friends:['eba', 'mila', 'alal'], phone: "01770"}

const { phone, gfName } = person;
//const gfName = person.gfName;
//const phone = person.phone;


// console.log(person.gfName);
// console.log(person.gfName);
// console.log(person.gfName);

const complexObject = {
    name: 'abc',
    info: {
        address: 'uttara';
        leader: 'tiger';
    }
}
const {leader} = complexObject.info;

console.log(gfName);
console.log(gfName, phone);
console.log(phone);


const friends1 = ['sakib khan', 'arman', 'amir', 'salman'];
const [chotoFriend, ...oldF] = friends1;
console.log(oldF);