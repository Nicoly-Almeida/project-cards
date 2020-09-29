async function getContent(){
    try {
        const response = await fetch("http://localhost:3333/cards");

        const data = await response.json();

        show(data.result)

    } catch (error) {
        console.log(error)
    }
}

getContent();

function show(cards){
    let output = ''
    for(card of cards){
        output += `
        <div class="card col-sm" style="background:#3E50B0; height:250px">
          <div class="card-body pr-0">
            <h6 class="card-title pb-1 w-50" style="color:white; border-bottom:1px solid white; float:left;margin-right:70px">${card.title}</h6></br>
                <i class="fa fa-pencil-square-o" aria-hidden="true" style="color:white"></i>
                <button id="delete-card" style="border:none;background-color:#3E50B0" onclick="deletar(${card.id})"><i class="fa fa-trash-o" aria-hidden="true" style="color:white"></i></button>
                <i class="fa fa-paint-brush" aria-hidden="true" style="color:white"></i>
            </br>
            </br>
            </br>
            <p style="Color: white">${card.description}</p>

            <p style="color:white ;position: absolute; right:0; bottom:0; margin-bottom:15px;margin-right:15px">${card.data}</p>
          </div>
        </div>
        `
    }


    document.getElementById("root").innerHTML = output

}

document.getElementById("add-card").addEventListener("click", () => {
    window.location.reload;
})