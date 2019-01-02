let  str = "hello ak";
let reverseStr = "";
let spaceIndex = 0;
for(let current = 0; current <= str.length; current++)
{
  if(str[current]===" " || current === str.length){
    for(let fromSpace = current-1; fromSpace >= spaceIndex; fromSpace--)
    {
      reverseStr += str[fromSpace];
    }
    reverseStr += " ";
    spaceIndex = current;
  }
  
}
console.log(reverseStr);