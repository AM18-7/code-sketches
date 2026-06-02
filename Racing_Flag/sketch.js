let totalCols = 8;
let totalRows = 8;
let unit = 40;

function setup() {
  createCanvas(totalCols*unit, totalRows*unit);
  background(220);
  noStroke();
}

let col = 0;
let row = 0;

function draw() {
  
  let sum = col + row; 
  console.log(row, col, sum, sum % 2);

  if( sum % 2 == 0){
    fill(0);
  }
  else {
    fill(255);
  }

  square(col*unit, row*unit, unit);
  
  col += 1;
  if ( col >= totalCols){
    col = 0;
    row += 1;
  }
  
  if(frameCount >= totalCols*totalRows) { noLoop(); }
}