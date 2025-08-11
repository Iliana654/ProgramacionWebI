$("#p-index").on("click", function () {
    $("#pag-principal").removeClass("active-off").addClass("active-on");
    $("#pag-hombres").removeClass("active-on").addClass("active-off");
    $("#pag-mujeres").removeClass("active-on").addClass("active-off");
    $("#pag-historia").removeClass("active-on").addClass("active-off");
    $("#pag-comprar, #pag-preguntas,").removeClass("active-on").addClass("active-off");
});

$("#p-hombres, #img-p-hombres").on("click", function () {
    $("#pag-hombres").removeClass("active-off").addClass("active-on");
    $("#pag-principal").removeClass("active-on").addClass("active-off");
    $("#pag-mujeres , #pag-comprar , #pag-historia, #pag-preguntas").removeClass("active-on").addClass("active-off");
});

$("#p-mujeres, #img-p-mujeres").on("click", function () {
    $("#pag-mujeres").removeClass("active-off").addClass("active-on");
    $("#pag-hombres").removeClass("active-on").addClass("active-off");
    $("#pag-principal , #pag-comprar , #pag-historia, #pag-preguntas").removeClass("active-on").addClass("active-off");
});

$("#p-historia").on("click", function () {
    $("#pag-historia").removeClass("active-off").addClass("active-on");
    $("#pag-principal").removeClass("active-on").addClass("active-off");
    $("#pag-hombres , #pag-mujeres , #pag-comprar, #pag-preguntas").removeClass("active-on").addClass("active-off");
});
$("#p-comprar").on("click", function () {
    $("#pag-comprar").removeClass("active-off").addClass("active-on");
    $("#pag-principal").removeClass("active-on").addClass("active-off");
    $("#pag-hombres , #pag-mujeres").removeClass("active-on").addClass("active-off");
    $("#pag-historia, #pag-preguntas").removeClass("active-on").addClass("active-off");
});
$("#p-preguntas").on("click", function () {
    $("#pag-preguntas").removeClass("active-off").addClass("active-on");
    $("#pag-principal").removeClass("active-on").addClass("active-off");
    $("#pag-hombres , #pag-mujeres").removeClass("active-on").addClass("active-off");
    $("#pag-historia, #pag-comprar").removeClass("active-on").addClass("active-off");
});