var $currentDay = $("#currentDay");

var currentHour = moment().hours();
function clock() {
	var now = moment().format("MMMM Do YYYY, h:mm:ss A");
	$currentDay.html(now);
	setTimeout(clock, 1000);
	// console.log(now);
}

clock();
