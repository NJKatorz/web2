/* eslint-disable no-var */
/* eslint-disable no-alert */
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

getValue();
function getValue(){
    var line = document.getElementById('oui');
    alert("Valeur = ", line.value);
}

//      <button type="submit" onclick="getValue();" class="btn btn-primary">Create table</button>
//      <input type="submit" value="Create table" onclick="getValue();" class="btn btn-primary">