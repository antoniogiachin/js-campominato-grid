 /* ---- FUNZIONI ----- */
        
 function createGrid(difficultyValue){

    const grid= document.getElementById('grid');


    for( let i = 1; i<= difficultyValue; i++){

        //creo div
        let square = document.createElement('div');
        square.classList.add('square');

        if(difficultyValue == 100){
            square.classList.add('sq-easy');

            
            // Inietto div nel DOM e gestisco visibilità
            grid.appendChild(square);
            grid.classList.remove('d-none');
            


        } else if(difficultyValue == 81){
            square.classList.add('sq-medium');

            // Inietto div nel DOM e gestisco visibilità
            grid.appendChild(square);
            grid.classList.remove('d-none');
            

        } else {
            square.classList.add('sq-hard');

            // Inietto div nel DOM e gestisco visibilità
            grid.appendChild(square);
            grid.classList.remove('d-none');
            
        }


        square.innerHTML += `${i}`;

        // Imposto click del node
        square.addEventListener('click',

            function(){
                this.classList.add('clicked');
            }

        );
    }


}

// Distrugge la griglia precedente
function destroyGrid(){

    // Selezione e creo array di tutti gli square
    let squares = document.querySelectorAll('.square');
    console.log(squares)

    // ciclo l'array e elimino gli square
    for (let i = 0; i< squares.length; i++){
        squares[i].remove();
    }
}    


// funzione numero casuale tra 1 e numero-celle

function randomNumberBomb (difficultyValue){

    return Math.floor(Math.random() * difficultyValue + 1 );

}

function arrayBomb (){

    const bombArray=[];

    let i =0
    while(i < 16){


        let bomba= randomNumberBomb(difficultyValue);
        console.log(bomba);

        // Evito ripetizione numero
        if(!bombArray.includes(bomba)){
            bombArray.push(bomba);
            i++
        }

    }
    console.log(bombArray);

    return bombArray;


}






// Mi riferisco a TAG  button nel DOM
const play = document.getElementById('play');

play.addEventListener('click',

    function(){


        // Mi riferisco a TAG selection nel DOM
        difficultyValue = document.getElementById('difficulty-select').value;

        //Distruggo griglia precedente
        destroyGrid();

        // Mi riferisco a schermata di benvenuto
        const welcome = document.getElementById('welcome');
        welcome.classList.add('d-none');

        //Creo griglia
        createGrid(difficultyValue);

       

    }

    

);
