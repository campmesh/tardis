angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff', email: 'ScMcG@gmail.com' },
    { id: 1, name: 'G.I. Joe', email: 'joejeeai@gmail.com' },
    { id: 2, name: 'Miss Frizzle', email: 'frizz.miss@gmail.com' },
    { id: 3, name: 'Ash Ketchum', email: 'Ash.Ketchum@gmail.com' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});

