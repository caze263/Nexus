const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    
});


$(document).ready(function () {
    

    var $btnAumentar = $("#btnAumentar");
    var $btnDiminuir = $("#btnDiminuir");
    var $elemento = $("body").find("*"); // Encontra todos os elementos dentro do corpo do documento
    var fonts = [];

    function obterTamanhoFonte() {
        for (var i = 0; i < $elemento.length; i++) {
            fonts.push(parseFloat($elemento.eq(i).css('font-size')));
        }
    }
    obterTamanhoFonte();
    $btnAumentar.on('click', function () {
        for (var i = 0; i < $elemento.length; i++) {
            fonts[i]++;
            $elemento.eq(i).css('font-size', fonts[i] + 'px');
        }
    });

    $btnDiminuir.on('click', function () {
        for (var i = 0; i < $elemento.length; i++) {
            fonts[i]--;
            $elemento.eq(i).css('font-size', fonts[i] + 'px');
        }
    });
});

