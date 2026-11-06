document.getElementById('gerar-pdf-btn').addEventListener('click', () => {
    const elemento = document.getElementById('pdf-content');
    const botao = document.getElementById('gerar-pdf-btn');
    
    botao.innerText = 'Gerando documento...';
    botao.disabled = true;

    
    window.scrollTo(0, 0);

    elemento.classList.add('pdf-mode');

    const opcoes = {
        margin:       [15, 10, 15, 10], 
        filename:     'analise-de-pensamentos.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { 
            scale: 2, 
            useCORS: true, 
            scrollX: 0, 
            scrollY: 0,
            width: 794 
        },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opcoes).from(elemento).save().then(() => {
        // Restaura a visualização da tela
        elemento.classList.remove('pdf-mode');
        botao.innerText = 'Salvar Respostas em PDF';
        botao.disabled = false;
    });
});