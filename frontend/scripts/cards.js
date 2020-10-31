const host = "http://127.0.0.1:3333";
    
    try {
        var url = window.location.href; 

        let res = url.split('?')

        if (res[1] === undefined) {
            alert('página sem parâmetros.');
        } else {
            var id = res[1]
        }
    }catch{

    }


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

document.querySelector(".btn").addEventListener("click", async () => {
    let title = document.getElementById("cardName").value
    let description = document.getElementById("cardContent").value

    await create({
        title,
        description,
        "nbook": id
    })
})







