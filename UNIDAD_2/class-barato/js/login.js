var form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var datos = new FormData(form);

    fetch('php/login.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'incorrect') {
            Swal.fire({
                title: 'Error',
                text: 'Usuario/Contraseña incorrecto',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                background: '#18171A',
                color: '#A5A5A5'
            });
        }else if (data === 'correctp') {
            (async()=>{
                await Swal.fire({
                    title: 'Succes',
                    text: 'Bienvenido profesor',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                    background: '#18171A',
                    color: '#A5A5A5',
                    timer: 4000
                });
                window.location.href = 'html/PROFESOR/Profesor-inicio.html';
            })();
        }else if (data === 'correcta'){
            (async()=>{
                await Swal.fire({
                    title: 'Succes',
                    text: 'Bienvenido alumno',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                    background: '#18171A',
                    color: '#A5A5A5',
                    timer: 4000
                });
                window.location.href = 'html/ALUMNO/Alumno-inicio.php';
            })();
        }

    });
});