document.getElementById('gerar-pdf-btn').addEventListener('click', () => {
    const elemento = document.getElementById('pdf-content');
    const botao = document.getElementById('gerar-pdf-btn');
    
    botao.innerText = 'Gerando documento...';
    botao.disabled = true;

    elemento.classList.add('pdf-mode');

    const larguraOriginal = elemento.style.width;
    const maxWidthOriginal = elemento.style.maxWidth;
    if (window.innerWidth < 800) {
        elemento.style.width = '800px';
        elemento.style.maxWidth = '800px';
    }

    const opcoes = {
        margin:       15, 
        filename:     'analise-de-pensamentos.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, windowWidth: 800 }, 
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opcoes).from(elemento).save().then(() => {
        
        elemento.classList.remove('pdf-mode');
        elemento.style.width = larguraOriginal;
        elemento.style.maxWidth = maxWidthOriginal;
        
        
        botao.innerText = 'Salvar Respostas em PDF';
        botao.disabled = false;
    });
});