d=[{id:'1',name:'achu',age:21,},{id:'2',name:'abhi',age:20,}]
function display() {
    const t_var=document.querySelector('#p_table tbody')
    t_var.innerHTML=''
    d.forEach(element => {
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

        const edit_td=document.createElement('td')
        const edit_btn=document.createElement('button')
        edit_btn.textContent='Edit'
        edit_btn.onclick=function(){
            edit_frm(element.id)
        }

        edit_td.appendChild(edit_btn)
        t_row.appendChild(edit_td)

        const del_td=document.createElement('td')
        const del_btn=document.createElement('button')
        del_btn.textContent='Delete'
        del_btn.onclick=function(){
            delete_data(element.id)
        }

        del_td.appendChild(del_btn)
        t_row.appendChild(del_td)

        t_var.appendChild(t_row)
    });
}

document.getElementById('submit_form').addEventListener('submit',function(event){
    event.preventDefault() //remove refresh
    const id=parseInt(document.getElementById('id_no').value)
    const name=document.getElementById('name').value
    const age=parseInt(document.getElementById('age').value)
    d.push({id:id,name:name,age:age})
    document.getElementById('id_no').value=''
    document.getElementById('name').value=''
    document.getElementById('age').value=''

    display()
})

let edit_id=''
function edit_frm(id){
    console.log('editing',id);
    document.getElementById('edit_form').style.display='block'
    document.getElementById('submit_form').style.display='none'
    const edit_data=d.find(user=>user.id==id)
    document.getElementById('e_id_no').value=edit_data.id
    document.getElementById('e_name').value=edit_data.name
    document.getElementById('e_age').value=edit_data.age
    edit_id=id
}

document.getElementById('edit_form').addEventListener('submit',function(event){
    event.preventDefault()
    const e_id=document.getElementById('e_id_no').value
    const e_name=document.getElementById('e_name').value
    const e_age=document.getElementById('e_age').value
    d=d.map(user=>{
        if(user.id==edit_id){
            return{...user,id:e_id,name:e_name,age:e_age}
        }
        return user
    })
    
    document.getElementById('edit_form').style.display='none'
    document.getElementById('submit_form').style.display='block'
    display()
})

function delete_data(id){
    d=d.filter(user=>{
        if(user.id!=id){
            return user
        }
    })
    display()
}

display()