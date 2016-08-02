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

		var h = hours,
				m = minutes,
				s = seconds;

		h *= 15; 
		m *= 15;
		s *= 15;

		if (Math.floor(s / 60) > 0 ){
  		m += Math.floor(s / 60);
  		s -= Math.floor(s / 60)*60;  
		}
		if (Math.floor(m / 60) > 0 ){
  		h += Math.floor(m / 60);
  		m -= Math.floor(m / 60)*60;  
		}

		return {degrees:degrees, deg:h, min: m, sec: s};
};

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
	
	var hours = Math.floor(totalS / SecondsPerHour);
	totalS = totalS - (hours * SecondsPerHour);
	
	var minutes = Math.floor(totalS / SecondsPerMinute);
	totalS = totalS - (minutes * SecondsPerMinute);
	var seconds = Math.floor(totalS);
	var	milliseconds = (totalS - seconds) * 1000 ; 
	console.log(milliseconds);

	return {hours:hours, 
					minutes: minutes, 
					seconds: seconds,
					milliseconds: milliseconds
				 };
}

// ** Get Sidereal Time **
// parameters 
//    観測日時
// 		dateTime 
//		観測地点（東経）
//    auDegrees, auMinutes, auSeconds
//    観測日の世界時0時のグリニッジ視恒星時
//		thetaTime 
//	Output
//	  siderealTime	
function getSiderealTime(
	datetime, 
	auDegrees,auMinutes,auSeconds,
	thetaTime	){

	// その日の世界時時のグリニッジ視恒星時
	var theta0 = thetaTime.getTime();
	theta0 += 9 * msecPerHour;

	// 東経を時間に変換
	var auTime = degreesToTime(auDegrees, auMinutes, auSeconds);
	var auDate = new Date(0,0,0,
		auTime.hours,auTime.minutes,auTime.seconds,auTime.milliseconds);
	var lambda = auDate.getTime();
	lambda += 9 * msecPerHour;


		//　世界時0時からの経過時間
		var t = datetime.getTime();

		// 補正値
		var interval = t;
		var days = Math.floor(interval / msecPerDay );
		interval = interval - (days * msecPerDay );

		var hours = Math.floor(interval / msecPerHour );
		interval = interval - (hours * msecPerHour );

		var minutes = Math.floor(interval / msecPerMinute );
		interval = interval - (minutes * msecPerMinute );

		var seconds = Math.floor(interval / 1000 );
		interval = interval - (seconds * 1000); 

		var correction = hours * 3600 + minutes * 60 + seconds;
		correction *= 0.00273791 * 1000;

		// 恒星時
		var theta = theta0 + lambda + t + correction;

		var _theta = displayTime(theta);

		var h = _theta.hours,
				m = _theta.minutes,
				s = _theta.seconds + _theta.milliseconds/1000;

		h *= 15; 
		m *= 15;
		s *= 15;

		if (Math.floor(s / 60) > 0 ){
  		m += Math.floor(s / 60);
  		s -= Math.floor(s / 60)*60;  
		}
		if (Math.floor(m / 60) > 0 ){
  		h += Math.floor(m / 60);
  		m -= Math.floor(m / 60)*60;  
		}

		return {degrees:h, minutes:m, seconds:s};
}

//*** グリニッジ平均恒星時　****
function getMeanSiderealTime(datetime){

	var baseDate = new Date(1899,12,31,12,0,0,0);

	// 経過日数を計算
	var interval = datetime.getTime() - baseDate.getTime();
	var days = Math.floor(interval / msecPerDay ) + 1.5;
	console.log("days= " + days);
	var Tu = days / 36525;
	var Tu2 = Tu*Tu;

	var baseTime = new Date(0,0,0,15,38,45,836);
	// ミリ秒
	var a =  baseTime.getTime();
	displayTime(a);
	var b = Tu * 8640184.542 *1000;
	console.log("b= " + b);
	displayTime(a);
	var c = Tu2 * 0.0929 *1000;
	console.log("c= " + c);
	displayTime(a);
	var theta0 = a + b + c;

	var workTime = displayTime(theta0);
	var workDegree = timeToDegrees(
												workTime.hours,
												workTime.minutes,
												workTime.seconds+workTime.milliseconds/1000
									);

	return {time:workTime,degrees:workDegree}
}

function displayTime(time){
		var interval = time;
		var days = Math.floor(interval / msecPerDay );
		interval = interval - (days * msecPerDay );

		var hours = Math.floor(interval / msecPerHour );
		interval = interval - (hours * msecPerHour );

		var minutes = Math.floor(interval / msecPerMinute );
		interval = interval - (minutes * msecPerMinute );

		var seconds = Math.floor(interval / 1000 );
		interval = interval - (seconds * 1000); 

		console.log(hours + "h" + minutes + "m" + seconds + "s" + interval);

		return {
			hours : hours,
			minutes: minutes,
			seconds: seconds,
			milliseconds: interval
		}
}

