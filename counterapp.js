var btnClickear = document.getElementById('btnClick');
var btnResetear = document.getElementById('btnReset');
var counter = document.getElementById('countContent');
var numCounter = 0;
btnClickear.addEventListener('click', OnClickCount);
btnResetear.addEventListener('click', OnClickReset);
function OnClickCount () {
    numCounter++
    counter.textContent = numCounter;
}
function OnClickReset () {
    numCounter = 0;
    counter.textContent = numCounter;
}
