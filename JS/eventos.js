// FUNÇÕES HOME PAGE

// FUNÇÃO PARA TROCAR DE CAPA NA HOME

function trocaCapa(){
    let capa1 = document.getElementById("maincapa1")
    let capa2 = document.getElementById("maincapa2")
    let capa3 = document.getElementById("maincapa3")

    if (capa1.checked) {
        document.getElementById("imagemcapa").src="imgs/maincapa.jpg"
    } else if (capa2.checked) {
        document.getElementById("imagemcapa").src="imgs/maincapa2.jpg"
    } else {
        document.getElementById("imagemcapa").src="imgs/maincapa3.jpg"
    }
}


// ------------------------------------------//--------------------------------------------//--------------------------------------------------------------


// FUNÇÕES PAGINA PRODUTOS

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

// FUNÇÃO PARA AUMENTAR A FOTO AO CLICAR

function aumentar(produto){
    // let divproduto = document.getElementById("fogaoconsul")
    if (produto.width == 320) {
        produto.style="width: 220px; height: 170px; padding-top: 0px; box-shadow: none; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"
    } else {
        produto.style="width: 320px; height: 250px; box-shadow: 1px 2px 10px #504545; align-content: top; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"
        // divproduto.style = "padding-top: 90px; border: 2px black solid;"
    }
}

// FUNÇÃO PARA DIMINUIR AO PASSAR MOUSE

// function diminuir(produto){
//     if (produto.width == 320){
//         produto.style="width: 220px; height: 170px; padding-top: 0px; box-shadow: none; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"
//     }
// }


// ------------------------------------------//--------------------------------------------//--------------------------------------------------------------

// FUNÇÕES PAGINA CONTATOS

// FUNÇÃO DE ANIMAÇÃO REDES SOCIAIS

function sumirLogo(item){
    let twitter = document.getElementById("logotwitter")
    let email = document.getElementById("logoemail")
    let wpp = document.getElementById("logowpp")
    if(item == document.getElementById("contatotwitter")) {
        twitter.style="display: none; -webkit-transition: linear  0.2s; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"
        document.getElementById("contatotwitter").style="background-color: #1DA1F2; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"

    } else if (item == document.getElementById("contatoemail")) {
        email.style="display: none; -webkit-transition: linear  0.2s; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"
        document.getElementById("contatoemail").style="background-color: #78b4e2; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"

    } else if (item == document.getElementById("contatowpp")) {
        wpp.style="display: none; -webkit-transition: linear  0.2s; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"
        document.getElementById("contatowpp").style="background-color: #4CEC66; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"
    }
}

// FUNÇÃO PARA APARECER TEXTO DAS REDES SOCIAIS

function sugirLogo(item){
    let twitter = document.getElementById("logotwitter")
    let email = document.getElementById("logoemail")
    let wpp = document.getElementById("logowpp")

    twitter.style="width: 90px; height: 90px; display: inline-block; margin-top: 30px; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"
    document.getElementById("contatotwitter").style="backgroung-color: white; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"

    email.style="width: 90px; height: 90px; display: inline-block; margin-top: 30px; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"
    document.getElementById("contatoemail").style="backgroung-color: white; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"

    wpp.style="width: 90px; height: 90px; display: inline-block; margin-top: 30px; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"
    document.getElementById("contatowpp").style="backgroung-color: white; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"
}