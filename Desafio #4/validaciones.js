function validarNombre(nombre){
    if((nombre == null) || (nombre == " ")){
        alert("Error. Debes ingresar algo");
        return nombre;
    }else{
        if(!(isNaN(nombre))){
            alert("Error. No puedes ingresar números.");
            return nombre;
        }else{
            return nombre;
        }   
    }
}

function validarMonto(monto){
    if((monto == null) || (monto == " ")){
        alert("¡Error!. Ud debe ingresar un monto válido");
        return monto;
    }else{
        if(isNaN(monto)){ 
            alert("¡Error!. Ud debe ingresar solo números")
            return monto;
        }else{
            if(monto <= 0){
                alert("Debes ingresar números válidos.")
                return monto;
            }else{
                return monto;
            }
        }
    }
}

//para recorrer el arreglo e impedir de que no ingrese un nombre que ya haya sido registrado
function recorrerArray(nombre, nombres, posicion){
    i = 0;
    do{
        if (nombre == nombres[i]){
            alert("Ups. Ese nombre ya ha sido registrado");
            return true;
        }else{
            i++
        }
    }while(i<=posicion);
    return false; 
} 