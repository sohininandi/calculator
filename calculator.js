function cancelClicked() {
    document.getElementById('screen').innerHTML = "";
    document.getElementById('screen').value = "";
}

function oneClicked() {
    document.getElementById('screen').innerHTML = document.getElementById('screen').value+"1";
    document.getElementById('screen').value = document.getElementById('screen').value+"1";
}
function twoClicked() {
    document.getElementById('screen').innerHTML = document.getElementById('screen').value+"2";
    document.getElementById('screen').value = document.getElementById('screen').value+"2";
}
function threeClicked() {
    document.getElementById('screen').innerHTML = document.getElementById('screen').value+"3";
    document.getElementById('screen').value = document.getElementById('screen').value+"3";
}
function fourClicked() {
    document.getElementById('screen').innerHTML = document.getElementById('screen').value+"4";
    document.getElementById('screen').value = document.getElementById('screen').value+"4";
}
function fiveClicked() {
    document.getElementById('screen').innerHTML = document.getElementById('screen').value+"5";
    document.getElementById('screen').value = document.getElementById('screen').value+"5";
}
function sixClicked() {
    document.getElementById('screen').innerHTML = document.getElementById('screen').value+"6";
    document.getElementById('screen').value = document.getElementById('screen').value+"6";
}
function sevenClicked() {
    document.getElementById('screen').innerHTML = document.getElementById('screen').value+"7";
    document.getElementById('screen').value = document.getElementById('screen').value+"7";
}
function eightClicked() {
    document.getElementById('screen').innerHTML = document.getElementById('screen').value+"8";
    document.getElementById('screen').value = document.getElementById('screen').value+"8";
}
function nineClicked() {
    document.getElementById('screen').innerHTML = document.getElementById('screen').value+"9";
    document.getElementById('screen').value = document.getElementById('screen').value+"9";
}
function zeroClicked() {
    document.getElementById('screen').innerHTML = document.getElementById('screen').value+"0";
    document.getElementById('screen').value = document.getElementById('screen').value+"0";
}
function plusClicked() {
    document.getElementById('screen').innerHTML = document.getElementById('screen').value+"+";
    document.getElementById('screen').value = document.getElementById('screen').value+"+";
}
function minusClicked() {
    document.getElementById('screen').innerHTML = document.getElementById('screen').value+"-";
    document.getElementById('screen').value = document.getElementById('screen').value+"-";
}
function divideClicked() {
    document.getElementById('screen').innerHTML = document.getElementById('screen').value+"/";
    document.getElementById('screen').value = document.getElementById('screen').value+"/";
}
function multClicked() {
    document.getElementById('screen').innerHTML = document.getElementById('screen').value+"*";
    document.getElementById('screen').value = document.getElementById('screen').value+"*";
}

function result() {
    document.getElementById('screen').innerHTML = eval(document.getElementById('screen').value);
    document.getElementById('screen').value = eval(document.getElementById('screen').value);
}
function pointClicked() {
    document.getElementById('screen').innerHTML = document.getElementById('screen').value + ".";
    document.getElementById('screen').value = document.getElementById('screen').value +".";
}