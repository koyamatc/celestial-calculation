//
var DegreePerHour = 15;
var DegMinutePerMinute = 15;
var DegSecondPerSecond = 15; 
var SecondsPerMinute = 60;
var SecondsPerHour = 3600;
// Set the unit values in milliseconds.
var msecPerMinute = 1000 * 60;
var msecPerHour = msecPerMinute * 60;
var msecPerDay = msecPerHour * 24;

var RadiansPerDegree = Math.PI / 180;
// ** Convert Time to Degrees **
// parameters 
// 		hours 	
//		minutes 
//		seconds	
//	Output
//    degrees  	
function timeToDegrees(hours, minutes, seconds){
	var degrees = hours * DegreePerHour;
	degrees	+= minutes * DegMinutePerMinute / 60 ;
	degrees += seconds * DegSecondPerSecond / 3600;

	return {degrees:degrees};
}

// ** Convert Time to Radians **
// parameters 
// 		hours 	
//		minutes 
//		seconds	
//	Output
//    radians  	
function timeToRadians(hours, minutes, seconds){
	var degrees = hours * DegreePerHour;
	degrees	+= minutes * DegMinutePerMinute / 60 ;
	degrees += seconds * DegSecondPerSecond / 3600;

	var radians = degrees * RadiansPerDegree;

	return {radians:radians};
}

// ** Convert Degrees to Degrees **
// parameters 
// 		degrees 
//		minutes 
//		seconds	
//	Output
//	  degrees	
function degreesToDegrees(degrees, minutes, seconds){
	var degs = degrees;
	degs += minutes / SecondsPerMinute;
	degs += seconds / SecondsPerHour;

	return {degrees:degs};
}

// ** Convert Degrees to Radians **
// parameters 
// 		degrees 
//		minutes 
//		seconds	
//	Output
//	  radians	
function degreesToRadians(degrees, minutes, seconds){
	var degs = degrees;
	degs += minutes / SecondsPerMinute;
	degs += seconds / SecondsPerHour;

	var radians = degs * RadiansPerDegree;

	return {degrees:radians};
}
// ** Convert Degrees to Time **
// parameters 
//    deg, degMinutes, degSeconds
//	Output
//	  hours, minutes, seconds	
function degreesToTime( auDegrees, auMminutes, auSeconds ){
	var totalS = auDegrees * 240 + auMminutes * 4 + auSeconds * 0.0666667;
	var hours = Math.floor(totalS / 3600);
	var minutes = Math.floor((totalS % 3600) / 60);
	var seconds = (totalS % 3600) % 60;

	return {hours:hours, minutes: minutes, seconds: seconds};
}

// ** Get Sidereal Time **
// parameters 
//    観測日時
// 		year, month, day 
//		hours, minutes, seconds 
//		観測地点（東経）
//    auDegrees, auMinutes, auSeconds
//    観測日の世界時0時のグリニッジ視恒星時
//		thetaH, thetaM, thetaS 
//	Output
//	  siderealTime	
function getSiderealTime(
	datetime, 
	auDegrees,auMinutes,auSeconds,
	thetaH, thetaM, thetaS
	//thetaTime  
	){
		degreesToTime(auDegrees, auMinutes, auSeconds);
		//　世界時0時からの経過時間
		var dateMsec = datetime.getTime();
		console.log(dateMsec);
		dateMsec -= 9 * 60 * 60 * 1000;
		console.log(dateMsec);

		var days = Math.floor(dateMsec / msecPerDay );
		dateMsec = dateMsec - (days * msecPerDay );

	// Calculate the hours, minutes, and seconds.
	var hours = Math.floor(dateMsec / msecPerHour );
	dateMsec = dateMsec - (hours * msecPerHour );

	var minutes = Math.floor(dateMsec / msecPerMinute );
	dateMsec = dateMsec - (minutes * msecPerMinute );

	var seconds = Math.floor(dateMsec / 1000 ); 

	console.log(hours + "h" + minutes + "m" + seconds + "s");

	//return {degrees:radians};
}
