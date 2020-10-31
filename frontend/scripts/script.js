async function getContent(){
    try {

        var url = window.location.href; 

        let res = url.split('?')

        if (res[1] === undefined) {
            alert('página sem parâmetros.');
        } else {
            var id = res[1]
        }
        const response = await fetch(`http://localhost:3333/books/${id}`);

        const data = await response.json();

        show(data.books)

        show_card(data.serializedCards)

    } catch (error) {
        console.log(error)
    }
}

getContent();

function show(books){
    let output = ''

    for(book of books){
        output += `
            <iframe zoom="100%" src=${book.book_url.split(" ").join("%20")}></iframe>
        `
    }
    document.querySelector(".p-0").innerHTML = output

}

function show_card(cards){
    let output = ''

    for (card of cards){
        output += `
        <h4>Cards Adicionados!</h4>
        <hr />  
        <div class="list">
        <div class="card col-sm" style="background:#3E50B0; height:250px">
          <div class="card-body pr-0">
            <h6 class="card-title pb-1 w-50" style="color:white; border-bottom:1px solid white; float:left;margin-right:70px">${card.title}</h6></br>
                <div id="icons">
                    <i class="fa fa-pencil-square-o" aria-hidden="true" style="color:white"></i>
                    <button id="delete-card" style="border:none;background-color:#3E50B0" onclick="deletar(${card.id})"><i class="fa fa-trash-o" aria-hidden="true" style="color:white"></i></button>
                    <i class="fa fa-paint-brush" aria-hidden="true" style="color:white"></i>
                </div>
            </br>
            <p style="color: white">${card.description}</p>
            <p style="color:white ;position: absolute; right:0; bottom:0; margin-bottom:15px;margin-right:15px">${card.data}</p>
          </div>
        </div>
        </div>
        `
    }

    document.getElementById("root").innerHTML = output

}

