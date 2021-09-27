const openModal = document.getElementsByClassName('openModal');
const modal = document.getElementsByClassName('modal');
const close = document.getElementsByClassName('close');

function DodajEventListener_v1() {
    for(let i=0; i < openModal.length; i++) {
        openModal[i].addEventListener('click',  () => {
        modal[i].classList.add('on');
        })
    }
}

function DodajEventListener_v2() {
    for (let i=0; i < close.length; i++) {
        close[i].addEventListener('click',  () => {
            modal[i].classList.remove('on');
        })
    }
}

DodajEventListener_v1();
DodajEventListener_v2();
