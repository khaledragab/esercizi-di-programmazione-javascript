/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/
var anno_corrente = 2018 ; 
var anno_di_nascità = 1991 ; 
var età = anno_corrente - anno_di_nascità; 
var anno_mancante = 100 - età ;
console.log("anno corrente = " + anno_corrente + ", anno di nascità = " + anno_di_nascità 
            + " , eta = " + età + " , anno mancante = " + anno_mancante ); 
