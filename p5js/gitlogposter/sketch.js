//Iteration 6: 
// Adjust saturation to remove the white parts
//       let sat = s < .01 ? 40 : 80; // saturation




let table;
let n_rows = 0,
  size0 = 0,
  size = 0;

function preload() {
  table = loadTable('data/commits_per_day.csv', 'csv', 'header');
}

function setup() {
  createCanvas( 1000, 1000 * sqrt(2));
  colorMode(HSB, 360, 100, 100, 100);
  n_rows = table.getRowCount();
  size0 = floor(sqrt((width * height) / n_rows));
  size = size0;
  background(95);
  noStroke();
}

function draw() {
  translate(size0/2+10,  size0/2);
  let ix = 0;
  for (let y = 0; y <= height; y += size0) {
    for (let x = 0; x <= width -size0; x += size0) {
      if (ix >= n_rows)
        break;
        
      let commits = table.getNum(ix, 1);
      let s = commits / 245.;
      push();
      rectMode(CENTER);
      let noiseValue = noise(x * .01, y * .01);
      translate(x, y);
      rotate(noiseValue * TWO_PI * 5);
      let bright = 100 - s * 100; //brightness
      let sat = s < .01 ? 40 : 80; // saturation
      let h = 180 + (10 + s * 400) % 80;
      fill(h, sat, bright);
      rect(0, 0, size * .5, size * 20);
      pop();
      ix++;

    }
  }
  size *= .95;
  if (size <= 2) {
    print("Done");
    noLoop();
  }
}