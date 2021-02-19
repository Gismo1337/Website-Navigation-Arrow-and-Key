"use strict"
let seite = 'seite';
let seitenzahl = 0;
let aktuelleSeite = '';
let inhaltContainer = document.getElementById('inhalt');
let vorBtn = document.getElementById('vorBtn');
let zurBtn = document.getElementById('zurBtn');
let gestartet = false;

// CHANGE THE CONTENT BETWEEN THE ARROWS

let seite1 = ` <div class="row">
<div class="col s12">
  <div class="card">
    <div class="card-image">
      <img src="https://materializecss.com/images/sample-1.jpg">
      <span class="card-title">Card Title</span>
    </div>
    <div class="card-content">
      <p>I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
    </div>
  </div>
</div>
</div>`;

let seite2 = `<div class="row">
              <div class="col s12" ><div class="collection">
              <a href="#!" class="collection-item">Alvin</a>
              <a href="#!" class="collection-item active">Alvin</a>
              <a href="#!" class="collection-item">Alvin</a>
              <a href="#!" class="collection-item">Alvin</a>
            </div>
              </div>`;

let seite3 = `<div class="row">
              <div class="col s12 center red" ><h1>Seite 3</h1></div>
              <div class="col s12 center blue" >Veroeffentliche hier deinen Inhalt</div>
              <div class="col s12 center wgite" >Denk dran, nutze MaterializeCSS</div>
              </div>`;

let seite4 = `<div class="row">
              <div class="col s12 center red" ><h1>Seite 4</h1></div>
              <div class="col s12 center blue" >Veroeffentliche hier deinen Inhalt</div>
              <div class="col s12 center wgite" >Denk dran, nutze MaterializeCSS</div>
              </div>`;

let seite5 = `<div class="row">
              <div class="col s12 center red" ><h1>Seite 5</h1></div>
              <div class="col s12 center blue" >Veroeffentliche hier deinen Inhalt</div>
              <div class="col s12 center wgite" >Denk dran, nutze MaterializeCSS</div>
              </div>`;

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
      destroyStartseite();
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


