window.addEventListener('load', function(e) {

    /* Переключение флажка */

    var checkboxAgree = document.getElementById('checkboxAgree');
    checkboxAgree.addEventListener('click', function(e) {
        checkboxAgree.classList.toggle('checkbox_active');
    });

});
