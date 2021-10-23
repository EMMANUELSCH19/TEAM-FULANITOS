const format = require('date-fns/format');
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
    var meses = format(addMonths(today, mes), 'dd-MM-yyyy');
    return meses;
}

function agregarTodosDatos(){
    console.log("0.- disposicion: -"+monto+"\nsaldo insoluto: "+saldoInsoluto+"\ncomision: "+comision+"\n IVA: "+calcularPrimerIVA()+
    "\nflujo: "+(-monto+(calcularPrimerIVA()+comisiones())));
    pagoInicialPeriodo();
    $("#tabla>tbody").append("<tr><th scope='row'>"+0+"</th>"+
        "<td id='fecInicial'>"+(format(today, 'dd/MM/yyyy'))+"</td>"+
        "<td id='fecFinal'> </td>"+
        "<td id='dias'> </td>"+
        "<td id='disposicion'>-"+monto+"</td>"+
        "<td id='saldoIn'>"+saldoInsoluto+"</td>"+
        "<td id='comisions'>"+comision+"</td>"+
        "<td id='amorti'> </td>"+
        "<td id='inte'> </td>"+
        "<td id='iva'>"+calcularPrimerIVA()+"</td>"+
        "<td id='flujo'>"+(-monto+(calcularPrimerIVA()+comisiones()))+"</td></tr>");
        saldoInsolutos();
        for (let i = 1; i <= select; i++) {
            $("#tabla>tbody").append("<tr><th scope='row'>"+i+"</th>"+
            "<td id='fecInicial'>"+"22/10/2021"+"</td>"+
            "<td id='fecFinal'>"+fechas(i)+"</td>"+
            "<td id='dias'>"+30+"</td>"+
            "<td id='disposicion'> </td>"+
            "<td id='saldoIn'>"+(Math.round(saldoInsoluto*100)/100)+"</td>"+
            "<td id='comisions'> </td>"+
            "<td id='amorti'>"+(Math.round(amortizacio*100)/100)+"</td>"+
            "<td id='inte'>"+(Math.round(InteresesOrdinarios()*100)/100)+"</td>"+
            "<td id='iva'>"+calcularIVA()+"</td>"+
            "<td id='flujo'>"+(Math.round((montoMinimo()+calcularIVA())*100)/100)+"</td></tr>");
            saldoInsolutos();
        }
    console.log("1.- disposicion: -"+monto+"\nsaldo insoluto: "+saldoInsoluto+"\ncomision: "+comision+"\n IVA: "+calcularIVA()+
    "\nflujo: "+(Math.round((montoMinimo()+calcularIVA())*100)/100));
    saldoInsolutos();
    console.log("2.- disposicion: -"+monto+"\nsaldo insoluto: "+saldoInsoluto+"\ncomision: "+comision+"\n IVA: "+calcularIVA()+
    "\nflujo: "+(Math.round((montoMinimo()+calcularIVA())*100)/100));
    saldoInsolutos();
    console.log("3.- disposicion: -"+monto+"\nsaldo insoluto: "+(Math.round(saldoInsoluto*100)/100)+"\ncomision: "+comision+"\n IVA: "+calcularIVA()+
    "\nflujo: "+(Math.round((montoMinimo()+calcularIVA())*100)/100));
    saldoInsolutos();
    
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