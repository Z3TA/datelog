
dateLog = function (msg) {

	if(typeof msg != "string") {
		msg = JSON.stringify(msg);
	}
	
	console.log(myDate() + " " + msg);

	function myDate() {
		var d = new Date();

		var hour = addZero(d.getHours());
		var minute = addZero(d.getMinutes());
		var second = addZero(d.getSeconds());

		var day = addZero(d.getDate());
		var month = addZero(1+d.getMonth());
		var year = d.getFullYear();

		return year + "-" + month + "-" + day + " (" + hour + ":" + minute + ":" + second + ")";

		function addZero(n) {
			if(n < 10) return "0" + n;
			else return n;
		}
	}
}

module.exports = dateLog;