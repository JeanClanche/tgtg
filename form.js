document.addEventListener("DOMContentLoaded", async function() {

    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault(); // empêche l'envoi HTTP classique
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        
        if(document.getElementById('custom').value != ''){
            sessionStorage.setItem('customLogo', document.getElementById('custom').value)
        }else{
            sessionStorage.removeItem('customLogo')
        }
        sessionStorage.setItem('formData', JSON.stringify(data));
        window.location.href = 'malveillance.html';
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
