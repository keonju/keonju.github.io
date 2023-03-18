let video;

function setup(){
    createCanvas(800,800);
    rectMode(CENTER);
    angleMode(DEGREES);
	
	video = createCapture(VIDEO);
	video.size(width, height);
	
	video.hide();
}


function draw() {
	background(255, 10);
	
	video.loadPixels();
	video.updatePixels();
	
	for(let y =0; y < video.height; y = y + 14) {
		for(let x =0; x < video.width; x = x + 14) {
			let pixel_index = (y * video.width + x) * 4;
			let darkness = (255 - video.pixels[pixel_index])/255;
			let lightness = video.pixels[pixel_index]/255;

			let 지름 = 10 * darkness;
			// let original_col = video.get(x,y);//[r,g,b,a]
			
			push()
			translate(x,y);
			
			if(darkness > 0.8) { 
				rect(0,0, 지름, 지름);
			}
			if(darkness <= 0.8 && darkness >= 0.5) {
				line(0, 0, 지름, 지름);
				} 
			if(darkness < 0.5){
				line(0,0,지름,지름);
			}
			
			pop();
		} 
	}
}