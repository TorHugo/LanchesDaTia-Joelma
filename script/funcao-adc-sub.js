const elementSoma = document.getElementsByClassName('adicionar');

for (let key = 0; key < elementSoma.length; key++) {
    const element = elementSoma[key];

    element.addEventListener('click', (event) => {
        let resultado = event.target.parentNode.querySelector('.resultado');
        let valor = resultado.innerHTML;
        resultado.textContent = Number(valor) + 1;
    })
}

const elementSub = document.getElementsByClassName('subtrair');
for (let key = 0; key < elementSub.length; key++) {
    const element = elementSub[key];

    element.addEventListener('click', (event) => {
        let resultado = event.target.parentNode.querySelector('.resultado');
        let valor = resultado.innerHTML;
        if (valor > 0){
            resultado.textContent = Number(valor) - 1;
        }
    })
}