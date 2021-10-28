function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#87CEEB'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde250.png'
        document.body.style.background = '#FFD700'
    } else{
        //boa noite
        img.src = 'noite250.png'
        document.body.style.background = '#4B0082'
    }
}