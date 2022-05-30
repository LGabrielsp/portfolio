var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});


document.querySelector("#qtde").addEventListener("click", atualizarPreco)

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value  
    console.log(qtde)
}