/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */


const button = document.querySelector('button');
const container = document.querySelector('.grid');

button.addEventListener('click', function(){
    container.innerHTML= '';
    gridcells = document.querySelector('.form-select').value;
    generaGriglia(container, gridcells);
});



function generaGriglia(whereGemerateGrid, howManycells){
    for (let i = 0; i < howManycells; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        if (howManycells === '100'){
            square.style.width = '10%';
        } else if(howManycells === '81'){
            square.style.width = 'calc(100% / 9)' ;
        } else{
            square.style.width = 'calc(100% / 7)'; 
        }
        square.innerText = i+1;
        whereGemerateGrid.insertAdjacentElement('beforeend', square);
    }
    const caselle = document.querySelectorAll('.square');
    for (let i = 0; i < caselle.length; i++) {
        const casella = caselle[i];
        casella.addEventListener('click', function(){
            casella.classList.toggle('acqua');
            casella.style.color = 'black';
            alert(` la casella selezionata è la numero ${casella.innerHTML}`);
            
        });
    }
} 