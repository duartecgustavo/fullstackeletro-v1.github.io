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