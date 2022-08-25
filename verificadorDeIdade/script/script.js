

function validar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.Value) > ano) { 
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './assets/criancaM.png')
            } else if ( idade < 21) {
                // Jovem
                img.setAttribute('src', './assets/jovemM.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './assets/adultoM.png')
            } else {
                // Idoso
                img.setAttribute('src', './assets/idosoM.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './assets/criancaF.png')
            } else if ( idade < 21) {
                // Jovem
                img.setAttribute('src', './assets/jovemF.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './assets/adultoF.png')
            } else {
                // Idoso
                img.setAttribute('src', './assets/idosoF.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}