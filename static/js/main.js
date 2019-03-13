//Dark mode Btn
var header = document.getElementsByTagName("header")[0],
    body = document.getElementsByTagName("body")[0],
    footer = document.getElementsByTagName("footer")[0],
    darkModeBtn = document.querySelector(".dark-mode-btn"),
    circleIcon = document.querySelector(".circle-icon"),
    menuMobile = document.querySelector(".menu");

darkModeBtn.addEventListener("click", function(e) {
    header.classList.toggle("dark-color");
    menuMobile.classList.toggle("dark-color");
    body.classList.toggle("dark-color");
    footer.classList.toggle("dark-color");
    circleIcon.classList.toggle("purple-dark-color");
});

//Hide chat Btn
var hideChat = document.querySelector(".hide-chat-btn"),
    hideChatSecondary = document.querySelector(".hide-chat-btn-secondary");
    gridContainer = document.querySelector(".grid-container-2"),
    chatContainer = document.querySelector(".chat-container");

hideChat.addEventListener("click", function(e) {
    chatContainer.classList.toggle("remove");
    gridContainer.classList.toggle("grid-container-special");
    hideChatSecondary.classList.toggle("appear");

});

hideChatSecondary.addEventListener("click", function(e) {
    chatContainer.classList.remove("remove");
    gridContainer.classList.remove("grid-container-special");
    hideChatSecondary.classList.remove("appear");
})

