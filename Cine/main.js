class pelicula{

    mostrar(titulo, anio){
        alert(`${titulo} (${anio})`);
    }
}


// todo: copiar por cada pelicula solo cambiar el numero, titulo y año
$(".data1").click(function(){
    var titulo = "Mi Pobre y Dulce Angelito";
    var anio = "2021";
    console.log(titulo);
    console.log(anio);
    var peli = new pelicula();
    peli.mostrar(titulo, anio)
});

$(".data2").click(function(){
    var titulo = "Shang-Chi";
    var anio = "2021";
    console.log(titulo);
    console.log(anio);
    var peli = new pelicula();
    peli.mostrar(titulo, anio)
});

$(".data3").click(function(){
    var titulo = "El gran showman";
    var anio = "2017";
    console.log(titulo);
    console.log(anio);
    var peli = new pelicula();
    peli.mostrar(titulo, anio)
});

$(".data4").click(function(){
    var titulo = "Clifford El Gran Perro Rojo";
    var anio = "2021";
    console.log(titulo);
    console.log(anio);
    var peli = new pelicula();
    peli.mostrar(titulo, anio)
});

$(".data5").click(function(){
    var titulo = "Eternals";
    var anio = "2021";
    console.log(titulo);
    console.log(anio);
    var peli = new pelicula();
    peli.mostrar(titulo, anio)
});

