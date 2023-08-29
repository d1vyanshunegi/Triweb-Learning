class Pen{
    constructor(color, brand){
        this.color=color,
        this.brand=brand
    }

    write = () => {
        return `Wrote something!`
    }
}

const pen1 = new Pen('red', 'Parker');
console.log(pen1);
console.log(pen1.write());