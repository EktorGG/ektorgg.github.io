/* # Nombres con los que se puede acceder a una función de JQUERY
===================
$
jQuery 
*/ 

//Esto sería análogo a DOMContentLoader

$(document).ready(function(){
    //Similar a querySelectorAll()
    $("#cabecera").load("parts/header.html");
    $("#pie-pagina").load("parts/footer.html");

    $("btn-contacto").on("click", function(){
        const email = $("#correo").val();
        const mensaje = $("mensaje").val();
        console.dir({email, mensaje});
    })
});