# Progetto-buildweek1-Team2

Questo quiz consente agli utenti di verificare le proprie conoscenze attraverso la selezione di domande vero/falso e a risposta multipla.Il quiz include un timer per ogni domanda, un riepilogo finale con grafico a torta nel quale l'utente potrà riscontrare i propri risultati, e una pagina di feedback per raccogliere opinioni finali.

---

## Funzionalità principali

1. Schermata di introduzione

La prima schermata, denominata come "Homepage.html" all'interno del progetto, mostra i termini d'uso, richiedendo all'utente di accettare di non ricevere aiuto esterno durante il quiz.
Solo dopo aver accettato i termini, attraverso la spunta del checkbox posto accanto alla promessa, l'utente può premere il pulsante "Proceed" per accedere direttamente alla pagina del quiz vero e proprio.

2. Domande del quiz

La seconda pagina, ovvero la pagina principale del quiz denominata come "quiz.html", presenta il vero e proprio test a cui l'utente si sottopone composto da due tipi di domande:

- A risposta multipla: Il timer è impostato a 45 secondi per permettere all'utente di selezionare una risposta dai quattro bottoni che appaiono entro quel range di tempo.
- Vero/Falso: Il timer cambia ed è impostato a 30 secondi per la scelta della risposta corretta "true/false" all'interno di due bottoni.

Per poter proseguire l'utente deve rispondere alle singole domande; diversamente, il bottone proceed non permetterà la prosecuzione alla domanda successiva durante il tempo a disposizione. Nel caso in cui l'utente non inserisca la risposta alla domanda allo scadere del timer automaticamente si procederà alla domanda seguente. Le domande senza alcuna risposta verranno considerate errate.

- Punteggio:
  - Risposta corretta: punti assegnati.
  - Risposta non data entro il tempo o errata: 0 punti.

3. Visualizzazione dei risultati

La terza pagina, denominata "results.html", contiene un grafico a torta che mostra l'esito del test al suo interno. Vengono specificate anche la percentuale e il numero delle risposte corrette ed errate.

In fondo alla pagina sono presenti due bottoni, "Show Answers" e "Rate us". Il pulsante "Show Answers" ha come funzionalità quella di mostrare al click una lista che racchiude sia le domande corrette sia quelle errate, segnalando le eventuali risposte errate da parte dell'utente.
Il bottone "Rate us" porta l'utente alla pagina finale, denominata "review.html".

4. Pagina di feedback

Gli utenti possono lasciare i loro commenti e suggerimenti sull'applicazione (il commento testuale è opzionale).
Il punteggio di feedback è obbligatorio prima di poter uscire dalla pagina. L'utente può cliccare su una stella per un punteggio che va da 1 a 10.
Cliccando su "MORE INFO" l'utente viene rimandato su un altro sito web.

---

## Tecnologie utilizzate:

- **HTML**: Struttura delle pagine.
- **CSS**: Design e stile dell'app, creazione timer.
- **JavaScript**: Logica del quiz, gestione del timer, e interazione con l'utente.
- **SVG(Scalable Vector Graphics)**: Creazione grafica vettoriale scalabile per la realizzazione delle stelle di review.
- **Chart.js**: Libreria esterna per la creazione e gestione del grafico a ciambella per le risposte al test.

## Requisiti del sistema:

- Navigazione compatibile con la maggior parte dei browser moderni.

## Licenza

Il progetto è sotto licenza MIT.

## Developers

- Samuele Converso
- Chiara Giovanna Nughedu
- Ciro Luigi D'Aniso
- Federico Lepore
- Francesca Palmeri
- Sachidu Warnakulasuriya Fernando
