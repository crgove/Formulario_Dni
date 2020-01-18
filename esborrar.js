export default function calcularLetraDNI(dni){
    var cadena="TRWAGMYFPDXBNJZSQVHLCKET";
    //var cadena= []
    var posicion = dni%23;
    var letra = cadena.substring(posicion,posicion+1);

    return letra;
}
