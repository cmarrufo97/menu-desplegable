$(document).ready(function () {
    // MENU 1 BARRA 1
    $('body').navBar('agregarBarra','barra');
    $('.barra').navBar('agregarMenu','menu1');

    $('#menu1').navBar('agregarSeccion','sec1','Home','http://www.google.com');
    $('#menu1').navBar('agregarSeccion','sec2','About','http://www.google.com');
    $('#menu1').navBar('agregarSeccion','sec3','Contact','http://www.google.com');
    $('#sec1').navBar('agregarSubSeccion','sub1','subseccion');
    $('#sec2').navBar('agregarSubSeccion','sub2','subseccion');
    $('#sec3').navBar('agregarSubSeccion','sub3','subseccion');

    $('#sub1').navBar('agregarItem','i1','Item 1','http://www.google.com');
    $('#sub1').navBar('agregarItem','i2','Item 2','http://www.google.com');
    $('#sub1').navBar('agregarItem','i3','Item 3','http://www.google.com');
    $('#sub1').navBar('agregarItem','i4','Item 4','http://www.google.com');

    $('#sub2').navBar('agregarItem','i5','Item 1','http://www.google.com');
    $('#sub2').navBar('agregarItem','i6','Item 2','http://www.google.com');
    $('#sub2').navBar('agregarItem','i7','Item 3','http://www.google.com');
    $('#sub2').navBar('agregarItem','i8','Item 4','http://www.google.com');

    $('#sub3').navBar('agregarItem','i9','Item 1','http://www.google.com');
    $('#sub3').navBar('agregarItem','i10','Item 2','http://www.google.com');
    $('#sub3').navBar('agregarItem','i11','Item 3','http://www.google.com');
    $('#sub3').navBar('agregarItem','i12','Item 4','http://www.google.com');

    // $('.barra').navBar('eliminarMenu','menu1');
    // $('.barra').navBar('eliminarSeccion','Home');
    // $('#menu1').navBar('eliminarSubSeccion','sub1');
    // $('#sub1').navBar('eliminarItem','i1');

    // MENU 2 BARRA2
    $('body').navBar('agregarBarra','barra2');

    $('.barra2').navBar('agregarMenu','menu2');
    $('#menu2').navBar('agregarSeccion','sec4','PRUEBA1','http://www.google.com');
    $('#menu2').navBar('agregarSeccion','sec5','PRUEBA2','http://www.google.com');
    $('#menu2').navBar('agregarSeccion','sec6','PRUEBA3','http://www.google.com');

    $('#sec4').navBar('agregarSubSeccion','sub4','subseccion');
    $('#sec5').navBar('agregarSubSeccion','sub5','subseccion');
    $('#sec6').navBar('agregarSubSeccion','sub6','subseccion');

    $('#sub4').navBar('agregarItem','i13','Item 1','http://www.google.com');
    $('#sub4').navBar('agregarItem','i14','Item 2','http://www.google.com');
    $('#sub4').navBar('agregarItem','i15','Item 3','http://www.google.com');
    $('#sub4').navBar('agregarItem','i16','Item 4','http://www.google.com');

    $('#sub5').navBar('agregarItem','i17','Item 1','http://www.google.com');
    $('#sub5').navBar('agregarItem','i18','Item 2','http://www.google.com');
    $('#sub5').navBar('agregarItem','i19','Item 3','http://www.google.com');
    $('#sub5').navBar('agregarItem','i20','Item 4','http://www.google.com');

    $('#sub6').navBar('agregarItem','i21','Item 1','http://www.google.com');
    $('#sub6').navBar('agregarItem','i22','Item 2','http://www.google.com');
    $('#sub6').navBar('agregarItem','i23','Item 3','http://www.google.com');
    $('#sub6').navBar('agregarItem','i24','Item 4','http://www.google.com');

    $('.seccion').navBar('desplegarSubmenus');



});