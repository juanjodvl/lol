/*function comparar (num1,num2,num3){
    if (num1 > num2){
        if (num1 > num3){
            console.log("El mayor numero es: " ,num1)
        }
    }else if (num2 > num1){
        if (num2 > num3){
            console.log("El mayor numero es: " ,num2)
        }
    }else if (num3 > num1){
        if (num3 > num2){
            console.log("El mayor numero es : " ,num3)
        }
    }else {
        console.log("Todos los numeros son iguales")
    }
}
comparar (20,10,20)*/

/*function ternaria(n1,n2,n3){
    mayor = n1>n2 ? (n1 > n3 ? n1 : n3): (n2>n3 ? n2 : n3);
    return mayor
}
console.log (ternaria(100,10,230))*/

/*setTimeout(() => {
    console.log("han pasado 3segs")
}, 3000);*/


/*function suma(){
    result = n1+n2;
    return result;
}
function resta(){
    if (n1>=n2){
        result = n1-n2;
    }else{
        result = n2-n1;
    }return result;
}
function multiplicacion(){
    result = n1*n2;
    return result;
}
function division(){
    result = n1/n2;
    return result;
}
let n1 = 2
let n2 = 4
let calc = "/"
if (calc == "+"){
    console.log(suma())
}else if (calc == "-"){
    console.log(resta())
}else if (calc == "*"){
    console.log(multiplicacion())
}else if (calc == "/"){
    console.log(division())
}else{
    console.log("Error")
} */


/*const boton = document.getElementById("calcular");
const error = document.getElementById("error");
const datos = document.getElementById("datos");
const flu = document.getElementById("flu")
const man = document.getElementById("man")
boton.addEventListener("click", ()=>{
    peso = document.getElementById("peso").valueAsNumber;
    if(peso > 0){
        error.style.display = "none";
        datos.style.display = "none";
        let flujo = calcularflujo(peso);
        let mat = flujo * 1.5
        console.log(flujo);
    }else{
        error.style.display = "block";
        datos.style.display = "block";
        flu.style.display = "none"
        man.style.display = "none"
    }
})
function calcularflujo(peso){
    if (peso <= 30){
        let flujo = holliday(peso)
        let mant = flujo * 1.5
        console.log("holliday")
        flu.innerHTML = flujo + " cc/hr"
        flu.style.display = "block"
        man.innerHTML = "m+m/2 " + mant + " cc/hr"
        man.style.display = "block"
    }else{
        let flujo = superficie(peso)
        let mant = flujo * 1.5
        console.log("superficie")
        flu.innerHTML = flujo + " cc/hr"
        man.innerHTML = "m+m/2 " + mant + " cc/hr"
    }
}
function holliday(peso){
    if (peso <= 10){
        vol_diario = peso * 100
    }else if (10 < peso < 20){
        vol_diario = 1000 + (peso * 50)
    }else if (peso >= 20){
        vol_diario = 1500 + (peso * 20)
    }
    return vol_diario
}
function superficie(peso){ 
    document.getElementById("multiplicador").style.display = "block";
    document.getElementById("peso").style.display = "none"; 
    do{
        multiplicador = document.getElementById("multiplicador").valueAsNumber;
        error.style.display="block"
        datos.textContent="Ingresa un numero correspondiente"
        datos.style.display="block"
    }while((multiplicador == 1500) || (multiplicador == 2000)) 
    flu.style.display = "block"
    man.style.display = "block"
    error.style.display = "none"
    datos.style.display = "none"
    let sup_corp = ((peso * 4) + 7) / (peso + 90);
    vol_diario = sup_corp * multiplicador;
    return vol_diario
    
}*/

const boton = document.getElementById("calcular");
const error = document.getElementById("error");
const datos = document.getElementById("datos");
const man = document.getElementById("man")
const flu = document.getElementById("flu")
const mm2 = document.getElementById("mm2")
const c1 = document.getElementById("casilla1")
const c2 = document.getElementById("casilla2")
const l1 = document.getElementById("l1")
const l2 = document.getElementById("l2")
boton.addEventListener("click", ()=>{
    peso = document.getElementById("peso").valueAsNumber;
    if(peso > 0){
        error.style.display = "none";
        datos.style.display = "none";
        calcularflujo(peso);
    }else{
        error.style.display = "block";
        datos.style.display = "block";
        flu.style.display = "none"
        man.style.display = "none"
        mm2.style.display = "none"
    }
})

function calcularflujo(peso){
    if (peso <= 30){
        let flujo = holliday(peso)
        let mant = flujo / 24
        let m = mant * 1.5
        flu.innerHTML = "volumen diario: " + Math.round(flujo) + " cc/hr"
        man.innerHTML = "mantenimiento: " + Math.round(mant) + " cc/hr"
        mm2.innerHTML = "m+m/2: " + Math.round(m) +" cc/hr"
        flu.style.display = "block"
        man.style.display = "block"
        mm2.style.display = "block"
    }else{
        let flujo = superficie(peso)
        m1 = flujo * 1500
        m2 = flujo * 2000
        flu.innerHTML = "SC1:  " +Math.round(m1)+ " cc/hr" 
        man.innerHTML = "SC2: " +Math.round(m2)+ " cc/hr"
        flu.style.display = "block"
        man.style.display = "block"
        mm2.style.display = "none"
    }
}
function holliday(peso){
    if (peso <= 10){
        vol_diario = peso * 100
    }else if (10 < peso < 20){
        vol_diario = 1000 + ((peso - 10) * 50)
    }else if (peso >= 20){
        vol_diario = 1500 + ((peso - 20) * 20)
    }
    return vol_diario
}
function superficie(peso){
    let sup_corp = ((peso * 4) + 7) / (peso + 90);
    return sup_corp
}
