const friends = ['sabit', 'shishir', 'shorif', 'siddik', 'kamrunnahar']
function bestFriend(friends) {
    let largestName = '';
    for (var i = 0; i < friends.length; i++) {
        if (largestName.length < friends[i].length) {

            largestName = friends[i];
        }
    }

    return largestName;
}


const result = bestFriend(friends);
console.log(result)