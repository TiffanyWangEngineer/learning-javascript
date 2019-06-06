$(document).ready(function() {  
    'use strict'; // jQuery is making sure that the browser has loaded all of the HTML before executing JavaScript.
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    
    var tool = new Tool();
    tool.onMouseDown = function(event) {
        var c = paper.Shape.Circle([event.point.x, event.point.y], 20);
        c.fillColor = 'green';
    };

    paper.view.draw();           
    
});