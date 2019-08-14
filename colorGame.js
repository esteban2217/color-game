var colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)',
];

var squares = document.querySelectorAll('.square');
var pickedColor = colors[3];
var colorDisplay = document.getElementById('colorDisplay');

colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length; i++){
    //add initial colors to squres
    squares[i].style.backgroundColor = colors[i];
    //add clikc listeners to squares
    squares[i].addEventListener('click', function(){
    //grab color of clicked squares
    var clickedColor = this.style.backgroundColor;
    //compare to pickedColor
    if(clickedColor === pickedColor){
        alert('Correct'); 
    } else{
        alert('Wrong')
    }
    

    })
}