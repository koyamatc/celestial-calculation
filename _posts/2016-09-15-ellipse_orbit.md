---
title: 2体問題
layout: post
date: 2016-09-15 22:00:00
postTitle: 2体問題と楕円軌道
categories: 2bodies
---

-------

2つの天体があって、相互の引力だけで他の力を受けない状態で運動している場合、
この関係を2体問題という

厳密人はそのほかの天体の力も働くので近似した計算となる

2つの天体S,Xだけがあるとき、Sが静止しているとき相対するXの動きは、
Sを焦点とする２次曲線となる

この２次曲線には、楕円、放物線、双曲線がある

まずは楕円から

### 1.楕円(ellipse)

<div id="svg01"></div>




P: 天の北極
P': 天の南極
K: 黄道の北極
k': 黄道の南極
γ: 春分点

天の赤道と黄道は黄道傾角 \\( \epsilon (約23.5°)\\) をなし交わっている

春分点と秋分点を軸に 角度　\\( \epsilon \\)回転させると

天の北極P は　黄道の北極K　に、　天の南極P' は 黄道の南極K'へ移動する

こうして移動した座標系が黄道座標系となる

赤道座標系で黄道の北極、南極を表すと

黄道の北極( \\( \alpha=18h, \delta=90°-\epsilon \\) )、
黄道の南極( \\( \alpha=6h, \delta=\epsilon-90° \\) )

天体Xの位置は次のように表せる

KXK'を通る大円の半分が黄道と交わる点をCとする

春分点\\( \gamma\\) から東向きに図った角距離　\\( \gamma C\\)　を
天体Xの横径(celestial longitude)

角距離CX を黄緯(celestial latitude)

Xが黄道の北側にある時は黄緯は正、南側にあるときは負の値をとる

横径は\\( \lambda \\)　で、黄緯は\\( \beta \\) で表す

\\( 0° \ge \lambda \ge 360° \\),
\\( -90° \ge \beta \ge +90° \\)

これで天体の位置を\\( (\lambda,\beta) \\) で表せるが

例外が黄道の極K,K'で　\\( \lambda \\)が定義できず、
Kは\\( \beta=90° \\), K'は\\( \beta=-90° \\) とする

---------

### 2. 黄道座標と赤道座標の変換

観測点Oを原点として、春分点の方向にX軸、
横径90°、黄緯0°方向にY軸、
黄道の北極方向にZ軸をとったものが

黄道直行座標系です

この座標系にある天体X \\( (\lambda,\beta) \\)の方向余弦(U,V,W) は

$$
\left.
\begin{array}{l}
U=\cos \beta \cos \lambda \\\
V=\cos \beta \sin \lambda \\\
W=\sin \beta
\end{array}
\right
\rbrace
$$

この天体Xの赤道座標系における方向余弦を(L,M,N)とすると

赤道座標を\\( \epsilon \\)X軸で回転させると黄道座標に重ねることができるので

\begin{eqnarray}
   \left(
     \begin{array}{c}
       U \\\
       V \\\
       W
     \end{array}
   \right)
 = \left(
     \begin{array}{c}
       1 & 0 & 0 \\\
       0 & \cos\epsilon & \sin\epsilon \\\
       0 & -\sin\epsilon & \cos \epsilon
     \end{array}
   \right)
   \left(
     \begin{array}{c}
       L \\\
       M \\\
       N
     \end{array}
   \right)
\end{eqnarray}

または

$$
\left.
\begin{array}{l}
U=L \\\
V=M\cos \epsilon +  N\sin \epsilon \\\
W=-M\sin \epsilon + N\cos \epsilon
\end{array}
\right
\rbrace
$$

ここから

$$
\left.
\begin{array}{l}
\tan \lambda = U/V \\\
\quad U\ge0で\lambdaは第1象限または第4象限 \\\
\quad U\lt0で\lambdaは第2象限または第3象限 \\\
\sin \beta = W, \quad -90° \ge \beta \ge 90°
\end{array}
\right
\rbrace
$$

黄道座標を赤道座標に変換するには

\begin{eqnarray}
   \left(
     \begin{array}{c}
       L \\\
       M \\\
       N
     \end{array}
   \right)
 = \left(
     \begin{array}{c}
       1 & 0 & 0 \\\
       0 & \cos\epsilon & -\sin\epsilon \\\
       0 & \sin\epsilon & \cos \epsilon
     \end{array}
   \right)
   \left(
     \begin{array}{c}
       U \\\
       V \\\
       W
     \end{array}
   \right)
\end{eqnarray}

または

$$
\left.
\begin{array}{l}
L=U \\\
M=V\cos \epsilon -  W\sin \epsilon \\\
N=V\sin \epsilon + W\cos \epsilon
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

// line ae
var xScale011 = d3.scale.linear()
               .domain([0,180])
               .range([350-f,350]);
var yScale011 = d3.scale.linear()
               .domain([0,height])
               .range([height/2,height]);

drawPath(svg01,pathData01,pathAttrs01,xScale011,yScale011);

// line b
pathData01 = []; 
for (var i=90; i<270; i++){
  var y = i;
  var theta_ = aDegree*i;
  var x = 20 * Math.cos(theta_) ;
  pathData01.push( new Point(x,y) );
}
var xScale011 = d3.scale.linear()
               .domain([-20,0])
               .range([330,350]);
var yScale011 = d3.scale.linear()
               .domain([90,270])
               .range([300,500]);

drawPath(svg01,pathData01,pathAttrs01,xScale011,yScale011);


var theta = aDegree * 109;
var r = 250* (1 - e*e) / ( 1 + e * Math.cos(theta) );
var x = r * Math.cos(theta) + e*250;
var y = r * Math.sin(theta);

var lineData01 = [
{"x1":-250,"y1":0,"x2":250,"y2":0,"stroke":"#fff"},
{"x1":0,"y1":-200,"x2":0,"y2":200,"stroke":"#fff"},
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
{"cx":-f,"cy":0,"r":4,"stroke":"#fff","fillColor":"#fff"},
{"cx":f,"cy":0,"r":4,"stroke":"#fff","fillColor":"#fff"},
{"cx":-250,"cy":0,"r":4,"stroke":"#fff","fillColor":"#fff"},
{"cx":250,"cy":0,"r":4,"stroke":"#fff","fillColor":"#fff"},
{"cx":250*Math.cos(aDegree*70),"cy":0,"r":4,"stroke":"#fff","fillColor":"#fff"},
{"cx":250*Math.cos(aDegree*70),"cy":250*Math.sin(aDegree*70),"r":4,"stroke":"#fff","fillColor":"#fff"},
{"cx":x,"cy":y,"r":4,"stroke":"#fff","fillColor":"#fff"},
{"cx":0,"cy":-200,"r":4,"stroke":"#fff","fillColor":"#fff"},
{"cx":0,"cy":200,"r":4,"stroke":"#fff","fillColor":"#fff"},
];

drawCircle(svg01,circleData01,xScale,yScale);

var mathData01 = [
{"x":5,"y":30,"text":"O","fontSize":16},
{"x":-265,"y":30,"text":"A'","fontSize":16},
{"x":255,"y":30,"text":"A","fontSize":16},
{"x":-f,"y":30,"text":"S'","fontSize":16},
{"x":f,"y":30,"text":"S","fontSize":16},
{"x":250*Math.cos(aDegree*70),"y":30,"text":"R","fontSize":16},
{"x":250*Math.cos(aDegree*70)+5,"y":240,"text":"X","fontSize":16},
{"x":250*Math.cos(aDegree*70)+5,"y":285,"text":"D","fontSize":16},
{"x":-5,"y":300,"text":"C","fontSize":16},
{"x":-5,"y":-220,"text":"C'","fontSize":16},
{"x":-5,"y":255,"text":"B","fontSize":16},
{"x":-5,"y":-175,"text":"B'","fontSize":16},
{"x":-125,"y":70,"text":"a","fontSize":16},
{"x":-80,"y":10,"text":"ae","fontSize":16},
{"x":f-5,"y":130,"text":"r","fontSize":16},
{"x":f+5,"y":75,"text":"$$f$$","fontSize":16},
{"x":30,"y":70,"text":"u","fontSize":16},
{"x":-40,"y":-50,"text":"b","fontSize":16},

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

</script>