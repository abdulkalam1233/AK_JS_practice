let arr = [1,2,3,4];
let Index = arr.length - 1;

for(let currentIndex = 0; currentIndex < arr.length / 2 ; currentIndex++)
{
  let currentElement = arr[currentIndex];
  arr[currentIndex] = arr [Index];
  arr[Index] = currentElement; 
  Index --;
}

console.log(arr);