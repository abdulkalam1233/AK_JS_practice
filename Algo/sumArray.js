var array = [1,2,3,4,5];
var x = 9,r=x,flag=0,index;
for(var i=0;i<array.length;i++)
{
  if(i%2==1)
  {
    if(r==0)
    {

      flag = 1;
      break;
    }
      r=x;
  }
  else{
  r=r-array[i];
  console.log(r)
  }
}
console.log(flag == 1 ? exist: -1);