var userScore = 0;
var cpuScore = 0;
var userRatio = 0;
var cpuRatio = 0;

function cpuRan () {
	var ran = Math.floor(Math.random()*3+1);
	console.log(ran);
	if (ran==1) {
		$("#cpuImg").attr('src', 'img/pascst-pa.jpg');
	}else if (ran==2) {
		$("#cpuImg").attr('src', 'img/pascst-sc.jpg');
	}else {
		$("#cpuImg").attr('src', 'img/pascst-st.jpg');
	};
};

function check () {
	if ($("#userImg").attr('src')==$("#cpuImg").attr('src')) {
		console.log('draw');
	}else if (($("#userImg").attr('src')=='img/pascst-pa.jpg')&&($("#cpuImg").attr('src')=='img/pascst-st.jpg')) {
		console.log('win');
		userScore += 1;
		$("#userScoreBoard").text("User: "+userScore);
	}else if (($("#userImg").attr('src')=='img/pascst-sc.jpg')&&($("#cpuImg").attr('src')=='img/pascst-pa.jpg')) {
		console.log('win');
		userScore += 1;
		$("#userScoreBoard").text("User: "+userScore);
	}else if (($("#userImg").attr('src')=='img/pascst-st.jpg')&&($("#cpuImg").attr('src')=='img/pascst-sc.jpg')) {
		console.log('win');
		userScore += 1;
		$("#userScoreBoard").text("User: "+userScore);
	}else {
		console.log('lose');
		cpuScore += 1;
		$("#cpuScoreBoard").text("CPU: "+cpuScore);
	};
	userRatio = (userScore/(userScore+cpuScore))*100;
	cpuRatio = (cpuScore/(userScore+cpuScore))*100;
	$("#userBar").css("width", userRatio.toString()+"%");
	$("#cpuBar").css("width", cpuRatio.toString()+"%");
	console.log(userRatio);
	console.log(100-userRatio);

};

$(document).ready(function () {
	$("#paBtn").click(function () {
		$("#userImg").attr('src', 'img/pascst-pa.jpg');
		cpuRan();
		check();
	});
	$("#scBtn").click(function () {
		$("#userImg").attr('src', 'img/pascst-sc.jpg');
		cpuRan();
		check();
	});
	$("#stBtn").click(function() {
		$("#userImg").attr('src', 'img/pascst-st.jpg');
		cpuRan();
		check();
	});
})