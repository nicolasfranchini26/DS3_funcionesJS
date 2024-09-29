let colorInicial = 'white';

const cuadro1 = document.getElementById('key1');
const cuadro2 = document.getElementById('key2');

cuadro1.style.backgroundColor = 'colorInicial'

function cambioColorCuadro1 (color){
    cuadro1.style.backgroundColor = color;
}

function cambioColorCuadro2 (color){
    cuadro2.style.backgroundColor = color;
}

document.addEventListener('keydown', function (event){
    if (event.key === 'a'){
    colorInicial = 'pink'
    cambioColorCuadro1(colorInicial);
    } else if (event.key === 's'){
    colorInicial = 'orange'
    cambioColorCuadro1(colorInicial);
    } else if (event.key === 'd'){ 
        colorInicial = 'lightblue'
        cambioColorCuadro1(colorInicial);
    } else if (event.key === 'q'){
        cambioColorCuadro2('purple');
    } else if (event.key === 'w'){
        cambioColorCuadro2('gray')
    } else if (event.key === 'e'){
        cambioColorCuadro2('brown')
    }
    })