// 색상 문자열 리스트 Array
let coolors = ["#cbf3f0", "#2ec4b6", "#ff9f1c","#ffbf69"];
let coolors2 = ["#c78283", "#f3d9dc", "#b49286","#744253"];
let colorIndex = 0;
console.log(coolors[0]);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  rectMode(CORNER);
}

let dragX = 0;
let dragY = 0;
function mouseDragged() {
	// 마우스 드래그해서 도형 위치 이동해보기.
	dragX = mouseX;
	dragY = mouseY;
}
function mouseClicked() {
	// 마우스 클릭해서 색깔 바꿔보기.
	colorIndex = colorIndex + 1;
	colorIndex = colorIndex % 4;
	console.log(colorIndex);
}

// 현재까지 우리가 만든 알파벳 도형 함수들
// myRectA(), myCircleB(), myArcD(), myRectE(), myTriM(), myCircleO()
function draw() {
  background(0);
  drawGrid(20);         // 모눈종이표
  showCoordinateNum();  // 마우스 현재 위치 좌표값
	noStroke();
	
	// 마우스 위치 값 => 도형 위치 연습
	push();
	translate(mouseX, mouseY);
	rectMode(CENTER);
	noFill();
	strokeWeight(5);
	stroke(coolors2[colorIndex]);
	myRectMouseA();
	pop();
	
	// 마우스 위치 값 => 도형 사이즈 연습
	let cx = constrain(mouseX, 100, 200);
	let mapX = map(mouseX, 0, width, 0.5, 1.5);
	push();
	translate_guide(width/4 + cx, height/2);
	fill(coolors[colorIndex]);
	scale(mapX, 1.0);
	myTriN();
	pop();
	
	push();
	translate_guide(width/2, height/2);
	myTriW();
	pop();

	
	// 마우스 위치 값 => 도형 회전
	// let rot = map(mouseX, 0, width, 0, 180);
	push();
	translate_guide(0, height/2);
	myArcD();
	pop();
}
