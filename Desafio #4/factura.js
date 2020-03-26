//declarcion de variables
var cantFacturas, promMontos, nombre, monto;
var nombres =[];
var montos =[];
var acumMontos = 0;
var contadorCliente = 0;
var posicion = 0;

function registrarFactura(){
    contadorCliente++;
    do{
        nombre = prompt("Ingrese el nombre del cliente #"+ contadorCliente);
        nombre = validarNombre(nombre);
        bool = recorrerArray(nombre, nombres, posicion);
    }while(((nombre == null) || (nombre == " ")) || (!(isNaN(nombre) || (bool === true))))

    do{
        monto = parseInt(prompt("Ingrese el monto del cliente #"+ contadorCliente));
        monto = validarMonto(monto);
    }while(((monto == null) || (monto == " ")) || ((monto <= 0) || (isNaN(monto))))

    if(posicion>=0){
        nombres[posicion] = nombre;
        montos[posicion] = monto;
    } 
    posicion++
}

function mostrarResultados(){
    //cargo los datos almacenados y acumulo los montos
    for(i = 0; i< posicion; i++){
        //la i quiere decir en la posición del array donde se encuentra
        console.log("Nombre del cliente #"+i+": "+ nombres[i]);
        console.log("Monto del cliente #"+i+": "+ montos[i]);
        acumMontos = acumMontos + montos[i];
    }

    promMontos = acumMontos/posicion;
    console.log("Total de ventas: "+ acumMontos);
    console.log("Promedio de ventas realizadas: "+ promMontos);
}