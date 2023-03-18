
let slider1, slider2, slider3, slider4;
let slider1_value = 0;
let slider2_value = 0;
let slider3_value = 0, slider4_value = 0;
// 슬라이더 가로 위치에 일괄적으로 쓸 변수.
let slider_xpos = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	angleMode(DEGREES)
	rectMode(CENTER)
	
	/* slider */
	
	slider1 = createSlider(40, 70, 1);
	slider1.position(slider_xpos, 20);
	
	slider2 = createSlider(0, 255, 1);
	slider2.position(slider_xpos, 60);
	
	slider3 = createSlider(-10, 10, 1);
	slider3.position(slider_xpos, 100);
	
	slider4 = createSlider(1, 20, 1);
	slider4.position(slider_xpos, 140);

}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background("#2C0735")
	noStroke()
	
	// 슬라이더 메뉴
	text('반복 간격', slider_xpos, 20);
	text('배경 패턴 색 0-255', slider_xpos, 60);
	text('배경 패턴 세로 scale', slider_xpos, 100);
	text('속도', slider_xpos, 140);

  slider1_value = slider1.value();  // 다른 정수나 소수를 곱해서 크거나 작은 숫자 범위로 계산 가능.
	slider2_value = slider2.value();
	slider3_value = slider3.value() * 0.05; // -0.5 ~ 0.5
	slider4_value = slider4.value() * 0.01; // 1 * 0.05 ~ 50 * 0.05
	
	
	// 반복, 스케일, 회전
	let gap = slider1_value; //50;
	for(let x = 0; x < width; x = x + gap) {
		for(let y = 0; y < height; y = y + gap) {
			push();
			fill(255,20)
			translate(x, y);
			rotate(slider1_value);
			scale(0.5, slider3_value);
			myTriW(slider1_value, 75);
			pop();
		}
	}
	
	push();
	translate(width * 0.2, height * 0.2);
	scale(2.0);
	fill("#FAA275");
	myArcD();
	pop();
	
	push();
	translate((width * 0.6) + slider2_value * 0.2, height*0.2);
	scale(2.0);
	animA();
	pop();
	
	
	push();
	translate(width*0.2, height*0.6);
	fill("#858AE3");
	scale(2.0);
	myTriW();
	pop();
	
	push();
	translate(width * 0.6, height*0.6);
	fill("#4E148C");
	scale(2.0);
	myTriN();
	pop();

	
}
