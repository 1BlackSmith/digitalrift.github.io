window.addEventListener("load", function(e) {

    /* Плавное исчезновение блока загрузки */

    var blockLoading = document.getElementById("blockLoading");
    blockLoading.classList.add("block-loading_hide");
    window.setTimeout(function() {
        blockLoading.style.display = "none";
    }, 500);

});
