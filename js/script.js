
const rectangle2 = document.getElementById('rectangle2');
const rectangle3 = document.getElementById('rectangle3');
const rectangle4 = document.getElementById('rectangle4');
const rectangle5 = document.getElementById('rectangle5');
const rectangle6 = document.getElementById('rectangle6');
const rectangles = [rectangle2, rectangle3, rectangle4, rectangle5, rectangle6];

const perso = document.getElementById('perso');
// detect if the mouse is over the rectangle2 is on and console log it
// if (rectangle2.addEventListener('mouseover', rectangle2on)) {
    //     console.log('rectangle2 is on');
    // }elseif (rectangle5.addEventListener('mouseover', rectangle2Off)) {
        //     perso.classList.add('perso-win2');
        //     console.log('rectangle5 is on');
        // }
rectangle2.addEventListener('mouseover', function () {
    perso.classList.add('perso-win1');
    perso.classList.remove('perso-loose1');
    console.log('rectangle2 is on');    
} );
rectangle2.addEventListener('mouseout', function () {
    perso.classList.remove('perso-win1');
    perso.classList.add('perso-loose1');
    console.log('rectangle2 is off');
} );

function rectangle2on () {
    rectangle2.style.backgroundColor = 'rgb(203, 172, 113)';
    rectangle2.style.height = '50vh';
    rectangle2.style.border = 'none';
    rectangle2.style.transition = 'all 1s';
    // put two animations in a array and call them one after the other
}  

function rectangle2Off (){
   rectangle2.style.height = '50vh';
    rectangle2.style.border = '1px dotted black';
    rectangle2.style.backgroundColor = '#1d1d1d';
    rectangle2.style.transition = 'all 1s';
}

function rectangle3on () {
    rectangle3.style.backgroundColor = 'rgb(203, 172, 113)';
    rectangle3.style.height = '30vh';
    rectangle3.style.border = 'none';
    rectangle3.style.transition = 'all 1s';
}
function rectangle3Off (){
    rectangle3.style.height = '30vh';
    rectangle3.style.border = '1px dotted black';
    rectangle3.style.backgroundColor = '#1d1d1d';
    rectangle3.style.transition = 'all 1s';
}
function rectangle4on () {
    rectangle4.style.backgroundColor = 'rgb(203, 172, 113)';
    rectangle4.style.height = '15vh';
    rectangle4.style.border = 'none';
    rectangle4.style.transition = 'all 1s';
}
function rectangle4Off (){
    rectangle4.style.height = '15vh';
    rectangle4.style.border = '1px dotted black';
    rectangle4.style.backgroundColor = '#1d1d1d';
    rectangle4.style.transition = 'all 1s';
}