let users = new Set();
let john = { name: 1 };
let pete = { name: 2 };
let mary = { name: 3 };
users.add(john);
users.add(pete);
users.add(mary);
users.add(john);
users.add(mary);
users.add({name: 1});


for(let i of users)
{
    console.log(i.name);
}
