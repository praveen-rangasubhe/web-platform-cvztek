var a = {
  firstName: "Praveen",
  lastName: "Rangasubhe",
  movie: ["ek tha tiger", "Doom"],
  salary: function() {
    return 450000;
  },
  fullName: function() {
    return this.firstName + this.lastName;
  }
};
console.log(a);
document.write(a.fullName());
