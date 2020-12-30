// FUNCIÓN PARA MOSTRAR LA VALORACIÓN
function mostrarValoracion() {
    var valor = document.getElementById("valor").value;
    alert("Has valorado con " + valor + " puntos");
}

// FUNCIÓN PARA MOSTRAR EL NÚMERO DE CUENTA
function mostrarCuenta() {
    var pais = document.getElementById("pais").value;
    var iban = document.getElementById("iban").value;
    var entidad = document.getElementById("entidad").value;
    var sucursal = document.getElementById("sucursal").value;
    var dc = document.getElementById("dc").value;
    var cuenta = document.getElementById("cuenta").value;
    alert("Le informamos que su cuenta bancaria es: " + pais+iban + "-" + entidad + "-" + dc + "-" + cuenta);
}

// FUNCIÓN QUE VALIDA LA NUMERACIÓN
function validarTecla(evt){

    // Comprueba que la tecla presionada esté dentro del catálogo ASCII
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // Es la tecla borrar
      return true;
    } else if(code>=48 && code<=57) { // Es un número
      return true;
    } else{ // other keys.
      return false;
    }
}

/* function mostrarDiaSemana2() {
    var fecha = document.getElementById("fecha").value;
    var fijo = new Date(2019,01,1);
    var dia = new Array(7);
     dia[0]= "Lunes";  
     dia[1]= "Martes";
     dia[2]= "Miércoles"; 
     dia[3]= "jueves";
     dia[4]= "Viernes"; 
     dia[5]= "Sábado"; 
     dia[6]= "Domingo";
    var semana = dia[fijo.getDay()];
   // var dia  = objFecha.toLocaleDateString();
   // var mes = d.getDay();
    alert("La fecha seleccionada en el elemento de fecha es un  " + semana);
} */

// FUNCIÓN PARA MOSTRAR EL DÍA DE LA SEMANA
function mostrarDiaSemana(){
    var fechaActual = document.getElementById("fecha").value;
    var date = new Date(fechaActual); // Crea un nuevo objeto fecha
    var dia = date.toLocaleDateString("Es-ES", { weekday: 'long' }); // Me saca el día de la semana   
    alert("La fecha seleccionada en el elemento de fecha es un " + dia[0].toUpperCase() + dia.slice(1));
}