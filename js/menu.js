"use strict"
// Selecionando o elemento (através de descendência)que acionará o menu
const botaoMenu = document.querySelector("nav h2");

//Selecionando a lista/menu
const menu = document.querySelector(".menu");
console.log(menu)

//Selecionando o link que está dentro do nav h2

// nesta forma vai direto para a Nav h2 a. (não percorre todo o document)
const textoBotao = botaoMenu.querySelector("a");
console.log(textoBotao);

botaoMenu.addEventListener("click", function(event){
   /* Anular ou prevenir o comportament padrão do link */
    event.preventDefault();
menu.classList.toggle("aberto")

});
