class Person {

    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getDescription() {
        return `${this.name} is ${this.age} years(s) old`;
    }

    getGreeting() {
        // return "hi " + this.name;
        return `Hi, this is ${this.name}`;
    }
}

class Student extends Person {

    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    getDescription() {
        let description = super.getDescription();
        return description;
    }
}

class Traveller extends Person {

    constructor(name, age, location = ''){
        super(name, age);
        this.location = location;
    }

    getLocation(){
        return !!this.location;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if(this.getLocation()){
            greeting += ` I'm visiting from ${this.location}`;
        }

        return greeting;
    }
}


const me = new Traveller('Ravi Salunkhe', 35, 'Mumbai');
console.log(me.getGreeting());
const test = new Traveller();
console.log(test.getGreeting());
