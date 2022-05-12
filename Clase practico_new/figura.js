//codigo del rectangulo
console.group("cuadrados");
var ladocuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ladocuadrado); otra forma de mandar a llamar una variable
console.log(`Los lados del cuadrado minden: ${ladocuadrado} cm`);

var perimetroCuadrado = ladocuadrado*4;
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);

var areaCuadrado = ladocuadrado*ladocuadrado;
console.log(`El area del cuadrado es: ${areaCuadrado}cm^2`);
console.groupEnd();


//Codigo triangulo
console.group("Triangulo");
var ladotriangulo = 6;
var ladotriangulo2 = 6;
var basetriangulo = 4;
console.log(`Los lados del triangulo minden: 
${ladotriangulo}cm 
${ladotriangulo2}cm 
${basetriangulo}cm`);

var alturatriangulo = 5.5;
console.log(`La altura del triangulo es: ${alturatriangulo}cm`);

var perimetroTriangulo = ladotriangulo+ladotriangulo2+basetriangulo;
console.log(`El perimetro del triangulo es: ${perimetroTriangulo}cm`);

var areaTriangulo = (basetriangulo*alturatriangulo)/2; //se pone en parentesis para que javaScript ejecute lo que está dentro de los parentesis
console.log(`El area del triangulo es: ${areaTriangulo}cm`);

console.groupEnd(); 


//Codigo triangulo
console.group("Triangulo");

//radio
var radioCirculo =4;
console.log(`El radio del circulo es: ${radioCirculo} cm`);
//Diametro
var diametroCirculo = radioCirculo*2;
console.log(`El diametro es: ${diametroCirculo} cm`);

//Pi
var PI = Math.PI;
console.log(`Pi es: ${PI}`);

//circunferencia
var perimetroCirculo = diametroCirculo*PI;
console.log(`El perimetro del circulo es: ${perimetroCirculo} cm`);

//area
var areaCirculo = (radioCirculo*radioCirculo)*PI;
console.log(`El area del circulo es: ${areaCirculo} cm`);

console.groupEnd(); 