function init() {
  document.getElementById("anadir").addEventListener("click", function () {
    añadir();
  });

  document.getElementById("eliminar").addEventListener("click", function () {
    eliminar();
  });

  document.getElementById("mostrar").addEventListener("click", function () {
    mostrar();
  });

  document.getElementById("limpiar").addEventListener("click", function () {
    limpiar();
  });
}

function añadir() {
  const clave = document.getElementById(" clave ").value;
  const valor = document.getElementById(" valor ").value;

  if (clave != "") {
    if (localStorage.getItem(clave)) {
      document.getElementById(" mensaje ").innerHTML =
        " <p> Se edito el registro </p> ";
    } else {
      document.getElementById(" mensaje ").innerHTML =
        " <p> Se añadio el registro </p> ";
    }

    localStorage.setItem(clave, valor);
  } else {
    document.getElementById(" mensaje ").innerHTML =
      "<p> La clave tiene que tener un valor </p>";
  }
}

function eliminar() {
  const clave = document.getElementById(" clave ").value;

  if (localStorage.getItem(" clave ")) {
    document.getElementById(" mensaje ").innerHTML =
      " <p> Se elimino el registro</p> ";
    localStorage.removeItem(clave);
  } else {
    document.getElementById(" mensaje ").innerHTML =
      " <> La clave no existe </>  ";
  }
}

function mostrar() {
  const divDatos = document.getElementById(" datos ");
  divDatos.innerHTML = "";

  if (localStorage.length === 0) {
    document.getElementById(' mensaje ').innerHTML = '<p> No hay datos </p>'
  } else {
    let tabla = document.createElement(' table ')
  }
}
