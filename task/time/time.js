let minutes='00'
let seconds=59


let c=setInterval(function(){
    document.getElementById('time').innerHTML=minutes
    document.getElementById('time').innerHTML=seconds
    seconds--
    if (seconds<0){
        clearInterval(c)
        console.log('end');
        
    }
},1000)
    

