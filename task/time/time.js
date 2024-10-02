// let minutes=0
// let seconds=59


// let c=setInterval(function(){
//     document.getElementById('time').innerHTML=minutes
//     document.getElementById('time').innerHTML=seconds
//     seconds--
//     if (seconds<0){
//         clearInterval(c)
//         console.log('end');
        
//     }
// },1000)
    


// function demo(){
//     const main=document.querySelector('.main')
//     const div=document.createElement('div')
//     let count=59
//     let min=4
//     let c=setInterval(function(){
//         div.innerHTML=`<h2>${min}:${count}</h2>`
//         count--
//         if (count==0){
//             clearInterval(c)
//             div.innerHTML=`<h2>completed</h2>`
//         }
//     },100)
    
//     main.appendChild(div)
// }

// demo()

function demo(){
    const main=document.querySelector('.main')
    const div=document.createElement('div')
    let count=59
    let min=4
    let c=setInterval(function(){
        div.innerHTML=`<h2>${min}:${count}</h2>`
        count--
        if (count==0){
            min--   
            count=59
        }
        if (min==0){
            clearInterval(c)
            div.innerHTML=`<h2>completed</h2>`
        }
    },10)
    
    main.appendChild(div)
}

demo()