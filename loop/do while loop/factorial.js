function sample(){
    a=1
    f=1
    i=parseInt(document.getElementById('fno').value)
    do{
        f*=a
        a++
    }
    while(a<=i)
        console.log(f);
        
}