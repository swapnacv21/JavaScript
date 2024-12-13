let data = [{id:'1',name:'Liam',age:23},{id:'2',name:'Isa',age:20},{id:'3',name:'Jibin',age:21,},{id:'4',name:'Sandra',age:24,}]

function Display(){
    let tbody = document.querySelector("tbody")
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

        tbody.appendChild(tr)
    });
}
Display()



