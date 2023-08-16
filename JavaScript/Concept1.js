//Img changer on page click

let myImg = document.querySelector('img');

myImg.onclick = () => {
    let mySrc = myImg.getAttribute('src');
    if(mySrc==='img/penguin.jpg'){
        myImg.setAttribute('src', 'img/puppy.jpg');
    }
    else{
        myImg.setAttribute('src', 'img/penguin.jpg');
    }
}