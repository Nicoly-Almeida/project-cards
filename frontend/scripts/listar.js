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
let id = 0;

function show(cards){
    let output = ''
    let container = document.getElementById("container")
    let rows = document.getElementsByClassName("row mb-5")
    let row = document.createElement("div")
    row.classList.add("row")
    row.classList.add("mb-5")
    let cardName = document.getElementById("cardName")
    let textArea = document.getElementById("cardContent")
    for(let i=0; i < rows.length; i++){
        let divs = rows[i].getElementsByClassName("card-body")
        let card = document.createElement("div")
        card.classList.add("card")
        card.classList.add("col-sm-3")
        card.classList.add("mr-0")
        card.classList.add("ml-0")
        id++
        card.setAttribute("name", id.toString())
        card.id = id.toString()
        card.style = "background:#3E50B0;"
        console.log(divs)
        if (divs.length < 2){
            card.innerHTML += `
            <div class="card-body pr-0">
            <input readonly value="${cardName.value}" class="card-title pb-1 w-50" placeholder="New Card" style="color:white; border-bottom:1px solid white !important; float:left; margin-right:50px; background-color: #3E50B0; border: 0px solid"></input>
            <i class="fa fa-pencil-square-o" aria-hidden="true" style="color:white"></i>
            <button type="button" class="btn" onclick="deleteNode(${id})"><i class="fa fa-trash-o" aria-hidden="true" style="color:white"></i></button>
            <i class="fa fa-paint-brush" aria-hidden="true" style="color:white"></i>

            </br>
            </br>
            <textarea readonly placeholder="Descrição..." style="Color: white; background-color: #3E50B0; border: 0px solid">${textArea.value}</textarea>
            
            `
            rows[i].appendChild(card)
            rows[i].innerHTML += `
            <div class="card col-sm-1 m-0 p-0" name=${id} style="visibility: hidden;">`
            return
        }else {
            container.appendChild(row)
        }
        
    }    

    document.getElementById("root").innerHTML = output

}

function deleteNode(id){
    let htmls = document.getElementsByName(id)
    while(htmls.length > 0){
        htmls[0].remove()
    }

}