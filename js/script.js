//Cefiniamo i Square da inserire nel html
//Creiamo la funzione per creare l'array con numeri casuali


function createSquare(ind) {
    const squareDiv = document.createElement('div');
    squareDiv.className = 'square';
    squareDiv.innerText = ind;
    return squareDiv;
}

function arrayRandomNumber(min, max) {
    let array = [];
    let i = 0;
    while (i < 16) {
        let num = Math.floor(Math.random() * (max - min + 1) + 1);
        if (!array.includes(num)) {
            array.push(num);
            i++
        }
    }
    return array;
}

//Colleghiamo il play button alla creazione campo in base alla difficoltà
//Eliminiamo una eventuale grid precedente
//Impostiamo dimensioni per la grid in base alla difficoltà

let play_btn = document.getElementById('play');
play_btn.addEventListener('click', function(){
    
    let containerSquare = document.getElementById('grid');
        containerSquare.innerHTML = "";
        document.getElementById('score').innerText = ``;

    let divSquare;
    let cells_num;
    let diff_sel = document.getElementById('difficult').value;

    switch (diff_sel) {
        case 'easy':
            cells_num = 100;
            break;
        
        case 'normal':
            cells_num = 81;
            break;

        case 'hard':
            cells_num = 49;
            break;
        
        default :
            cells_num = 100;
            break;
    }

//Creiamo un array di bombe e senza bombe
//Richiamiamo la funzione per creare il square e aggiungo il Listener
//Immetto le bombe nella grid, se premute si colorano di rosso e si attivano tutte
//Aggiungiamo la condizione di vittoria
    
    let bomb = arrayRandomNumber(1, cells_num);
    console.log(bomb);

    let notBombSquare = [];

    for (let i = 1; i <= cells_num; i++) {
        divSquare = createSquare(i);
        divSquare.addEventListener('click', function(){

            if (bomb.includes(parseInt(this.innerText))) {
                
                for (let i = 0; i < cells_num; i++) {
                    squareArray[i].classList.add('mouseblock');
                    if (bomb.includes(parseInt(squareArray[i].innerText))) {
                        squareArray[i].classList.add('odd');
                        squareArray[i].innerHTML = `<i class="fa-sharp fa-solid fa-burst"></i>`;
                        squareArray[i].style.fontSize = '2rem';
                    }
                }
                document.getElementById('score').innerText = `Buhu you lost, your score is: ${notBombSquare.length}`;
            }
            else {
                this.classList.add('even');

                notBombSquare.push(divSquare.classList.contains('even'));

                if (notBombSquare.length == (cells_num - bomb.length)) {
                    for (let i = 0; i < cells_num; i++) {
                        squareArray[i].classList.add('mouseblock');
                    }
                    document.getElementById('score').innerText = `You have won?`;
                }              
            }
        },{once: `true`})
        
//Selettore di Difficoltà
        
        switch (diff_sel) {
            case 'easy':
                divSquare.classList.add('easy-field');
                break;
            
            case 'normal':
                divSquare.classList.add('normal-field');
                break;
    
            case 'hard':
                divSquare.classList.add('hard-field');
                break;

            default :
                divSquare.classList.add('easy-field');
                break;
        }

        containerSquare.appendChild(divSquare);
    }

    let squareArray = document.getElementsByClassName('square');
    console.log(squareArray);
})
