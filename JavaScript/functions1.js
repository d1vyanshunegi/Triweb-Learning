//Pass by reference
function updateName(student){
    student.name = 'Hi ' + student.name;
    console.log(student); 
}

let objS = {name: "Divyanshu"};
updateName(objS);
console.log("Old Object is  ",objS);


//condition based function call
let decideFun = 'subtract';

let getResult;
if(decideFun == 'add'){
    getResult = function(num1, num2){
        console.log(num1+num2);
    }
}else if(decideFun == 'subtract'){
    getResult = function(num1, num2){
        console.log(num1-num2);
    }
}

getResult(5,3);

//function hoisting
console.log(getNum3);
console.log(getNum3());
function getNum3(){
    return 3;
}
console.log(getNum3());

//recursion
function printNumSeriesRecursion(num){
 
    if(num == 0){
        return 0;
    }
    console.log(num);
    printNumSeriesRecursion(num-1);

}
printNumSeriesRecursion(5);

//nested functions
function square(num){
    function getSquare(n1){ 
        function getSquareFromInside(n2){
            console.log(n2*n2);
        }
        getSquareFromInside(n1);
    }
    getSquare(num)
}

square(5);