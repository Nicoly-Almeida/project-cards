const host = "http://127.0.0.1:3333";

async function create(user){
    await fetch(`${host}/cards`, {
        method: "post",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
}

async function deletar(id){
    await fetch(`${host}/cards/?id=${id}`, {
        method: "delete",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
}


document.querySelector("#add-card").addEventListener("click", async () => {
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value

    await create({
        title,
        description
    })
        
})



      


