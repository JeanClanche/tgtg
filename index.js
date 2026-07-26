document.addEventListener("DOMContentLoaded", async function() {

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

                    const exp = document.createElement('div')
                    exp.setAttribute('id', 'exp')
                    exp.classList.add('row', 'rounded', 'm-0', 'text-center', 'text-light', 'py-2', 'mb-3', 'justify-content-center')

                    const expTitleRow = document.createElement('div')
                    expTitleRow.classList.add('row')

                    const expTitle = document.createElement('span')
                    expTitle.classList.add('fw-bold')
                    expTitle.setAttribute('id', 'expTxt')
                    expTitle.textContent = "Comment s'est passée votre expérience globale ?"

                    const starRow = document.createElement('div')
                    starRow.classList.add('row', 'justify-content-center', "my-2")

                    const starCol = document.createElement('div')
                    starCol.classList.add('col', 'my-2', 'fs-2')


                    for(let i = 0 ; i<5 ; i++){
                        const star = document.createElement('i')
                        star.classList.add('fa-regular', 'fa-star', "mx-2")

                        starCol.append(star)
                    }

                    const recap = document.createElement('div')
                    recap.classList.add('row', 'text-center', 'm-0', 'rounded', 'justify-content-center', 'p-1', 'pt-0', 'mb-4')
                    recap.setAttribute('id', 'recap')
                    
                    
                    starRow.append(starCol)
                    expTitleRow.append(expTitle)
                    exp.append(expTitleRow, starRow)


                    content.append(exp)

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
                                    <span class="fw-bold">Carrefour City - Le Havre</span>
                                </div>
                                <div class="row">
                                    <span class="">
                                        Panier Mixte
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
                                    <span>2 x Panier Mixte</span>
                                </div>
                            </div>
                            <div class="col text-end">
                                <div class="row">
                                    <span class="titreRecap fw-bold">TOTAL</span>
                                </div>
                                <div class="row">
                                    <span class="text-lowercase">67,00 €</span>
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

    //slide sa mère
    const label = document.getElementById('switchLabel');
    const track = document.getElementById('track');
    const thumb = document.getElementById('thumb');
    const fill = document.getElementById('fill');
    const input = document.getElementById('btn');

    const START_X = -1;

    let dragging = false;
    let moved = false;
    let startX = 0;
    let maxX = 0;
    let currentX = START_X;

    function getMaxX() {
        return track.offsetWidth - thumb.offsetWidth + 1;
    }

    function setFillWidth(x) {
        fill.style.width = (x + thumb.offsetWidth) + 'px';
    }

    function setThumbX(x) {
        thumb.style.transition = 'none';
        fill.style.transition = 'none';
        thumb.style.left = x + 'px';
        setFillWidth(x);
    }

    function resetThumb() {
        thumb.style.transition = 'left 0.2s ease';
        fill.style.transition = 'width 0.2s ease';
        thumb.style.left = START_X + 'px';
        fill.style.width = (START_X + thumb.offsetWidth) + 'px';
        input.checked = false;
    }

    function validate() {
        thumb.style.transition = 'left 0.2s ease';
        fill.style.transition = 'width 0.2s ease';
        thumb.style.left = maxX + 'px';
        fill.style.width = '100%';
        input.checked = true;
        input.dispatchEvent(new Event('change'));
    }

    function onStart(clientX) {
        if (input.checked) return;
        const thumbRect = thumb.getBoundingClientRect();
        const startedOnThumb = clientX >= thumbRect.left && clientX <= thumbRect.right;
        if (!startedOnThumb) return;

        dragging = true;
        moved = false;
        maxX = getMaxX();
        startX = clientX - thumbRect.left;
        currentX = START_X;
    }

    function onMove(clientX) {
        if (!dragging) return;
        const trackRect = track.getBoundingClientRect();
        let x = clientX - trackRect.left - startX;
        x = Math.max(START_X, Math.min(x, maxX));

        if (Math.abs(x - START_X) > 3) moved = true;

        currentX = x;
        setThumbX(x);
    }

    function onEnd() {
        if (!dragging) return;
        dragging = false;

        if (!moved) return;

        if (currentX >= maxX - 5) {
            validate();
        } else {
            resetThumb();
        }
    }

    label.addEventListener('click', (e) => e.preventDefault());


    thumb.addEventListener('touchstart', (e) => onStart(e.touches[0].clientX), { passive: true });
    document.addEventListener('touchmove', (e) => {
    if (dragging) onMove(e.touches[0].clientX);
    }, { passive: true });
    document.addEventListener('touchend', onEnd);


    thumb.addEventListener('mousedown', (e) => onStart(e.clientX));
    document.addEventListener('mousemove', (e) => onMove(e.clientX));
    document.addEventListener('mouseup', onEnd);


    input.addEventListener('change', () => {
        if (input.checked) {
            //
        }
    });
})


function clearContent(item){
    while(item.firstChild){
        item.removeChild(item.firstChild)
    }
}