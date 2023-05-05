const nextEl = document.querySelector('.next')
const prevEl = document.querySelector('.prev')
const stepsEL = document.querySelectorAll('.step')
const progressEl = document.querySelector('.garis-belakang')

init = 1

nextEl.addEventListener('click', () => {
init++
    if (init > stepsEL.length) {
        init = stepsEL.length
    }
    updateProgress() 
})
prevEl.addEventListener('click', () => {
init--
    if (init < 1) {
        init = 1
    }
    updateProgress() 
})

function updateProgress() {
    stepsEL.forEach((stepEl, idx) => {
    if(idx < init) {
        stepEl.classList.add('checked')
        setTimeout(() => {
            stepEl.innerHTML = `<i class="fa-solid fa-check"></i>
            <small>${idx === 0 ? "Start" : idx === stepsEL.length - 1 ?"Final" : "Step " + idx}</small>`
        }, 400);
    }
    else {
        stepEl.classList.remove('checked') 
        stepEl.innerHTML = `<i class="fa-solid fa-xmark satu"></i>`
    }
    })
    const checkedNumber = document.querySelectorAll('.checked')
    progressEl.style.width = ((checkedNumber.length - 1) / (stepsEL.length - 1 ))
    * 100 + "%"

    if (init === 1) {
        prevEl.disabled = true
    }else if (init === stepsEL.length) {
        nextEl.disabled = true
    }else {
        prevEl.disabled = false
        nextEl.disabled = false
    }
}