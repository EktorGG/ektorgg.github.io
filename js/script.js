$(document).ready(function(){
    //Similar a querySelectorAll()
    $("#cabecera").load("html/parts/header.html");
    $("#pie-pagina").load("html/parts/footer.html");

    $("btn-contacto").on("click", function(){
        const email = $("#correo").val();
        const mensaje = $("mensaje").val();
        console.dir({email, mensaje});
    })
});