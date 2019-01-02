function fizz_buzz(num){

  for(let snum=1;snum<=num;snum++){
    if(snum % 3 === 0 && snum % 5 === 0){
      console.log("fizz buzz")
    }  
    else if(snum % 3 === 0){
      console.log('fizz');
    }
    else if(snum % 5 === 0){
      console.log('buzz');
    }
    else{
      console.log(snum);
    }
  }
}

fizz_buzz(5);