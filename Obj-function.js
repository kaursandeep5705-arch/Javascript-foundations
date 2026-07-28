let a= {
    name : "Evan",
    age : 23,
    }
a.colour = function()
    {
        return this.name + " "  +this.age
    }

    for(let i in a)
    {
        if (typeof(a[i])=="function")
        {
            console.log(a[i]()+ " hello")
        }
        else
        {
            console.log(a[i]+ " hi")
    }
}
