const form = document.getElementById('form');

form.addEventListener('submit', function(calcular){
    event.preventDefault();

    const weigth = document.getElementById('weigth').value;
    const heigth = (document.getElementById('heigth').value)/100;

    const imc = (weigth / ( heigth **2 )).toFixed(1);
    console.log(weigth, heigth)
    console.log(imc);
});