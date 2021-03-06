const { assert } = require('chai');

const { emailCheck } = require('../helpers.js');

const testUsers = {
  "userRandomID": {
    id: "userRandomID", 
    email: "user@example.com", 
    password: "purple-monkey-dinosaur"
  },
  "user2RandomID": {
    id: "user2RandomID", 
    email: "user2@example.com", 
    password: "dishwasher-funk"
  }
};

describe('emailCheck', function() {
  it('should return a user with valid email', function() {
    const user = emailCheck("user@example.com", testUsers)
    const expectedUserID = "userRandomID";
    // Write your assert statement here
    assert.equal(user, testUsers.userRandomID);
  });

  it('non existent user should return undefined', function() {
    const user = emailCheck("nonexistentuser@example.com", testUsers);
    assert.equal(user, undefined);
  })
});