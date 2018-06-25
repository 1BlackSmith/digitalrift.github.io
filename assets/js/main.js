window.addEventListener('load', function( e ) {

    /* Плавное исчезновение блока загрузки */

    var blockLoading = document.getElementById('blockLoading');
    blockLoading.classList.add('block-loading_hide');
    window.setTimeout(function() {
        blockLoading.style.display = 'none';
    }, 500);


    /* Открытие блока отправки заявки */

    var blockFeedbackBig = document.getElementById('blockFeedbackBig');
    var blockFeedbackLittle = document.getElementById('blockFeedbackLittle');
    var buttonsShowLittle = document.getElementsByClassName('js__blockFeedbackShowLittle');
    var buttonsShowBig = document.getElementsByClassName('js__blockFeedbackShowBig');
    bind(blockFeedbackBig, buttonsShowBig);
    bind(blockFeedbackLittle, buttonsShowLittle);

    function bind(block, buttons) {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function( e ) {
                block.style.display = 'flex';
                document.body.classList.add('fixed');
                block.classList.add('block-feedback_show');
                window.setTimeout(function() {
                    block.classList.remove('block-feedback_show');
                    block.style.opacity = 1;
                }, 400);
            });
         }
    }


    /* Закрытие блока отправки заявки */

    var blockFeedbacks = document.getElementsByClassName('block-feedback');
    for (let i = 0; i < blockFeedbacks.length; i++) {
        var closeButton = blockFeedbacks[i].getElementsByClassName('block-feedback__button-close')[0];
        closeButton.addEventListener('click', function(e) {
            document.body.classList.remove('fixed');
            blockFeedbacks[i].classList.add('block-feedback_hide');
            window.setTimeout(function() {
                blockFeedbacks[i].style.display = 'none';
                blockFeedbacks[i].classList.remove('block-feedback_hide');
                var checkbox = blockFeedbacks[i].getElementsByClassName('checkbox')[0];
                checkbox.classList.remove('checkbox_active');
            }, 400);
        });
    }


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
