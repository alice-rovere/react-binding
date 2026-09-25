const exercises = [
  {
    id: "contatore-numerico",
    titolo: "Contatore Numerico",
    descrizione:
      "Implementa un contatore numerico incrementabile via bottone e aggiungi un pulsante dedicato per azzerare istantaneamente il valore",
  },
  {
    id: "alternatore-stile",
    titolo: "Alternatore di Stile",
    descrizione:
      "Crea un bottone che alterni la propria classe stilistica (es. da primary a success) ad ogni click, mutandone dinamicamente l'aspetto grafico",
  },
  {
    id: "allineamento-paragrafo",
    titolo: "Allineamento del Paragrafo",
    descrizione:
      "Creare un componente con tre pulsanti ed un paragrafo. Creare una variabile di stato reattiva per gestire l'allineamento del paragrafo. Per ogni pulsante, impostare l'evento onClick e impostare l'allineamento in base al pulsante cliccato",
  },
  {
    id: "messaggio-multilingue",
    titolo: "Messaggio di Benvenuto Multilingue",
    descrizione:
      "Visualizza un messaggio di benvenuto che si aggiorni in tempo reale scegliendo tra diverse lingue tramite una serie di bottoni dedicati",
  },
  {
    id: "lista-attivita",
    titolo: "Lista di Attività",
    descrizione:
      "Genera una lista di attività permettendo di segnare ogni elemento come completato applicando una classe con stile testuale barrato quando clicchiamo sull'elemento in questione.",
  },
  { 
    id: "contatore-caratteri",
    titolo: "Contatore Caratteri",
    descrizione:
      "Mostra dinamicamente il numero di caratteri inseriti in una casella di input o textarea, aggiornando il conteggio ad ogni digitazione",  
  },
  {    id: "filtro-nomi",
    titolo: "Filtro Nomi",
    descrizione:
      "Filtra istantaneamente un array di nomi visualizzati a schermo mostrando solo quelli che contengono la stringa digitata nell'input",
  },
  {
    id: "aggiorna-titolo",
    titolo: "Aggiorna Titolo",
    descrizione:
      "Aggiorna il contenuto di un tag <h1> con il testo inserito dall'utente in una casella di input, sostituendo il valore precedente ad ogni modifica"
  },
    {
      id: "unisci-nome-cognome",
      titolo: "Unisci Nome e Cognome",
      descrizione:
        "Unisci in tempo reale il valore di due input distinti (nome e cognome) visualizzando il risultato completo in un unico elemento di testo"
    },
    {
      id: "abilita-pulsante",
      titolo: "Abilita Pulsante",
      descrizione:
        "Mantieni disabilitato un pulsante di azione finché l'utente non spunta una specifica casella di controllo per confermare la volontà di procedere"
    },
    {
      id: "applica-stile",
      titolo: "Applica Stile",
      descrizione:
        "Applica o rimuovi uno stile specifico (es. grassetto, corsivo, sottolineato, evidenziato) ad un testo target quando la checkbox associata viene attivata o disattivata"
    },
    {
      id: "ridimensiona-testo",
      titolo: "Ridimensiona Testo",
      descrizione:
        "Ridimensiona il testo della pagina in base al radio button selezionato dall'utente"
    },
    {
      id: "convertitore-valuta",
      titolo: "Convertitore di Valuta",
      descrizione:
        "Converti e mostra il prezzo di un prodotto fisso in diverse valute (EUR, USD, GBP) aggiornando il simbolo e il valore in base alla select"
    },
    {
      id: "caratteri-rimanenti",
      titolo: "Caratteri Rimanenti",
      descrizione:
        "Mostra il numero di caratteri rimanenti da scrivere durante la digitazione in una textarea"
    },
    {
      id: "avvisi-testo",
      titolo: "Avvisi Testo",
      descrizione:
        "Mostra degli avvisi riguardo la quantità di testo scritto in una textarea (es. troppo corto, troppo lungo, lunghezza ottimale)"
    },
];

export default exercises;