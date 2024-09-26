const findTheOldest = function(people) {
   return people.reduce((oldest, person) => {

    const currentYear = new Date().getFullYear();
    const deathYear = person.yearOfDeath || currentYear;

    const personAge = deathYear - person.yearOfBirth;

    const oldestDeathYear = oldest.yearOfDeath || currentYear;
    const oldestAge = oldestDeathYear - oldest.yearOfBirth;

    return personAge > oldestAge ? person : oldest;
   }


)};

// Do not edit below this line
module.exports = findTheOldest;
