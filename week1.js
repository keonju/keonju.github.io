let 속도 = 0.5;
let ellipseWidth = 50 * 2;
let ellipseColor = "#0496ff";
console.log(ellipseWidth);
console.log(ellipseColor);

function setup() {      //셋업은 한 번 실행
	createCanvas(windowWidth, windowHeight);
	background(0);
	angleMode(DEGREES);
	rectMode(CENTER); //사각형 그릴 때 모드
	noStroke();
}

function draw() {       //드로우는 계속 반복
	background(0);
	drawGrid(20);  				// 모눈종이표
	showCoordinateNum();  // 마우스 현재 위치 좌표값
	noFill();
	stroke(255);
	
// 	rect_guide(width/2, height/2, 100, 200, 20, 100, 50, 100);
	push()
	fill('#AFBED1');
	translate(100, 400);
	rect_guide(0, 0, 200, 100, 100, 100, 100, 100);
	pop();
	
	push()
	strokeWeight(4);
	stroke('#DBD8F0');
	translate(width * 0.5, height * 0.5);
	ellipse_guide(0, 0, 100, 100);
	pop();
	
// arc(50, 50, 100, 100, 90, 270, CHORD);
	
	push()
	fill(255, 146, 194);
	noStroke();
	translate_guide(50, 50);
	arc_guide(0, 0, 100, 100, 270, 270+180, CHORD);
	pop();
	
	push()
	fill('#FFD07B')
	translate(50,50); //위에 있는 translate 누적 적용
	triangle(0, 100, 50, 0, 100, 100);
	pop();
	
	push()
	translate_guide(10, 10);
	//rect(0, 0, 100, 100);
	pop();
	
	// push()
	// translate_guide(200, 200);
	// ellipse_guide(0, 0, 100, 100);
	// pop()
	
	
}