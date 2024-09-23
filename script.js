const botao = document.getElementById("botao")
const qrCode = document.getElementById("QRcode")
const input = document.getElementById("input")

botao.addEventListener("click", () =>{

    qrCode.innerHTML = "";
    const texto = document.createElement("p");
    botao.innerText = "Gerando QRcode..."
    botao.appendChild(texto)

    const img = document.createElement("img");
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${(input.value)}`;
    qrCode.appendChild(img);

    img.addEventListener("load", () => {
        botao.innerText = "Gerar outro QRcode"
    })
})