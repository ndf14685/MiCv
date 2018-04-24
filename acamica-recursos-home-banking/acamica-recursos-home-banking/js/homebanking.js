//Declaración de variables
let logueado = false;
let saldoCuenta=10000;
let saldoAnterior=saldoCuenta;
let limiteExtraccion = 500;
const nombreUsuario = 'Pepe Tool';
const servAPagar = 0;
//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  let nuevoLimite = parseInt(prompt("Ingrese nuevo limite"));
  limiteExtraccion = nuevoLimite;
  alert('El nuevo limite es $' + limiteExtraccion);

  actualizarLimiteEnPantalla();

}
//TODO Reducir el saldo y enviar dinero (no le doy bola)
//TODO Validar logueado;
function extraerDinero() {
  let valorADebitar = parseInt(prompt("Ingrese monto a Debitar"));

  if(validarFormatoIngreso(valorADebitar) && validarMonto(valorADebitar)){

      restarDinero(valorADebitar);

      alert("Has retirado: $" + valorADebitar + '\n' + "Saldo Actual es: $" + saldoCuenta + '\n' + "Su Saldo anterior era: $" + saldoAnterior);


  }else {
    actualizarTodo();

    if (valorADebitar.isNaN() ) {
      alert("Valor nulo")

    }else {
      extraerDinero();
    }
  }

}

function validarMonto (montoADebitar){
  if(montoADebitar > saldoCuenta){
    alert("El monto a debitar supera el saldo disponible");
    return false;
  }

  if (montoADebitar > limiteExtraccion){
    alert("Ha superado el limite de extraccion ");
    return false;
  }

  if (montoADebitar%100 !== 0){
    alert("Solo se puede extraer con billetes de 100");
    return false;
  }
  return true;
}
//TODO Agregar en Saldo
//TODO Validar logueado
function depositarDinero() {
  let valorADepositar = prompt("Ingrese monto a Depositar");

  if(validarFormatoIngreso(valorADepositar)){
    let saldoAnterior = saldoCuenta;
    sumarDinero(valorADepositar);
    actualizarTodo();
    alert("Su saldo actual es: $" + saldoCuenta + '\n' + "Su Saldo anterior era: $" + saldoAnterior);
  } else {


    actualizarTodo();
    if (valorADepositar.isNaN() ) {
      alert("Valor nulo")

    }else {

    }

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

function validarFormatoIngreso(valor){
  alert('El valor ingresado es: ' + valor);
  if(valor === null || valor ==='' ||  isNaN(valor)){
    alert("El valor ingresado no es correcto");

    return false;
  }
  return true;
}
//TODO Descontar del saldo aumentar en serviciosPagos
//TODO Validar logueado
function pagarServicio() {
  let servAPagar = prompt("Ingrese el numero que corresponda con el servicio que queres pagar: \n"
  + "1 - Agua \n"
  + "2 - Luz \n"
  + "3 - Internet \n"
  + "4 - Telefono \n");
  if(validarFormatoIngreso()){

  }else if (validarOpciones()) {

  }

}

function validarOpciones(){
  switch (servAPagar) {
    case 1:
      alert("Pago el agua");

      break;
    case 2:
    alert("Pago el Luz");
    break;
    case 3:
    alert("Pago el Internet");
    break;
    case 4:
    alert("Pago el Telefono");
    break;
    default:
      alert("La opcion elegida no es correcta");

  }
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
