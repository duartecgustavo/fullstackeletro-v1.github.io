// FUNÇÃO PARA FILTRAR POR CATEGORIA

function exibir_categoria(categoria){
    let elementos = document.getElementsByClassName("prod");
    //console.log(elementos)

    for(let i = 0; i<elementos.length;i++){
        //console.log(elementos[i].id)
        if (categoria == elementos[i].id){
            elementos[i].style = "display: inline-block"
        } else {
            elementos[i].style = "display: none"
        }
    }
}

// FUNÇÃO PARA EXIBIR TODOS OS PRODUTOS

function exibir_Todos(categoria){
    let elementos = document.getElementsByClassName("prod");
    for(let i = 0; i<elementos.length;i++){
        //console.log(elementos[i].id)
            elementos[i].style = "display: inline-block"
        } 
    }

function quantidadeCat(categoria){
    // let ler = document.getElementsByClassName("prod");
    document.getElementById("quant").innerText(categoria.length)

}

function aumentar(produto){
    // let divproduto = document.getElementById("fogaoconsul")
    if (produto.width == 220) {
        produto.style="width: 320px; height: 250px; box-shadow: 1px 2px 10px #504545; align-content: top;"
        // divproduto.style = "padding-top: 90px; border: 2px black solid;"
    } else {
        produto.style="width: 220px; height: 170px; padding-top: 0px; box-shadow: none;"
    }
}
// function aumentarimg(produto){
//     produto.style="width: 280px; height: 250px; box-shadow: 5px 1px 14px #292727; padding: 10px; background-color: white;"
// }

// function contintens(){

//     let teste = document.getElementByClassName("contitem")
//     teste.innerHTML = "10"
// }


// FUNÇÃO PARA TROCAR DE CAPA NA HOME


function trocaCapa(){
    let capa1 = document.getElementById("maincapa1")
    let capa2 = document.getElementById("maincapa2")
    let capa3 = document.getElementById("maincapa3")

    if (capa1.checked){
        document.getElementById("imagemcapa").src="imgs/maincapa.jpg"
    } else if (capa2.checked) {
        document.getElementById("imagemcapa").src="imgs/maincapa2.jpg"
    } else {
        document.getElementById("imagemcapa").src="imgs/maincapa3.jpg"
    }
}