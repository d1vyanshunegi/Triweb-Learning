class area{
    areaCalc = (l, b) => {
        return null;
    }
}

class calc extends area{
    constructor(){
        super();
    }
    areaCalc = (l, b) => {
        return l*b;
    }
}

const area1 = new calc();
console.log(area1.areaCalc(10,20));