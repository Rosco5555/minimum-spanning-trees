// Canvas setup
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
canvas.width = window.innerWidth
canvas.height = window.innerHeight;

// Variables
vertices = []
vertex_radius = 15

/**
 * First thing we want is when we click somewhere, is to draw a circle and add its position to
 * our list of vertices.
 *  */
function mouseClicked(event) {
    let x = event.clientX;
    let y = event.clientY;
    vertices.push([x,y])
    drawCircle(x, y)
}

function drawCircle(x , y) {
    ctx.beginPath();
    ctx.arc(x, y, vertex_radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
}

function drawVertices() {
    for (var i = 0; i < vertices.length; i++) {
        drawCircle(vertices[i][0], vertices[i][1])
    }
}
function draw() {
    drawVertices();
}


canvas.addEventListener("click", mouseClicked);