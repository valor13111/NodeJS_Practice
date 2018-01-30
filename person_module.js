module.exports = function(id, firstName, lastName) {

  var id = id;
  var firstName = firstName;
  var lastName = lastName;

  var functions = {

    setId: function(newId) {
      id: newId
    },

    setFirstName: function(newFirstName) {
      firstName: newFirstName
    },

    setLastName: function(newLastName) {
      lastName: newLastName
    },

    getInfo: function() {
      return {
        id: id,
        firstName: firstName,
        lastName: lastName
      }
    }

  };

  return functions;

}
