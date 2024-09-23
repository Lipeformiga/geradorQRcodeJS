const botao = document.getElementById("botao")
const qrCode = document.getElementById("QRcode")

botao.addEventListener("click", (e) =>{

    e.preventDefault();
    qrCode.innerHTML = "";

    botao.innerText = ""
    const texto = document.createElement("p");
    texto.innerText = "Gerando QRcode..."
    botao.appendChild(texto)


    const img = document.createElement("img");
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`;
    qrCode.appendChild(img);

    console.log("mudou");
})

