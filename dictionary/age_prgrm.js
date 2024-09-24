d=[{name:'achu',age:21,place:'ekm'},{name:'manu',age:25,place:'ekm'},{name:'anu',age:45,place:'ekm'},{name:'sani',age:32,place:'ekm'},{name:'mauel',age:50,place:'ekm'},{name:'abhi',age:18,place:'ekm'}]

forty=[]
thirty=[]

for (let i of d){
    if (i.age>=40)
    forty.push(i)
    else{
        thirty.push(i)
    }
       
}

console.log(forty);
console.log(thirty);






