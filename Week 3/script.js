const jonas = {
    firstName: 'Jonas',
    lastName: 'Schnedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

//const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')

//console.log(jonas[interestedIn])

/*const objectOne = {
    firstName: 'Henk',
    lastName: 'de Vries',
    age: 2021 - 1998,
    job: 'teacher',
    friends: ['Koe', 'Vos'],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
};

console.log(objectOne.getFullName());


const objectOne = {
    firstName: 'Piet',
    lastName: 'Janssens',
    job: 'Fighter',
    birthYear: 2000,
    getAge: function(name, job) {
        if (!this.age) this.age = new Date().getFullYear() - this.birthYear;
        return this.age;
    }
}

console.log(objectOne.getAge());
console.log(objectOne.getAge());
*/

//for loop keeps running while condition is true
for(let rep = 1; rep <= 10; rep++) {
    console.log('Lifting weights repitition ' + rep)
}

const objectOne = {
    firstName: 'Henk',
    lastName: 'de Vries',
    age: 2021 - 1998,
    job: 'teacher',
    friends: ['Koe', 'Vos'],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
};



function calculateAge(day, month, year) {
    const now = new Date();
    const diffInMilliseconds = now - birthDate;
    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
    const years = Math.floor(diffInDays / 365);
    const days = Math.floor(diffInDays % 365);
    return `${years} years and ${days} days`;
    
  }

  console.log(calculateAge(2006))

const  = 1;

  let test1 = new Date();
  console.log(test1);

function fuck {
    const currentYear = new Date().getFullYear();
}