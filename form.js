document.addEventListener("DOMContentLoaded", async function() {

    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault(); // empêche l'envoi HTTP classique
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        
        const imgInput = document.getElementById('custom').files[0]
        if(imgInput){
            const reader = new FileReader()
            reader.onload = function (event) {
                const dataUrl = event.target.result;
                try {
                    sessionStorage.setItem('customLogo', dataUrl);
                    window.location.href = 'malveillance.html';
                } catch (err) {
                    alert("Erreur lors de la sauvegarde : l'image est probablement trop lourde.");
                }
            };
            reader.readAsDataURL(imgInput);
        }else{
            sessionStorage.removeItem('customLogo')
            window.location.href = 'malveillance.html';
        }
    });

    //remplissage du select logo
    const json = await fetch('logo.json')
    const list = JSON.parse(await json.text())
    //console.log(await list)
    let i = 0
    list.forEach((e) => {
        const option = document.createElement('option')
        option.setAttribute('value', i)
        option.textContent = e['name']
        document.getElementById('floatingSelect').append(option)
        i++
    })

    document.getElementById('floatingSelect').addEventListener('input', function(){
        if(document.getElementById('floatingSelect').value == 'custom'){
            document.getElementById('custom').removeAttribute('disabled')
        }else{
            document.getElementById('custom').setAttribute('disabled', '')
        }
    })

})
