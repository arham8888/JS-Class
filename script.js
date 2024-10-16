// creating a class  
class Student {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // creating age method for class student  
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

// use student class with two objects  
let student1 = new Student("Riya", 2014);
document.getElementById("student1").innerHTML = "My name is " + student1.name + ". I was born in " + student1.year + " and my age is " + student1.age() + ".";

let student2 = new Student("Tina", 2018);
document.getElementById("student2").innerHTML = "My name is " + student2.name + ". I was born in " + student2.year + " and my age is " + student2.age() + ".";