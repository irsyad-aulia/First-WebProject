console.log("Hello, Otak saya sudah terhubung!");

let mianTitle = document.querySelector("h1");
let changeButton = document.querySelector("#cta-button");

function ChalangeTheTitle() {
    mianTitle.textContent = "Wow! You clicked the button! 🔥";
}
changeButton.addEventListener("click", ChalangeTheTitle);