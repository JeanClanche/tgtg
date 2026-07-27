document.addEventListener("DOMContentLoaded", async function() {
    let data
    let customLogo
    if(sessionStorage.getItem('formData') != null){      

        data = JSON.parse(sessionStorage.getItem('formData'));
        console.log(data);

        if(
            data.nom &&
            data.logo &&
            data.type &&
            data.nb &&
            data.prix &&
            data.deb &&
            data.fin &&
            data.ing &&
            data.desc
        ){
            console.log('form ok')
        }else{
            window.location.href = "index"
        }
    }
    if(sessionStorage.getItem('customLogo') != null){
        customLogo = sessionStorage.getItem('customLogo')
        console.log(customLogo)
    }

    document.getElementById('back').addEventListener('click', function(){
        if(document.fullscreenElement == null){            
            document.querySelector('body').requestFullscreen()
        }else{
            document.exitFullscreen()
        }
    })

    const json = await fetch('logo.json')
    const list = JSON.parse(await json.text())

    let path = ''
    if(data.logo != 'custom'){
        path = `img/${list[data.logo]['path']}`
    }else{
        path = customLogo
    }
    document.getElementById('logo').setAttribute('src', path)

    const prix = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(data.prix*data.nb)
    document.getElementById("recup").textContent = `${data.deb} - ${data.fin}`
    document.getElementById('total').textContent = prix
    document.getElementById('panier').textContent = `${data.nb} x ${data.type}`
    document.getElementById('nom').textContent = data.nom
    document.getElementById('desc').textContent = data.desc
    document.getElementById('ing').textContent = data.ing
    document.getElementById('dateRecup').textContent = getDateFrench()

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
                                <img class='img-fluid' src='${path}'>
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
                                    <span>${getDateFrench()}</span>
                                </div>
                            </div>
                            <div class="col text-end">
                                <div class="row">
                                    <span class="titreRecap fw-bold">N° DE COMMANDE</span>
                                </div>
                                <div class="row">
                                    <span class="text-lowercase">${randomOrder()}</span>
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
                                    <span class="text-lowercase">${prix}</span>
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

function getDateFrench(){
    const date = new Date
    const j = date.getDate()
    const a = date.getFullYear()
    const month = date.getMonth()
    let m
    switch (month) {
        case 0 :
            m = "Janvier";
            break;
        case 1 :
            m = "Février";
            break;
        case 2 :
            m = "Mars";
            break;
        case 3 :
            m = "Avril";
            break;
        case 4 :
            m = "Mai";
            break;
        case 5 :
            m = "Juin";
            break;
        case 6 :
            m = "Juillet";
            break;
        case 7 :
            m = "Août";
            break;
        case 8 :
            m = "Septembre";
            break;
        case 9 :
            m = "Octobre";
            break;
        case 10 :
            m = "Novembre";
            break;
        case 11 :
            m = "Décembre";
            break;
    }
    return `${j} ${m} ${a}`
}

function randomOrder(){
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789"
    let result = ""
    for (let i = 0 ; i<13 ; i++){
        result += chars[Math.floor(Math.random() * chars.length)]
    }
    return result
}