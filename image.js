
let img;
function preload(){
    img = loadImage("cat.jpg");
}

function setup(){
    createCanvas(327*2,410*2);
    img.resize(width,height);
    // image(img,0,0,width,height);
    img.loadPixels();

    rectMode(CENTER);
    angleMode(DEGREES);
}

function keyPressed(){
	currentKey = key;
	console.log(key, currentKey);
}

function draw() {
	for(let y =0; y < img.height; y = y + 10) {
		for(let x =0; x < img.width; x = x + 10) {
			let pixel_index = (y * img.width + x) * 4;
			let darkness = (255 - img.pixels[pixel_index])/255;
			let lightness = img.pixels[pixel_index]/255;

			let original_col = img.get(x,y);//[r,g,b,a]
			
			push()
			translate(x,y);
			
			if(darkness > 0.5) { 
				push();
				scale(0.2);
				fill(original_col);
				myCircleB(); 
				pop();
			}
			if(darkness <= 0.5) {
				push();
				scale(0.2);
				stroke(original_col);
				myTriM(); 
				pop();

				} 
			
			pop();
		} 
	}
}