/**
 * @author Christian Marrufo <christian.marrufo@iesdonana.org>
 */
(function ($) {
    var methods = {
        agregarBarra: function (name) {
            $(this).append(`<div class='${name}'></div>`);
        },
        agregarMenu: function (idMenu) {
            if ($(`#${idMenu}`).attr('id') === undefined || $(`#${idMenu}`).attr('id') !== `${idMenu}`) {
                // Si no existe un elemento con ese id o no coincide, se inyecta
                $(this).append(`<ul id='${idMenu}' class='menu'></ul>`);
            } else {
                console.log('Ya existe un elemento con ese id. Por favor escoga otro.');
            }
        },
        agregarSeccion: function (idSeccion, nombre, url) {
            if ($(`#${idSeccion}`).text() === '') {
                $(this).append(`<li id='${idSeccion}' class='seccion'><a href='${url}'>${nombre}</a></li>`);
            } else {
                console.log('Ya existe un elemento con ese id');
            }
        },
        agregarSubSeccion: function (idSubseccion, name) {
            if ($(this).has('.subseccion').text() !== '') {
                console.log(`Ya existe una subsección dentro del menu`);
            } else if ($(`#${idSubseccion}`).length) {
                console.log(`Ya existe un elemento con id <${idSubseccion}>`);
            } else {
                $(this).append(`<div class='submenus-container'><ul id='${idSubseccion}'class='${name}'></ul></div>`);
            }
        },
        agregarItem: function (idItem, name, url) {
            if ($(`#${idItem}`).length) {
                console.log(`Ya existe un item con id <${idItem}>`);
            } else {
                $(this).append(`<li id='${idItem}' class='items'><a href='${url}'>${name}</a></li>`);
            }
        },
        eliminarMenu: function (idMenu) {
            $(`#${idMenu}`).remove();
        },
        eliminarSeccion: (nombre) => {
            if ($(`a:contains(${nombre})`)) {
                if ($(`a:contains(${nombre})`).parent().attr('class') === 'seccion') {
                    $(`a:contains(${nombre})`).parent().remove();
                }else {
                    console.log(`No se encontró ninguna sección con el nombre '${nombre}'`);
                }
            }
        },
        eliminarSubSeccion: (idSubseccion) => {
            if ($(`#${idSubseccion}`).parent().attr('class') === 'submenus-container') {
                $(`#${idSubseccion}`).parent().remove();
            }else {
                console.log(`No se encontro ninguna subsección con el id <${idSubseccion}>`);
            }
        },
        eliminarItem: (idItem) => {
            if ($(`.subseccion .items`).attr('id') === `${idItem}`) {
                var item = $(`.subseccion .items`).attr('id');
                $(`#${item}`).remove();
            }else {
                console.log(`No se encontro ningún item/elemento con el id <${idItem}>`);
            }
        },
        desplegarSubmenus: () => {
            $('.seccion .submenus-container').hide();
            $('.seccion').on({
                mouseenter: function () {
                    $(this).find('.submenus-container').show();
                },
                mouseleave: function () {
                    $(this).find('.submenus-container').hide();
                },
            });

        },
    };

    $.fn.navBar = function (method) {
        // Si existe la función la llamamos
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call
                (arguments, 1));
        } else if (typeof method === 'object' || !method) {
            //Si no se pasa ningún parámetro o el parámetro es
            //un objeto de configuración llamamos al inicializador
            return methods.init.apply(this, arguments);
        } else {
            //En el resto de los casos mostramos un error
            alert('La función ' + method + ' no existe en jQuery.navBar');
        }
    };

}(jQuery));