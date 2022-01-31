function createGrid(difficultyValue){

    const grid= document.getElementById('grid');    

    for( let i = 1; i<= difficultyValue; i++){
        
        //creo div
        let square = document.createElement('div');
        square.classList.add('square');

        if(difficultyValue == 100){
            square.classList.add('sq-easy');
            // gridEasyHtml.classList.remove('d-none');
        } else if(difficultyValue == 81){
            square.classList.add('sq-medium');
            // gridMediumHtml.classList.remove('d-none');
        } else {
            square.classList.add('sq-hard');
            // gridHardHtml.classList.remove('d-none');
        }                        

        square.innerHTML += `${i}`;


        // Inietto div nel DOM
        grid.appendChild(square);

        // Imposto click del node
        square.addEventListener('click',

            function(){
                this.classList.add('clicked');
            }
        
        );
    }        
    

}




// Mi riferisco a TAG  button nel DOM
const play = document.getElementById('play');

play.addEventListener('click',

    function(){

        // Mi riferisco a TAG selection nel DOM
        const difficultyValue = document.getElementById('difficulty-select').value;

        // Mi riferisco a schermata di benvenuto
        const welcome = document.getElementById('welcome');
        welcome.classList.add('d-none');

        createGrid(difficultyValue);   
        grid.classList.remove('d-none');     
        
                
    }

);
