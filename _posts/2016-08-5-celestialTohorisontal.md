---
title: 天球座標
layout: post
date: 2016-07-20 20:00:00
postTitle: 赤道座標から地平座標へ変換
categories: coordinates
---

-------

### 変換公式

ここでは
$$赤経\alpha,赤緯\deltaの天体の、方位角A, 高度h　を求める$$
$$ただし、観測点の緯度を\varphi,恒星時を\Thetaとする$$

この関係は

\begin{align} 
\sin{h} &=\sin{\varphi}\sin{\delta}+\cos{\varphi}\cos{\delta}\cos{(\Theta-\alpha)} \\\ 
\cos{h}\cos{A} &= -\cos{\varphi}\sin{\delta}+\sin{\varphi}\cos{\delta}\cos{(\Theta-\alpha)} \\\ 
 \cos{h}\sin{A} &= \cos{\delta}\sin{(\Theta-\alpha)} 
\end{align} 

<label class="label label-info">計算例</label>
$$恒星61Cygが1978/6/10（JST）に観測点で、どの高度、方位角に見えるかを計算する$$
$$61Cygの赤経、赤緯 \quad
\alpha_{1950}=21^h4^m39.935^s \quad
\delta_{1950}=38^{\circ}29'59.10"$$

$$観測点の経緯度 \quad
\lambda = 139°31'53.3" \quad
\varphi = 35°47'20.0"N$$

恒星時(\\(\Theta\\))=<span id="theta"></span>

赤経(\\(\alpha\\))=<span id="alpha"></span>

赤緯(\\(\delta\\))=<span id="delta"></span>

緯度(\\(\varphi\\))=<span id="phi"></span>

\\(\cos(\Theta-\alpha)\\)=<span id="cos_theta_a"></span>

\\(\sin(\Theta-\alpha)\\)=<span id="sin_theta_a"></span>

\\(\cos(\varphi)\\)=<span id="cos_phi"></span>

\\(\sin(\varphi)\\)=<span id="sin_phi"></span>

\\(\cos(\delta)\\)=<span id="cos_delta"></span>

\\(\sin(\delta)\\)=<span id="sin_delta"></span>

\\(\sin(\varphi)\sin(\delta)\\)=<span id="sin_phi_delta"></span>

\\(\cos(\phi)\cos(\delta)\cos(\Theta-\alpha)\\)=<span id="cos_phi_delta_theta_a"></span>

\\( \sin(h) \\)=<span id="sin_h"></span>

\\( h \\)=<span id="_h"></span>

\\(-\cos(\varphi)\sin(\delta)\\)=<span id="_cos_phi_sin_delta"></span>

\\(\sin(\phi)\cos(\delta)\cos(\Theta-\alpha)\\)=<span id="sin_phi_cos_delta_theta_a"></span>

\\( \cos(h)\cos(A) \\)=<span id="cos_h_A"></span>

\\( \cos(h)\sin(A) \\)=<span id="cos_h_sin_A"></span>

\\( \tan(A) \\)=<span id="tan_A"></span>

\\( A' \\)=<span id="A1"></span>

\\( A \\)=<span id="A"></span>

したがって、

恒星61Cygは方位角=<span id="azimuth"></span>,高度=<span id="altitude"></span>
に見える



<div id="canvas1"></div>


<script src="//code.jquery.com/jquery-1.11.3.js"></script>
<script src="{{site.url}}/js/three.js"></script>
<script src="{{site.url}}/js/celestial-calc.js"></script>
<script src="https://dl.dropboxusercontent.com/u/3587259/Code/Threejs/OrbitControls.js"></script>
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_SVG"></script>
<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=sons-of-obsidian"></script>
<script type="text/javascript">
var $window = $(window)
  // make code pretty
  $('pre').addClass('prettyprint');
  $('pre').css({"background":"#111",
                 "font-size":"1.05em",
                    "border":"0px"}
                );
  $('code').css({"font-size":"1.05em","color":"#f00"});
  $('canvas').css({"background":"#fff"});

  //観測日
  var date = new Date(1978,6,10,21,20,0,0);
  // 平均恒星時
  var meanSidereal = getMeanSiderealTime(date);
  var h = meanSidereal.time.hours;
  var m = meanSidereal.time.minutes;
  var s = meanSidereal.time.seconds;
  var l = meanSidereal.time.milliseconds;

  var theta0 = new Date(0,0,0,h,m,s,l);
  var sidereal = getSiderealTime(date,139,31,53.6,theta0);
  $("#theta").html(sidereal.total +"°");   
  var theta_rad = sidereal.radians;

  // 赤経　
  var alpha = timeToDegrees(21, 4, 39.935);
  var alpha_rad = alpha.radians; 
  $("#alpha").html(alpha.degrees +"°");   

  // 赤緯
  var delta = degreesToDegrees(38, 29, 59.10);
  var delta_rad = delta.radians; 
  $("#delta").html(delta.degrees +"°");   

  // 緯度
  var phi = degreesToDegrees(35, 47, 20.0);
  var phi_rad = phi.radians; 
  $("#phi").html(phi.degrees +"°");   

  //theta - alpha --(1)
  theta_a = theta_rad - alpha_rad;

  //cos(theta - alpha) --(2)
  var cos_theta_a = Math.cos(theta_a);
  $("#cos_theta_a").html(cos_theta_a);

  //sin(theta - alpha) --(3)
  var sin_theta_a = Math.sin(theta_a);
  $("#sin_theta_a").html(sin_theta_a);

  // cos(phi) --(4)
  var cos_phi = Math.cos(phi_rad);
  $("#cos_phi").html(cos_phi);

  // sin(phi) --(5)
  var sin_phi = Math.sin(phi_rad);
  $("#sin_phi").html(sin_phi);

  // cos(delta) --(6)
  var cos_delta = Math.cos(delta_rad);
  $("#cos_delta").html(cos_delta);

  // sin(delta) --(7)
  var sin_delta = Math.sin(delta_rad);
  $("#sin_delta").html(sin_delta);

  // sin(phi)sin(delta) --(8)
  var sin_phi_delta = sin_phi * sin_delta;
  $("#sin_phi_delta").html(sin_phi_delta);

  // cos(phi)cos(delta)cos(theta_a) --(9)
  var cos_phi_delta_theta_a = cos_phi * cos_delta * cos_theta_a;
  $("#cos_phi_delta_theta_a").html(cos_phi_delta_theta_a);

  // sin(h) --(10)
  var sin_h = sin_phi_delta + cos_phi_delta_theta_a;
  $("#sin_h").html(sin_h);

  // hight --(11)
  var _h = 180 / Math.PI * Math.asin(sin_h);
  $("#_h").html(_h +　"°");

  // -cos(phi)sin(delta) --(12)
  var _cos_phi_sin_delta = -cos_phi * sin_delta
  $("#_cos_phi_sin_delta").html(_cos_phi_sin_delta);  

  // sin(phi)cos(delta)cos(theta_a) --(13)
  var sin_phi_cos_delta_theta_a = sin_phi * cos_delta * cos_theta_a;
  $("#sin_phi_cos_delta_theta_a").html(sin_phi_cos_delta_theta_a);

  // cos(h)cos(A) --(14)
  var cos_h_A = _cos_phi_sin_delta + sin_phi_cos_delta_theta_a;
  $("#cos_h_A").html(cos_h_A + "< 0");

  // cos(h)sin(A) --(15)=(6)x(3)
  var cos_h_sin_A =  cos_delta * sin_theta_a;
  $("#cos_h_sin_A").html(cos_h_sin_A);
  
  // tan(A) --(16)=(15)/(14)
  var tan_A =  cos_h_sin_A / cos_h_A;
  $("#tan_A").html(tan_A);

  // A' --(17)
  var A1 = 180 / Math.PI * Math.atan(tan_A);
  $("#A1").html(A1 +　"°");

  // A --(18)
  var A = (cos_h_A<0)?A1+180:A1+360;
  $("#A").html(A +　"°");

  $("#azimuth").html(A +　"°");
  $("#altitude").html(_h +　"°");


  var date0 = new Date(1978,6,20,22,32,17,0);
  var result = getHorisontalPosition(
                //観測日時
                date0,
                //経度
                139,32,29.0325,
                //緯度
                35, 40, 20.707,
                //赤経(h,m,s)
                6, 42, 56.714,
                //赤緯(d,m,s)
                -16, 38, 46.36 
              );
  console.log(result);

</script>