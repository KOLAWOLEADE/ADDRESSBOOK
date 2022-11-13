// // CONSTRUCTOR

// function people(firstName,lastName,phoneNumber,address,email){this.firstName=firstName
//     this.lastName=lastName
//     this.phoneNumber=phoneNumber
// this.Address=address
//   this.email=email }

//   // INSTANCE

// let myfrnd2 = new people("bose", "busola", 123456789,"colleage rd","boseBusola@yahoo.com")

//   let myFriend = new people("bolaji", "Ayodeji" ,070, "Omole Estate", "bolajiAyodeji@yahoo.com")
  

//   // FULLNAME PROTOTYPE
//   people.prototype.fullname = function(){return this.firstName+" "+ this.lastName}




  // Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}


//FULLNAME PROTOTYPE

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};