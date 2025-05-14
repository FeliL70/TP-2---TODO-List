const inputTODO = document.getElementById("TODOIngresado");
const botonAgregar = document.getElementById("AgregarTODO");
const container = document.getElementById('lista-container');
const btnTareaRapida = document.getElementById('tareaRapida');

let ListaTODO = [];

botonAgregar.onclick = () => {
    if (inputTODO.value !== '') {
        ListaTODO.push({
            razon: inputTODO.value,
            hecho: false,
            fechaIniciado: new Date(),
            fechaTerminado: undefined
        });
        inputTODO.value = '';
        renderizarLista();
    }
};

function renderizarLista() {
    container.innerHTML = '';
    ListaTODO.forEach((tarea, index) => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "chbox";
        checkbox.dataset.index = index;
        checkbox.checked = tarea.hecho;

        const texto = document.createTextNode(tarea.razon);
        const detalles = document.createElement('p');
        detalles.className = 'caracteristicasTODO';
        let estado = tarea.fechaTerminado ? `Completado el ${tarea.fechaTerminado.toLocaleString()}` : "Incompleto";
        detalles.innerText = `Fecha de creación: ${tarea.fechaIniciado.toLocaleString()} - Estado: ${estado}`;

        label.appendChild(checkbox);
        label.appendChild(texto);
        label.appendChild(detalles);

        if (tarea.hecho) {
            label.classList.add('terminado');
        }

        container.appendChild(label);
    });
}

container.onclick = (e) => {
    if (e.target.classList.contains('chbox')) {
        const index = e.target.dataset.index;
        const tarea = ListaTODO[index];

        tarea.hecho = e.target.checked;
        tarea.fechaTerminado = e.target.checked ? new Date() : undefined;

        renderizarLista();
    }
};

btnTareaRapida.onclick = () => {
    let tareaRapida = null;
    let menorDiferencia = Infinity;

    ListaTODO.forEach(tarea => {
        if (tarea.hecho && tarea.fechaTerminado) {
            const diferencia = tarea.fechaTerminado - tarea.fechaIniciado;
            if (diferencia < menorDiferencia) {
                menorDiferencia = diferencia;
                tareaRapida = tarea;
            }
        }
    });

    if (tareaRapida) {
        alert(`tarea mas rapida: "${tareaRapida.razon}"\nDuro ${(menorDiferencia / 1000)} segundos.`);
    } else {
        alert('No hay ninguna completada.');
    }
};