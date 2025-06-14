function mostrarPopupDeParabensAutomatico(mensagemParaExibir) {
    const popupDoParabens = document.getElementById('popup-parabens');
    const areaDaMensagemDoPopup = document.getElementById('message-parabens-aqui');
    if (popupDoParabens && areaDaMensagemDoPopup) {areaDaMensagemDoPopup.textContent = mensagemParaExibir;
        popupDoParabens.style.display = 'flex';
        popupDoParabens.style.opacity = '1';
        setTimeout(()=> {popupDoParabens.style.opacity = '0';
            setTimeout(() => {popupDoParabens.style.display = 'none';}, 500);
        }, 2000);}
        else {console.warn("Erro: Elemento do pop-up de parabéns não foi encontrado")}}