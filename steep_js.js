
/// Made by Nicolae Antonio (HyperGamer27), Brasov, Romania, jan. 2020 AD

let pi = 3.141592653589793238; // =D

alert("Welcome to steep.js");

const dimX = prompt("Enter the width of the plot in pixels");
const dimY = prompt("Enter the height of the plot in pixels");

let thickness = 2;
let isRunning = 0;
let step;
let ec1, ec2, ec3, ec4;

let x = -dimX / 2;

function f(x)
{
    return eval(ec1);
}

function g(x)
{
    return eval(ec2);
}

function h(x)
{
   return eval(ec3);
}

function w(x)
{
   return eval(ec4);
}

function setup() {
    createCanvas(dimX, dimY);
    background(0);
    stroke(50);
    line(0, dimY / 2, dimX, dimY / 2);
    line(dimX / 2, 0, dimX / 2, dimY);
    document.getElementById("help").addEventListener("click", function()
    {
      alert("This is a Cartesian coordinate system named steep.js made with p5.js (https://p5js.org/) made by Nicolae Antonio (HyperGamer27)@github")
      alert("NOTE : Enter the rules for the functions (as a Javascript expression)");
      alert("NOTE : If you want to tune the frequency use the formula: ampl * f(x * freq), enter 1 in both cases for no alteration.");
      alert("Tune the samples as you consider, more samples more time it will take to finish the plot with the advantage of better visual quality");
      alert("After you entered the function(s) press the <<RUN>> button to see the results.");
      alert("That's all =D");
    })
    document.getElementById("rs").addEventListener("click", function()
    {
      isRunning = 1;
      console.log("running");
      ec1 = document.getElementById("ch1").value
      ec2 = document.getElementById("ch2").value
      ec3 = document.getElementById("ch3").value
      ec4 = document.getElementById("ch4").value
      x = -dimX / 2
      step = 1 / document.getElementById("Range").value
      thickness = document.getElementById("thick").value
    })
    document.getElementById("cl").addEventListener("click", function()
    {
      strokeWeight(1);
      clear();
      stroke(50);
      line(0, dimY / 2, dimX, dimY / 2);
      line(dimX / 2, 0, dimX / 2, dimY);
      isRunning = 0;
    })
}

function ch1()
{
    if(x <= dimX / 2)
    {
      strokeWeight(thickness);
      console.log('draw');
      stroke(230, 230, 0);
      point(x + dimX / 2, -f(x) + dimY / 2);
      x += step;
    }
    else {
      isRunning = 0;
    }
}

function ch2()
{
    if(x <= dimX / 2)
    {
      strokeWeight(thickness);
      console.log('draw');
      stroke(57, 255, 20);
      point(x + dimX / 2, -g(x) + dimY / 2);
      x += step;
    }
    else {
      isRunning = 0;
    }
}

function ch3()
{
    if(x <= dimX / 2)
    {
      strokeWeight(thickness);
      console.log('draw');
      stroke(128, 0, 128);
      point(x + dimX / 2, -h(x) + dimY / 2);
      x += step;
    }
    else {
      isRunning = 0;
    }
}

function ch4()
{
    if(x <= dimX / 2)
    {
      strokeWeight(thickness);
      console.log('draw');
      stroke(66, 125, 240);
      point(x + dimX / 2, -w(x) + dimY / 2);
      x += step;
    }
    else {
      isRunning = 0;
    }
}

function draw() {
  if(isRunning)
  {
     ch1();
     ch2();
     ch3();
     ch4();
   }
}
