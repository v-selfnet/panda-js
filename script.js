/* 1: JS Connect to HTML  */
console.log('Hello! This is first Project with JavaScript');

/* 2: All [12] h2 elements change color:blue */
const h2Collection = document.getElementsByTagName('h2');
for(const h2 of h2Collection){
    h2.style.color = 'blue';
}

/* Extra: 1 */
const shoesCollection = document.getElementById('shoes');
shoesCollection.style.backgroundColor = '#fceae8';
shoesCollection.style.padding = '10px';

/* 3: id #backpack color:tomato change  */
const backpackCollection = document.getElementById('backpack');
backpackCollection.style.backgroundColor = 'tomato';
backpackCollection.style.padding = '10px';


/* 4: all card change border radioud:30px  */
const cards = document.querySelectorAll('.card');
for(const card of cards){
    card.style.borderRadius = '50px';
}

/* 5: function click handler in a button */
document.getElementById('btn-sold').addEventListener('click', function(){
    const sold = document.getElementById('sold');
    sold.innerText = 'You Bought this product';
    sold.style.color = 'red';
});

/* 6: function click handler remove button */
const buttons = document.getElementsByClassName('btn');
for(const button of buttons){
    button.addEventListener('click', function(event){
        event.target.parentNode.remove(event.target);
    })
}

/* 7: disable/enable button */
document.getElementById('text-field').addEventListener('keyup', function(event){
    const getText = event.target.value;
    const enableBtn = document.getElementById('btn-submit');
    if(getText === 'email')
        enableBtn.removeAttribute('disabled');
        else
        enableBtn.setAttribute('disabled', true);
    });
    
    
/* 8: change image on mouseenter */
function newImg(event){
    event.src = 'images/bags/bag-2.png';
}
function oldImg(event){
    event.src = 'images/bags/bag-1.png';
}
