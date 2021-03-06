/* eslint-disable no-undef */
$(function () {
    $("#calendario").datepicker();
});

$(function () {
    $("#calendario").datepicker({
        showOn: "button",
        buttonImage: "calendario.png",
        buttonImageOnly: true
    });
});

$(function () {
    $("#calendario").datepicker({
        showButtonPanel: true
    });
});

$(function () {
    $("#calendario").datepicker({ dateFormat: 'yy-mm-dd' });
});

$(function () {
    $("#calendario").datepicker({
        changeMonth: true,
        changeYear: true
    });
});

$(function () {
    $("#calendario").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true
    });
});

$(function () {
    $("#calendario").datepicker({
        numberOfMonths: 3
    });
});

$(function () {
    $("#calendario").datepicker({
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo', 'Segunda', 'Ter�a', 'Quarta', 'Quinta', 'Sexta', 'S�bado', 'Domingo'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S�b', 'Dom'],
        monthNames: ['Janeiro', 'Fevereiro', 'Mar�o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    });
});
