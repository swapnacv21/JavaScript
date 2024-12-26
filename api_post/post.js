const fetchdata = async()=>{
    try{
        const response = await fetch("https://dummyjson.com/posts")
        // console.log(response);
        const data = await response.json()
        // console.log(data.posts);
        const row = document.querySelector(".row")
        data.posts.forEach(element => {
            console.log(element.title);
            const col = document.createElement("div")
            col.classList.add("col-lg-3")
            col.innerHTML = `
            <div class="row">
                <div class="col p-3 bg-primary text-white"><h1>${element.title}</h1></div>
                    <div class="col p-3 bg-dark text-white">${element.body}</div>
                    <div class="col p-3 bg-primary text-white">${element.reactions}</div>
                    <div class="col p-3 bg-primary text-white">${element.views}</div>
                    <div class="col p-3 bg-primary text-white">${element.userId}</div>
                </div>
            </div>`
            row.appendChild(col)
        })
    }
    catch(error){
        console.log(error);
    }
}
fetchdata()





{/* <div class="card" style="width:100%">
                <div class="card-body" style="background-color:lightblue;">
                    <h4 class="card-title"></h4>
                    <p class="card-text">${element.body}</p>
                    <p class="card-text">${element.tags}</p>
                    <p class="card-text">${element.reactions}</p>
                    <p class="card-text">${element.views}</p>
                    <p class="card-text">${element.userId}</p>
                </div>
            </div> */}




