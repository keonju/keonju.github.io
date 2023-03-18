function setup() {
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(0);
  drawGrid(20);      // 모눈종이표
  showCoordinateNum();  // 마우스 현재 위치 좌표값	
	// myRectA();
	// myCircleB();
	// myArcD();
	// myRectE();
	// myTriM();
	// myCircleO();

	push();
	translate(50, 100);
	myCircleB();
	pop();
	
	push();
	translate(100, 100);
	myCircleO();
	pop();
}

