const firstName = "Justin";
const lastName = "TimberLake";
const fullName = firstName + " " + lastName + "is a good boy";
const fullName2 = `${firstName} ${lastName} is a good boy.`;//using `` (carret) template
const fullName3 = `${firstName} ${20 + 10} is a good boy.`;

console.log(fullName2);


const multiLine = "I love you\n"
+ "I need You";

const multiLine2 = `i love you. 
i need you`; //using template
console.log(multiLine2);
