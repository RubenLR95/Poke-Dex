import { callAPI } from "./api.js";

const pokemon = document.getElementById('pokemon');
const btnPok = document.getElementById('btnPok');
const pokemonCard = document.getElementById('pokemon-card');
const output = document.getElementById('output');

btnPok.addEventListener('click', ()=>{
   
    callAPI(`/pokemon/${name}`)
    .then(data=>{
        output.textContent= JSON.stringify(data,null,2);
    })
    .catch(err =>{
        output.textContent = "Error: " + err.message;
    });


});