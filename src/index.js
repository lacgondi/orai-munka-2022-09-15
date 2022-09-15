import { addTo, avg } from './lista.js';

function updateAvg()
{
    addTo(document.getElementById("input").value);
    alert(avg());
}

document.getElementById('submit').addEventListener('click', updateAvg);