console.group("cuadrados");

function perimetroCuadrado(lado){
    return lado*4;
} 

function areaCuadrado(lado){
    return lado*lado;
} 

console.groupEnd();


//Codigo triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2; 
}
console.groupEnd(); 


//Código Circulo
console.group("Circulo");
function diametroCirculo(radio){
    return radio*2;
}

//Pi
var pi = Math.PI;
console.log(`PI es: ${pi}`)

function perimetroCirculo(radio){
    var diametro = diametroCirculo(radio);
    return diametro*pi;
}

function areaCirculo(radio){
    return (radio*radio)*pi;
}
console.groupEnd(); 



//Aquí interactuamos con el HTML

//cuadrado
function calcularPerimetroCuadrado(){
    var input = document.getElementById("InputCuadrado");
    var value =input.value;


    var perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    var input = document.getElementById("InputCuadrado");
    var value =input.value;


    var area = areaCuadrado(value);
    alert(area);
}




//triangulo
function calcularPerimetroTriangulo(){
    var inputlado1 = document.getElementById("InputTriangulolado1");
    var inputlado2 = document.getElementById("InputTriangulolado2");
    var inputladobase = document.getElementById("InputTriangulobase");


    

    var valuelado1 =Number (inputlado1.value);
    var valuelado2 =Number (inputlado2.value);
    var valuelado3 =Number (inputladobase.value);


    var perimetro = perimetroTriangulo(valuelado1,valuelado2,valuelado3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    var input = document.getElementById("InputTriangulo");
    var value =input.value;


    var area = areaTriangulo(value);
    alert(area);
}


function calcularAlturaTriangulo(){
    
}