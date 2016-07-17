"use strict";
var container = document.getElementById('container');

var sceneDiv = document.createElement('div');
sceneDiv.className = "scene";
container.appendChild(sceneDiv);

var number = prompt("How many cubes would you like sir?");

for(var i = 0; i < number; i++){

    var cubeDiv = document.createElement('div');
    cubeDiv.className = "cube";
    sceneDiv.appendChild(cubeDiv);

    //Cube Faces
    var front = document.createElement('div');
    front.className = "cube-face front-face";

    var back = document.createElement('div');
    back.className = "cube-face back-face";

    var upper = document.createElement('div');
    upper.className = "cube-face top-face";

    var bottom = document.createElement('div');
    bottom.className = "cube-face bottom-face";

    var left = document.createElement('div');
    left.className = "cube-face left-face";

    var right = document.createElement('div');
    right.className = "cube-face right-face";

    //Add Cube Faces
    cubeDiv.appendChild(front);
    cubeDiv.appendChild(back);
    cubeDiv.appendChild(upper);
    cubeDiv.appendChild(bottom);
    cubeDiv.appendChild(left);
    cubeDiv.appendChild(right);

    //Random Color Styles
    function randomColor(){
    var hue = (Math.floor(Math.random() * 361));
    var sat = (Math.floor(Math.random() * 51)+50);
    var light = (Math.floor(Math.random()* 6)+70);
    var hue = 'hsl(' + hue + ',' + sat + '%,' + light + '%)';
    return hue;
    };

    front.style.backgroundColor = randomColor();
    back.style.backgroundColor =  randomColor();
    upper.style.backgroundColor =  randomColor();
    bottom.style.backgroundColor =  randomColor();
    left.style.backgroundColor =  randomColor();
    right.style.backgroundColor =  randomColor();

    //random Width & Height Cube
    var length = (Math.floor(Math.random() * 101)+50);
    var cube = document.getElementsByClassName('cube');
    cubeDiv.style.width = length + 'px';
    cubeDiv.style.height = length + 'px';

    cubeDiv.style.opacity = .8;

    //Cube Face Length
    var faceLength = length/2;
    var appendTranslate = "translate3d(0,0," + faceLength + "px)";

    front.style.transform = appendTranslate;
    back.style.transform = "rotateY(180deg) " + appendTranslate;
    upper.style.transform = "rotateX(90deg)" + appendTranslate;
    bottom.style.transform = "rotateX(-90deg)" + appendTranslate;
    left.style.transform = "rotateY(-90deg)" + appendTranslate;
    right.style.transform = "rotateY(90deg)" + appendTranslate;

}

var cubez = document.getElementsByClassName("cube");
    for(var i=0; i<cubez.length; i++){
    cubez[i].classList.add("cubeAnimation");
    }
