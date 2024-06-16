// creo un array con vari oggetti al suo interno e creo un let con la lista della spesa
let listArray = [`Uova`, `Olio`, `Burro`,`Pane`, `Acqua`, `Pasta`];
let lista = document.getElementById(`lista-spesa`); 

// creo un "i" a 0 per prenderlo come base per il while
let i = 0;
// creerò un while che passi per tutti gli oggetti dell'array
while (i < lista-spesa.length){
    // creo gli elementi li 
    let listaLi = document.createElement(`li`);

    // creo un "textContent" per aggiungere ogni oggetto dentro un li
    listaLi.textContent = listArray[i];

    // aggiungo i li all'ul con un "appendChild"
    lista.appendChild(lista);
    i++;
}
