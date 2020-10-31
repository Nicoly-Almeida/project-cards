const host = "http://127.0.0.1:3333";
const form = document.getElementById('create-form');

form.addEventListener('submit', async (event)=>{
    event.preventDefault();

    
    const fd= new FormData(form);

    const response = await fetch(`${host}/book`,{
        method: "POST",
        body:fd,
    });

//
    // Handless server response
    if (response.status === 200 || response.status === 201){
        window.location.href = "./mybooks.html"
    }else{
        alert("Ops... Ocorreu um erro durante o cadastro");
    }


});





