const form = document.getElementById('form');

form.addEventListener('submit', function(calcular){
    event.preventDefault();

    const weigth = document.getElementById('weigth').value ;
    const heigth = (document.getElementById('heigth').value); 

    const imc = parseInt(weigth / ( heigth **2 )).toFixed(1);
    
    
    
    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('imc-container').classList.remove('hidden');

    if (imc < 18.5) {
        description = 'Cuidado Você esta abaixo do peso !'
    } 
    else if (imc == 18.50 || imc <= 24.99) {
        description = 'Seu peso esta Normal!'
        value.classList.remove('attention');
        value.classList.add('normal');
    }
    else if (imc == 25 || imc <= 29.99) {
        description = 'Você esta acima do peso!'
    } 
    else if (imc == 30 || imc <= 39.99) {
        description = 'Você esta com Obesidade!'
    } else  {
        description = 'Voce esta com Obesidade Morbida'
    }
    

    value.textContent = imc.replace(',', '.');
    
    document.getElementById('info-Result').textContent = description;
});