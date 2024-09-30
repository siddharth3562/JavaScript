d=[{id:1,name:'achu',age:21,email:'a@gmail.com',course:'bca',date:'02/05/2022'}]
function display() {
    const t_var=document.querySelector('#p_table tbody')
    t_var.innerHTML=''
    d.forEach(element=> {
        const t_row=document.createElement('tr')

        const t_id=document.createElement('td')
        t_id.textContent=element.id
        t_row.appendChild(t_id)

        const t_name=document.createElement('td')
        t_name.textContent=element.name
        t_row.appendChild(t_name)

        const t_age=document.createElement('td')
        t_age.textContent=element.age
        t_row.appendChild(t_age)

        const t_email=document.createElement('td')
        t_email.textContent=element.email
        t_row.appendChild(t_email)

        const t_course=document.createElement('td')
        t_course.textContent=element.course
        t_row.appendChild(t_course)

        const t_date=document.createElement('td')
        t_date.textContent=element.date
        t_row.appendChild(t_date)

        const edit_td=document.createElement('td')
        const edit_btn=document.createElement('button')
        edit_btn.textContent='Edit'
        edit_btn.onclick=function(){
            edit_frm(element.id)
        }

        edit_td.appendChild(edit_btn)
        t_row.appendChild(edit_td)

        t_var.appendChild(t_row)
    })
}

document.getElementById('submit_form').addEventListener('submit',function(event){
    event.preventDefault()
    const id=parseInt(document.getElementById('id01').value)
    const name=document.getElementById('name').value
    const age=parseInt(document.getElementById('age').value)
    const email=document.getElementById('email').value
    const course=document.getElementById('course').value
    const date=document.getElementById('date').value
    d.push({id:id,name:name,age:age,email:email,course:course,date:date})
    document.getElementById('id01').value=''
    document.getElementById('name').value=''
    document.getElementById('age').value=''
    document.getElementById('email').value=''
    document.getElementById('course').value=''
    document.getElementById('date').value=''

    display()
})

let edit_id=''
function edit_frm(id){
    console.log('editing',id);
    document.getElementById('edit_form').style.display='block'
    document.getElementById('submit_form').style.display='none'
    const edit_data=d.find(user=>user.id==id)
    document.getElementById('e_id01').value=edit_data.id
    document.getElementById('e_name').value=edit_data.name
    document.getElementById('e_age').value=edit_data.age
    document.getElementById('e_email').value=edit_data.email
    document.getElementById('e_course').value=edit_data.course
    document.getElementById('e_date').value=edit_data.date
    edit_id=id
}

document.getElementById('edit_form').addEventListener('submit',function(event){
    event.preventDefault()
    const e_id=document.getElementById('e_id01').value
    const e_name=document.getElementById('e_name').value
    const e_age=document.getElementById('e_age').value
    const e_email=document.getElementById('e_email').value
    const e_course=document.getElementById('e_course').value
    const e_date=document.getElementById('e_date').value
    d=d.map(user=>{
        if(user.id==edit_id){
            return{...user,id:e_id,name:e_name,age:e_age,email:e_email,course:e_course,date:e_date}
        }
        return user
    })
    
    document.getElementById('edit_form').style.display='none'
    document.getElementById('submit_form').style.display='block'
    display()
})

display()