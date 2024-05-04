const findTheOldest = function(arr) {
    return arr.reduce((oldestPerson, youngestPerson) => {
        const lastAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = getAge(youngestPerson.yearOfBirth, youngestPerson.yearOfDeath);

        return currentAge < lastAge ? oldestPerson : youngestPerson;
    });
    // console.table(result);
    // console.log(arr.yearOfBirth);
    // console.log(result[0]);
    // console.log(result.name[0]);
    // return result.name[0];
};

const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
