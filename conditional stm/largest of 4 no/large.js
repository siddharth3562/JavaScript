function sample(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)
    c=parseInt(document.getElementById('tno').value)
    d=parseInt(document.getElementById('4no').value)
    if(a>b && a>c && a>d){
        document.getElementById('p1').innerHTML=a
    }
    else if(b>a && b>c && b>d){
        document.getElementById('p1').innerHTML=b
    }
    else if(c>a && c>b && c>d){
        document.getElementById('p1').innerHTML=c

    }
    else{
        document.getElementById('p1').innerHTML=d

    }
}