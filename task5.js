// tarea5.js
function FriendsList(friends) {
  this.friends = friends;
}

const numberOfFriends = parseInt(process.argv[2]);
const friendsArray = process.argv.slice(3, 3 + numberOfFriends);
const myFriends = new FriendsList(friendsArray);
console.log(myFriends.friends);
