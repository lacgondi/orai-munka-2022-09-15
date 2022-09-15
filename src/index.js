import {addTo, avg} from './lista.js';

function updateAvg()
{
    addTo(document.getElementById('numIn').innerText);
    alert(avg());
}

document.getElementById('submit').addEventListener(updateAvg)