const hamburguer = document.querySelector('.hamburg');
hamburguer.addEventListener('click', () => {
    show_hamburguer();
})
const acompanhamento = document.querySelector('.acomp');
acompanhamento.addEventListener('click', () => {
    show_acompanhamentos();
})
const refrigerante = document.querySelector('.refri');
refrigerante.addEventListener('click', () => {
    show_refrigerante();
})
const cerveja = document.querySelector('.cerv');
cerveja.addEventListener('click', () => {
    show_cerveja();
})
const sobremesa = document.querySelector('.sobr');
sobremesa.addEventListener('click', () => {
    show_sobremesa();
})

function show_hamburguer(){
    document.getElementById('hamburg').style.display = 'grid';
    document.getElementById('acomp').style.display = 'none';
    document.getElementById('refri').style.display = 'none';
    document.getElementById('cerve').style.display = 'none';
    document.getElementById('sobre').style.display = 'none';
}
function show_acompanhamentos(){
    document.getElementById('acomp').style.display = 'grid';
    document.getElementById('hamburg').style.display = 'none';
    document.getElementById('refri').style.display = 'none';
    document.getElementById('cerve').style.display = 'none';
    document.getElementById('sobre').style.display = 'none';
}
function show_refrigerante(){
    document.getElementById('acomp').style.display = 'none';
    document.getElementById('hamburg').style.display = 'none';
    document.getElementById('refri').style.display = 'grid';
    document.getElementById('cerve').style.display = 'none';
    document.getElementById('sobre').style.display = 'none';
}
function show_cerveja(){
    document.getElementById('acomp').style.display = 'none';
    document.getElementById('hamburg').style.display = 'none';
    document.getElementById('refri').style.display = 'none';
    document.getElementById('cerve').style.display = 'grid';
    document.getElementById('sobre').style.display = 'none';
}
function show_sobremesa(){
    document.getElementById('acomp').style.display = 'none';
    document.getElementById('hamburg').style.display = 'none';
    document.getElementById('refri').style.display = 'none';
    document.getElementById('cerve').style.display = 'none';
    document.getElementById('sobre').style.display = 'grid';
}