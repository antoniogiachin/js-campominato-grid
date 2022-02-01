// Mi riferisco a bottone play
const play = document.getElementById('play');

/* ----- FUNZIONI ------ */
// Funzione per numero casuale
function casualNumber (min, max){
    return Math.floor(Math.random() * (max - min+1)+min);
}

// funzione per creazione bombe

function createBombArray(bombNumber, maxValue){

    const bombArray=[];

    while(bombArray.length < bombNumber){

        const bombId = casualNumber(1, maxValue);

        // Evito che due numeri si ripetano
        if(!bombArray.includes(bombId)){
            bombArray.push(bombId);
            
        }

    }


    console.log(bombArray);
    return bombArray;
}


// Funzione che crea grid
function createGrid(value){

    // Mi riferisco a div #grid
    const gridHtml = document.getElementById('grid');

    // Svuoto grid
    gridHtml.innerHTML ='';

    const bombe = createBombArray(16, value);
    console.log(bombe);

    // Ciclo for e creo squares a seconda del value inserito
    for(let i = 1; i <= value; i++){

        const square = document.createElement('div');

        square.classList.add('square');

        square.innerText = i;

        //funzione gestione click square
        function handleClick(){

            this.classList.add('clicked');
            this.removeEventListener('click', handleClick);

            console.log(this.innerText);

            if(bombe.includes(parseInt(this.innerText))){
                alert('perso');
            }
        }

        square.addEventListener('click', handleClick);

        // dimensione a seconda di value
        if(value == 100){
            square.classList.add('sq-easy');
        } else if (value == 81){
            square.classList.add('sq-medium');
        } else {
            square.classList.add('sq-hard');
        }

        gridHtml.appendChild(square);
    }


}



// Ascoltatore di eventi per play
play.addEventListener('click',

    function(){
        // Richiamo il valore
        const difficultyValue = document.getElementById('difficulty-select').value;

        createGrid(difficultyValue);

        


    }

);

