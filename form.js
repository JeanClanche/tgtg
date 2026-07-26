document.addEventListener("DOMContentLoaded", async function() {
    document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // empêche l'envoi HTTP classique
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    sessionStorage.setItem('formData', JSON.stringify(data));
    window.location.href = 'malveillance.html';
    });
})