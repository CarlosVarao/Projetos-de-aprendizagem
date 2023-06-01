
const horasSpan = document.getElementById('hrs')
const minutosSpan = document.getElementById('min')
const segundosSpan = document.getElementById('seg')

const times = setInterval(function time() {
    let data = new Date()
    let horas = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

    if(horas < 10){
        horas = '0' + horas
    }

    if(minutos < 10){
        minutos = '0' + minutos
    }

    if(segundos < 10){
        segundos = '0' + segundos
    }

    horasSpan.textContent = horas
    minutosSpan.textContent = minutos
    segundosSpan.textContent = segundos

})




