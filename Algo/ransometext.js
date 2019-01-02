function ransome_note(noteText,magText)
{
  let noteArr = noteText.split(" ");
  let magArr = magText.split(" ");
  let mag_hash = {};
  
  magArr.forEach(element =>{
    if(!mag_hash[element])
      mag_hash[element] = 0;

    mag_hash[element] += 1;
  });
  
  let flag = 1;

  noteArr.forEach(element => {
    if(mag_hash[element]){
      mag_hash[element]--;
      if(mag_hash[element] > 0)
        flag = 0
    }
    else
    {
      flag=0;
    }
  });
return flag;
}
console.log(ransome_note("A B C B","A B C D E"));