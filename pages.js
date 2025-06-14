function mostrarPagina(idPagina) {
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(p => p.style.display = 'none');

    const paginaAtiva = document.getElementById(idPagina);
    if (paginaAtiva) {
        paginaAtiva.style.display = 'block';
    }

    // Fecha o menu lateral
    sidebar.style.width = '0';
}