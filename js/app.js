function prueba1(){
    let numero,contpar=0,contimpar=0;
    numero=parseFloat(prompt("Ingrese un N numero"));
    while(numero != 0){
if (numero%2==0) {
    document.write("El "+numero+" es par");
    contpar++;
} else {
    document.write("El "+numero+" no es par");
    contimpar++;
}
numero=numero-1;
    }
    document.write("Numeros pares: "+contpar+"<br>");
    document.write("Numeros impares: "+contimpar);
}

function prueba2(){
    let num=0,factorial=1;
    num=parseInt(prompt("Ingrese un numero"));
    for (let i = 1 ; i <= num ; i++){
       factorial*=i;
    }
    alert(factorial);
}
function prueba3(){
    let edad;
    edad=parseInt(prompt("Ingrese su edad"));
    if (edad>=1 && edad <= 3) {
        alert("Eres un bebe");
} else if (edad > 3 && edad <=5 ){
alert("eres un niño");
} else if (edad >5 && edad <= 10){
    alert("Eres un niño grande");
}else {
    alert("Eres un adolesente");
}
}
function prueba5(){
let i=1;
while(i<=20){
    document.write(i);
    i+=2;
}

}