// console.log('start');
// function display(callback){
//     console.log('hello');
//     setTimeout(function(){
//         console.log('inside');
//         callback()

//     },3000)
    
// }

// function display1() {
//     console.log('welcome');
    
    
// }

// console.log('before');
// display(display1)
// console.log('end');

// set interval--------------------------------------------

// function display() {
//     console.log('hello');
    
// }

// const a=setInterval(display,4000    )

// let count=10
// let c=setInterval(function(){
//     console.log(count);
//     count--
//     if (count==0){
//         clearInterval(c)
//         console.log('complete');
        
//     }
// },1000)


function demo(){
    let a='welcome'
    console.log(a);
    const main=document.querySelector('.main')
    const div=document.createElement('div')
    // const h2=document.createElement('h2')
    // h2.textContent=a
    // div.appendChild(h2)
    div.innerHTML=`<h2 style='color:green; font-size:50px;'>hello ${a}</h2>`
    main.appendChild(div)
}

demo()