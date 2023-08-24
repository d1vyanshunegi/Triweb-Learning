function addTwoNumbers(n1, n2=0){ //default parameters
    console.log("Sum: ",n1 + n2);
}

addTwoNumbers(5);

function numbers(num1, num2, ...numbers){ // rest parameter
    console.log("NUM1 - ",num1);
    console.log("NUM2 - ",num2);
    console.log("REST - ",numbers);
}

numbers(1,2,3,4,5);
