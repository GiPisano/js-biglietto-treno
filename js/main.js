// percentuali di sconto modificabili in base alle necessità 
let underAgePercentage = 20;
let overAgePercentage = 40;

/* ************** */

const ticket = document.getElementById('prezzo-biglietto');

// chiedo all'utente quanti km dovrà percorrere
const userKm = parseInt(prompt('Quanti chilometri dovrai percorrere?'));

// chiedo all'utente quanti anni ha 
const userAge = parseInt(prompt('Quanti anni hai?'));

// prezzo biglietto
const ticketPrice = 0.21; 

// sconto minorenne
let underAgeDiscount = ticketPrice * underAgePercentage / 100;

// sconto over 65
let overAgeDiscount = ticketPrice * overAgePercentage / 100;

// prezzo per minorenne
const underAgePrice = ticketPrice - underAgeDiscount;

// prezzo per over 65
const overAgePrice = ticketPrice - overAgeDiscount;

// prezzo finale 
let overAgeCost = overAgePrice *  userKm;
let underAgeCost = underAgePrice * userKm;
let ticketPriceCost = ticketPrice *  userKm;

if(isNaN(userAge) || isNaN(userKm) || userAge == null || userKm == null){
    ticket.innerText = 'I dati inseriti non sono corretti riprova'
} else if(userAge > 64){
    ticket.innerText = 'Il prezzo del tuo biglietto è di ' + overAgeCost.toFixed(2) + '€'
} else if(userAge < 18){
    ticket.innerText = 'Il prezzo del tuo biglietto è di ' + underAgeCost.toFixed(2) + '€'
} else{
    ticket.innerText = 'Il prezzo del tuo biglietto è di ' + ticketPriceCost.toFixed(2) + '€'
};

