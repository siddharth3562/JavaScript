l=[6,4,3,2,5,6,7]

// console.log(typeof l);

// console.log(l[0])
// console.log(l[3])
// console.log(l.length)
// a=l.toString()
// console.log(typeof a);

// l.pop()
// console.log(l)
// l.push(99)
// console.log(l);

// l.shift()
// console.log(l);

// l[10]=44
// console.log(l)

// l.unshift(22)
// console.log(l);

// delete l[0]
// console.log(l);


for (let i in l){
    console.log([i]);
    
}
//display position


//display elements
for (let i of l){
    console.log([i]);
    
}


for (let i of l){
    console.log(i)
    if (i==5){
        break
    }
    
}
