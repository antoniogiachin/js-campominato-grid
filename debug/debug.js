function terminaGioco(){
    const quadrati = document.getElementsByClassName('quadrato');
    for( let i = 0 ; i < quadrati.length; i++){
        if (bombe.inlcudes(parseInt(quadrati[i].innerText))){
            quadrati[i].classList.add('bomb');
        }

        quadrati[i].removeEventListener('click', handleclick);
    }
}