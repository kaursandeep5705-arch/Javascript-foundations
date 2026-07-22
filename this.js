let user={
    name: "John",
    age : 30,
sayHi(){
    console.log(this.name)
}
};
let admin = user;
user.name="alpha"
admin.name="Bob"
console.log(user)
console.log(admin)

user = null;
console.log(user)
console.log(admin)
admin.sayHi()
