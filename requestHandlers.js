function start (){
	console.log("Requset handler 'start' was called.");
	return "Hello Start";
}

function upload (){
	console.log("Requset handler 'upload' was called.");
	return "Hello Upload";
}

exports.start = start;
exports.upload = upload;