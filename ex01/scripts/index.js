let kontejner = document.querySelector('.kontejner');
let colOne = document.querySelector('.One');
let colTwo = document.querySelector('.Two');
let colThree = document.querySelector('.Three');
let colFour = document.querySelector('.Four');

for(let i = 1; i <= 10; i++) {
    let divImg = document.createElement('div');
    let divImage = document.createElement('img');
    divImage.setAttribute('src', `../images/img${i}.jpg`);
    divImg.appendChild(divImage);

    if(i === 1 || i === 5 || i === 8) {
        colOne.appendChild(divImg);
    }
    else if(i === 2 || i === 6) {
        colTwo.appendChild(divImg);
    }
    else if(i === 3 || i === 7 || i === 9) {
        colThree.appendChild(divImg);
    }
    else {
        colFour.appendChild(divImg);
    }
}