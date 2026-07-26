document.addEventListener("DOMContentLoaded", async function() {
    
    const data = JSON.parse(sessionStorage.getItem('formData'));
    console.log(data);

    const btn = document.getElementById('btn')
    const content = document.getElementById('content')
    const switchContainer = document.getElementById('switchContainer')

    btn.addEventListener('change', function(){
        if(btn.checked){
            btn.setAttribute('disabled', '')
            setTimeout(() => {
                clearContent(switchContainer)
                const col = document.createElement('div')
                col.classList.add('col-4', 'text-center')
                const img = document.createElement('img')
                img.classList.add('img-fluid')
                img.setAttribute('src', 'img/ok.svg')

                col.append(img)
                switchContainer.append(col)
                setTimeout(() => {
                    clearContent(content)
                    content.innerHTML = `
            <div id="exp" class="row rounded m-0 text-center text-light py-2 mb-3 justify-content-center">
                <div class="row">
                    <span class="fw-bold" id="expTxt">Comment s'est passée votre expérience globale ?</span>
                </div>
                
                <div class="row justify-content-center my-2">
                    <div class="col my-2 fs-2">
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                </div>
            </div>

            <!-- Carré vert foncé -->
            <div id="recap" class="row text-center m-0 rounded justify-content-center p-1 pt-0 mb-4">
                <span class="text-light my-1 fw-bold">
                    <i class="fa-solid fa-circle-check"></i>
                    Récupérée
                </span>
                <div class="row bg-light rounded">
                    <div class="col">
                        <div class="row p-3">
                            <div class="col-2 text-end align-self-center">
                                <img class='img-fluid' src='img/carouf.png'>
                            </div>
                            <div class="col text-start">
                                <div class="row">
                                    <span class="fw-bold">${data.nom}</span>
                                </div>
                                <div class="row">
                                    <span class="">
                                        ${data.type}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col text-start">
                                <div class="row">
                                    <span class="titreRecap fw-bold">RÉCUPÉRÉE</span>
                                </div>
                                <div class="row">
                                    <span>01 juin 2052</span>
                                </div>
                            </div>
                            <div class="col text-end">
                                <div class="row">
                                    <span class="titreRecap fw-bold">N° DE COMMANDE</span>
                                </div>
                                <div class="row">
                                    <span class="text-lowercase">UIZUDGI</span>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col text-start">
                                <div class="row">
                                    <span class="titreRecap fw-bold">PANIER SURPRISE</span>
                                </div>
                                <div class="row">
                                    <span>${data.nb} x ${data.type}</span>
                                </div>
                            </div>
                            <div class="col text-end">
                                <div class="row">
                                    <span class="titreRecap fw-bold">TOTAL</span>
                                </div>
                                <div class="row">
                                    <span class="text-lowercase">67,67€</span>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col text-start">
                                <div class="row">
                                    <span class="titreRecap fw-bold">MOYEN DE PAIEMENT</span>
                                </div>
                                <div class="row">
                                    <span>Credit Card: Mastercard</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--Besoin d'aide-->
            <div class="row">
                <div class="col text-center">
                    <div class="row">
                        <span>
                            <i class="fa-solid fa-headset"></i>
                        </span>
                    </div>
                    <div class="row">
                        <span>
                            Besoin d'aide ?
                        </span>
                    </div>
                </div>
            </div>
            `
                }, 2000)
            }, 400);
        }
    })
})


function clearContent(item){
    while(item.firstChild){
        item.removeChild(item.firstChild)
    }
}