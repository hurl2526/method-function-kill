/******************
 * YOUR CODE HERE *
 ******************/
const newPerson = function(firstName = 'Anonymous', lastName = 'Person', age, married = false){
  
  const newObj = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    married: married,

    goingOn: function(){
      newAge = this.age
    return newAge + 1
    },

    ageUp: function(){
   this.age = this.age + 1
    },
    getFullName: function(){
      return `${this.firstName} ${this.lastName}`
    },
    marry: function(person){
      this.married = true
      person.married = true
      this.spouseName = person.getFullName()
      person.spouseName = this.getFullName()
    },

    divorce: function(person){
      this.married = false
      delete this.spouseName
      person.married = false
      delete person.spouseName
    }
  };
return newObj;
};





/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = {
  newPerson,
}
