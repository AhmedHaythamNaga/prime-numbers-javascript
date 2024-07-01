document.addEventListener('DOMContentLoaded', function() {
    var b1 = document.getElementById("1");
    var b2 =document.getElementById("2");
    var b3 = document.getElementById("3");
    var b4 =document.getElementById("4");
    var b5 = document.getElementById("5");
    var b6 =document.getElementById("6");
    var b7 = document.getElementById("7");
    var b8 =document.getElementById("8");
    var b9 =document.getElementById("9");
    var submit=document.getElementById("submit");
    var del=document.getElementById("delete");
    function originalTxt(){
        return  document.getElementById("screen").textContent;
    }
   
    
    b1.addEventListener('click', function(){
        if( document.getElementById('screen').innerText =="This number is not a prime number :(" ||document.getElementById('screen').innerText =="This number is a prime number!!!")
        document.getElementById('screen').innerText ='';
        document.getElementById("screen").textContent= originalTxt() + "1";
    })
    b2.addEventListener('click', function(){
        if( document.getElementById('screen').innerText =="This number is not a prime number :(" ||document.getElementById('screen').innerText =="This number is a prime number!!!")
            document.getElementById('screen').innerText ='';
    
        document.getElementById("screen").textContent= originalTxt() + "2";
    })
    b3.addEventListener('click', function(){
        if( document.getElementById('screen').innerText =="This number is not a prime number :(" ||document.getElementById('screen').innerText =="This number is a prime number!!!")
            document.getElementById('screen').innerText ='';
    
        document.getElementById("screen").textContent= originalTxt() + "3";
    })
    b4.addEventListener('click', function(){
        if( document.getElementById('screen').innerText =="This number is not a prime number :(" ||document.getElementById('screen').innerText =="This number is a prime number!!!")
            document.getElementById('screen').innerText ='';
    
        document.getElementById("screen").textContent= originalTxt() + "4";
    })
    b5.addEventListener('click', function(){
        if( document.getElementById('screen').innerText =="This number is not a prime number :(" ||document.getElementById('screen').innerText =="This number is a prime number!!!")
            document.getElementById('screen').innerText ='';
    
        document.getElementById("screen").textContent= originalTxt() + "5";
    })
    b6.addEventListener('click', function(){
        if( document.getElementById('screen').innerText =="This number is not a prime number :(" ||document.getElementById('screen').innerText =="This number is a prime number!!!")
            document.getElementById('screen').innerText ='';
    
        document.getElementById("screen").textContent= originalTxt() + "6";
    })
    b7.addEventListener('click', function(){
        if( document.getElementById('screen').innerText =="This number is not a prime number :(" ||document.getElementById('screen').innerText =="This number is a prime number!!!")
            document.getElementById('screen').innerText ='';
    
        document.getElementById("screen").textContent= originalTxt() + "7";
    })
    b8.addEventListener('click', function(){
        if( document.getElementById('screen').innerText =="This number is not a prime number :(" ||document.getElementById('screen').innerText =="This number is a prime number!!!")
            document.getElementById('screen').innerText ='';
    
        document.getElementById("screen").textContent= originalTxt() + "8";
    })
    b9.addEventListener('click', function(){
        if( document.getElementById('screen').innerText =="This number is not a prime number :(" ||document.getElementById('screen').innerText =="This number is a prime number!!!")
            document.getElementById('screen').innerText ='';
    
        document.getElementById("screen").textContent= originalTxt() + "9";
    })

    submit.addEventListener('click',function(){
        let flag = true;
        var x= document.getElementById("screen").textContent;
        if(x==0 || x==1)
            {
                document.getElementById("screen").textContent="This number is not a prime number :(";

            }
            else{
        for (let i = 2; i<x; i++) {
            if(x % i != 0)
                flag= true;
            
            else {
                flag=false;
                break;
            }
        }
    if(flag)
        document.getElementById("screen").textContent="This number is a prime number!!!";

    else
    document.getElementById("screen").textContent="This number is not a prime number :(";
    }})

  del.addEventListener('click',function(){
    var x=document.getElementById('screen').innerText;
    var newTxt='';
    if( x =="This number is not a prime number :(" || x =="This number is a prime number!!!")
        {document.getElementById('screen').innerText ='';}
    else{
    for(let i=0;i<x.length-1;i++){
       newTxt+=x.charAt(i);
    }
    document.getElementById('screen').innerText=newTxt;
  }})
});