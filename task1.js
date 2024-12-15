let data = [{id:'1',name:'Liam',age:23},{id:'2',name:'Isa',age:20},{id:'3',name:'Jibin',age:21,},{id:'4',name:'Sandra',age:24,}]

function Display(){
    let tbody = document.querySelector("tbody")
    tbody.innerHTML=''
    data.forEach((user)=>{
        let tr = document.createElement("tr")
        
        let id_td = document.createElement("td")
        id_td.innerHTML = user.id
        tr.appendChild(id_td)

        let name_td=document.createElement("td")
        name_td.innerHTML = user.name
        tr.appendChild(name_td)

        let age_td=document.createElement("td")
        age_td.innerHTML = user.age
        tr.appendChild(age_td)

        let edit_td = document.createElement("td")
        let edit_btn = document.createElement("button")
        edit_btn.innerHTML='edit'
        edit_btn.onclick=function(){
            edit_form(user.id)
        }
        edit_td.appendChild(edit_btn)
        tr.appendChild(edit_td)


        let delete_td = document.createElement("td")
        let delete_btn = document.createElement("button")
        delete_btn.innerHTML='Delete'
        delete_btn.onclick=function(){
            delete_data(user.id)
        }
        delete_td.appendChild(delete_btn)
        tr.appendChild(delete_td)

        tbody.appendChild(tr)
    });

}

function delete_data(id){
    data = data.filter((user)=>user.id!=id)
    Display()
}



let edit_data
function edit_form(id){
    document.getElementById("edit_form").style.display='block'
    document.getElementById("add_form").style.display='none'
    let edit = data.find((user)=>user.id==id)

    document.getElementById("e_id").value=edit.id
    document.getElementById("e_name").value=edit.name
    document.getElementById("e_age").value=edit.age
    edit_data = id
}


document.getElementById("edit_form").addEventListener('submit',function(event){
    event.preventDefault()
    let id = document.getElementById("e_id").value
    let name = document.getElementById("e_name").value
    let age = document.getElementById("e_age").value
    data = data.map((user)=>{
        if(user.id==edit_data){
            return {...user,id:id,name:name,age:age}
        }
        return user
    })
    document.getElementById("edit_form").style.display='none'
    document.getElementById("add_form").style.display='block'
    Display()
}) 

    
document.getElementById("add_form").addEventListener('submit',function(event){
    event.preventDefault()
    let id = document.getElementById("id").value
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value 
    data.push({id:id,name:name,age:age})

    document.getElementById("id").value=''
    document.getElementById("name").value=''
    document.getElementById("age").value=''

    Display()
})
Display()




