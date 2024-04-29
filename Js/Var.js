function init() {
    const actions = {
        "aniadir": aniadir,
        "eliminar": eliminar,
        "limpiar": limpiar,
        "regresar": regresar
    };

    Object.keys(actions).forEach(action => {
        document.getElementById(action).addEventListener("click", actions[action]);
    });
}

function regresar() {
    // Limpiar el mensaje
    document.getElementById("mensaje").innerHTML = "";

    // Limpiar los campos de entrada del formulario
    document.getElementById("clave").value = "";
    document.getElementById("valor").value = "";

    // Ocultar la sección de montos ingresados y mostrar la sección principal
    document.getElementById("montoIngresado").style.display = "none";
    document.getElementById("mensaje").style.display = "block";

    // Asegurarse de que la lista de montos ingresados se muestre correctamente
    const listaMonto = document.getElementById("listaMonto");
    listaMonto.innerHTML = ""; // Limpiar la lista
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        const valor = localStorage.getItem(clave);
        const li = document.createElement("li");
        li.textContent = valor;
        listaMonto.appendChild(li);
    }
}

function aniadir() {
    const clave = document.getElementById("clave").value;
    const valor = document.getElementById("valor").value;

    if (clave) {
        // Mostrar el mensaje de confirmación
        const message = localStorage.getItem(clave) ? "Se edito el registro" : "Se añade el registro";
        document.getElementById("mensaje").innerHTML = `<p>${message}</p>`;

        // Añadir el valor al localStorage
        localStorage.setItem(clave, valor);

        // Añadir el valor a la lista de montos ingresados
        const listaMonto = document.getElementById("listaMonto");
        const li = document.createElement("li");
        li.textContent = valor;
        listaMonto.appendChild(li);

        // Esperar un segundo y luego limpiar el mensaje y regresar al formulario
        setTimeout(() => {
            document.getElementById("mensaje").innerHTML = ""; // Limpiar el mensaje
            // Aquí puedes agregar cualquier otra acción que desees realizar después de un segundo
        }, 1000); // 1000 milisegundos = 1 segundo
    } else {
        document.getElementById("mensaje").innerHTML = "<p>Clave debe tener un valor</p>";
    }
}


function eliminar() {
    const clave = document.getElementById("clave").value;

    if (localStorage.getItem(clave)) {
        document.getElementById("mensaje").innerHTML = "<p>Se elimino el registro</p>";
        localStorage.removeItem(clave);

        // Eliminar el valor de la lista de montos ingresados
        const listaMonto = document.getElementById("listaMonto");
        const li = document.querySelector(`#listaMonto li:contains(${clave})`);
        if (li) {
            listaMonto.removeChild(li);
        }
    } else {
        document.getElementById("mensaje").innerHTML = "<p>No existe la clave</p>";
    }
}

function limpiar() {
    document.getElementById("mensaje").innerHTML = "<p>Se borran todos los elementos</p>";
    document.getElementById("datos").innerHTML = "";
    localStorage.clear();

    // Limpiar la lista de montos ingresados
    const listaMonto = document.getElementById("listaMonto");
    listaMonto.innerHTML = "";
}

window.onload = init;