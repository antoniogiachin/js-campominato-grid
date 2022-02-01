// Tutto avviene in seguito al click

document.getElementById('play').addEventListener('click',

    function (){

        //numero bombe costante
        const BOMB_NUMBER =16; 


        /* --- FUNZIONI --- */
        
        function createGrid(){

            // Mi riferisco a DIV grid
            const gridHtml = document.getElementById('grid');

            // Mi riferisco al valore dell'input
            const difficultyValue = document.getElementById('difficulty-select').value;
            console.log(difficultyValue)

            // La griglia precedente, se presente deve essere distrutta
            gridHtml.innerHTML='';

            // Creo griglia a seconda del valore
            // Ciclo il valore
            for(let i = 1; i <= difficultyValue; i++){

                const squares = document.createElement('div');

                squares.classList.add('square');


                if(difficultyValue == 100){
    
                    squares.classList.add('sq-easy');
    
                } else if (difficultyValue == 81){
    
                    squares.classList.add('sq-medium');
                    
                } else{
                    
                    squares.classList.add('sq-hard');
    
                }
                
                
                gridHtml.appendChild(squares);

                squares.innerText=i;

                
                squares.addEventListener('click', clickHandler);
                
                
                
                
                
                
                
            }
            
            
            
            function  getBombId (){
                return Math.floor(Math.random() * (difficultyValue -1) ) + 1;
            }

            // funzione creazione bombe
            function bombCraft(){

                const arrayBomb =[];
                console.log(arrayBomb);
                console.log(difficultyValue)


                while(arrayBomb.length < 16){

                    const bomba = getBombId()
                    if(!arrayBomb.includes(bomba)){
                        arrayBomb.push(bomba);
                    }

                }
                                


            }

            bombCraft();

        }

        //Funzione di gestione del click
        function clickHandler(){
            
            this.classList.add('clicked');

            //Rimuovo possibilita' secondo click
            this.removeEventListener('click', clickHandler);

            //debug
            alert(this.innerText);
            
        }
        createGrid();









    }

);