let minutes=0
let seconds=59

const timer=document.getElementById('time').value

let c=setInterval(function(){
    
    document.getElementById('time').innerHTML=seconds
    seconds--
    if (seconds==0){
        clearInterval(c)
        console.log('end');
        
    }
},1000)
    

