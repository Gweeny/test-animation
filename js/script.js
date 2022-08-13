
const rectangle2 = document.getElementById('rectangle2');
const rectangle3 = document.getElementById('rectangle3');
const rectangle4 = document.getElementById('rectangle4');
const rectangle5 = document.getElementById('rectangle5');
const rectangle6 = document.getElementById('rectangle6');
const rectangles = [rectangle2, rectangle3, rectangle4, rectangle5, rectangle6];

const perso = document.getElementById('perso');
// récupérer la position du perso
function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return {
        x: xPosition,
        y: yPosition
    };
}

function animateX(){

    perso.animate([
        { top: '17px' },
        // { transform: 'translateX(0px)' },
        // { transform: 'translateX(100px)' },
        { left: '176px' }
        // { left: '176px' }
        // keep position at the end of the animation
    ], {
        duration: 1000,
        fill: 'forwards'
    });
} 

function animateY(){
    
    perso.animate([
        // { left: '176px' },
        // { transform: 'translateY(0px)' },
        // { transform: 'translateY(100px)' }
        { bottom: '16px' },
        { top: '20px' }
    ], {
        duration: 1000,
        // stop at the end of the animation
        fill: 'forwards'

    });
} 



function renderAnimateX(){
    animateX();
    setTimeout(animateY, 1000);
}
renderAnimateX();




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
