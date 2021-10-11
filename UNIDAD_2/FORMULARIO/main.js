  function validar(){
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    pass = document.getElementById("pass").value;
  
    if(nombre === ""){
      alert("El apartado NOMBRE esta vacio")
      return false;
    }

    if (email === ""){
      alert("El apartado EMAIL esta vacio")
      return false;
    }

    if(pass === ""){
      alert("El apartado PASSWORD esta vacio")
      return false;
    }
  }
  



