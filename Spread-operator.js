const user = {
"1": {
name: "John",
age: 29,
},
"2": {
name: "Jane",
age: 42,
},
"3": {
name: "Fred",
age: 17,
},
};
let result=Object.entries(user).reduce((accum,[id, user])=>
{
    if(user.age>20)
    {
        accum.push({...user,id})
    }
    return accum;
},[])
console.log(result)
