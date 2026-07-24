
class animal
{
    constructor(name)
    {
        this.speed=0;
        this.name=name;
    }
    run(speed)
    {
        alert((this.name)+" speed is "+ (this.speed));
        this.speed=speed;
        alert(" The speed of the animal is "+ (this.speed));
    }
    stop(){
        this.speed=0;
        alert(`${this.name} stands still`);
    }
}
let obj=new animal("Lion")


class rabbit extends animal
{
    stop()
    {
        super.stop();
        alert(`${this.name} rest`)
    }
    hide()
    {
        alert(`${this.name} go - hide hunter is coming`)
    }
}

let obj2=new rabbit("Rabbit");
obj2.run(50)
obj2.stop();
