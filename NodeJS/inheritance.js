class animal{
    eat = () => {
        console.log("eats!");
    }
    
    sleep = () => {
        console.log("sleeps!");
    } 
}

class dog extends animal{
    constructor(){
        super();
    }

    barks = () => {
        console.log("barks!");
    }
}

const dog1 = new dog();
dog1.eat();
dog1.sleep();
dog1.barks();