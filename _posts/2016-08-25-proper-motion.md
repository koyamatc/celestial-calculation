---
title: 恒星位置のずれ
layout: post
date: 2016-09-15 22:00:00
postTitle: 固有運動 (Proper Motion)
categories: difference
---

-------

恒星自身が運動して、　天球上の位置を変えていくことを固有運動という。

固有運動は天体の相互作用によって複雑な動きをすると思われるが、

人間が観測している数千年の機関では、太陽系に対して

等速直線運動をしていると仮定することができる。

----

### 固有運動速度と視線速度

<div id="svg01"></div>

観測者\\(O\\)から恒星\\(Q\\)を見ると

恒星\\(Q\\)は\\(Q'\\)の方へ等速直線運動をしている

恒星の速度を\\(\vec{v}\\)で表すと
\\(\quad \vec{v}=\vec{R_{a}}+\vec{T}\\)

\\(\vec{R_{a}}\\) を視線速度（radial velocity）といい、

観測者から遠ざかると＋、　近づくと―とし、　km/s で表す。

この値は恒星の天球上での位置には関係しない。

\\(\vec{T}\\) を固有運動速度（the velocity of the proper motion）と呼び、

見かけ上の角速度　\\(\mu\\) で表し、　

この　\\(\mu\\)　を 全固有運動速度(tangential component of the proper motion)といい
"/年　で表す

全固有運動速度\\(\mu(\vec{QQ'})\\)は、2つの成分
赤経方向に \\(\mu_{\alpha}(\vec{UQ'})\\) と
赤緯方向に \\(\mu_{\delta}\vec{QU}\\)
がある。

$$ \mu = \mu_{\alpha} + \mu_{\delta}$$

赤経は s/年  赤緯は　"/年　で表すことが多い

<div id="canvas01"></div>


-----------

### 固有運動による位置変化

恒星Q　の元期における赤経、赤緯を\\( ( \alpha_{0}, \delta_{0} ) \\) とし

t年後の赤経、赤緯を\\( ( \alpha_{1}, \delta_{1} ) \\) とすると

1.　元期における全固有運動速度 \\( \mu_{0} \\) と
   固有運動の向き \\( \psi_{0} (\angle{UQQ'})\\) を求める    

$$ \quad \mu_{0} = \sqrt{ \mu_{\alpha}^2 \cos^2{\delta_{0}}+\mu_{\delta}^2 } $$ 
$$ \quad \tan{\psi_{0}} = \frac{ \mu_{\alpha}\cos{\delta_{0}} }{ \mu_{\delta} }$$

$$\quad \mu \geqq 0 で \psi は第Ⅰ象限または第Ⅳ象限$$
$$\quad \mu \lt 0 で \psi は第Ⅱ象限または第Ⅲ象限$$

$$\quad \psi_{0}は、（\alpha_{0},\delta_{0}）を中心に原点Oから見て反時計回りに
天の北極を0°として360°とる$$

2.　ｔ年間で恒星が移動する角距離\\( \sigma \\) を計算する
<div id="svg02"></div>

年周視差 \\(\pi = \frac{a}{d}\\) 

a:地球の軌道半径　
d:恒星までの距離

$$\quad \tan{\sigma} = \frac{\mu_{0}t}{1+\frac{\pi R_{a}}{a}t}$$
展開すると
$$\quad \sigma = \mu_{0}t(1-\frac{\pi}{a}R_{a}t+\dotsb)
\approx \mu_{0}t(1-\frac{\pi}{a}R_{a}t)
$$
ここまでで元期の位置\\((\alpha_{0},\delta_{0})\\)からの移動方向\\(\psi\\)と
移動した角距離\\(\sigma\\)が求められる

3.　固有運動で移動した点\\((\alpha_{1},\delta_{1})\\)の方向余弦
\\((L_{1},M_{1},N_{1})\\)を求める

$$\quad
L_{1}= \cos{\alpha_{0}}\cos{\delta_{0}}\cos{\sigma}
- ( \sin{\alpha_{0}}\sin{\psi_{0}} 
+ \cos{\alpha_{0}}\sin{\delta_{0}}\cos{\psi_{0}})\sin{\sigma} 
$$
$$\quad
M_{1}= \sin{\alpha_{0}}\cos{\delta_{0}}\cos{\sigma}
+ ( \cos{\alpha_{0}}\sin{\psi_{0}} 
- \sin{\alpha_{0}}\sin{\delta_{0}}\cos{\psi_{0}})\sin{\sigma} 
$$
$$\quad
N_{1}= \sin{\delta_{0}}\cos{\sigma}
+ \cos{\delta_{0}}\cos{\psi_{0}}\sin{\sigma} 
$$

ここから \\( (\alpha_{1},\delta_{1}) \\) が求められる

-------

### ベッセル年

恒星の位置を示す\\((\alpha_{1950},\delta_{1950},)\\) の添え字　1950　は、
正しくは 1950.0 と書くべきもので、
これをベッセル年初(the beginning of the Besselian year)といい
1950ベッセル年初の恒星の位置を示している

ベッセル年初は１月１日付近ではあるが、時間は異なる

通常の暦では１年は３６５日　または３６６日で、これでは計算に不向きである

そのため天文の計算にはベッセル年単位を使用する

１ベッセル年は、およそ３６５．２４２２日（一定ではない）

-----

<label class="label label-info">計算例</label>
固有運動のずれだけを考慮し 61Cyg　が１９７８年６月１０日　２１時２０分にどこへ移動したか
赤経、赤緯を計算する


１９５０ベッセル年初から、１９７８年６月１０日　２１時２０分までの時間を計算する

１ベッセル年は365.2422日とする

t=<span id="period"></span>

61Cyg は　1950ベッセル年初の位置は
$$\alpha_{0} = 316.166396°$$

\\( \cos\alpha_{0}=\\)  <span id="cos_alpha0"></span> 

\\( \sin\alpha_{0}=\\)  <span id="sin_alpha0"></span>

$$\delta_{0} = 38.499750°$$
\\( \cos\delta_{0}=\\)  <span id="cos_delta0"></span>

\\( \sin\delta_{0}=\\)  <span id="sin_delta0"></span>

固有運動量は
$$ \mu_{\alpha}=0.35227s/年=0.0014678°/年$$
$$ \mu_{\delta}=3.1847"/年=0.00088464°/年$$
$$ \mu_{\alpha}\cos \delta_{0} = 0.0018487°/年$$
$$ R_{\alpha} = -64.3km/秒$$
$$ \pi = 0.296" = 1.435 \times 10^{-6} (rad)$$
$$ 地球軌道半径a=1.496 \times 10^{8}km$$

これを使って

\\( \mu_{0}=\\)<span id="mu0"></span>

\\( \tan\psi_{0}=\\)<span id="tan_psi0"></span>

ここから

\\( \psi_{0}=\\)<span id="psi0"></span>

\\( \cos\psi_{0}=\\)<span id="cos_psi0"></span>

\\( \sin\psi_{0}=\\)<span id="sin_psi0"></span>

\\( \sigma=\\)<span id="sigma"></span>

\\( \cos\sigma=\\)<span id="cos_sigma"></span>

\\( \sin\sigma=\\)<span id="sin_sigma"></span>

移動した後の赤道座標系の方向余弦(\\(L_{1},M_{1},N_{1}\\))は

\\(L_{1}=\\)<span id="L1"></span>

\\(M_{1}=\\)<span id="M1"></span>

\\(N_{1}=\\)<span id="N1"></span>

ここから　移動後の赤経\\(\alpha_{1}\\) と　赤緯\\( \delta_{1}\\) は

\\( \tan \alpha_{1}= \\) <span id="tan_alpha1"></span>

\\( \alpha_{1}= \\) <span id="alpha1"></span>

\\( \sin \delta_{1}= \\) <span id="sin_delta1"></span>

\\( \delta_{1}= \\) <span id="delta1"></span>

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


var svg01 = d3.select("#svg01").append("svg")
              .attr("height", 200)
              .attr("width", 500)
              .style("background","#000");
var svg02 = d3.select("#svg02").append("svg")
              .attr("height", 200)
              .attr("width", 500)
              .style("background","#000");

var lineData01 = [
{"x1":50,"y1":50,"x2":400,"y2":50,"stroke":"#fff"},
{"x1":50,"y1":50,"x2":450,"y2":150,"stroke":"#fff"}
];    
drawLine(svg01,lineData01);
drawLine(svg02,lineData01);

var vecData01 = [
{"x1":400,"y1":50,"angles":64,"length":Math.sqrt(12500),"stroke":"#fff"},
{"x1":400,"y1":50,"angles":0,"length":50,"stroke":"#fff"},
{"x1":450,"y1":50,"angles":90,"length":100,"stroke":"#fff"}
];    
drawVectorA(svg01,vecData01);
drawVectorA(svg02,vecData01);    

var arcData01 = [
{"startPos":90,"endPos":104,"innerRadius":200,"outerRadius":200,
"stroke":"#fff","xTranslate":50,"yTranslate":50},
];  
drawArc(svg01,arcData01);
var arcData02 = [
{"startPos":90,"endPos":104,"innerRadius":200,"outerRadius":200,
"stroke":"#fff","xTranslate":50,"yTranslate":50},
{"startPos":90,"endPos":155,"innerRadius":30,"outerRadius":30,
"stroke":"#fff","xTranslate":400,"yTranslate":50},
];  
drawArc(svg02,arcData02);

var circleData01 = [
{"cx":50,"cy":50,"r":3,"stroke":"#fff","fillColor":"#fff"},
{"cx":400,"cy":50,"r":3,"stroke":"#fff","fillColor":"#fff"},
];
drawCircle(svg01,circleData01);
drawCircle(svg02,circleData01);

var mathData01 = [
{"x":45,"y":-15,"text":"$$O(観測者)$$","fontSize":16},
{"x":340,"y":-15,"text":"$$(恒星)Q$$","fontSize":16},
{"x":450,"y":100,"text":"$$Q'$$","fontSize":16},
{"x":420,"y":-15,"text":"$$R_{a}$$","fontSize":16},
{"x":455,"y":50,"text":"$$T$$","fontSize":16},
{"x":425,"y":40,"text":"$$v$$","fontSize":16},
{"x":225,"y":20,"text":"$$\\mu$$","fontSize":16},
];
drawMathjax(svg01,mathData01);
var mathData02 = [
{"x":45,"y":-15,"text":"$$O(観測者)$$","fontSize":16},
{"x":390,"y":-15,"text":"$$Q_{0}$$","fontSize":16},
{"x":415,"y":10,"text":"$$\\theta$$","fontSize":16},
{"x":450,"y":100,"text":"$$Q$$","fontSize":16},
{"x":405,"y":-40,"text":"$$vt\\cos{\\theta}$$","fontSize":16},
{"x":405,"y":-25,"text":"$$=R_{a}t$$","fontSize":16},
{"x":225,"y":-35,"text":"$$d=\\frac{a}{\\pi}$$","fontSize":16},
{"x":455,"y":35,"text":"$$vt\\sin{\\theta}$$","fontSize":16},
{"x":455,"y":55,"text":"$$=\\frac{a}{\\pi}\\mu_{0}t$$","fontSize":16},
{"x":400,"y":40,"text":"$$vt$$","fontSize":16},
{"x":225,"y":20,"text":"$$\\sigma$$","fontSize":16},
];
drawMathjax(svg02,mathData02);


var height = 500,
    width  = 700;
var pi2 = Math.PI * 2;
var pi = Math.PI;
var aDegree = Math.PI / 180;
var decStep = Math.PI / 18;

function Point(x,y,z,label, r){
  this.x = x;
  this.y = y;
  this.z = z;
  this.label = label;
  this.r = r;
};
  // variables
  var sphereRadius = 200,
      earthRadius = 4,
      axisLength = sphereRadius * 1.3;

  // point material
  var pointMaterial = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );
  var pointGeometry = new THREE.SphereGeometry( 4, 32, 32 );

/*
  // 東西南北
  var news = [];
  news.push(new Point(sphereRadius,0,0));
  news.push(new Point(0,sphereRadius,0));
  news.push(new Point(-sphereRadius,0,0));
  news.push(new Point(0,-sphereRadius,0));
*/

/**
   赤道座標と地平座標の関係　**/

var proc1 = function(){

  // シーン追加
  var scene = new THREE.Scene();
  // カメラを追加
  var camera = new THREE.OrthographicCamera(  width / - 2, width / 2, height / 2, height / - 2, 1, 10000 );
  camera.position.y = -1000;

  // ライト追加
  var ambLight = new THREE.AmbientLight(0xffff00, 1.0);
  scene.add(ambLight);

   // renderer 追加
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( width, height );
  document.getElementById("canvas01").appendChild( renderer.domElement );
  // control追加
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  
  // グループ追加
  var group = new THREE.Group();
 
   // ** Celestial Sphere ******
  var sphereGeo = new THREE.SphereGeometry( sphereRadius, 32, 32 );
  var sphereMat = new THREE.MeshLambertMaterial( {
    color: 0xffff00,
    transparent: true,
    opacity: 0.3
  } );
  // celestial sphere
  var sphere = new THREE.Mesh( sphereGeo, sphereMat );
  group.add( sphere );

  /* 
      Points 
              */

  // points data 
  var pointsData = [];

  // Origin
  pointsData.push(new Point( 0, 0, 0, "O" ));
  // North Pole
  pointsData.push(new Point( 0, 0, sphereRadius, "P" ));
 
  // 春分点　γ
  var A = aDegree * 0;
  var theta = aDegree * 0;
  var x = sphereRadius*Math.cos(A);
  var y = sphereRadius*Math.sin(A);
  var z = 0;

  var x_ = x;
  var y_ = y * Math.cos(theta) + z * Math.sin(theta);;
  var z_ = y * Math.sin(theta) + z * Math.cos(theta);
  
  pointsData.push(new Point(x_, y_, z_, "γ"));
 
  // 天体　Q0
  var alpha = aDegree * 45;
  var delta = aDegree * 30;

  var x = 0;
  var y = sphereRadius;
  var z = 0;

  // x軸の周りを反時計回りで回す
  var x1 = 0;
  var y1 = y*Math.cos(delta) + z*Math.sin(delta);
  var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

  // z軸の周りを反時計回りで回す
  var x_ = x1*Math.cos(alpha) + y1*Math.sin(alpha);
  var y_ = x1*Math.sin(alpha) + y1*Math.cos(alpha);
  var z_ = z1;  

  pointsData.push(new Point(x_, y_, z_, "Q"));

  // 天体　Q'
  var alpha = aDegree * 0;
  var delta = aDegree * 50;

  var x = 0;
  var y = sphereRadius;
  var z = 0;

  // x軸の周りを反時計回りで回す
  var x1 = 0;
  var y1 = y*Math.cos(delta) + z*Math.sin(delta);
  var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

  // z軸の周りを反時計回りで回す
  var x_ = x1*Math.cos(alpha) + y1*Math.sin(alpha);
  var y_ = x1*Math.sin(alpha) + y1*Math.cos(alpha);
  var z_ = z1;  

  pointsData.push(new Point(x_, y_, z_, "Q'"));

  // U
  var alpha = aDegree * 45;
  var delta = aDegree * 50;

  var x = 0;
  var y = sphereRadius;
  var z = 0;

  // x軸の周りを反時計回りで回す
  var x1 = 0;
  var y1 = y*Math.cos(delta) + z*Math.sin(delta);
  var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

  // z軸の周りを反時計回りで回す
  var x_ = x1*Math.cos(alpha) + y1*Math.sin(alpha);
  var y_ = x1*Math.sin(alpha) + y1*Math.cos(alpha);
  var z_ = z1;  

  pointsData.push(new Point(x_, y_, z_, "U", 0));

  // ミュ-
  var alpha = aDegree * 30;
  var delta = aDegree * 30;

  var x = 0;
  var y = sphereRadius;
  var z = 0;

  // x軸の周りを反時計回りで回す
  var x1 = 0;
  var y1 = y*Math.cos(delta) + z*Math.sin(delta);
  var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

  // z軸の周りを反時計回りで回す
  var x_ = x1*Math.cos(alpha) + y1*Math.sin(alpha);
  var y_ = x1*Math.sin(alpha) + y1*Math.cos(alpha);
  var z_ = z1;  

  pointsData.push(new Point(x_, y_, z_, "μ", 0));
  
  // ψ
  var alpha = aDegree * 40;
  var delta = aDegree * 35;

  var x = 0;
  var y = sphereRadius;
  var z = 0;

  // x軸の周りを反時計回りで回す
  var x1 = 0;
  var y1 = y*Math.cos(delta) + z*Math.sin(delta);
  var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

  // z軸の周りを反時計回りで回す
  var x_ = x1*Math.cos(alpha) + y1*Math.sin(alpha);
  var y_ = x1*Math.sin(alpha) + y1*Math.cos(alpha);
  var z_ = z1;  

  pointsData.push(new Point(x_, y_, z_, "ψ", 0));

  //  Draw points 
  for (var i = 0; i < pointsData.length; i++) {

    var r = (pointsData[i].r==undefined)?4:pointsData[i].r;
    var pointGeometry = new THREE.SphereGeometry( r, 32, 32 );

    if (r) {

    var x = pointsData[i].x;
    var y = pointsData[i].y;
    var z = pointsData[i].z;
 
    var pointMesh = new THREE.Mesh( pointGeometry, pointMaterial );
    pointMesh.position.set(x, y, z) ; 

    group.add(pointMesh);
    }

  };

  /* *** Lines  ***** */

  // ********* 天の赤道 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xff0000
  } );

  var equator = new THREE.Geometry();
    
  var theta = aDegree*0;
  var r = sphereRadius;

  for (var j=0; j<=pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);
      var z = 0;//r*Math.sin(j);

      var x_e = x;
      var y_e = y * Math.cos(theta) + z * Math.sin(theta);;
      var z_e = y * Math.sin(theta) + z * Math.cos(theta);
      equator.vertices.push(
        new THREE.Vector3( x_e, y_e, z_e )
      );
  };
  var equatorLine = new THREE.Line( equator, material );
  group.add( equatorLine );

  // ********* 天体線 Q***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var body = new THREE.Geometry();
    
  var alpha = aDegree * 45;
  var x = 0;
  var y = sphereRadius;
  var z = 0;

  for (var delta=0; delta<=pi2/4; delta+=aDegree){
      // x軸の周りを反時計回りで回す
      var x1 = 0;
      var y1 = y*Math.cos(delta) + z*Math.sin(delta);
      var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

      // z軸の周りを反時計回りで回す
      var x3 = x1*Math.cos(alpha) + y1*Math.sin(alpha);
      var y3 = x1*Math.sin(alpha) + y1*Math.cos(alpha);
      var z3 = z1;  

      body.vertices.push(
        new THREE.Vector3( x3, y3, z3 )
      );
  };
  
  var bodyLine = new THREE.Line( body, material );
  group.add( bodyLine );
 
  // ********* 天体線 Q'***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var body = new THREE.Geometry();
    
  var alpha = aDegree * 0;
  var x = 0;
  var y = sphereRadius;
  var z = 0;

  for (var delta=0; delta<=pi2/4; delta+=aDegree){
      // x軸の周りを反時計回りで回す
      var x1 = 0;
      var y1 = y*Math.cos(delta) + z*Math.sin(delta);
      var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

      // z軸の周りを反時計回りで回す
      var x3 = x1*Math.cos(alpha) + y1*Math.sin(alpha);
      var y3 = x1*Math.sin(alpha) + y1*Math.cos(alpha);
      var z3 = z1;  

      body.vertices.push(
        new THREE.Vector3( x3, y3, z3 )
      );
  };
  
  var bodyLine = new THREE.Line( body, material );
  group.add( bodyLine );

  // ********* 天体 Q 全固有運動速度 ***********
  material = new THREE.LineBasicMaterial( {
    color: 0xff0000
  } );

  var mu = new THREE.Geometry();
    
  var x = 0;
  var y = sphereRadius;
  var z = 0;

  var alpha = aDegree * 45;
  var step = alpha / 20;

  for (var delta=aDegree*30; delta<=aDegree*50; delta+=aDegree){
      // x軸の周りを反時計回りで回す
      var x1 = 0;
      var y1 = y*Math.cos(delta) + z*Math.sin(delta);
      var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

      // z軸の周りを反時計回りで回す
      var x_ = x1*Math.cos(alpha) + y1*Math.sin(alpha);
      var y_ = x1*Math.sin(alpha) + y1*Math.cos(alpha);
      var z_ = z1;  
      mu.vertices.push(
        new THREE.Vector3( x_, y_, z_ )
      );

      alpha -= step; 
  };
  var muLine = new THREE.Line( mu, material );
  group.add( muLine );

  // ********* mu delta ***********
  material = new THREE.LineDashedMaterial( {
    color: 0x00ff00,
    scale: 3,
    gapSize: 5
  } );

  var mu = new THREE.Geometry();
    
  var x = 0;
  var y = sphereRadius;
  var z = 0;

  var alpha = aDegree * 45;
  var delta = aDegree * 50;
  var step = alpha / 20;

  for (var alpha=aDegree*0; alpha<=aDegree*45; alpha+=aDegree){
      // x軸の周りを反時計回りで回す
      var x1 = 0;
      var y1 = y*Math.cos(delta) + z*Math.sin(delta);
      var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

      // z軸の周りを反時計回りで回す
      var x_ = x1*Math.cos(alpha) + y1*Math.sin(alpha);
      var y_ = x1*Math.sin(alpha) + y1*Math.cos(alpha);
      var z_ = z1;  
      mu.vertices.push(
        new THREE.Vector3( x_, y_, z_ )
      );

  };
  var muLine = new THREE.Line( mu, material );
  group.add( muLine );

  // ********* mu delta ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var mu = new THREE.Geometry();
    
  var x = 0;
  var y = sphereRadius;
  var z = 0;

  var alpha = aDegree * 45;
  var delta = aDegree * 70;
 
  for (var alpha=aDegree*0; alpha<=aDegree*45; alpha+=aDegree){
      // x軸の周りを反時計回りで回す
      var x1 = 0;
      var y1 = y*Math.cos(delta) + z*Math.sin(delta);
      var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

      // z軸の周りを反時計回りで回す
      var x_ = x1*Math.cos(alpha) + y1*Math.sin(alpha);
      var y_ = x1*Math.sin(alpha) + y1*Math.cos(alpha);
      var z_ = z1;  
      mu.vertices.push(
        new THREE.Vector3( x_, y_, z_ )
      );

  };
  
  var muLine = new THREE.Line( mu, material );
  group.add( muLine );



  // **** 文字 *****
  var loader = new THREE.FontLoader();
  var font;
  loader.load( '{{site.url}}/fonts/helvetiker_regular.typeface.json',   
    function ( response ) {
      font = response;
      
      // 点ラベル表示
      material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
      for (var i = 0; i < pointsData.length; i++) {
        var textGeo = new THREE.TextGeometry( pointsData[i].label, {
          font: font,
          size: 13,
          height: 5
        });    
        var textMesh1 = new THREE.Mesh( textGeo, material );

        textMesh1.position.x = 1.1*pointsData[i].x; 
        textMesh1.position.y = 1.1*pointsData[i].y;
        textMesh1.position.z = 1.1*pointsData[i].z;

        textMesh1.rotation.x = pi2 / 4 ;

        var theta_ = Math.asin(pointsData[i].y/sphereRadius);
        

        textMesh1.rotation.y = theta_ + 3* pi/4;
 
        group.add(textMesh1);
      };

       
  });



  group.rotation.z = -aDegree*150;
  group.rotation.x = aDegree*10;
  group.rotation.y = aDegree*00;

  scene.add( group );
  
  function render() {
    requestAnimationFrame( render );

    renderer.render( scene, camera );

    controls.update();
  }

  render();
}


proc1();

var cyg_alpha0 = 316.166396 * aDegree;
var cyg_delta0 = 38.499750 * aDegree;

var dt0 = new Date(1950,1,1,0,0,0);
var dt1 = new Date(1978,6,10,21,20,0);
var t = getPeriodByBessel(dt0, dt1);

$("#period").html(t);

var cos_alpha0 = Math.cos(cyg_alpha0);
var sin_alpha0 = Math.sin(cyg_alpha0);
$("#cos_alpha0").html(cos_alpha0);
$("#sin_alpha0").html(sin_alpha0);

var cos_delta0 = Math.cos(cyg_delta0);
var sin_delta0 = Math.sin(cyg_delta0);
$("#cos_delta0").html(cos_delta0);
$("#sin_delta0").html(sin_delta0);

var mu_alpha = 0.0014678;
var mu_delta = 0.00088464;
var mu_alpha_cos_delta0 = mu_alpha * cos_delta0;    
var ra = -64.3;
var pi0 = .000001435;
var earth_a = 1.496 * 100000000;

var mu0 = Math.sqrt(mu_alpha_cos_delta0*mu_alpha_cos_delta0 + mu_delta*mu_delta);
$("#mu0").html(mu0);

var tan_psi0 = mu_alpha_cos_delta0 / mu_delta;
$("#tan_psi0").html(tan_psi0);

var psi0 = Math.atan(tan_psi0);
$("#psi0").html(psi0/aDegree);

var cos_psi0_ = Math.cos(psi0);
$("#cos_psi0").html(cos_psi0_);
var sin_psi0_ = Math.sin(psi0);
$("#sin_psi0").html(sin_psi0_);

var secPerBesselYear = 365.2422 * 3600 * 24;
var t_ = t * secPerBesselYear;
var sigma_ =  1 - ((pi0/earth_a) * ra * t_);
var sigma = mu0 * t * sigma_;
$("#sigma").html(sigma);

var cos_sigma = Math.cos(sigma*aDegree);
var sin_sigma = Math.sin(sigma*aDegree);
$("#cos_sigma").html(cos_sigma);
$("#sin_sigma").html(sin_sigma);

var L1 = cos_alpha0 * cos_delta0 * cos_sigma
        - (sin_alpha0 * sin_psi0_ + cos_alpha0 * sin_delta0 * cos_psi0_) * sin_sigma;
var M1 = sin_alpha0 * cos_delta0 * cos_sigma
        + (cos_alpha0 * sin_psi0_ - sin_alpha0 * sin_delta0 * cos_psi0_) * sin_sigma;
var N1 =  sin_delta0 * cos_sigma + cos_delta0 * cos_psi0_ * sin_sigma;

$("#L1").html(L1);
$("#M1").html(M1);
$("#N1").html(N1);

var tan_alpha1 = M1 / L1;
var alpha1 = Math.atan(tan_alpha1);
var alpha1_= 360 + alpha1/aDegree;
$("#tan_alpha1").html(tan_alpha1);
$("#alpha1").html(alpha1_ + "°");

var sin_delta1 = N1;
var delta1 = Math.asin(sin_delta1);
$("#sin_delta1").html(sin_delta1);
$("#delta1").html(delta1/aDegree + "°");



console.log(t);
</script>