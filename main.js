const grid = (value) => {

    const grid = document.getElementById('grid');

    for(let i = 1; i <= value; i++){

        //creo elemento div
        const nodeDiv = document.createElement('div');

        // Aggiungo classe elemento div
        nodeDiv.classList.add('square');

        if(value==49){
            nodeDiv.classList.add('sq-hard');
        } else if (value == 81){
            nodeDiv.classList.add('sq-medium');
        } else {
            nodeDiv.classList.add('sq-easy');
        }

        nodeDiv.innerHTML += `${i}`;

        // Inietto div nel DOM
        grid.appendChild(nodeDiv);

        // Imposto click del node
        nodeDiv.addEventListener('click',

            function(){
                this.classList.add('clicked');
            }
        
        );


    }

    return grid;
}

// Mi riferisco a TAG selection nel DOM

const difficultyValue = document.getElementById('difficulty-select').value;

// Mi riferisco a TAG  button nel DOM
const play = document.getElementById('play');

// Ascoltatore di eventi
play.addEventListener('click',

    function(){

        // 

    }

);