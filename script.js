const url = 'https://elosaude.anyconnect.com.br/guia-medico';

// Botão para abrir o guia
document.getElementById('openGuide').addEventListener('click', () => {
    window.open(url, '_blank');
});

// Botão para copiar o link
document.getElementById('copyLink').addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(url);
        const copyButton = document.getElementById('copyLink');
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copiado!';
        setTimeout(() => copyButton.textContent = originalText, 1800);
    } catch (e) {
        console.error('Falha ao copiar o link: ', e);
        alert('Não foi possível copiar o link automaticamente.');
    }
});


// --- CÓDIGO MAIS SEGURO ---
// O código abaixo só vai rodar se os elementos com os IDs existirem no HTML.
// Se você descomentar as linhas no HTML, ele funcionará sem erros.

const guideUrlElement = document.getElementById('guideUrl');
if (guideUrlElement) {
    guideUrlElement.href = url;
}

const footerLinkElement = document.getElementById('footerLink');
if (footerLinkElement) {
    footerLinkElement.textContent = url;
}