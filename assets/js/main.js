window.addEventListener('load', function( e ) {

    /**
     * Перебор элементов DOM
     * elems - переменная, в которую записаны элементы
     * func - функция обработки для каждого элемента
     */
    function forEach( elems, func ) {
        return [].forEach.call(elems, function ( elem, i, elems ) {
            return func.apply(elem, arguments);
        });
    }



    /* Плавное исчезновение блока загрузки */

    var blockLoading = document.getElementById('blockLoading');
    blockLoading.classList.add('block-loading_hide');
    window.setTimeout(function() {
        blockLoading.style.display = 'none';
    }, 500);



    /* Открытие и закрытие модальных окон */

    var modals = document.getElementsByClassName('modal');
    forEach(modals, function () {
        var modal = this;
        var modalId = this.getAttribute('id');
        var toggleOpen = document.querySelector('[data-modal-open="' + modalId + '"]');
        var toggleClose = document.querySelector('[data-modal-close="' + modalId + '"]');

        toggleOpen.addEventListener('click', function ( e ) {
            e.preventDefault();
            document.body.classList.add('fixed');
            modal.classList.add('modal--open');
        });

        toggleClose.addEventListener('click', function ( e ) {
            e.preventDefault();
            document.body.classList.remove('fixed');
            modal.classList.remove('modal--open');
        });
    });



    /* Появление элементов при скролле */

    var waypoints = document.getElementsByClassName('wp');
    for (let i = 0; i < waypoints.length; i++) {
        new Waypoint({
            element: waypoints[i],
            handler: function(direction) {
                this.element.classList.add('wp--active')
            },
            offset: '70%'
        });
    }



    /* Плавный скролл страницы */

    SmoothScroll({
        animationTime: 600 
    });

});
