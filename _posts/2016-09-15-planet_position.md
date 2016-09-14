---
title: 2体問題
layout: post
date: 2016-09-15 21:00:00
postTitle: 楕円軌道上の天体の位置
categories: 2bodies
---

-------

２体問題として運動している天体が、与えられた時刻tに
軌道上のどの位置にいるかを計算する

ここでは、太陽の周りを運動する惑星としします

近日点Aの方向をx軸の正とします

天体Pはxy平面上の軌道上を反時計周りに運動しています

軌道長半径a と　離心率 e はわかっているものとします

与えられた時刻t に惑星Pが位置する座標(x,y)を求めます

<div id="svg01"></div>

### 1.公転周期と平均運動

惑星Pが楕円軌道を１周する時間間隔は一定で、
これを公転周期(the period of revolution) といい　T で表すとします

太陽から見てこの惑星Pの角運動速度は軌道の位置によって違いがあるが
１周360°をT時間で回るので

\\( n= 360°/T = 2\pi/T  \quad n \\) を平均運動(mean motion)  

太陽の質量を　\\(S\\)、　惑星の質量 \\(m\\) とすると
$$
n= 2\pi/T = \sqrt{ G( S+m) / a^3 } \quad G:万有引力定数
$$

$$
軌道上の惑星の質量\\(m\\) が無視できるほど小さい時には、近似式として
$$
n=  2\pi/T = \sqrt{ GS / a^3 }      
$$

平$$均運動 \\(n\\) 、　公転周期\\(T\\) は、
太陽の質量\\(s\\) と　軌道長半径\\(a\\)でほとんど決まる

$$
\begin{eqnarray}
GS =& 1.32712438 \times 10^{-20}m^3s^{-2} \\\
   =& 2.95912208 \times 10^{-4}(A.U)^3day^{-2} \\\
   =& 39.4752390(A.U.)^{-3}year^{-2}
\end{eqnarray}
$$

地球の周りをまわる人工衛星を考えたときEを地球の質量とした場合

\begin{eqnarray}
GE =& 3.986005 \times 10^{14}m^3s^{-2} \\\
   =& 2.975537 /times 10^15 km^3 day^{-2}
\end{eqnarray}

GE:地心引力定数

惑星Pが近日点Aを時刻\\( t_{0} \\)  に通過したとする

与えられた時刻 \\(t\\)までの経過時間は\\( t - t_{0} \\)

この間、惑星Pが、平均運動\\(n\\)で移動したとして、
その時の角度\\( l \\) は

\\(l = n(t-t_{0}) \quad l: \\) 平均近点角(mean anomaly)

この\\(l\\)  は実際の位置ではない

もしあつ元期(t=0) が与えられたときの平均近点角を\\(l_{0}\\)とすると

時刻t における　平均近点角 \\(l\\) は
$$
l = nt + l_{0}
$$
と書ける

惑星の位置を計算するには、平均近点角\\(l\\)　を計算し、
それを離心近点角 \\(u\\) へ、それを真近点角 \\(f\\)　へ変換する

### 2. ケプラーの方程式

平均近点角\\(l\\)　と　離心近点角 \\(u\\)　の関係は
$$
u - e \sin u = l
$$

離心率が0に近い楕円軌道であれば \\( u=l \\) としてもよいが、

下記展開式でe=0.5 ならよく近似する

$$
u = l + (e - \frac{1}{8}e^3 + \frac{1}{192}e^5 - \frac{1}{9216}e^7)\sin l 
      + (\frac{1}{2}e^2 - \frac{1}{6}e^4 + \frac{1}{48}e^6) \sin 2l \\\
      + (\frac{3}{8}e^2 - \frac{27}{128}e^4 + \frac{243}{5120}e^6) \sin 3l
      + (\frac{1}{3}e^4 - \frac{4}{15}e^6) \sin 4l \\\
      + (\frac{125}{384}e^5 - \frac{3125}{9216}e^7) \sin 5l 
      + \frac{27}{80}e^6 \sin 6l
      + \frac{16807}{46080}e^7 \sin 7l
$$

e が　１に近い彗星の場合は、図による解法がある

<div id="svg02"></div>

サイン・カーブを描く、
点A を \\((l,0)\\) に置く、
点B を \\((l+e,1)\\) に置く

線分AB とサインカーブの交点をC　とすると

このときの　C　の　ｘ座標が \\(u\\) となる

### 3. 軌道上の位置

離心近点角　\\(u\\) と　真近点角 \\(f\\) の関係は

$$
\left.
\begin{array}{l}
\sin f = \sqrt{1 - e^2} \sin u / (1 - e \cos u) \\\
\cos f = (\cos u - e) / (1 - e\cos u) \\\
\tan f = \sqrt{1 - e^2} \sin u / (\cos u - e)
\end{array}
\right
\rbrace
$$

\\( \qquad \cos u - e \ge 0 \\) で、　\\(f\\) は、第１、第４象限

\\( \qquad \cos u - e \lt 0 \\) で、　\\(f\\) は、第２、第３象限

動径 \\(r\\) は　\\(f \\) からも \\(u\\) からも計算できて
$$
\left.
\begin{array}{l}
r = a( 1 - e\cos u ) \\\
r = a( 1 - e^2) / ( 1 + e\cos f )
\end{array}
\right
\rbrace
$$

惑星の \\(x,y\\) 座標は
$$
\left.
\begin{array}{l}
x = r\cos f = a( \cos u - e ) \\\
y = r\sin f = a \sqrt{1 - e^2} \sin u
\end{array}
\right
\rbrace
$$

<label class="label label-info">計算例</label>



<script src="//code.jquery.com/jquery-1.11.3.js"></script>
<script src="{{site.url}}/js/three.js"></script>
<script src="{{site.url}}/js/celestial-calc.js"></script>
<script src="https://dl.dropboxusercontent.com/u/3587259/Code/Threejs/OrbitControls.js"></script>
<script src="http://d3js.org/d3.v3.js"></script>
<script src="{{site.url}}/js/d3draws.js"></script>
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

var height = 600,
    width  = 700;
var pi2 = Math.PI * 2;
var pi = Math.PI;
var aDegree = Math.PI / 180;
var decStep = Math.PI / 18;

var xScale = d3.scale.linear()
               .domain([-width/2,width/2])
               .range([0,width]);
var yScale = d3.scale.linear()
               .domain([0,height])
               .range([height/2,-height/2]);


var svg01 = d3.select("#svg01")
              .append("svg")               
              .attr("height",height)
              .attr("width",width)
              .style("background","#000");

var svg02 = d3.select("#svg02")
              .append("svg")               
              .attr("height",height)
              .attr("width",width)
              .style("background","#000");

var ellipseData01 = [
{"cx":0,"cy":0,"rx":250,"ry":250,"stroke":"#0f0","fillColor":"none"},
//{"cx":0,"cy":0,"rx":250,"ry":200,"stroke":"#fff","fillColor":"none"} 
];

drawEllipse(svg01,ellipseData01,xScale,yScale);            

// ellipse 
pathData01 = []; 
pathAttrs01 = {"stroke":"#fff","fillColor":"none"}; 

var e = 0.60;
var f = 250 *e;
for (var i=0; i<pi2; i+=aDegree){
  var r = 250* (1 - e*e) / ( 1 + e * Math.cos(i) );
  var x = r * Math.cos(i) + e*250;
  var y = r * Math.sin(i);
  pathData01.push( new Point(x,y) );
}

drawPath(svg01,pathData01,pathAttrs01,xScale,yScale);

// line a 
pathData01 = []; 
for (var i=0; i<180; i++){
  var x = i;
  var theta_ = aDegree*i;
  var y = 20 * Math.sin(theta_) ;
  pathData01.push( new Point(x,y) );
}

var xScale011 = d3.scale.linear()
               .domain([0,180])
               .range([100,350]);

drawPath(svg01,pathData01,pathAttrs01,xScale011,yScale);



var theta = aDegree * 109;
var r = 250* (1 - e*e) / ( 1 + e * Math.cos(theta) );
var x = r * Math.cos(theta) + e*250;
var y = r * Math.sin(theta);

var lineData01 = [
{"x1":0,"y1":0,
 "x2":250*Math.cos(aDegree*70),"y2":250*Math.sin(aDegree*70),
 "stroke":"#fff"},
{"x1":250*Math.cos(aDegree*70),"y1":0,
 "x2":250*Math.cos(aDegree*70),"y2":250*Math.sin(aDegree*70),
 "stroke":"#fff"},
{"x1":250*e,"y1":0,"x2":x,"y2":y,
 "stroke":"#fff"}

];    
drawLine(svg01,lineData01,xScale,yScale);

circleData01 = [
{"cx":0,"cy":0,"r":4,"stroke":"#fff","fillColor":"#fff"},
{"cx":f,"cy":0,"r":4,"stroke":"#fff","fillColor":"#fff"},
{"cx":250,"cy":0,"r":4,"stroke":"#fff","fillColor":"#fff"},
{"cx":x,"cy":y,"r":4,"stroke":"#fff","fillColor":"#fff"},
{"cx":0,"cy":-200,"r":4,"stroke":"#fff","fillColor":"#fff"},
{"cx":0,"cy":200,"r":4,"stroke":"#fff","fillColor":"#fff"},
];

drawCircle(svg01,circleData01,xScale,yScale);

var mathData01 = [
{"x":5,"y":30,"text":"O","fontSize":16},
{"x":255,"y":30,"text":"A","fontSize":16},
{"x":f,"y":30,"text":"S","fontSize":16},
{"x":250*Math.cos(aDegree*70)+5,"y":240,"text":"P(x,y)","fontSize":16},
{"x":-125,"y":70,"text":"a","fontSize":16},
{"x":f-9,"y":130,"text":"r","fontSize":16},
{"x":f+5,"y":75,"text":"$$f$$","fontSize":16},
{"x":30,"y":70,"text":"u","fontSize":16},
{"x":320,"y":65,"text":"$$x$$","fontSize":16},
{"x":f+5,"y":340,"text":"$$y$$","fontSize":16},

];
    
drawMathjax(svg01,mathData01,xScale,yScale);

// line r
pathData01 = [
  {"x":250*Math.cos(aDegree*70),"y":y},
  {"x":f-55,"y":175},
  {"x":f-40,"y":150},
  {"x":f-18,"y":100},
  {"x":f-10,"y":75},
  {"x":f -5,"y":50},
  {"x":250*e,"y":0},
];
pathAttrs011 = {"stroke":"#fff","fillColor":"none","interpolate":"basis"}; 

drawPath(svg01,pathData01,pathAttrs011,xScale,yScale);

var vecData01 = [
{"x1":80,"y1":200,"angles":170,"length":60,"stroke":"#fff"},
{"x1":-270,"y1":0,"angles":0,"length":580,"stroke":"#fff"},
{"x1":f,"y1":-280,"angles":90,"length":560,"stroke":"#fff"},
];    

drawVectorA(svg01,vecData01,xScale,yScale);

/**  ケプラーの方程式　図による解法　**/

var xScale02 = d3.scale.linear()
               .domain([-aDegree*10,aDegree*380])
               .range([0,width]);
var yScale02 = d3.scale.linear()
               .domain([1.2,-1.2])
               .range([0,height]);

var l = aDegree * 130;
var e = 0.8;

var u = 0;
for (var i= 0; i< pi2; i+=aDegree/3600){

  if (Math.floor(Math.sin(i)*100000)==Math.floor((i-l)/e*100000)){
    u = i;
    break;
  }

}


// x,y axis
var vecData02 = [
{"x1":0,"y1":0,"angles":0,"length":aDegree*370,"stroke":"#fff"},
{"x1":0,"y1":-1.1,"angles":90,"length":2.2,"stroke":"#fff"},
];    
drawVectorA(svg02,vecData02,xScale02,yScale02);

// 
var vecData021 = [
{"x1":0,"y1":Math.sin(u),"x2":u,"y2":Math.sin(u),"stroke":"#fff"},
{"x1":0,"y1":0.1,"x2":l,"y2":0.1,"stroke":"#fff"},
// e 
{"x1":l,"y1":-0.18,"x2":l+e,"y2":-0.18,"stroke":"#fff"},
];    
drawVectorW(svg02,vecData021,xScale02,yScale02);

// sine curve
var sineData02 = [];
for (var i = 0; i < pi2; i+=aDegree) {
  var y = Math.sin(i);
  sineData02.push( new Point(i,y));
};
drawPath(svg02,sineData02,pathAttrs01,xScale02,yScale02);


// lines
var lineData02 = [
// y=1
{"x1":0,"y1":1,"x2":aDegree*370,"y2":1,"stroke":"#fff"},
// y=-1
{"x1":0,"y1":-1,"x2":aDegree*370,"y2":-1,"stroke":"#fff"},
// A-B
{"x1":l,"y1":0,"x2":l+e,"y2":1,"stroke":"#fff"},
// l
{"x1":l,"y1":0.15,"x2":l,"y2":-0.2,"stroke":"#fff"},
// B-
{"x1":l+e,"y1":1,"x2":l+e,"y2":-0.2,"stroke":"#fff"},

];    
drawLine(svg02,lineData02,xScale02,yScale02);

// Points
circleData02 = [
// A
{"cx":l,"cy":0,"r":4,"stroke":"#fff","fillColor":"#fff"},
{"cx":l+e,"cy":1,"r":4,"stroke":"#fff","fillColor":"#fff"},
{"cx":u,"cy":Math.sin(u),"r":4,"stroke":"#fff","fillColor":"#fff"},
];
drawCircle(svg02,circleData02,xScale02,yScale02);

var mathData02 = [
{"x":aDegree*-7,"y":1.18,"text":"1","fontSize":16},
{"x":aDegree*-7,"y":0.15,"text":"0","fontSize":16},
{"x":aDegree*-9,"y":-0.85,"text":"-1","fontSize":16},
{"x":l+aDegree*7,"y":0.25,"text":"$$A(l,0)$$","fontSize":16},
{"x":l+e,"y":1.3,"text":"$$B(l+e,1)$$","fontSize":16},
{"x":u+aDegree*6,"y":0.68,"text":"$$C$$","fontSize":16},
{"x":u/2,"y":0.75,"text":"$$u$$","fontSize":16},
{"x":l/2,"y":0.35,"text":"$$l$$","fontSize":16},
{"x":l+e/2,"y":0.1,"text":"$$e$$","fontSize":16},
{"x":aDegree*240,"y":-0.5,"text":"$$y=\sin x$$","fontSize":16},
{"x":aDegree*370,"y":0.25,"text":"$$x$$","fontSize":16},
{"x":0,"y":1.4,"text":"$$y$$","fontSize":16},];
drawMathjax(svg02,mathData02,xScale02,yScale02);


</script>