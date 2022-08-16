
const rectangle2 = document.getElementById('rectangle2');
const rectangle3 = document.getElementById('rectangle3');
const rectangle4 = document.getElementById('rectangle4');
const rectangle5 = document.getElementById('rectangle5');
const rectangle6 = document.getElementById('rectangle6');
const rectangles = [rectangle2, rectangle3, rectangle4, rectangle5, rectangle6];

const perso = document.getElementById('perso');



rectangle2.addEventListener('mouseover', function () {
    perso.classList.add('perso-win1');
    setTimeout(() => {
        perso.classList.remove('perso-loose1');
    }, 1000); 
    console.log('rectangle2 is on');    
} );
rectangle2.addEventListener('mouseout', function () {
    setTimeout(() => {
        perso.classList.remove('perso-win1');
    }, 100000); 
    perso.classList.add('perso-loose1');
    console.log('rectangle2 is off');
} );

rectangle3.addEventListener('mouseover', function () {
    perso.classList.add('perso-win2');
    perso.classList.remove('perso-loose2');
    perso.classList.remove('perso-loose1');
    console.log('rectangle3 is on');
} );
rectangle3.addEventListener('mouseout', function () {
    perso.classList.remove('perso-win2');
    perso.classList.remove('perso-win1');
    perso.classList.add('perso-loose2');
    console.log('rectangle3 is off');
} );

rectangle4.addEventListener('mouseover', function () {
    perso.classList.add('perso-win3');
    perso.classList.remove('perso-loose3');
    perso.classList.remove('perso-loose2');
    console.log('rectangle4 is on');
} );

rectangle4.addEventListener('mouseout', function () {
    perso.classList.remove('perso-win3');
    perso.classList.remove('perso-win2');
    perso.classList.add('perso-loose3');
    console.log('rectangle4 is off');
} );

rectangle5.addEventListener('mouseover', function () {
    perso.classList.add('perso-win4');
    perso.classList.remove('perso-loose4');
    perso.classList.remove('perso-loose3');
    console.log('rectangle5 is on');
} );
rectangle5.addEventListener('mouseout', function () {
    perso.classList.remove('perso-win4');
    perso.classList.remove('perso-win3');
    perso.classList.add('perso-loose4');
    console.log('rectangle5 is off');
} );

rectangle6.addEventListener('mouseover', function () {
    perso.classList.add('perso-win5');
    perso.classList.remove('perso-loose5');
    perso.classList.remove('perso-loose4');
    console.log('rectangle6 is on');
} );
rectangle6.addEventListener('mouseout', function () {
    perso.classList.remove('perso-win5');
    perso.classList.remove('perso-win4');
    perso.classList.add('perso-loose5');
    console.log('rectangle6 is off');
} );



function rectangle2on () {
    rectangle2.style.backgroundColor = 'rgb(203, 172, 113)';
    rectangle2.style.height = '524px';
    rectangle2.style.border = 'none';
    rectangle2.style.transition = 'all 1s';
    // put two animations in a array and call them one after the other
}  

function rectangle2Off (){
   rectangle2.style.height = '524px';
    rectangle2.style.border = '1px dotted black';
    rectangle2.style.backgroundColor = '#1d1d1d';
    rectangle2.style.transition = 'all 1s';
}

function rectangle3on () {
    rectangle3.style.backgroundColor = 'rgb(203, 172, 113)';
    rectangle3.style.height = '350px';
    rectangle3.style.border = 'none';
    rectangle3.style.transition = 'all 1s';
}
function rectangle3Off (){
    rectangle3.style.height = '350px';
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
function rectangle5on () {
    rectangle5.style.backgroundColor = 'rgb(203, 172, 113)';
    rectangle5.style.height = '5vh';
    rectangle5.style.border = 'none';
    rectangle5.style.transition = 'all 1s';
}
function rectangle5Off (){
    rectangle5.style.height = '5vh';
    rectangle5.style.border = '1px dotted black';
    rectangle5.style.backgroundColor = '#1d1d1d';
    rectangle5.style.transition = 'all 1s';
}
function rectangle6on () {
    rectangle6.style.backgroundColor = 'rgb(203, 172, 113)';
    rectangle6.style.height = '2vh';
    rectangle6.style.border = 'none';
    rectangle6.style.transition = 'all 1s';
}
function rectangle6Off (){
    rectangle6.style.height = '2vh';
    rectangle6.style.border = '1px dotted black';
    rectangle6.style.backgroundColor = '#1d1d1d';
    rectangle6.style.transition = 'all 1s';
}