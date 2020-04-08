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
    marry: function(person2){
      this.married = true
      person2.married = true
      this.spouseName = person2.getFullName()
      person2.spouseName = this.getFullName()
    },

    divorce: function(person2){
      this.married = false
      delete this.spouseName
      person2.married = false
      delete person2.spouseName
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
