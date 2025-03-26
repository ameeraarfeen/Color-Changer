//getting btn and body
const btn=document.querySelectorAll('.btn');
const body = document.querySelector('body');
const boxes=document.querySelectorAll('.box')

//for-each loop to change bg
btn.forEach(function (button){
    button.addEventListener('click',function(e) {
        if(e.target.id === 'polyjuice'){
            body.style.backgroundColor = '#b8a898';
        }

        if(e.target.id === 'felix'){
            body.style.backgroundColor = '#51ce77';
        }
        if(e.target.id === 'amortentia'){
            body.style.backgroundColor = '#e499be';
        }
        if(e.target.id === 'veritaserum'){
            body.style.backgroundColor = '#F5f5f5';
        }

    });
});


//colour reset 
document.addEventListener('click', (event) => {

    if (!event.target.classList.contains('btn') && !event.target.classList.contains('box')) {
        body.style.backgroundColor = '#f4e4c1'; 
    }
});


// Potion details for each button
const potionInfo = {
    polyjuice: "Polyjuice Potion allows the drinker to temporarily take the form of someone else.",
    felix: "Felix Felicis, also known as Liquid Luck, makes the drinker lucky for a period of time.",
    amortentia: "Amortentia is the most powerful love potion, recognizable by its unique smell to each person.",
    veritaserum: "Veritaserum is a powerful truth serum, forcing the drinker to reveal their secrets."
};

// Function for popup
function showPopup(message) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = message;

    document.body.appendChild(popup);
    
    setTimeout(() => popup.remove(), 4000);
}

// clicks on boxes
boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        e.stopPropagation();
        const potionId = box.parentElement.id; 
        showPopup(potionInfo[potionId]); 
    });
});