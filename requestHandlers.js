function start() {
	console.log("Requset handler 'start' was called.");

	function sleep(milliSeconds) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds);
	}

	sleep(10000);


	return "Hello Start";
}

function upload() {
	console.log("Requset handler 'upload' was called.");
	return "Hello Upload";
}

exports.start = start;
exports.upload = upload;