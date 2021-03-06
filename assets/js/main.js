/**
 * Перебор элементов DOM
 * @param elems - переменная, в которую записаны элементы
 * @param func - функция обработки для каждого элемента
 */
function forEach( elems, func ) {
    return [].forEach.call(elems, function ( elem, i, elems ) {
        return func.apply(elem, arguments);
    });
}

/**
 * Фильтрация элементов DOM
 * @param elems - переменная, в которую записаны элементы
 * @param func - функция обработки для каждого элемента
 */
function filter( elems, func ) {
    return [].filter.call(elems, function ( elem, i, elems ) {
        return func.apply(elem, arguments);
    });
}



/* Подрузка фоновых изображений в соответствии с разрешением экрана */

// Разрешения экранов
var brakepoints = {
    uhd: 3840,
    qhd: 2560,
    fhd: 1920 
},
// Все фоновые изображения разделов в документе
images = document.querySelectorAll('.section__bg'),
// Ширина экрана
screenWidth = screen.width,
// Префикс с разрешением для изображения
particle = null;

// Определяем, какого размера изображение нужно подставить
for (var key in brakepoints) {
    if (screenWidth <= brakepoints[key]) {
        particle = brakepoints[key];
    }
}

// Подставляем префиксы
forEach(images, function ( image ) {
    var src = image.src.split('/'),
        name = src.pop(),
        newName = name.split('.').join('--' + particle + '.');

    src.push(newName);
    image.src = src.join('/');
});



window.addEventListener('load', function( e ) {

    /* Плавное исчезновение блока загрузки */

    setTimeout(function () {
        var blockLoading = document.getElementById('blockLoading');
        blockLoading.classList.add('block-loading--hide');
        window.setTimeout(function() {
            blockLoading.style.display = 'none';
        }, 500);
    }, 1000);



    /* Открытие и закрытие модальных окон */

    var modals = document.getElementsByClassName('modal');
    forEach(modals, function ( modal ) {
        var modalId = this.getAttribute('id'),
            togglesOpen = document.querySelectorAll('[data-modal-open="' + modalId + '"]'),
            togglesClose = document.querySelectorAll('[data-modal-close="' + modalId + '"]');

        // Вешаем событие на все переключатели открытия модалки
        forEach(togglesOpen, function () {
            this.addEventListener('click', function ( e ) {
                e.preventDefault();
                document.body.classList.add('fixed');
                modal.classList.add('modal--open');
            });
        });

        // Вешаем событие на все переключатели закрытия модалки
        forEach(togglesClose, function () {
            this.addEventListener('click', function ( e ) {
                e.preventDefault();
                document.body.classList.remove('fixed');
                modal.classList.remove('modal--open');
            });
        });
    });



    /* Появление элементов при скролле */

    var waypoints = document.getElementsByClassName('wp');
    forEach(waypoints, function ( elem, i) {
        new Waypoint({
            element: waypoints[i],
            handler: function(direction) {
                this.element.classList.add('wp--active')
            },
            offset: '70%'
        });
    });



    /* Плавный переход по якорям страницы */

    var scroll = new SmoothScroll('a[href*="#"]', { 
        speed: 600,
        easing: 'linear',
        updateURL: false 
    });



    /* Отправка заявки */

    forEach(document.forms, function ( form ) {
        form.addEventListener('submit', function ( e ) {
            e.preventDefault();
            var inputs = form.querySelectorAll('input'),
                xhr = new XMLHttpRequest(),
                data = 'name=' + encodeURIComponent(inputs[0].value) + '&tel=' + encodeURIComponent(inputs[1].value);

            // Отправка пост запроса
            xhr.open("POST", '/send.php?send', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    if (+xhr.responseText == 1) {
                        var modals = document.getElementsByClassName('modal');
                        // Закрываем все модалки
                        forEach(modals, function () {
                            this.classList.remove('modal--open');
                        });
                        // Открываем модалку с сообщением
                        var thanks = document.getElementById('thanks');
                        document.body.classList.add('fixed');
                        thanks.classList.add('modal--open');
                    }
                };
            };
            xhr.send(data);
        });
    });

});
