const pButton = document.getElementById('p-button');
pButton.addEventListener('click', function() {
    const tcp = document.querySelector('.to-change-paragraph');
    tcp.textContent = 'Le texte a été changé !';
});