function truncate(str,max_length)
{
  
  if(str.length <= max_length)
  {
      return str;
  }
  return str.slice(0,max_length-1)+'...';
}
console.log(truncate("What I'd like to tell on this topic is:", 20))

function extractMoney(money)
{
  return Number(money.slice(1));
}
console.log(extractMoney('$120') === 120)