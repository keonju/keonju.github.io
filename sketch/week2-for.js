// 색상 문자열 리스트 Array
let coolors = ["#f2d0a9", "#2ec4b6", "#ff9f1c","#ffbf69"];
let coolors2 = ["#d88c9a", "#cbf3f0", "#f1e3d3", "#99c1b9"];
let colorIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
	// 마우스 클릭해서 색깔 바꿔보기.
	colorIndex = colorIndex + 1;
	colorIndex = colorIndex % 4;
	console.log(colorIndex);
}
// myRectA(), myCircleB(), myArcD(), myRectE(), myTriM(), myCircleO()
function draw() {
    background(0);
    drawGrid(20);         //
    showCoordinateNum();  //
		noStroke();
	
	push();
	for(let i = 1; i < 6; i = i+1){
		// translate(i, 0);
		// rect(50 * i, 20 * i, 25, 10);
		
	}
	pop();	
	

	for(let x = 0; x < width; x = x + 100){
		push();
		fill(coolors[colorIndex]);
		translate(x, 0);
		myTriM();
		pop();

		push();
		fill(coolors2[colorIndex]);
		translate(0, 100 + x);
		myTriW();
		pop();
	
	}
}