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
        // this.subject = attributes.subject;
        // this.subject = attributes.subject;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} recieves a perfect score on ${subject}`;
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
    PRAssignment(student, subject) {
        return `${student.name} has a PR for ${subject}`;
    }
    SprintChallenge(student, subject) {
        return `${student.name} has begun sprint challenge ${subject}`;
    }
}

class ProjectManager extends Student {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
        this.channel = attributes.channel;
    }
    standUp() {
        return `${this.name} announces to ${this.channel}, @channel standy times!`;
    }
    debugsCode(student,subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
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

let jb = new ProjectManager({
    name: 'Jb',
    channel: 'webpt6',

});


console.log(fred.speak());
console.log(tony.demo('java'));
console.log(fred.grade(tony, 'java'));
console.log(tony.favSubjects);
console.log(tony.PRAssignment(tony, 'Java'));
console.log(tony.SprintChallenge(tony,'JavaScript IV'));
console.log(jb.standUp());
console.log(jb.debugsCode(tony,'java'));