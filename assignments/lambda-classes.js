// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
        this.subject = attributes.subject;
        // this.subject = attributes.subject;
    }
    demo() {
        return `Today we are learning about ${this.subject}`;
    }
    grade() {
        return `${student.name} recieves a perfect score on ${student.className}`;
    }

}

class Student extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        console.log(favSubjects);
    }
    PRAssignment() {
        return `${student.name} has a PR for ${subject}`;
    }
    SprintChallenge() {
        return `${student.name} has begun sprint challenge ${subject}`;
    }
}

class ProjectManager extends Student {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp() {
        return `${name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode() {
        return `${name} debugs ${student.name}'s code on ${subject}`;
    }

}




const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `
        Don 't forget the homies`
});

let tony = new Student({
    name: 'Tony',
    subject: 'Java',
    className: 'CS132',
    favSubjects: ['HTML', 'CSS', 'JavaScript']

});


console.log(fred.speak());
console.log(tony.demo());
// console.log(tony.grade());
console.log(tony.favSubjects);
// console.log(tony.PRAssignment());