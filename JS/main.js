let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

let heads = 0;
let tails = 0;


flipBtn.addEventListener("click", ()=>{
    // All tha values I have sorted in i (Todo valor é guardadado no i)
    // Math.random is JS method that randomly sets a value among manyvalues
    // (Math.random é um método JS que define aleatoriamente um valor entre muitos valores)

    let i = Math.floor(Math.random() * 2);

    coin.style.animation = "none";

    if(i) {
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards"
        }, 100)
        heads++;
    }

    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards"
        }, 100)
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats(){
    document.querySelector("#heads-count").textContent = `Heads:
    ${heads}`;

    document.querySelector("#tails-count").textContent = `Tails:
    ${tails}`;}

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    }, 3000);
}



resetBtn.addEventListener("click",()=>{
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});