const input = document.getElementById("input");
const btn_todo = document.getElementById("btn_todo");
const container_todo = document.querySelector(".container_todo");
const btn_proceso = document.getElementById("btn_proceso");
const container_proceso = document.querySelector(".container_proceso");

var id=1;
/* id_p es para tratar de asignar una id unica al parrafo con la info de la tarea
    para poder obtener el texto */
var id_p = 1;

/* input_proceso es para poder usar el parrafo (<p>) tanto el texto que contiene como sus 
    atributos*/
var input_proceso = document.getElementById("actividad" + id);


function addTodo(){//creando las asiganciones
    const button_proceso = document.createElement("button");
    const div_todo = document.createElement("div");
    const div_container = document.createElement("div");
    const checkbox = document.createElement("input");
    const parrafo = document.createElement("p");
    const div_boton = document.createElement("div");
    const button = document.createElement("button");
    const icono = document.createElement("i");
    
    //añadiendo atributos y clases
    parrafo.innerHTML = input.value;
    div_todo.classList.add("container_list");
    div_container.classList.add("container_list-1");
    checkbox.classList.add("casilla");
    checkbox.setAttribute("type","checkbox");
    parrafo.classList.add("actividad");
    //parrafo.id = "actividad"+id_p++;
    parrafo.setAttribute("id",id_p++)
    div_boton.classList.add("container_list-btn");
    button.classList.add("btn-eliminar");
    button_proceso.classList.add("btn_proceso");
    button_proceso.innerHTML = "En proceso";
    button_proceso.setAttribute("onclick","enProceso()");
    
    button.setAttribute("id",id++);
    
    icono.classList.add("fas","fa-trash-alt");
    
    //juntar todo y lo mostramos
    
    div_todo.appendChild(div_container);
    div_todo.appendChild(div_boton);
    div_container.appendChild(checkbox);
    div_container.appendChild(parrafo);
    button.appendChild(icono);
    div_boton.appendChild(button_proceso);
    div_boton.appendChild(button);
    //agregar todo el paquete al contenedor general
    
    container_todo.appendChild(div_todo);

    input.value = "";
    
    //eliminar tarea
    function remover(id){
        document.getElementById(id).parentElement.parentElement.remove();
    }
    
    button.addEventListener("click",() =>{
        remover(button.getAttribute("id"));
    });

    //funcion mover a procesos
    

    button.addEventListener("click",() =>{
        remover(button.getAttribute("id"));
    });


    /*esto solo era para ir monitoreando la informacion que se guardaba en 
        la variable input_proceso y unos metodos que intente para obtener el texto

        pd: en el parrafo inicial donde esta escrito "Tarea" se cambia la id, 
        no se porque pero creo que ese es el principal problema ya que al 
        tratar de pasar la tarea el texto que tiene es ese */
    console.log(input_proceso);
    if (input_proceso.id != parrafo.id) {
        input_proceso.id = parrafo.id
        console.log(input_proceso);
    }
}




function enProceso(){//creando las asiganciones en la seccion proceso
        

    const div_proceso = document.createElement("div");
    const div_container = document.createElement("div");
    const checkbox = document.createElement("input");
    const parrafos = document.createElement("p");
    const div_boton = document.createElement("div");
    const button = document.createElement("button");
    const icono = document.createElement("i");


    //añadiendo atributos y clases para proceso
    parrafos.innerHTML = input_proceso.innerHTML; //tomando la informacion de input_proceso 
    div_proceso.classList.add("container_list_proceso");
    div_container.classList.add("container_list-1_proceso");
    checkbox.classList.add("casilla_proceso");
    checkbox.setAttribute("type","checkbox");
    parrafos.classList.add("actividad_proceso");
    parrafos.setAttribute("id",id++)
    div_boton.classList.add("container_list-btn_proceso");
    button.classList.add("btn-eliminar_proceso");
        
    button.setAttribute("id",id++);
        
    icono.classList.add("fas","fa-trash-alt");
        
    //juntar todo y lo mostramos
        
    div_proceso.appendChild(div_container);
    div_proceso.appendChild(div_boton);
    div_container.appendChild(checkbox);
    div_container.appendChild(parrafos);
    button.appendChild(icono);
    div_boton.appendChild(button);
    //agregar todo el paquete al contenedor general
        
    container_proceso.appendChild(div_proceso);
    input.value = "";
        
    //eliminar tarea
    function remover(id){
        document.getElementById(id).parentElement.parentElement.remove();
    }

    //mismo boton de eliminar que en la funcion principal
    button.addEventListener("click",() =>{
        remover(button.getAttribute("id"));
    });

    //otra instruccion de monitoreo
    console.log("moviendo "+input_proceso.innerHTML);
}

function remover(id){
    document.getElementById(id).parentElement.parentElement.remove();
}

    //boton para mover a proceso 
    btn_proceso.addEventListener("click", () =>{
        console.log("mandando a proceso")
        enProceso();
        remover();
        
    });

//boton de la asignacion inicial
btn_todo.addEventListener("click", () =>{
    if(input.value == "" || input.value.trim() == ""){
        window.alert("Agregue una Tarea");
    }else{
        addTodo();
        
    }
});

//TAREAS EN PROCESO
//erik andas por aqui?




