class animal
{
    constructor(name)
    {
        this.speed=0;
        this.name=name;
    }
    run(speed)
    {
        alert(" The speed of the animal is "+ (this.speed));
        this.speed=speed;
        alert(" The speed of the animal is "+ (this.speed));
    }
    stop(){
        this.speed=0;
        alert(`${this.name} stands still`);
    }
}
let obj=new animal("Lion")
obj.run(50);
obj.stop()

class rabbit extends animal
{
    hide()
    {
        alert(`${this.name} go - hide hunter is coming`)
    }
} 

let obj2=new rabbit("Cat");
obj2.run(55);
obj2.stop();
obj2.hide();
