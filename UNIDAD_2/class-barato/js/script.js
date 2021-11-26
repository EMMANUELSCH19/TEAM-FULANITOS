var xht = new XMLHttpRequest();

xht.open('GET','../../php/main.php');

xht.onload = function() {
    if (xht.status === 200) {
        var datos = JSON.parse(xht.responseText);
        console.log(datos[0].titulo);
        var template = `
        <table class="table" id="tabla">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Materia</th>
            <th scope="col">Instruccion</th>
            <th scope="col">Fecha limite</th>
            <th scope="col">Hora limite</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>`;
        datos.map(function(data){
            template += `
                <th scope="row">${data.id}</th>
                <td>"${data.titulo}"</td>
                <td>"${data.instruccion}"</td>
                <td>"${data.fecha_limite}"</td>
                <td>"${data.hora_limite}"</td>
               <td>"${data.estado}"</td>
                <td><button class="btn btn-outline-info" type="submit"><i class="far fa-share-square"></i> Enviar</button>
            `;
            return template;
        });
        template += `</tbody></table>`;
        console.log(template);
    }
}

xht.send();