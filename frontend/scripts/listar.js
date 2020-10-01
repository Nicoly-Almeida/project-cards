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
        <div class="card col-sm list" style="height:250px">
          <div class="card-body pr-0">
            <h6 class="card-title pb-1 w-50">${card.title}</h6>
            <div id="icons">
                <i class="fa fa-pencil-square-o" aria-hidden="true" style="color:white"></i>
                <button id="delete-card" onclick="deletar(${card.id})"><i class="fa fa-trash-o" aria-hidden="true" style="color:white"></i></button>
                <button id="cor_random" onclick="muda_cor()"><i class="fa fa-paint-brush" aria-hidden="true" style="color:white"></i></button>
            </div>   
            <p id="description">${card.description}</p>
          </div>
          <div class="card-bottom">
            <p id="date">${card.data}</p>   
          </div>
        </div>
        `
    }


    document.getElementById("root").innerHTML = output

}

document.getElementById("add-card").addEventListener("click", () => {
    window.location.reload;
})