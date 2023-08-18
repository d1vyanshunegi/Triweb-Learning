//String escape sequence
const char = '\x7A';
console.log("Hexadecimal char ", char);
const char1 = '\u007A';
console.log("Unicode char ",char1);

//charAt, indexOf
const str = String("Hello there!");
console.log("First character is ",str.charAt(0));
console.log("First character is ",str[0]);
console.log("Index of I is ",str.indexOf('o'));

if(str.startsWith('H')){ //startsWith
    console.log("Yes");
}
else{
    console.log("No");
}

if(str.endsWith('!')){ //endsWith
    console.log("Yes");
} else {
    console.log("No");
}

if(str.includes("t")){ //includes
    console.log("Yes");
}
else{
    console.log("No");
}

const str2 = str.concat("\nGeneral Kenobi!"); //concat
console.log(str2);

const cities = String("Ghazipur,Varanasi,New Delhi,Lucknow");
const cityArr = cities.split(',');  //split

console.log(cityArr);

cityArr.forEach((city)=>{
    console.log("Hi it is ",city);
});


const str1 = str.replace("Hello","Hi"); //replace
console.log(str1);

//lowercase and uppercase
const lowerStr = str.toLowerCase();
console.log(lowerStr);

const upperStr = str.toUpperCase();
console.log(upperStr);

//multiline
const tmpltEmbdStr = `Hi I am here.
Its "${atmosphere}" today`;
console.log(tmpltEmbdStr);