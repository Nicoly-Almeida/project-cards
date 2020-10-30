const host = "http://127.0.0.1:3333";
const form = document.getElementById('create-form');

form.addEventListener("submit", (event)=>{
    event.preventDefault();
   
    
    const fd= new FormData(form);

    fetch(`${host}/book`,{
        method: "POST",
        body:fd,
    });
}
);
//


