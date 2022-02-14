function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'Please Provide an array';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
}


const friends =  ['kutub', 'Lion', 'shamol', 'Sabbbir'];
const myBigBuddy = megaFriend(54554);
console.log(myBigBuddy);

if(friends.indexOf('Lion') != -1){
    console.log('Lion Exists');
}
else{
    console.log("Fox doesn't exists");
}

// includes
if(friends.includes('Lion')){
    console.log('Lion exists using includes');
}

// concat
const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);