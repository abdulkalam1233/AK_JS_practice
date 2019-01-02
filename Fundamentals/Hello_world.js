/* document.writeln("Hello world");
document.write("<br></br>");
//[1, 2].forEach(alert)

//DataTypes
let num = 10;
document.writeln(10/0);

let str1 = "hello",str2 = 'ak',str3 = `i am js`;//3 types of string declarations
document.write("<br></br>");
document.writeln(str1+" ",str2+" ",str3) */

//string methods

let str = "Hi i am kalam";
/* document.writeln("<br></br>" + str.length);//returns the length of the code
document.writeln("<br></br>" +str.charAt(1));//returns th character of index
document.writeln("<br></br>" +str.charCodeAt(1));//returns the ASCII value of character present at index
document.writeln("<br></br>" +str.indexOf('i' ));//first occurance of the the character */
var changedStr = str.replace("Hi","Hello");//replace won't change the current string but return new string
console.log(changedStr);

console.log(str.search("Hi"));//return the position of first character occurance

console.log(str.localeCompare('Hi',2))

console.log(str.slice(1,4));

var splited_arr = str.split(' ');
console.log(splited_arr);

console.log(str.substr(0,5));
console.log(str.substring(0,5));
console.log(str.valueOf());
