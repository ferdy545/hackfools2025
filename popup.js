function mostrarPopup(mensagem) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = mensagem;
    popup.style.display = 'flex';

    // Focus on the OK button for Enter key to work immediately
    const okButton = document.getElementById('popup-ok');
    okButton.focus();

    function fecharPopup() {
        popup.style.display = 'none';
        document.removeEventListener('keydown', escutaEnter);
        okButton.removeEventListener('click', fecharPopup);
    }

    function escutaEnter(e) {
        if (e.key === 'Enter' || e.key === 'Escape') {
            fecharPopup();
        }
    }

    okButton.addEventListener('click', fecharPopup);
    document.addEventListener('keydown', escutaEnter);
}