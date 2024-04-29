$(document).ready(function () {
    $('#mobile_btn').on('click', function (event) {
        event.stopPropagation(); // Impede a propagação do evento para o documento
        $('#mobile_nav_list').toggleClass('active');
        $('#mobile_menu').toggleClass('active');
        $('#mobile_menu').toggleClass('hide');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Adicionando evento para fechar o menu mobile
    $(document).on('click', function (event) {
        if (!$(event.target).closest('#mobile_menu').length && !$(event.target).is('#mobile_btn')) { // Verifica se o clique não foi dentro do menu mobile nem no botão do menu
            $('#mobile_nav_list').removeClass('active');
            $('#mobile_menu').removeClass('active'); // Removendo a classe 'active' para a animação de fechar
            $('#mobile_menu').addClass('hide'); // Adiciona a classe 'hide' para ocultar o menu
            $('#mobile_btn').find('i').removeClass('fa-x');
        }
    });
});






function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slideShow");
    let currentSlide = 0;

    function showSlide() {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[currentSlide].classList.add("active");
        currentSlide = (currentSlide + 1) % slides.length;
    }

    setInterval(showSlide, 7000);
});

$(document).ready(function () {
    $('.faq-section h3').on('click', function () {
        // Fecha todas as respostas antes de abrir a resposta clicada
        $('.answer').not($(this).next()).fadeOut(500);

        // Abre ou fecha a resposta clicada com fade in e fade out
        $(this).next('.answer').fadeToggle(500);
    });
});
