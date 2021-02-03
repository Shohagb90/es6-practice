class Student{
    // constructor(){
    //     this.id = 1;
    //     this.name = "mahi";
    // }
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school"; //default
    }
}

// const student1 = new Student();
// const student2 = new Student();
// console.log(student1, student2);
const student1 = new Student(12, "shuvo");
const student2 = new Student(22, "mahiya");
const student3 = new Student(26, "bappi");
// console.log(student1, student2);
console.log(student1.name, student2.name);
console.log(student3);