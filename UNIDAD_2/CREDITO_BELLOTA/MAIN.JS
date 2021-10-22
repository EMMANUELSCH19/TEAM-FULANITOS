var select = 0;
var monto = 0;
var taza = 0;
var fechaInicio = new Date();

//obtiene el plazo del select 
$(document).on('change', '#plazo', function(event) {
    select = parseInt($("#plazo option:selected").text());
    console.log("plazo "+select);
});

//obtiene el monto del prestamo
$(document).on('change', '#importe', function (event) {
    try {
        monto = parseInt($("#importe").val());
    } catch (error) {
        alert("favor de ingresar solo numeros");
        console.log(error);
    }
    console.log("monto "+monto);
});

//obtiene el porcentaje de la taza
$(document).on('change', '#taza', function(event) {
    taza = parseInt($("#taza option:selected").text());
    console.log("plazo "+taza);
});


