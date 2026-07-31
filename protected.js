class coffee
{
    _water =0;                          
    set water(value)
    {
        if (value<0)
        {
            value=0;
        }
        this._water = value;
    }
    get water()
    {
        return this._water;
    }

    constructor(power)
    {
        this.power = power;
        alert(`Power used by coffee machine is :${power}`);
    }
}                                                                 

let obj = new coffee(100);
obj.water= -10;                           
alert(obj.water)
obj.water = 320;
alert(obj.water)
