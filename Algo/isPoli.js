function isPolindrome(str)
{
    str = str.toLowerCase();
    let strArr = []
    for(let i=0;i < str.length; i++)
    {
        let code =str.charCodeAt(i);
        if(code > 92 && code <123)
          strArr.push(str[i]);
    }
    str = strArr.join('');
    
    let revStr = strArr.reverse().join('');
    return (revStr === str) ? true : false;
}
console.log(isPolindrome("madam i'm adam"));
