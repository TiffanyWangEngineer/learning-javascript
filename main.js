$(document).ready(function() {  
    'use strict'; // jQuery is making sure that the browser has loaded all of the HTML before executing JavaScript.
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    
    /* Draw green dots when click mouse.*/

    /*
    var tool = new Tool();
    tool.onMouseDown = function(event) {
        var c = paper.Shape.Circle([event.point.x, event.point.y], 20);
        c.fillColor = 'green';
    };
    paper.view.draw();
    */
   
    /* Green Circle and Hello world. */
    var c = Shape.Circle(200, 200,80);
    c.fillColor = 'green';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontsize = 20;
    text.content = 'Hello world.';

    console.log("main.js loaded");
});