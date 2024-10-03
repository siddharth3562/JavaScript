// class car {
//     constructor(name,year) {
//         this.name=name
//         this.year=year
//     }
//     display(){
//         console.log(this.name,this.year);
        
//     }
// }

// b=new car('aston martin',2024)
// b.display()

d={
    f_name:'abhishek',
    l_name:'binish',
    age:21,
    full_name:function(){
        return this.f_name+' '+this.l_name
    }
}

console.log(d.full_name());

