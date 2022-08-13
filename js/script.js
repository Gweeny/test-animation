
const rectangle2 = document.getElementById('rectangle2');
const rectangle3 = document.getElementById('rectangle3');
const rectangle4 = document.getElementById('rectangle4');
const rectangle5 = document.getElementById('rectangle5');
const rectangle6 = document.getElementById('rectangle6');
const rectangles = [rectangle2, rectangle3, rectangle4, rectangle5, rectangle6];

const perso = document.getElementById('perso');


function rectangle2on () {
    rectangle2.style.backgroundColor = 'rgb(203, 172, 113)';
    rectangle2.style.height = '50vh';
    rectangle2.style.border = 'none';
    rectangle2.style.transition = 'all 1s';
    perso.animate([
        {transform: 'translateX(0px)'},
        {transform: 'translateX(100px)'},
    ], {
        duration: 1000,
        iterations: InputEvent.INPUT_EVENT_LENGTH
    });
    perso.animate([
        {transform: 'translateY(0px)'},
        {transform: 'translateY(-110px)'},
    ], {
        duration: 1000,
        iterations: InputEvent.INPUT_EVENT_LENGTH
    });

}

function rectangle2Off (){
   rectangle2.style.height = '50vh';
    rectangle2.style.border = '1px dotted black';
    rectangle2.style.backgroundColor = '#1d1d1d';
    rectangle2.style.transition = 'all 1s';
}



// anim perso

