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

		var radians = degrees * RadiansPerDegree; 
		return {degrees:degrees, deg:h, min: m, sec: s, radians: radians};
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
	if (degs < 0) {
		degs -= minutes / SecondsPerMinute;
		degs -= seconds / SecondsPerHour;
	} else {
		degs += minutes / SecondsPerMinute;
		degs += seconds / SecondsPerHour;
	}

	var radians = degs * RadiansPerDegree;
	
	return {degrees:degs, radians: radians};
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
	//console.log(milliseconds);

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

		console.log("sidereal time");
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
		var degs = degreesToDegrees(h, m, s);
		var radians = degs.degrees * RadiansPerDegree;
		return {total:degs.degrees,degrees:h, minutes:m, seconds:s, radians:radians};
}

//*** グリニッジ平均恒星時　****
function getMeanSiderealTime(datetime){

	var baseDate = new Date(1899,12,31,12,0,0,0);

	// 経過日数を計算
	var interval = datetime.getTime() - baseDate.getTime();
	var days = Math.floor(interval / msecPerDay ) + 0.5;
	console.log("days= " + days);
	var Tu = days / 36525;
	var Tu2 = Tu*Tu;

	var baseTime = new Date(0,0,0,15,38,45,836);
	// ミリ秒
	var a =  baseTime.getTime();
	//displayTime(a);
	var b = Tu * 8640184.542 *1000;
	//console.log("b= " + b);
	displayTime(b);
	var c = Tu2 * 0.0929 *1000;
	//console.log("c= " + c);
	displayTime(c);
	var theta0 = a + b + c;

	//console.log("meanSidereal");
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
};

/* 赤道座標を地平座標に変換する
	parameters
		date 		       				 				観測日時
		lambda_D, lambda_M, lambda_S  観測地点 経度（度、分、秒）
		phi_D, phi_M, phi_S     			観測地点 緯度（度、分、秒）
		alpha_H,alpha_M,alpha_S 			天体の赤経（時、分、秒）
		delta_D,delta_M,delta_S 			天体の赤緯（度、分、秒）

	Output
		azimuth		: 方位角
		altitude	:　高度

*/
function getHorisontalPosition(
	date,
	lambda_D, lambda_M, lambda_S,
	phi_D, phi_M, phi_S,
	alpha_H, alpha_M, alpha_S,
	delta_D, delta_M, delta_S
	){
  // 平均恒星時の計算
  var meanSidereal = getMeanSiderealTime(date);
  var h = meanSidereal.time.hours;
  var m = meanSidereal.time.minutes;
  var s = meanSidereal.time.seconds;
  var l = meanSidereal.time.milliseconds;

  // 恒星時を求める
  var theta0 = new Date(0,0,0,h,m,s,l);
  var sidereal = getSiderealTime(date,lambda_D,lambda_M,lambda_S,theta0);
  var theta_rad = sidereal.radians;

  // 赤経　
  var alpha = timeToDegrees(alpha_H, alpha_M, alpha_S);
  var alpha_rad = alpha.radians; 

  // 赤緯
  var delta = degreesToDegrees(delta_D, delta_M, delta_S);
  var delta_rad = delta.radians;

  // 緯度
  var phi = degreesToDegrees(phi_D, phi_M, phi_S);
  var phi_rad = phi.radians; 

  //theta - alpha --(1)
  theta_a = theta_rad - alpha_rad;

  //cos(theta - alpha) --(2)
  var cos_theta_a = Math.cos(theta_a);

  //sin(theta - alpha) --(3)
  var sin_theta_a = Math.sin(theta_a);

  // cos(phi) --(4)
  var cos_phi = Math.cos(phi_rad);

  // sin(phi) --(5)
  var sin_phi = Math.sin(phi_rad);

  // cos(delta) --(6)
  var cos_delta = Math.cos(delta_rad);

  // sin(delta) --(7)
  var sin_delta = Math.sin(delta_rad);

  // sin(phi)sin(delta) --(8)
  var sin_phi_delta = sin_phi * sin_delta;

  // cos(phi)cos(delta)cos(theta_a) --(9)
  var cos_phi_delta_theta_a = cos_phi * cos_delta * cos_theta_a;

  // sin(h) --(10)
  var sin_h = sin_phi_delta + cos_phi_delta_theta_a;

  // hight --(11)
  var _h = 180 / Math.PI * Math.asin(sin_h);

  // -cos(phi)sin(delta) --(12)
  var _cos_phi_sin_delta = -cos_phi * sin_delta

  // sin(phi)cos(delta)cos(theta_a) --(13)
  var sin_phi_cos_delta_theta_a = sin_phi * cos_delta * cos_theta_a;

  // cos(h)cos(A) --(14)
  var cos_h_A = _cos_phi_sin_delta + sin_phi_cos_delta_theta_a;

  // cos(h)sin(A) --(15)=(6)x(3)
  var cos_h_sin_A =  cos_delta * sin_theta_a;
  
  // tan(A) --(16)=(15)/(14)
  var tan_A =  cos_h_sin_A / cos_h_A;

  // A' --(17)
  var A1 = Math.fround(180 / Math.PI * Math.atan(tan_A));

  // A --(18)
  var A = (cos_h_A<0)?A1+180:A1-0.00000000001;

  return {azimuth: A, altitude: _h};

}; 

/*
	方向余弦を取得
*/
function getDirCosines(alpha,delta){
	var alpha_rad = alpha * RadiansPerDegree;
	var delta_rad = delta * RadiansPerDegree;

	var L = Math.cos(delta_rad)*Math.cos(alpha_rad);
	var M = Math.cos(delta_rad)*Math.sin(alpha_rad);
	var N = Math.sin(delta_rad);

	return {L:L, M:M, N:N};
};

/*
	****　赤道座標系の方向余弦を地平座標系の方向余弦に変換する

	input parameters
	赤道座標系の天体の方向余弦: 	L, M, N
	Z軸を反時計回りでの角度　　　：　theta
	y軸を反時計回りでの角度　　　：　phi

	output 
	地平座標系の方向余弦　　　　：　l, m, n
*/

function celesToHorison(L, M, N, theta, phi){
	var theta_rad = theta * RadiansPerDegree;
	var phi_rad = phi * RadiansPerDegree;
	// z軸での回転
	var L_ = L * Math.cos(theta_rad) + M * Math.sin(theta_rad);
	var M_ = -L * Math.sin(theta_rad) + M * Math.cos(theta_rad);
	var N_ = N;

	//Y'軸での回転
	var l = L_ * Math.sin(phi_rad) - N_ * Math.cos(phi_rad);
	var m = M_;
	var n =  L_* Math.cos(phi_rad) + N_ * Math.sin(phi_rad);

	return {l:l, m:m, n:n};

}

/*
	****　地平座標系の方向余弦を赤道座標系の方向余弦に変換する

	input parameters
	地平座標系の天体の方向余弦:　l, m, n
	Z軸を反時計回りでの角度　　　：　theta
	y軸を反時計回りでの角度　　　：　phi

	output 
	赤道座標系の方向余弦　　　　：　L, M, N
*/

function horisonToCeles(l, m, n, theta, phi){
	var theta_rad = theta * RadiansPerDegree;
	var phi_rad = phi * RadiansPerDegree;
	
	//Y'軸での回転
	var l_ = l * Math.sin(phi_rad) - n * Math.cos(phi_rad);
	var m_ = m;
	var n_ = l* Math.cos(phi_rad) + n * Math.sin(phi_rad);

	// z軸での回転
	var L = l_ * Math.cos(theta_rad) + m_ * Math.sin(theta_rad);
	var M = -l_ * Math.sin(theta_rad) + m_ * Math.cos(theta_rad);
	var N = n_;

	return {L:L, M:M, N:N};

}