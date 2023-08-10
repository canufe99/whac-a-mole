let quadradosGrid = document.querySelectorAll('.quadrado');
let quadradoPreto = document.querySelector('.preto');
let scoreHtml = document.querySelector('.score-html');

let score = 0;
let quadradoAleatorioN;
let quadradoClicado; 



function quadradoAleatorio() {
    quadradosGrid.forEach((quadrado) => {
        quadrado.classList.remove('preto')
    })
    quadradoAleatorioN = quadradosGrid[Math.floor(Math.random() * 9)];
    quadradoAleatorioN.classList.add('preto');            
}


selecionarQuadrado()


function selecionarQuadrado() {                
    setInterval(quadradoAleatorio, 500);
    quadradosGrid.forEach((quadrado) => {
        quadrado.addEventListener('click', () => {
            quadradoClicado = quadrado.id;  
            
            if(quadradoClicado == quadradoAleatorioN.id) {
                score++;

            } else {
                alert('perdeu');
                score = 0;
            }

            scoreHtml.innerHTML = score;
        })               
    })
}



