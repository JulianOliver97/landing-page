// FORMULÁRIO DE CONTATO
// Abre o aplicativo de e-mail do visitante com a mensagem pronta,
// já que a página não tem servidor para receber o formulário.

const EMAIL_CONTATO = "brandao.julian.oliveira@gmail.com";

const formulario = document.getElementById("meuFormulario");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome && email && mensagem) {

        const assunto = `Contato pelo portfólio - ${nome}`;

        const corpo =
            `${mensagem}\n\n` +
            `--\n` +
            `${nome}\n` +
            `${email}`;

        window.location.href =
            `mailto:${EMAIL_CONTATO}` +
            `?subject=${encodeURIComponent(assunto)}` +
            `&body=${encodeURIComponent(corpo)}`;

        formulario.reset();
    }

});


// MENU MOBILE
const botaoMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("ativo");
});


// FECHAR O MENU AO CLICAR EM UM LINK
const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {
        menu.classList.remove("ativo");
    });

});
