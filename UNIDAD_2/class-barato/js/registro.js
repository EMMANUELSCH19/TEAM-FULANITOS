var form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var datos = new FormData(form);

    fetch('php/main.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'incorrect') {
            Swal.fire({
                title: 'Error',
                text: 'Ocurrio un error, intentelo mas tarde',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                background: '#18171A',
                color: '#A5A5A5'
            });
        }else if (data === 'correct') {
            (async()=>{
                await Swal.fire({
                    title: 'Succes',
                    text: 'Registro exitoso.\n Inicie sesion',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                    background: '#18171A',
                    color: '#A5A5A5',
                    timer: 4000
                });
                window.location.href = 'login.html';
            })();
        }
    });
});