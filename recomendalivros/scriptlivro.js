function verificar() { 
    var di = document.querySelector('div#conf')
    var gen = document.getElementsByName('radgen')
    var confgen = ''
    var img1 = document.createElement('img')//cria a tag 
    img1.setAttribute('id','ima1')
    var img2 = document.createElement('img')
    img2.setAttribute('id','ima2')
    var img3 = document.createElement('img')
    img3.setAttribute('id','ima3')
    var img4 = document.createElement('img')
    img4.setAttribute('id','ima4')
    if (gen[0].checked){
        confgen = 'fantasia'
        img1.setAttribute('src','TMI200.jpg');
        img2.setAttribute('src','harry200.jpg');
        img3.setAttribute('src','percy200.jpg');
        img4.setAttribute('src','narnia200.jpg');
    } else {
        confgen = 'ficção cientifica'
        img1.setAttribute('src','robo200.jpg')
        img2.setAttribute('src','justicaancilar200.png')
        img3.setAttribute('src','vorazes200.jpg')
        img4.setAttribute('src','bladerunner200.jpg')
    }
    di.getElementsByClassName.textAlign = 'center'
    di.innerHTML = `Você escolheu o genero ${confgen}! Essas são as nossa recomendações para esse genero`
    di.appendChild(img1)
    di.appendChild(img2)
    di.appendChild(img3)
    di.appendChild(img4)

}

