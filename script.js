function ON(){
    document.getElementById("lampada").src = "ligada.png";
    document.body.style.backgroundColor = 'red';
    
}
function OFF(){
    document.getElementById("lampada").src = "desligada.png";
    document.body.style.backgroundColor = 'lightblue';
}
function QUEBRA(){
    document.getElementById("lampada").src = "quebrada.png";
    document.body.style.backgroundColor = 'lightcoral';
}
function PISCA(){
    let intervalo = 0;
    let contador = 0;
    while(contador < 10){
        intervalo += 300;
        setTimeout(function(){
            document.getElementById('lampada').src = 'ligada.png';
            document.body.style.backgroundColor = 'red';
        }, intervalo);

        intervalo += 300;
        setTimeout(function(){
            document.getElementById('lampada').src = 'desligada.png';
            document.body.style.backgroundColor = 'lightblue';
        }, intervalo);
        contador++;
    }
}
let lampada = document.getElementById('lampada');
lampada.addEventListener('mouseover',ON);
lampada.addEventListener('mouseleave',OFF);
lampada.addEventListener('dblclick',QUEBRA);