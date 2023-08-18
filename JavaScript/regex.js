//regex
let regex = /\w/g

let regex1 = /[^\w\s]/g;

let str = 'Hi I am taking a workshop. I am here';

let resIndex = str.search(regex);
console.log(resIndex);
console.log(str[resIndex]);

str = 'str 1 and str 2 is str 3';

regex = /str/g;
console.log(str.replace(regex, 'STR')); //replace



