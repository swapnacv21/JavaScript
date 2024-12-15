let data = [{id:'1',name:'Liam',age:23,position:'Sales executive',phone:9876543234},{id:'2',name:'Harry',age:23,position:'Accountant',phone:9878987678},{id:'3',name:'Aswin',age:22,position:'Cleaning',phone:91234567889},]

function Display(){
    let tbody = document.querySelector("tbody")
    tbody.innerHTML=''
    data.forEach((user)=>{
        let tr = document.createElement("tr")

        let id_td=document.createElement("td")
        id_td.innerHTML=user.id
        tr.appendChild(id_td)

        let name_td=document.createElement("td")
        name_td.innerHTML=user.name
        tr.appendChild(name_td)

        let age_td=document.createElement("td")
        age_td.innerHTML=user.age
        tr.appendChild(age_td)

        let position_td=document.createElement("td")
        position_td.innerHTML=user.position
        tr.appendChild(position_td)

        let phone_td=document.createElement("td")
        phone_td.innerHTML=user.phone
        tr.appendChild(phone_td)

        
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
        delete_btn.innerHTML='delete'
        delete_btn.onclick=function(){
            delete_data(user.id)
        }
        delete_td.appendChild(delete_btn)
        tr.appendChild(delete_td)

        tbody.appendChild(tr)
    })
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
    document.getElementById("e_position").value=edit.position
    document.getElementById("e_phone").value=edit.phone
    edit_data = id
}


document.getElementById("edit_form").addEventListener('submit',function(event){
    event.preventDefault()
    let id = document.getElementById("e_id").value
    let name = document.getElementById("e_name").value
    let age = document.getElementById("e_age").value
    let position = document.getElementById("e_position").value
    let phone = document.getElementById("e_phone").value
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



document.getElementById("add_form").addEventListener("submit",function(event){
    event.preventDefault()
    let id = document.getElementById("id").value
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let position = document.getElementById("position").value
    let phone = document.getElementById("phone").value
    data.push({id:id,name:name,age:age,position:position,phone:phone})

    document.getElementById("id").value=''
    document.getElementById("name").value=''
    document.getElementById("age").value=''
    document.getElementById("position").value=''
    document.getElementById("phone").value=''

    Display()
})

Display()