
//js object
const Person = {

    firstName : 'Kalinga',
    lastName : 'Yapa',
    getFullName() {
        console.log(`${Person.firstName} ${Person.lastName}`);
    }
}


// Factory method
// camel notation
function createPerson(firstName,lastName) {
    return {

        firstName : firstName,
        lastName : lastName,
        getFullName() {
            console.log(`${this.firstName} ${this.lastName}`);
            console.log(this);
        }
    }

}

// constructor methode
function CreatePerson(firstName,lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.getFullName = function getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
     console.log(this);
}

//const person1 = createPerson('Kalinga1111','Yapa');
//const person2 = createPerson('Abc','123');
const person3 = new CreatePerson('sa','ok');

 //console.log(person1.getFullName());
// console.log(person2.getFullName());
 console.log(person3.getFullName());
 console.log('kalinga');