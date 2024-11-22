# Progetto-buildweek1-Team2


Questo quiz consente agli utenti di verificare le proprie conoscenze attraverso la selezione di domande vero/falso e a risposta multipla.Il quiz include un timer per ogni domanda, un riepilogo finale con grafico a torta nel quale l'utente potrà riscontrare i propri risultati, e una pagina di feedback per raccogliere opinioni finali.

***

## Funzionalità principali


1. Schermata di introduzione

La prima schermata, denominata come 'Homepage.html' all'interno del progetto, mostra i termini d'uso, richiedendo all'utente di accettare di non ricevere aiuto esterno durante il quiz.
Solo dopo aver accettato i termini, attraverso la spunta del checkbox posto accanto alla promessa, l'utente può premere il pulsante “Proceed” per accedere direttamente alla pagina del quiz vero e proprio.

2. Domande del quiz

La seconda pagina, ovvero la pagina principale del quiz denominata come 'quiz.html', presenta il vero e proprio test a cui l'utente si sottopone composto da due tipi di domande:
 
  - A risposta multipla: Il timer è impostato a 45 secondi per permettere all'utente di selezionare una risposta dai quattro bottoni che appaiono entro quel range di tempo.
  - Vero/Falso: Il timer cambia e imposta 30 secondi per la scelta della risposta corretta all'interno di due bottoni.
  
  Per poter proseguire l'utente deve rispondere alle singole domande, diversamente, il bottone proceed non permetterà la prosecuzione alla domanda successiva durante il tempo a disposizione. Nel caso in cui l'utente non inserisca la risposta alla domanda allo scadere del timer automaticamente si procederà alla domanda seguente. Le domande senza alcuna risposta verranno considerate errate. 

- Punteggio:
  - Risposta corretta: punti assegnati.
  - Risposta non data entro il tempo o errata: 0 punti.

3. Visualizzazione dei risultati

- Alla fine del quiz, viene mostrato un grafico a torta:
  - Percentuale di risposte corrette.
  - Percentuale di risposte errate o non date.

4. Pagina di feedback

- Gli utenti possono lasciare i loro commenti e suggerimenti sull'applicazione.
  Tecnologie utilizzate
- HTML: Struttura delle pagine.
- CSS: Design e stile dell'app.
- JavaScript: Logica del quiz, gestione del timer, e interazione con l'utente.
  Flusso dell'app

1. Introduzione:
   - Messaggio con richiesta di accettazione dei termini e pulsante 'Inizia'.
2. Domande:
   - Timer visibile per ogni domanda.
   - Visualizzazione dinamica delle risposte corrette o sbagliate.
3. Risultati:
   - Grafico a torta che riassume le prestazioni dell'utente.
4. Feedback:
   - Modulo per lasciare commenti.
     Contribuire
     I contributi sono benvenuti! Sentiti libero di aprire un problema o inviare una pull request per migliorare l'app
     Licenza
     Questo progetto è distribuito sotto la licenza MIT.
