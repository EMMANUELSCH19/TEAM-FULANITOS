const input = document.getElementById("input");
const btn_todo = document.getElementById("btn_todo");
const container_todo = document.querySelector(".container_todo");
let id=1;

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
    div_boton.classList.add("container_list-btn");
    button.classList.add("btn-eliminar");
    button_proceso.classList.add("btn-proceso");
    button_proceso.innerHTML = "En proceso";
    
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
}

btn_todo.addEventListener("click", () =>{
    if(input.value == "" || input.value.trim() == ""){
        window.alert("Agregue una Tarea");
    }else{
        addTodo();
    }
});

//TAREAS EN PROCESO
//erik andas por aqui?
//esoy haciendo pruebas de como hacerlo 