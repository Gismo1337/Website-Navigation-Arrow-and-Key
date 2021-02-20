"use strict"
let seite = 'seite';
let seitenzahl = 0;
let aktuelleSeite = '';
let inhaltContainer = document.getElementById('inhalt');
let vorBtn = document.getElementById('vorBtn');
let zurBtn = document.getElementById('zurBtn');
let gestartet = false;

// CHANGE THE CONTENT BETWEEN THE ARROWS

let seite1 = `<div id="willkommen" class="flex-center-vertically">Seite 1<br><span id="anleitung">Navigiere mit A oder D durch die Webseite</div>`;

let seite2 = `<div id="willkommen" class="flex-center-vertically">Seite 2<br><span id="anleitung">Navigiere mit A oder D durch die Webseite</div>`;

let seite3 = `<div id="willkommen" class="flex-center-vertically">Seite 3<br><span id="anleitung">Navigiere mit A oder D durch die Webseite</div>`;

let seite4 = `<div id="willkommen" class="flex-center-vertically">Seite 4<br><span id="anleitung">Navigiere mit A oder D durch die Webseite</div>`;

let seite5 = `<div id="willkommen" class="flex-center-vertically">Seite 5<br><span id="anleitung">Navigiere mit A oder D durch die Webseite</div>`;

document.addEventListener('DOMContentLoaded', function() {
  seitenCheck(aktuelleSeite);
  vorUndZurueck();
  vorBtn.addEventListener('click', vorClick);
  zurBtn.addEventListener('click',  zurueckClick);

  if (seitenzahl === 0) {
    createStartseite();
  } 
});

function createStartseite() {
  inhaltContainer.setAttribute('class', 'col s8 center flex-center-vertically')
};

function destroyStartseite() {
  inhaltContainer.setAttribute('class', 'col s8')
};

function seitenCheck(aktuelleSeite) {
  switch (aktuelleSeite) {
    case "seite1":
      inhaltContainer.innerHTML = seite1;
      // Einblenden, wenn der INhalt der Seiten 1 bis 5 oben angezeigt werden soll.
      // destroyStartseite();
      break;
    case "seite2":
      inhaltContainer.innerHTML = seite2;
      break;
    case "seite3":
      inhaltContainer.innerHTML = seite3;
      break;
    case "seite4":
      inhaltContainer.innerHTML = seite4;
      break;    
    case "seite5":
      inhaltContainer.innerHTML = seite5;
      break;
    default:
      
  }
};

function vorUndZurueck() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
      seitenPlus();
      seitenCheck(aktuelleSeite);
    } else if(e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') {
      seitenMinus();
      seitenCheck(aktuelleSeite);
    } else console.log('Du kannst Du mit A und D sowie den Pfeiltasten navigieren!'); 
  });
};

function seitenPlus() {
  if (seitenzahl <= 5) {
    seitenzahl++;
    aktuelleSeite = seite + seitenzahl;  
  } else console.log('Max Seite erreicht');
};

function seitenMinus() {
  if (seitenzahl >= 1) {
    seitenzahl--;
    aktuelleSeite = seite + seitenzahl;  
  } else console.log('Min Seite erreicht');
};

function vorClick() {    
    seitenPlus();
    seitenCheck(aktuelleSeite);
};

function zurueckClick() {    
    seitenMinus();
    seitenCheck(aktuelleSeite);
};


