facciamo un gioco nel quale scoppiavo ogni volta alla penultima/ultima bomba...

L'utente cliccando sul bottone Play genererà un campo di gioco composto da celle, 
ogni cella ha un numero progressivo da 1 a 49/81/100 a seconda della difficoltà scelta 
Quando l'utente clicca sulla cella, essa si colora di azzurro.

- Creare la griglia composta dalle celle per il gioco

- Collegare la griglia ad un bottone che la genera in base alla difficoltà

- Cliccando una cella essa dovrà cambbiare colore

		js-campominato-dom

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe
In seguito l'utente clicca su una cella: 
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti
Al termine della partita il software deve comunicare il punteggio


-Generiamo un array di numeri casuali corrispondenti a square dove verranno posizionate le 16 bombe

-Se una "bomba" viene cliccata, la cell deve colorarsi di rosso e termina la partita
-La partita può terminare anche con la vittoria se non si premono bombe
-Comunicare il punteggio finale corrispondente a tutte le caselle prive di bombe premute

-bonus- Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle

-bonus- Visualizzare un messaggio di vittoria se non si clicca su nessuna bomba