var circlesCount = 100; // Circles count used by the wormhole
var offsetX = 70; // Wormhole center offset (X)
var offsetY = 40; // Wormhole center offset (Y)
var maxDepth = 1.5; // Maximal distance for a circle
var circleDiameter = 10.0; // Circle diameter
var depthSpeed = 0.001; // Circle speed
var angleSpeed = 0.05; // Circle angular rotation speed

var canvas = document.getElementById("backgroundCanvas");
var context = canvas.getContext("2d");
var stats = document.getElementById("stats");


