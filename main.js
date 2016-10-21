function generateDigits(a) {
	if (a < 10) {
		return "0" + String(a);
	} 
	return String(a);
}

function updateClock () {
	var currentTime = new Date();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();

	if (currentHours > 12) {
		currentHours -= 12;
	}

	hourString = generateDigits(currentHours);
	minutesString = generateDigits(currentMinutes);
	secondsString = generateDigits(currentSeconds);

	var timeString = hourString + ":" + minutesString + ":" + secondsString;

	$("#color-clock").text(timeString);
}

function updateHexClock () {
	var currentTime = new Date();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();

	if (currentHours > 12) {
		currentHours -= 12;
	}

	hourString = generateDigits(currentHours);
	minutesString = generateDigits(currentMinutes);
	secondsString = generateDigits(currentSeconds);

	var timeString = "#" + hourString + minutesString + secondsString;

	$("#hex-clock").text(timeString);
	// $("body").css("background-color", timeString);
}

function updateAdvancedClock () {
	if (!$("#adv-clock").hasClass("monospace")) {
		$("#adv-clock").addClass("monospace");
	}

	var currentTime = new Date();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();

	if (currentHours > 12) {
		currentHours -= 12;
	}

	hourString = generateDigits(currentHours);
	minutesString = generateDigits(currentMinutes);
	secondsString = generateDigits(currentSeconds);

	var timeString = hourString + ":" + minutesString + ":" + secondsString;

	timeString = timeString.split(":");
	timeString = timeString.map(function (x) {
		newValue = (+x).toString(16).toUpperCase();
		if (newValue.length === 1) {
			return "0" + String(newValue);
		} else {
			return newValue;
		}
	});
	timeString = timeString.join("")

	$("#adv-clock").text("#" + timeString);
	$("body").css("background-color", "#" + timeString);
}


setInterval(updateClock, 1);
// setInterval(updateHexClock, 1);
setInterval(updateAdvancedClock, 1);