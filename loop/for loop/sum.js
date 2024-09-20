// function sample(){
//     a=parseInt(document.getElementById('fno').value)
//     b=parseInt(document.getElementById('sno').value)
//     s=0
    
//     for(i=a;i<=b;i++){
//         s+=i  
//     }
//     console.log(s);
// }

function sample(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)
    
    
    for(i=a;i<=b;i++){
        if(i%2!=0){
            console.log(i);
        }
    }
    
    
}