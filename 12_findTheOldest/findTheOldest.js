const findTheOldest = function(people) {
    //console.log(people);
    return people.reduce((accumulator, currPerson) => {
        // nothing in the accumulator at the start of reduce()
        // put first array item in to accumulator
        if (Object.keys(accumulator).length ===0) {
            return currPerson;
        };

        let currAge = new Number();
        let accumulatorAge = new Number();
        const currYear = new Date().getFullYear();
        // get curr person age 
        // if year of death is null, get current Date 
        if (currPerson.yearOfDeath === undefined) {
            currAge = currYear - currPerson.yearOfBirth;
        } else {
            currAge = currPerson.yearOfDeath - currPerson.yearOfBirth;
        }
        // get accumulator age
        // if year of death is null, get current Date 

        if (accumulator.yearOfDeath === undefined) {
            accumulatorAge = currYear - accumulator.yearOfBirth;
        } else {
            accumulatorAge = accumulator.yearOfDeath - accumulator.yearOfBirth;
        }

        //console.log(`current - ${currPerson.name} : ${currAge} - accumulator - ${accumulator.name} : ${accumulatorAge}`)
        // compare ages and return the oldest to the accumulator
        if (currAge > accumulatorAge) {
            //console.log(`returning currPerson ${currPerson.name}`);
            return currPerson;

        } else if (currAge < accumulatorAge) {
            //console.log(`returning accumulator ${accumulator.name}`);
            return accumulator;
        } else {
            //console.log(`returning accumulator ${accumulator.name}`);
            return accumulator;
        }
    })
};

/*
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

oldest_person = findTheOldest(people)

//console.log(oldest_person.name);
*/

// Do not edit below this line
module.exports = findTheOldest;
