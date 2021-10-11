let totales = 0.0;
var cantidad_1 = 0; //acomulador si funciona 
var subtotal_1 = 0;
//colocando las variables para las demas frutas 
var cantidad_2 = 0;
var subtotal_2 = 0;

var cantidad_3 = 0;
var subtotal_3 = 0;

var cantidad_4 = 0;
var subtotal_4 = 0;

var cantidad_5 = 0;
var subtotal_5 = 0;

var condicion = true;

//copiando a las demas funciones 
function  agregarProducto1(){
    event.preventDefault();
    var producto = document.getElementById("producto1").innerHTML;
    var precio = document.getElementById("precio1").innerHTML;
    let ReferenciaTablaAgregar = document.getElementById("tablaProductos");
    cantidad_1++;
    var precios = parseFloat(precio.slice(1));
    subtotal_1 = subtotal_1 + precios;
    if (cantidad_1 == 1) {
        let nuevaFila = ReferenciaTablaAgregar.insertRow(-1);
        let nuevaRefCelda = nuevaFila.insertCell(0);
        nuevaRefCelda.textContent = producto;
        let nuevaRefCelda1 = nuevaFila.insertCell(1);
        nuevaRefCelda1.id = "c_1";
        //colocando la celda de los botones 
        let nuevaRefCeldaBoton = nuevaFila.insertCell(2)
        nuevaRefCeldaBoton.innerHTML = `<button id = "menos1" class = "menos" onclick = "restar1(this)">-</button> <button id = "mas1" class = "mas" onclick = "sumar1()">+</button>`;
        nuevaRefCelda1.textContent = cantidad_1;//voy a hacer pruebas
        let nuevaRefCelda2 = nuevaFila.insertCell(3);
        nuevaRefCelda2.id = "p_1";
        nuevaRefCelda2.textContent = "$"+subtotal_1;
        
    }
    else{
        document.getElementById("c_1").innerHTML = cantidad_1;
        document.getElementById("p_1").innerHTML = "$"+subtotal_1;
    }
    console.log(producto);
    //se elimino la suma en total por conflicto con las modificaciones 
    console.log("cantidad: "+cantidad_1);
    console.log(subtotal_1);
    console.log(totales);//esto suma las cantidades 

}
function  agregarProducto2(){
    event.preventDefault();
    var mas = document.write
    var producto = document.getElementById("producto2").innerHTML;
    var precio = document.getElementById("precio2").innerHTML;
    let ReferenciaTablaAgregar = document.getElementById("tablaProductos");
    cantidad_2++;
    var precios = parseFloat(precio.slice(1));
    subtotal_2 = subtotal_2 + precios;
    if (cantidad_2 == 1) {
        let nuevaFila = ReferenciaTablaAgregar.insertRow(-1); 
        let nuevaRefCelda = nuevaFila.insertCell(0);
        nuevaRefCelda.textContent = producto;
        let nuevaRefCelda1 = nuevaFila.insertCell(1);
        nuevaRefCelda1.id = "c_2";
        let nuevaRefCeldaBoton = nuevaFila.insertCell(2)
        nuevaRefCeldaBoton.innerHTML = `<button id = "menos2" class = "menos" onclick = "restar2(this)">-</button> <button id = "mas2" class = "mas" onclick ="sumar2()">+</button>`;
        nuevaRefCelda1.textContent = cantidad_2;//voy a hacer pruebas
        let nuevaRefCelda2 = nuevaFila.insertCell(3);
        nuevaRefCelda2.id = "p_2";
        nuevaRefCelda2.textContent = "$"+subtotal_2;
        
    }
    else{
        document.getElementById("c_2").innerHTML = cantidad_2;
        document.getElementById("p_2").innerHTML = "$"+subtotal_2;
    }
    console.log(producto);
    //se elimino la suma en total por conflicto con las modificaciones 
    console.log("cantidad: "+cantidad_2);
    console.log(subtotal_2);
    console.log(totales);//esto suma las cantidades
}
function  agregarProducto3(){
    event.preventDefault();
    var mas = document.write
    var producto = document.getElementById("producto3").innerHTML;
    var precio = document.getElementById("precio3").innerHTML;
    let ReferenciaTablaAgregar = document.getElementById("tablaProductos");
    cantidad_3++;
    var precios = parseFloat(precio.slice(1));
    subtotal_3 = subtotal_3 + precios;
    if (cantidad_3 == 1) {
        let nuevaFila = ReferenciaTablaAgregar.insertRow(-1);
        let nuevaRefCelda = nuevaFila.insertCell(0);
        nuevaRefCelda.textContent = producto;
        let nuevaRefCelda1 = nuevaFila.insertCell(1);
        nuevaRefCelda1.id = "c_3";
        let nuevaRefCeldaBoton = nuevaFila.insertCell(2)
        nuevaRefCeldaBoton.innerHTML = `<button id = "menos3" class = "menos" onclick = "restar3(this)">-</button> <button id = "mas3" class = "mas" onclick = "sumar3()">+</button>`;
        nuevaRefCelda1.textContent = cantidad_3;//voy a hacer pruebas
        let nuevaRefCelda2 = nuevaFila.insertCell(3);
        nuevaRefCelda2.id = "p_3";
        nuevaRefCelda2.textContent = "$"+subtotal_3;
        
    }
    else{
        document.getElementById("c_3").innerHTML = cantidad_3;
        document.getElementById("p_3").innerHTML = "$"+subtotal_3;
    }
    console.log(producto);
    //se elimino la suma en total por conflicto con las modificaciones 
    console.log("cantidad: "+cantidad_3);
    console.log(subtotal_3);
    console.log(totales);//esto suma las cantidades

}
function  agregarProducto4(){
    event.preventDefault();
    var mas = document.write
    var producto = document.getElementById("producto4").innerHTML;
    var precio = document.getElementById("precio4").innerHTML;
    let ReferenciaTablaAgregar = document.getElementById("tablaProductos");
    cantidad_4++;
    var precios = parseFloat(precio.slice(1));
    subtotal_4 = subtotal_4 + precios;
    if (cantidad_4 == 1) {
        let nuevaFila = ReferenciaTablaAgregar.insertRow(-1);//PONGAMOSLE UNA CONDICION, 
        let nuevaRefCelda = nuevaFila.insertCell(0);
        nuevaRefCelda.textContent = producto;
        let nuevaRefCelda1 = nuevaFila.insertCell(1);
        nuevaRefCelda1.id = "c_4";
        let nuevaRefCeldaBoton = nuevaFila.insertCell(2)
        nuevaRefCeldaBoton.innerHTML = `<button id = "menos4" class = "menos" onclick = "restar4(this)">-</button> <button id = "mas4" class = "mas" onclick = "sumar4()">+</button>`;
        nuevaRefCelda1.textContent = cantidad_4;//voy a hacer pruebas
        let nuevaRefCelda2 = nuevaFila.insertCell(3);
        nuevaRefCelda2.id = "p_4";
        nuevaRefCelda2.textContent = "$"+subtotal_4;
        
    }
    else{
        document.getElementById("c_4").innerHTML = cantidad_4;
        document.getElementById("p_4").innerHTML = "$"+subtotal_4;
    }
    console.log(producto);
    //se elimino la suma en total por conflicto con las modificaciones 
    console.log("cantidad: "+cantidad_4);
    console.log(subtotal_4); //Ya quedo
    console.log(totales);//esto suma las cantidades
}
function  agregarProducto5(){
    event.preventDefault();
    var mas = document.write
    var producto = document.getElementById("producto5").innerHTML;
    var precio = document.getElementById("precio5").innerHTML;
    let ReferenciaTablaAgregar = document.getElementById("tablaProductos");
    cantidad_5++;
    var precios = parseFloat(precio.slice(1));
    subtotal_5 = subtotal_5 + precios;
    if (cantidad_5 == 1) {
        let nuevaFila = ReferenciaTablaAgregar.insertRow(-1);//PONGAMOSLE UNA CONDICION, 
        let nuevaRefCelda = nuevaFila.insertCell(0);
        nuevaRefCelda.textContent = producto;
        let nuevaRefCelda1 = nuevaFila.insertCell(1);
        nuevaRefCelda1.id = "c_5";
        let nuevaRefCeldaBoton = nuevaFila.insertCell(2)
        nuevaRefCeldaBoton.innerHTML = `<button id = "menos5" class = "menos" onclick = "restar5(this)">-</button> <button id = "mas5" class = "mas" onclick = "sumar5()">+</button>`;
        nuevaRefCelda1.textContent = cantidad_5;//voy a hacer pruebas
        let nuevaRefCelda2 = nuevaFila.insertCell(3);
        nuevaRefCelda2.id = "p_5";
        nuevaRefCelda2.textContent = "$"+subtotal_5;
        
    }
    else{
        document.getElementById("c_5").innerHTML = cantidad_5;
        document.getElementById("p_5").innerHTML = "$"+subtotal_5;
    }
    console.log(producto);
    //se elimino la suma en total por conflicto con las modificaciones 
    console.log("cantidad: "+cantidad_5);
    console.log(subtotal_5);
    console.log(totales);//esto suma las cantidades
}

function total() {
    totales = totales + subtotal_1 + subtotal_2 + subtotal_3 + subtotal_4 + subtotal_5;
    var mostrar = document.getElementById("mostrarTotal");
    mostrar.textContent ="Su compra total es de $"+totales;
    totales = 0.0;
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx,{
        type:"bar",
        data:{
            labels:['Manzana 🍎','Sandia 🍉','Mango 🥭','Platano 🍌','Melon 🍈'],
            datasets:[{
                label:"Ventas al Mes de la Veduleria La Bellota",
                data:[subtotal_1,subtotal_2,subtotal_3,subtotal_4,subtotal_5],
                backgroundColor:[
                    'rgb(255, 51, 0)',
                    'rgb(102, 255, 51)',
                    'rgb(255, 153, 0)',
                    'rgb(255, 255, 0)',
                    'rgb(255, 153, 51)'
                ]
            }]
        }
    });

  }

  //suma y resta del 1
  function restar1(r){
    var precios = document.getElementById("precio1").innerHTML;
    var precio = parseFloat(precios.slice(1));
    cantidad_1--;
    document.getElementById("c_1").innerHTML = cantidad_1;
    subtotal_1 = subtotal_1 - precio;
    document.getElementById("p_1").innerHTML = "$"+subtotal_1;
    console.log(cantidad_1);
    console.log(subtotal_1);
    if (cantidad_1 == 0) {//esto permite eliminar la fila cuando la cantidad es 0
        var i=r.parentNode.parentNode.rowIndex
        document.getElementById("tablaProductos").deleteRow(i);
    }

}
function sumar1(){
    var precios = document.getElementById("precio1").innerHTML;
    var precio = parseFloat(precios.slice(1));
    cantidad_1++;
    document.getElementById("c_1").innerHTML = cantidad_1;
    subtotal_1 = subtotal_1 + precio;
    document.getElementById("p_1").innerHTML = "$"+subtotal_1;
    console.log(cantidad_1);
    console.log(subtotal_1);
}

//suma y resta del 2 
function restar2(r){
    var precios = document.getElementById("precio2").innerHTML;
    var precio = parseFloat(precios.slice(1));
    cantidad_2--;
    document.getElementById("c_2").innerHTML = cantidad_2;
    subtotal_2 = subtotal_2 - precio;
    document.getElementById("p_2").innerHTML = "$"+subtotal_2;
    console.log(cantidad_2);
    console.log(subtotal_2);
    if (cantidad_2 == 0) {//esto permite eliminar la fila cuando la cantidad es 0
        var i=r.parentNode.parentNode.rowIndex
        document.getElementById("tablaProductos").deleteRow(i);
    }

}
function sumar2(){
    var precios = document.getElementById("precio2").innerHTML;
    var precio = parseFloat(precios.slice(1));
    cantidad_2++;
    document.getElementById("c_2").innerHTML = cantidad_2;
    subtotal_2 = subtotal_2 + precio;
    document.getElementById("p_2").innerHTML = "$"+subtotal_2;
    console.log(cantidad_2);
    console.log(subtotal_2);
}

//suma y resta del 3
function restar3(r){
    var precios = document.getElementById("precio3").innerHTML;
    var precio = parseFloat(precios.slice(1));
    cantidad_3--;
    document.getElementById("c_3").innerHTML = cantidad_1;
    subtotal_3 = subtotal_3 - precio;
    document.getElementById("p_3").innerHTML = "$"+subtotal_3;
    console.log(cantidad_3);
    console.log(subtotal_3);
    if (cantidad_3 == 0) {//esto permite eliminar la fila cuando la cantidad es 0
        var i=r.parentNode.parentNode.rowIndex
        document.getElementById("tablaProductos").deleteRow(i);
    }

}
function sumar3(){
    var precios = document.getElementById("precio3").innerHTML;
    var precio = parseFloat(precios.slice(1));
    cantidad_3++;
    document.getElementById("c_3").innerHTML = cantidad_3;
    subtotal_3 = subtotal_3 + precio;
    document.getElementById("p_3").innerHTML = "$"+subtotal_3;
    console.log(cantidad_3);
    console.log(subtotal_3);
}

//suma y resta del 4
function restar4(r){
    var precios = document.getElementById("precio4").innerHTML;
    var precio = parseFloat(precios.slice(1));
    cantidad_4--;
    document.getElementById("c_4").innerHTML = cantidad_4;
    subtotal_4 = subtotal_4 - precio;
    document.getElementById("p_4").innerHTML = "$"+subtotal_4;
    console.log(cantidad_4);
    console.log(subtotal_4);
    if (cantidad_4 == 0) {//esto permite eliminar la fila cuando la cantidad es 0
        var i=r.parentNode.parentNode.rowIndex
        document.getElementById("tablaProductos").deleteRow(i);
    }

}
function sumar4(){
    var precios = document.getElementById("precio4").innerHTML;
    var precio = parseFloat(precios.slice(1));
    cantidad_4++;
    document.getElementById("c_4").innerHTML = cantidad_4;
    subtotal_4 = subtotal_4 + precio;
    document.getElementById("p_4").innerHTML = "$"+subtotal_4;
    console.log(cantidad_4);
    console.log(subtotal_4);
}

//suma y resta del 5
function restar5(r){
    var precios = document.getElementById("precio5").innerHTML;
    var precio = parseFloat(precios.slice(1));
    cantidad_5--;
    document.getElementById("c_5").innerHTML = cantidad_5;
    subtotal_5 = subtotal_5 - precio;
    document.getElementById("p_5").innerHTML = "$"+subtotal_5;
    console.log(cantidad_5);
    console.log(subtotal_5);
    if (cantidad_5 == 0) {//esto permite eliminar la fila cuando la cantidad es 0
        var i=r.parentNode.parentNode.rowIndex
        document.getElementById("tablaProductos").deleteRow(i);
    }

}
function sumar5(){
    var precios = document.getElementById("precio5").innerHTML;
    var precio = parseFloat(precios.slice(1));
    cantidad_5++;
    document.getElementById("c_5").innerHTML = cantidad_5;
    subtotal_5 = subtotal_5 + precio;
    document.getElementById("p_5").innerHTML = "$"+subtotal_5;
    console.log(cantidad_5);
    console.log(subtotal_5);
}
