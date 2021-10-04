function converter() {
    let numeroConverter = document.querySelector('#valorDigitado').value;
    const resposta = document.querySelector('#resultado')

    if (document.querySelector('#radio-convercao-paraF').checked == true) {
        resposta.innerHTML = "O RESULTADO FOI DE "  + ((numeroConverter * 1.8) + 32)+ "Fº";
    };

    if (document.querySelector('#radio-convercao-paraC').checked == true) {
        resposta.innerHTML = "O RESULTADO FOI DE "  + ((numeroConverter - 32) * 5 / 9) + " Cº";

    };



};