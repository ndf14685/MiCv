//Declaración de variables
let logueado = false;
let saldoCuenta=10000;
let saldoAnterior=saldoCuenta;
let limiteExtraccion = 500;
const nombreUsuario = 'Pepe Tool';
//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  let nuevoLimite = prompt("Ingrese nuevo limite");

}
//TODO Reducir el saldo y enviar dinero (no le doy bola)
//TODO Validar logueado;
function extraerDinero() {
  let valorADebitar = prompt("Ingrese monto a Debitar");

  if(validarIngreso(valorADebitar)){

    restarDinero(valorADebitar);

    alert("Has retirado: $" + valorADebitar + '\n' + "Saldo Anterior: $" + saldoCuenta + '\n' + "Su Saldo anterior era: $" + saldoAnterior);
  }else {
    actualizarTodo();

    extraerDinero();
  }

}

//TODO Agregar en Saldo
//TODO Validar logueado
function depositarDinero() {
  let valorADepositar = prompt("Ingrese monto a Depositar");

  if(validarIngreso(valorADepositar)){
    let saldoAnterior = saldoCuenta;
    sumarDinero(valorADepositar);
    actualizarTodo();
    alert("Su saldo actual es: $" + saldoCuenta + '\n' + "Su Saldo anterior era: $" + saldoAnterior);
  }else {
    actualizarTodo();

    depositarDinero();
  }

}

function mostrarVariante(saldoAnterior, val2){

}
function sumarDinero(valor){
  let saldoAnterior = saldoCuenta;
  saldoCuenta += parseInt(valor);
  actualizarTodo();

  return valor;
}

function restarDinero(valor){
  let saldoAnterior = saldoCuenta;
  saldoCuenta -= parseInt(valor);
  actualizarTodo();
  return valor;
}

function dividirDinero(valor){
return valor;
}

function validarIngreso(valor){
  alert('El valor ingresado es: ' + valor);
  if(valor === null || valor ==='' ||  isNaN(valor)){
    alert("Ingrese un valor correcto");

    return false;
  }
  return true;
}
//TODO Descontar del saldo aumentar en serviciosPagos
//TODO Validar logueado
function pagarServicio() {

}
//TODO Descontar del saldo
//TODO Validar logueado
function transferirDinero() {

}

//TODO Si el usuario es valido, habilito a navegar

function iniciarSesion() {
  if (nombreUsuario ==="pepe") {
      logueado=true;
  }
}

//Funciones que actualizan el valor de las variabl//TODO es en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
function mostrarMsj(msjAMostrar){
    alert ("Limite de extraccion superado");
}
function actualizarTodo(){
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
}
