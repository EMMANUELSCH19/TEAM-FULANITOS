var select = 0;
var monto = 0;
var taza = 0;
var today = new Date(); //fecha
var tab = "";
var fila = "";
var pagoInicial= 0;
var intereses = 0;
var saldoInsoluto = 0;
var dp = 31;
var montoMinimos = 0;
var comision = 0;
var amortizacio = 0;
var fecha = dateFns.format(today, 'DD/MM/YYYY');
var control = dateFns.format(today, 'DD/MM/YYYY');
var conteoDay = 0;
var diffDay = 0;


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
    saldoInsoluto = monto;
});

//obtiene el porcentaje de la taza
$(document).on('change', '#taza', function(event) {
    taza = parseInt($("#taza option:selected").text());
    console.log("tasa "+taza);
});



function pagoInicialPeriodo(){
    pagoInicial = monto/select;
    return pagoInicial;
}

function InteresesOrdinarios(){
    intereses = saldoInsoluto * ((taza/100)/360) * dp;
    return intereses;
}

function amortizacion(){
    amortizacio = pagoInicial-InteresesOrdinarios();
    return amortizacio;
}

function montoMinimo(){
    montoMinimos = Math.round((amortizacion()+InteresesOrdinarios()*(1+0.16))*100)/100;
    return montoMinimos;
}

function saldoInsolutos(){
    saldoInsoluto = saldoInsoluto - amortizacion();
    return saldoInsoluto;
}

function primerInsolutoyComision(){
    comisiones();
}

function comisiones(){
    comision = saldoInsoluto * 0.01;
    return comision;
}

function calcularIVA(){
    return Math.round((InteresesOrdinarios()*0.16)*100)/100;
}

// QUE HACEN? QUE HACEN!!!!!!!!!!!!!

function calcularPrimerIVA(){
    return Math.round((comisiones()*0.16)*100)/100;
}

function fechas(mes){
    fecha = dateFns.addMonths(today, mes);
    control = dateFns.format(fecha, 'DD/MM/YYYY');

    return dateFns.format(fecha, 'DD/MM/YYYY');
}

function contarDias(){//funcion para el conteo de dias actual: no funciona
    //diffDay = dateFns.differenceInDays(new Date(fecha), new Date(control));
    console.log(dateFns.format(dateFns.endOfMonth(fecha), 'DD'));
    return dateFns.format(dateFns.endOfMonth(fecha), 'DD');
}

function agregarTodosDatos(){
    console.log(dateFns.differenceInDays(fecha, control));
    pagoInicialPeriodo();
    $("#tabla>tbody").append("<tr><th scope='row'>"+0+"</th>"+
        "<td id='fecInicial'>"+dateFns.format(today, 'DD/MM/YYYY')+"</td>"+
        "<td id='fecFinal'> </td>"+
        "<td id='dias'> </td>"+
        "<td id='disposicion'>-"+monto+"</td>"+
        "<td id='saldoIn'>"+saldoInsoluto+"</td>"+
        "<td id='comisions'>"+comisiones()+"</td>"+
        "<td id='amorti'> </td>"+
        "<td id='inte'> </td>"+
        "<td id='iva'>"+calcularPrimerIVA()+"</td>"+
        "<td id='flujo'>"+(-monto+(calcularPrimerIVA()+comisiones()))+"</td></tr>");
        saldoInsolutos();
        for (let i = 1; i <= select; i++) {
            $("#tabla>tbody").append("<tr><th scope='row'>"+i+"</th>"+
            "<td id='fecInicial'>"+control+"</td>"+
            "<td id='fecFinal'>"+fechas(i)+"</td>"+
            "<td id='dias'>"+contarDias()+"</td>"+
            "<td id='disposicion'> </td>"+
            "<td id='saldoIn'>"+(Math.round(saldoInsoluto*100)/100)+"</td>"+
            "<td id='comisions'> </td>"+
            "<td id='amorti'>"+(Math.round(amortizacio*100)/100)+"</td>"+
            "<td id='inte'>"+(Math.round(InteresesOrdinarios()*100)/100)+"</td>"+
            "<td id='iva'>"+calcularIVA()+"</td>"+
            "<td id='flujo'>"+(Math.round((montoMinimo()+calcularIVA())*100)/100)+"</td></tr>");
            saldoInsolutos();
        }
    
}

function agregarTodosDatos2(){
    alert("hola");

    // $("#tabla>tbody").append("<tr><th scope='row'>"+0+"</th>"+
    //     "<td id='fecInicial'>"+(format(today, 'dd/MM/yyyy'))+"</td>"+
    //     "<td id='fecFinal'> </td>"+
    //     "<td id='dias'> </td>"+
    //     "<td id='disposicion'>-"+monto+"</td>"+
    //     "<td id='saldoIn'>"+saldoInsoluto+"</td>"+
    //     "<td id='comisions'>"+comision+"</td>"+
    //     "<td id='amorti'> </td>"+
    //     "<td id='inte'> </td>"+
    //     "<td id='iva'>"+calcularPrimerIVA()+"</td>"+
    //     "<td id='flujo'>"+(-monto+(calcularPrimerIVA()+comisiones()))+"</td></tr>");
    //     saldoInsolutos();
    //     for (let i = 1; i <= select; i++) {
    //         $("#tabla>tbody").append("<tr><th scope='row'>"+i+"</th>"+
    //         "<td id='fecInicial'>"+"22/10/2021"+"</td>"+
    //         "<td id='fecFinal'>"+fechas(i)+"</td>"+
    //         "<td id='dias'>"+30+"</td>"+
    //         "<td id='disposicion'> </td>"+
    //         "<td id='saldoIn'>"+(Math.round(saldoInsoluto*100)/100)+"</td>"+
    //         "<td id='comisions'> </td>"+
    //         "<td id='amorti'>"+(Math.round(amortizacio*100)/100)+"</td>"+
    //         "<td id='inte'>"+(Math.round(InteresesOrdinarios()*100)/100)+"</td>"+
    //         "<td id='iva'>"+calcularIVA()+"</td>"+
    //         "<td id='flujo'>"+(Math.round((montoMinimo()+calcularIVA())*100)/100)+"</td></tr>");
    //         saldoInsolutos();
    //     }
}

//

function contadorDias(){
    var fechainicial = moment(2021-09-10);
    var fechafinal = moment(2021-10-10);
    
    consol.log(fechainicial.diff(fechafinal, 'days'), 'diasdiferencia');
}