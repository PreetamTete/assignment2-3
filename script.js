function check()
{
    var str = document.getElementById('sentence').value;
    var ltr = document.getElementById('letter').value;

    // var opt = document.getElementById('output').value;
    // var length= str.length;
    var opt1;

    var index= str.indexOf(ltr);

    if(index==-1)
    {
       opt1="The letter does not exist in the sentence";
       window.alert(opt1);
    }
    else
    {
        opt1=str.substring(index+1,str.length);
        window.alert(opt1);
    }
    // // var temp,str1,str2=null;
    // for(var i=0; i < length; i++)
    // {
    //     var temp = str.charAt(i);
    //     if(temp == ltr)
    //     {
    //          var str1= str.slice(i+1,length);
    //         opt.innerHTML = str1;   
    //     }
    //     else
    //     {
    //         var str2 = "“The letter does not exist in the sentence";
    //         opt.innerHTML = str2;
    //     }
    // }
    
    // console.log(str.slice(0,5))
}