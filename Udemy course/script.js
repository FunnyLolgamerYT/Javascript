/*const friend1 = 'Michael';
const friend2 ='Steven';
const frined3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob', 'Alice']

const fristName = 'Jonas';
const jonas = [fristName, 'Schnedtmann', 2037 - 1991,
'teacher', friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}
const Years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(Years[0]));
console.log(calcAge(Years[1]));
console.log(calcAge(Years[2]));

const ages = [calcAge(Years[0]), calcAge(Years[1]), calcAge(Years[Years.length - 1])];
console.log(ages)

const jonasArray = [
    'jonas',
    'Schnedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]
*/
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schnedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends')

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request!What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschnedtman'

console.log(
    jonas.firstName, ' has',jonas.friends.length, 'friends, and his best friend is called', jonas.friends[0] 
)