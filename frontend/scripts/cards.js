let lista_colors = ["#FF0000", "#FF8C00", "#32CD32", "#A020F0", "#3E50B0"]


function muda_cor(){
    lista_colors.map(cores => {
        const cor = lista_colors[Math.ceil(Math.random(cores) * (lista_colors.length - 1))] 
        localStorage.setItem('cor', cor)       
        document.querySelector(".list").style.backgroundColor = cor
            
    })
}




