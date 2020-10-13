function exibir_categoria(categoria){
    //alert(categoria);
    let elementos = document.getElementsByClassName("prod");
    console.log(elementos)
    for(let i = 0; i<elementos.length;i++){
        console.log(elementos[i].id)
        if (categoria == elementos[i].id){
            elementos[i].style = "display: inline-block"
        } else {
            elementos[i].style = "display: none"
        }

    }
}

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