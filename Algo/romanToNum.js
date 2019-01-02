pattern = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
inputStr = "MMII";
if(pattern.test(inputStr))
{
  var result = 0;
  // the result is now a number, not a string
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=roman.length;i++) {
    while (inputStr.indexOf(roman[i]) === 0){
    //checking for the first characters in the string
      result += decimal[i];
      //adding the decimal value to our result counter
      inputStr = inputStr.replace(roman[i],'');
      //remove the matched Roman letter from the beginning
    
    }
  

  }
  console.log(result);
}
else{
  
  console.log(false);
}