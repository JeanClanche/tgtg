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