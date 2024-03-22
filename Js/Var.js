function init(){
    document.getElementById('anadir').addEventListener('click', function(){
        añadir();
    })

    document.getElementById('eliminar').addEventListener('click', function(){
        eliminar();
    })

    document.getElementById('mostrar').addEventListener('click', function(){
        mostrar();
    })

    document.getElementById('limpiar').addEventListener('click', function(){
        limpiar();
    })
}