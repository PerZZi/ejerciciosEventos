const contenedor= document.querySelector("div")
const boton= document.querySelector("button")

const colores=["bg-blue-300","bg-red-300"]

boton.addEventListener("click", () => {
    const colorAle= colores[Math.floor((Math.random())*colores.length)];
    contenedor.className = "w-[300px] h-[300px] mt-4 " + colorAle;
})

//ejer 2
const contenedor2= document.querySelector(".conte2")
const textoinput= document.getElementById("texto")
const botonT= document.getElementById("botonTexto")

textoinput.addEventListener("input", (event) => {
    contenedor2.textContent=event.target.value;
})

botonT.addEventListener("click", () =>{
    contenedor2.textContent=""
    textoinput.value=""
})

//ejer 3
const conteDatos = document.querySelector(".Datos")
const conteResu = document.querySelector(".Resultado")
const inputAltura = document.getElementById("altura")
const inputPeso = document.getElementById("peso")
const inputResul = document.getElementById("resu")
const botonCalcular = document.getElementById("botonCalcu")


botonCalcular.addEventListener("click", () => {
    const masaCorp= Number(inputPeso.value)/(Number(inputAltura.value)**2);
    inputResul.value = masaCorp;
})



