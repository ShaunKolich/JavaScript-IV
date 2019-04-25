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

class Instructor extends Person{
    constructor(attributes) {
        super(attributes);

}


}