let segundos = 0
const contador = document.querySelector('.contador')
const closePromocao = document.querySelector('.close')
const promocao = document.querySelector('.promocao')
const promocaoID = document.getElementById("promocao")

setTimeout(() => { 
    promocao.style.display = 'flex'
}, 5000);

closePromocao.addEventListener('click', () => {
    if (promocaoID.classList){
        promocaoID.classList.add("promocao-close")
    }
        setTimeout(() => { 
        promocao.style.display = 'none'
    }, 3500);
})


function criarHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000 + (780000 * 60))
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'

    })
}

setInterval(function(){
    segundos--
    contador.innerHTML = criarHoraDosSegundos(segundos)
}, 1000)


// iniciaContador()