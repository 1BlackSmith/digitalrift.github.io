window.addEventListener('load', function(e) {

    /* Плавное исчезновение блока загрузки */

    var blockLoading = document.getElementById("blockLoading");
    blockLoading.classList.add("block-loading_hide");
    window.setTimeout(function() {
        blockLoading.style.display = "none";
    }, 500);

    /* Переключение флажка */

    var checkboxs = document.getElementsByClassName('checkbox');
    for (var i = 0; i < checkboxs.length; i++) {
        checkboxs[i].addEventListener('click', function(e) {
            e.target.classList.toggle('checkbox_active');
        });
    }

    /* Закрытие блока отправки заявки */

    var blockFeedback = document.getElementById("blockFeedback");
    var closeBlockFeedback = document.getElementById("closeBlockFeedback");
    closeBlockFeedback.addEventListener("click", function(e) {
        blockFeedback.classList.add("block-feedback_hide");
        window.setTimeout(function() {
            blockFeedback.style.display = "none";
            blockFeedback.classList.remove("block-feedback_hide");
        }, 400);
    });

    /* Открытие блока отправки заявки */

     var feedbackButton = document.getElementById("feedbackButton");
     feedbackButton.addEventListener("click", function(e) {
        blockFeedback.style.display = "flex";
        blockFeedback.classList.add("block-feedback_show");
        window.setTimeout(function() {
            blockFeedback.classList.remove("block-feedback_show");
            blockFeedback.style.opacity = 1;
        }, 400);
     });

});
