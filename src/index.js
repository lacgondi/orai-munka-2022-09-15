import { addTo, avg } from './lista.js';

function updateAvg()
{
    addTo(parseFloat(document.getElementById("input").value));
    //alert(avg());
    document.getElementById("out").innerHTML=avg();
}

document.getElementById('submit').addEventListener('click', updateAvg);