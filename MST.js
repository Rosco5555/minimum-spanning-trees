// Canvas setup
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables
var vertices = []
var visited = []
var unvisited = []
var vertex_radius = 3
var number_of_vertices = 1000
var line_width = 1

/**
 * First thing we want is when we click somewhere, is to draw a circle and add its position to
 * our list of vertices.
 * 
 * The algorithm is essentially...
 * 
 * keep track of unreached
 *  */

function setup() {
    for (var i = 0; i < number_of_vertices; i++) {
        let x = Math.floor(Math.random() * canvas.width)
        let y =  Math.floor(Math.random() * canvas.height)
        vertices.push([x,y])
        unvisited.push([x,y])
    }
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

function distance(a, b) {
    var c = a[0]-b[0]
    var d = (b[0]-b[1])
    return Math.sqrt( c*c + d*d );
}


function prims() {
    visited.push(vertices[0]);
    unvisited.splice(0, 1)
    var u_index = 0;
    var r_index = 0;

    while (unvisited.length > 0) { 
        var min_total_dist = 100000;
        for (var i = 0; i < visited.length; i++) {
            for (var j = 0; j < unvisited.length; j++) {
                if (distance(visited[i], unvisited[j]) < min_total_dist) {
                    min_total_dist = distance(visited[i], unvisited[j]);
                    u_index = j;
                    r_index = i;
                }
            }
        }
        // set line stroke and line width
        ctx.strokeStyle = 'white';
        ctx.lineWidth = line_width;
    
        // draw a red line
        ctx.beginPath();
        ctx.moveTo(visited[r_index][0], visited[r_index][1]);
        ctx.lineTo(unvisited[u_index][0], unvisited[u_index][1]);
        ctx.stroke();

        visited.push(unvisited[u_index]);
        unvisited.splice(u_index, 1);

    }
}

setup()
draw()
prims()