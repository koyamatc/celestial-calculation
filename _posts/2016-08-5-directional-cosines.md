---
title: 天球座標
layout: post
date: 2016-07-20 19:00:00
postTitle: 方向余弦と座標系の回転
categories: coordinates
---

-------

### 方向余弦

<div id="canvas1"></div>

直行座標系XYZにおいて、原点Oからある方向へ引いた直線g　と

x軸の正の方向と作る角\\( \angle{XOL}\\)を　a

y軸の正の方向と作る角\\( \angle{YOL}\\)を　b

z軸の正の方向と作る角\\( \angle{ZOL}\\)を　c 

とするとき

$$L= \cos(a) $$
$$M= \cos(b)$$
$$N= \cos(c)$$

この３つの値、 L,M,N で決まる向きを

__方向余弦(direction cosines)__ という

このとき
$$L^2+M^2+N^2 = 1$$
が成り立つ。

### 座標系の回転

直行座標XYZにおいて、方向余弦（L,M,N）で示せるgがあります

このときに　

x軸の正の方向からみて、x軸を軸として反時計回りに角度\\(\theta\\)回転させた時の

座標系X'Y'Z'におけるgの方向余弦を(L',M',N')とすると

前の座標系XYZの方向余弦との間に

$$L'=L$$
$$M'=M\cos(\theta) + N\sin(\theta)$$
$$n'=-M\cos(\theta) + N\sin(\theta)$$

の関係が成り立つ

行列で表すと

\begin{eqnarray}
   \left(
     \begin{array}{c}
       L' \\\
       M' \\\
       N'
     \end{array}
   \right)
 = \left(
     \begin{array}{c}
       1 & 0 & 0 \\\
       0 & \cos\theta & \sin\theta \\\
       0 & -\sin\theta & \cos \theta
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

次に　y軸の正の方向からみて、y軸を軸として反時計回りに角度\\(\theta\\)回転させた時の

座標系X"Y"Z"におけるgの方向余弦を(L",M",N")とすると

\begin{eqnarray}
   \left(
     \begin{array}{c}
       L" \\\
       M" \\\
       N"
     \end{array}
   \right)
 = \left(
     \begin{array}{c} 
       \cos\theta & 0 & -\sin\theta \\\
       0 & 1 & 0 \\\
       \sin\theta & 0 & \cos \theta
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

次に　z軸の正の方向からみて、z軸を軸として反時計回りに角度\\(\theta\\)回転させた時の

座標系X'''Y'''Z'''におけるgの方向余弦を(L''',M''',N''')とすると

\begin{eqnarray}
   \left(
     \begin{array}{c}
       L''' \\\
       M''' \\\
       N'''
     \end{array}
   \right)
 = \left(
     \begin{array}{c} 
       \cos\theta &  \sin\theta & 0 \\\
       -\sin\theta &  \cos \theta & 0 \\\
       0 & 0 & 1 
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

### 赤道座標の方向余弦表示

<div id="canvas2"></div>

直行座標系XYZにおいて

+ X軸の正の方向を春分点の向き

+ Y軸の正の方向を 赤経 6h, 赤緯 0°　の向き

+ Z軸の正の方向を 天の北極の向き

としたとき、　この座標系を赤道直行座標系と呼ぶ

この場合、赤経\\(\alpha\\), 赤緯\\(\delta\\)で表せる

天体の方向余弦(L,M,N)は

$$L=\cos{a}=\cos \delta \cos \alpha$$
$$M=\cos{b}=\cos \delta \sin \alpha$$
$$N=\cos{c}=\sin \delta $$

<label class="label label-info">計算例</label>

天体 61Cyg の方向余弦を計算する

$$\alpha=316°.166396$$
$$\delta=38°.499750$$

<div id="L"></div>
<div id="M"></div>
<div id="N"></div>

方向余弦から天体の赤経、赤緯を逆算するには
$$\tan\alpha = \frac{M}{L}$$
$$ \quad L \ge 0で、\alphaは第Ⅰ象限、または第Ⅳ象限$$
$$ \quad L \lt 0で、\alphaは第Ⅱ象限、または第Ⅲ象限$$
$$\sin \delta=N \quad -90°　\ge \delta \ge +90°　$$

### 地平座標の方向余弦表示

<div id="canvas3"></div>

地平座標においては

+ X軸を地平線上の南の向きに

+ Y軸を地平線上の東の向きに

+ Z軸を天頂の向きに

れが地平直行座標系

方位角A, 高度h で示される方向余弦（l,m,n）は

$$l = \cos h \cos A$$
$$m = -\cos h \sin A$$
$$n = \sin h$$

方向余弦から天体の方位角、高度を逆算するには
$$\tan\A = \frac{m}{l}$$
$$ \quad l \ge 0で、Aは第Ⅰ象限、または第Ⅳ象限$$
$$ \quad l \lt 0で、Aは第Ⅱ象限、または第Ⅲ象限$$
$$\sin h=n \quad -90°　\ge h \ge +90°　$$

-----

### 赤道座標と地平座標の関係

<div id="canvas4"></div>

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

var height = 500,
    width  = 700;
var pi2 = Math.PI * 2;
var pi = Math.PI;
var aDegree = Math.PI / 180;
var decStep = Math.PI / 18;

function Point(x,y,z){
  this.x = x;
  this.y = y;
  this.z = z;
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

  // oxyz座標
  var xyz = [];
  xyz.push(new Point(0,0,0));
  xyz.push(new Point(axisLength,0,0));
  xyz.push(new Point(0,axisLength,0));
  xyz.push(new Point(0,0,axisLength));

  // 東西南北
  var news = [];
  news.push(new Point(sphereRadius,0,0));
  news.push(new Point(0,sphereRadius,0));
  news.push(new Point(-sphereRadius,0,0));
  news.push(new Point(0,-sphereRadius,0));

// 
var proc1 = function(){

  // シーン追加
  var scene = new THREE.Scene();
    // カメラを追加
  var camera = new THREE.OrthographicCamera(  width / - 2, width / 2, height / 2, height / - 2, 1, 10000 );
  camera.position.y = -1000;

  // ライト追加
  var ambLight = new THREE.AmbientLight(0xffff00, 1.0);
  scene.add(ambLight);



  // point material
  var pointMaterial = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  
  // renderer 追加
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( width, height );
  document.getElementById("canvas1").appendChild( renderer.domElement );
  // control追加
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  
  // オブジェクト追加
  var group = new THREE.Group();
  
  // Celestial Sphere
  var sphereGeo = new THREE.SphereGeometry( sphereRadius, 32, 32 );
  var sphereMat = new THREE.MeshLambertMaterial( {
    color: 0xffff00,
    transparent: true,
    opacity: 0.3
  } );
  // celestial sphere
  var sphere = new THREE.Mesh( sphereGeo, sphereMat );
  group.add( sphere );

  // 座標xyz  
  var points = [];
  for (var i = 0; i < xyz.length; i++) {

    points[i] = new THREE.SphereGeometry( 4, 32, 32 );
    var x = xyz[i].x;
    var y = xyz[i].y;
    var z = xyz[i].z;
 
    var pointMesh = new THREE.Mesh( points[i], pointMaterial );
    pointMesh.position.set(x, y, z) ; 
    group.add(pointMesh);

  };

  // 天体点
  var gamma = new THREE.SphereGeometry( 4, 32, 32 );
  var pointMesh = new THREE.Mesh( gamma, pointMaterial );

  var alpha = aDegree * 30;
  var delta = aDegree * 45;

  var x = sphereRadius;
  var y = 0;
  var z = 0;

  // z軸の周りを反時計回りで回す
  var x1 = x*Math.cos(delta) + y*Math.sin(delta);
  var y1 = x*Math.sin(delta) + y*Math.cos(delta);  
  var z1 = 0;

  // y軸の周りを反時計回りで回す
  var x2 = x1*Math.cos(alpha) + z1*Math.sin(alpha);
  var y2 = y1;  
  var z2 = x1*Math.sin(alpha) + z1*Math.cos(alpha);

  pointMesh.position.set(x2, y2, z2);
  
  group.add(pointMesh);

  // ********* 天の赤道 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var horison = new THREE.Geometry();
    
  var theta = 0;
  var r = sphereRadius * Math.cos(theta);
  var y = sphereRadius * Math.sin(theta); 

  for (var j=0; j<=pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var z = r*Math.sin(j);

      horison.vertices.push(
        new THREE.Vector3( x, y, z )
      );
  };
  var horisonLine = new THREE.Line( horison, material );
  group.add( horisonLine );

  // ********* 天体線 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var body = new THREE.Geometry();
    
  var alpha = aDegree * 30;
  var x = sphereRadius;
  var y = 0;
  var z = 0;

  for (var delta=0; delta<=pi2/4; delta+=aDegree){
      // z軸の周りを反時計回りで回す
      var x1 = x*Math.cos(delta) + y*Math.sin(delta);
      var y1 = x*Math.sin(delta) + y*Math.cos(delta);  
      var z1 = 0;

      // y軸の周りを反時計回りで回す
      var x3 = x1*Math.cos(alpha) + z1*Math.sin(alpha);
      var y3 = y1;  
      var z3 = x1*Math.sin(alpha) + z1*Math.cos(alpha);

      body.vertices.push(
        new THREE.Vector3( x3, y3, z3 )
      );
  };
  var bodyLine = new THREE.Line( body, material );
  group.add( bodyLine );

  // XYZ線
  var lines = [];
  material = new THREE.MeshLambertMaterial( {
      color: 0xffffff
  } );

  for (var i = 0; i < xyz.length; i++) {
    
    lines[i] = new THREE.Geometry();
    var x = 1.3*xyz[i].x;
    var y = 1.3*xyz[i].y;
    var z = 1.3*xyz[i].z;
    lines[i].vertices.push(new THREE.Vector3( 0, 0, 0 ));
    lines[i].vertices.push(new THREE.Vector3( x, y, z ));
    var line = new THREE.Line( lines[i], material );
    group.add( line );

  };
 
  // g線
  var gLine = new THREE.Geometry();
    var x = 1.5*x2;
    var y = 1.5*y2;
    var z = 1.5*z2;
    gLine.vertices.push(new THREE.Vector3( 0, 0, 0 ));
    gLine.vertices.push(new THREE.Vector3( x, y, z ));
    var line = new THREE.Line( gLine, material );
  group.add( line );

  // 文字
  var loader = new THREE.FontLoader();
  var font;
  loader.load( '{{site.url}}/fonts/helvetiker_regular.typeface.json',   
    function ( response ) {
      font = response;
      
      material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
      // direction
      for (var i = 0; i < xyz.length; i++) {
        
        var text = (i==0)?"O":(i==1)?"Y":(i==2)?"Z":"X";
        var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
        });    
        var textMesh1 = new THREE.Mesh( textGeo, material );

        textMesh1.position.x = 1.1*xyz[i].x; 
        textMesh1.position.y = 1.1*xyz[i].y;
        textMesh1.position.z = 1.1*xyz[i].z;
 
        //textMesh1.rotation.y = (i-1) * pi2 / 4 ;
        group.add(textMesh1);
      };

     
     //原点
     var text = "O";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
      }); 
      var textMesh4 = new THREE.Mesh( textGeo, material );   

      textMesh4.position.set(0,0,0); 
 
      textMesh4.rotation.y =  pi2/3 - pi2/4;
      group.add(textMesh4);

    
     //天体
     var text = "R(L,M,N)";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
      }); 
      var textMesh5 = new THREE.Mesh( textGeo, material );   

      textMesh5.position.set(x2+15,y2+15,z2); 
 
      textMesh5.rotation.y =  aDegree*35;
      group.add(textMesh5);

     //g線
     var text = "g";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
      }); 
      var textMesh5 = new THREE.Mesh( textGeo, material );   

      textMesh5.position.set(1.5*x2+15,1.5*y2+15,1.5*z2); 
 
      textMesh5.rotation.y =  aDegree*35;
      group.add(textMesh5);
        
  });

  group.rotation.x = aDegree*110;
  group.rotation.y = -aDegree*45;
  
  scene.add( group );
  
  function render() {
    requestAnimationFrame( render );

    renderer.render( scene, camera );

    controls.update();
  }

  render();
} 

var proc2 = function(){
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
  document.getElementById("canvas2").appendChild( renderer.domElement );
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

  /* *** Lines  ***** */

  // ********* 天の赤道 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xff0000
  } );

  var horison = new THREE.Geometry();
    
  var theta = 0;
  var r = sphereRadius * Math.cos(theta);
  var z = sphereRadius * Math.sin(theta); 

  for (var j=0; j<=pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);

      horison.vertices.push(
        new THREE.Vector3( x, y, z )
      );
  };
  var horisonLine = new THREE.Line( horison, material );
  group.add( horisonLine );
 
  // ********* 赤経角度線 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0x00ff00
  } );

  var horison = new THREE.Geometry();
    
  var theta = 0;
  var r = ( sphereRadius + 50) * Math.cos(theta);
  var z = ( sphereRadius + 50) * Math.sin(theta); 

  for (var j=0; j<=aDegree*60; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);

      horison.vertices.push(
        new THREE.Vector3( x, y, z )
      );
  };
  var horisonLine = new THREE.Line( horison, material );
  group.add( horisonLine );
 
  // XYZ線 **************
  var lines = [];
  material = new THREE.MeshLambertMaterial( {
      color: 0xffffff
  } );

  for (var i = 1; i < xyz.length; i++) {
    
    lines[i] = new THREE.Geometry();
    var x = 1.3*xyz[i].x;
    var y = 1.3*xyz[i].y;
    var z = 1.3*xyz[i].z;
    lines[i].vertices.push(new THREE.Vector3( 0, 0, 0 ));
    lines[i].vertices.push(new THREE.Vector3( x, y, z ));
    var line = new THREE.Line( lines[i], material );
    group.add( line );

  };
  
  // ********* 天体線 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var body = new THREE.Geometry();
    
  var alpha = aDegree * 30;
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

  // 赤緯デルタ角度線
  deltaMat = new THREE.MeshLambertMaterial( {
    color: 0x00ff00
  } );
  var deltaLine = new THREE.Geometry();
    
  var alpha = aDegree * 30;
  var x = 0;
  var y = sphereRadius + 50;
  var z = 0;

  for (var delta=0; delta<=aDegree*45; delta+=aDegree){
      // x軸の周りを反時計回りで回す
      var x1 = 0;
      var y1 = y*Math.cos(delta) + z*Math.sin(delta);
      var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

      // z軸の周りを反時計回りで回す
      var x3 = x1*Math.cos(alpha) + y1*Math.sin(alpha);
      var y3 = x1*Math.sin(alpha) + y1*Math.cos(alpha);
      var z3 = z1;  

      deltaLine.vertices.push(
        new THREE.Vector3( x3, y3, z3 )
      );
  };
  var deltaLine = new THREE.Line( deltaLine, deltaMat );
  group.add( deltaLine );


  /* **** Points **** */

  // 座標xyz  
  var points = [];
  for (var i = 0; i < xyz.length; i++) {

    points[i] = new THREE.SphereGeometry( 4, 32, 32 );
    var x = xyz[i].x;
    var y = xyz[i].y;
    var z = xyz[i].z;
 
    var pointMesh = new THREE.Mesh( points[i], pointMaterial );
    pointMesh.position.set(x, y, z) ; 
    group.add(pointMesh);

  };

    // 天体点
  var gamma = new THREE.SphereGeometry( 4, 32, 32 );
  var pointMesh = new THREE.Mesh( gamma, pointMaterial );

  var alpha = aDegree * 30;
  var delta = aDegree * 45;

  var x = 0;
  var y = sphereRadius;
  var z = 0;

  // x軸の周りを反時計回りで回す
  var x1 = 0;
  var y1 = y*Math.cos(delta) + z*Math.sin(delta);
  var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

  // z軸の周りを反時計回りで回す
  var x2 = x1*Math.cos(alpha) + y1*Math.sin(alpha);
  var y2 = x1*Math.sin(alpha) + y1*Math.cos(alpha);
  var z2 = z1;  

  pointMesh.position.set(x2, y2, z2);
  
  group.add(pointMesh);

  // 天体と天頂を通る大円と赤道の交点
  var point = new THREE.SphereGeometry( 4, 32, 32 );
  var pointMesh = new THREE.Mesh( point, pointMaterial );

  var alpha = aDegree * 30;

  var x = 0;
  var y = sphereRadius;
  var z = 0;

  // z軸の周りを反時計回りで回す
  var x3 = x*Math.cos(alpha) + y*Math.sin(alpha);
  var y3 = x*Math.sin(alpha) + y*Math.cos(alpha);
  var z3 = z;  

  pointMesh.position.set(x3, y3, z3);
  
  group.add(pointMesh);

  // 原点-交点
  var gLine = new THREE.Geometry();
    var x = 1.5*x3;
    var y = 1.5*y3;
    var z = 1.5*z3;
    gLine.vertices.push(new THREE.Vector3( 0, 0, 0 ));
    gLine.vertices.push(new THREE.Vector3( x, y, z ));
    var line = new THREE.Line( gLine, material );
  group.add( line );

  // g線
  var gLine = new THREE.Geometry();
    var x = 1.5*x2;
    var y = 1.5*y2;
    var z = 1.5*z2;
    gLine.vertices.push(new THREE.Vector3( 0, 0, 0 ));
    gLine.vertices.push(new THREE.Vector3( x, y, z ));
    var line = new THREE.Line( gLine, material );
  group.add( line );

  // **** 文字 *****
  var loader = new THREE.FontLoader();
  var font;
  loader.load( '{{site.url}}/fonts/helvetiker_regular.typeface.json',   
    function ( response ) {
      font = response;
      
      material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
      // direction
      for (var i = 0; i < xyz.length; i++) {
        
        var text = (i==0)?"O":(i==1)?"X":(i==2)?"Y":"Z";
        var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
        });    
        var textMesh1 = new THREE.Mesh( textGeo, material );

        textMesh1.position.x = 1.3*xyz[i].x; 
        textMesh1.position.y = 1.3*xyz[i].y;
        textMesh1.position.z = 1.3*xyz[i].z;

        textMesh1.rotation.x = pi2 / 4 ;
        if ( i== 0) {
          textMesh1.rotation.y = -aDegree*60;
        } else {
          textMesh1.rotation.y = -aDegree*(60+30*(3*i-2));
        }
        
        group.add(textMesh1);
      };
      // 春分点、y軸
      for (var i = 1; i < 3; i++) {
        
        var text = (i==1)?"equinox":"6h";
        var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
        });    
        var textMesh1 = new THREE.Mesh( textGeo, material );

        textMesh1.position.x = 1.1*xyz[i].x; 
        textMesh1.position.y = 1.1*xyz[i].y;
        textMesh1.position.z = 1.1*xyz[i].z+20;

        textMesh1.rotation.x = pi2 / 4 ;
        if ( i== 0) {
          textMesh1.rotation.y = -aDegree*60;
        } else {
          textMesh1.rotation.y = aDegree*(60+30*(3*i-2));
        }
        
        group.add(textMesh1);
      };

     // 天の北極
     var text = "P";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
      });    
      var textMesh1 = new THREE.Mesh( textGeo, material );

      textMesh1.position.x = 1.1*xyz[3].x; 
      textMesh1.position.y = 1.1*xyz[3].y;
      textMesh1.position.z = 1.1*xyz[3].z;

      textMesh1.rotation.x = pi2 / 4 ;
      textMesh1.rotation.y = -aDegree*(60+30*(3*3-2));
        
      group.add(textMesh1);
 
     //天体
     var text = "R(L,M,N)";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
      }); 
      var textMesh5 = new THREE.Mesh( textGeo, material );   

      textMesh5.position.set(x2+15,y2+15,z2); 
 
      textMesh5.rotation.x =  aDegree*90;
      textMesh5.rotation.y =  aDegree*120;
      group.add(textMesh5);

     //g線
     var text = "g";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
      }); 
      var textMesh5 = new THREE.Mesh( textGeo, material );   

      textMesh5.position.set(1.5*x2+15,1.5*y2+15,1.5*z2); 

      textMesh5.rotation.x =  aDegree*90;
      textMesh5.rotation.y =  aDegree*120;
 
      group.add(textMesh5);

     //alpha
     var text = "α";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
      }); 
      var textMesh5 = new THREE.Mesh( textGeo, material );   

      var x = (sphereRadius + 55)*Math.cos(aDegree*30);
      var y = (sphereRadius + 55)*Math.sin(aDegree*30);
      textMesh5.position.set(x,y,-20); 

      textMesh5.rotation.x =  aDegree*90;
      textMesh5.rotation.y =  aDegree*120;
 
      group.add(textMesh5);

     //delta
     var text = "δ";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
      }); 
      var textMesh5 = new THREE.Mesh( textGeo, material );   

      var alpha = aDegree * 30;
      var delta = aDegree * 20; 

      var x = 0;
      var y = sphereRadius + 50;
      var z = 0;

      // x軸の周りを反時計回りで回す
      var x1 = 0;
      var y1 = y*Math.cos(delta) + z*Math.sin(delta);
      var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

      // z軸の周りを反時計回りで回す
      var x3 = x1*Math.cos(alpha) + y1*Math.sin(alpha);
      var y3 = x1*Math.sin(alpha) + y1*Math.cos(alpha);
      var z3 = z1;  
     
     　textMesh5.position.set(x3,y3,z3); 

      textMesh5.rotation.x =  aDegree*90;
      textMesh5.rotation.y =  aDegree*120;
 
      group.add(textMesh5);
        
  });


  group.rotation.z = -aDegree*120;
  group.rotation.x = aDegree*10;

  scene.add( group );
  
  function render() {
    requestAnimationFrame( render );

    renderer.render( scene, camera );

    controls.update();
  }

  render();
}

var proc3 = function(){
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
  document.getElementById("canvas3").appendChild( renderer.domElement );
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

  /* *** Lines  ***** */

  // ********* 天の赤道 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xff0000
  } );

  var horison = new THREE.Geometry();
    
  var theta = 0;
  var r = sphereRadius * Math.cos(theta);
  var z = sphereRadius * Math.sin(theta); 

  for (var j=0; j<=pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);

      horison.vertices.push(
        new THREE.Vector3( x, y, z )
      );
  };
  var horisonLine = new THREE.Line( horison, material );
  group.add( horisonLine );
 
  // ********* 経度度線 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0x00ff00
  } );

  var horison = new THREE.Geometry();
    
  var theta = 0;
  var r = sphereRadius/2;
  var z = r * Math.sin(theta); 

  for (var j=60*aDegree; j<=aDegree*360; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);

      horison.vertices.push(
        new THREE.Vector3( x, y, z )
      );
  };
  var horisonLine = new THREE.Line( horison, material );
  group.add( horisonLine );
 
  // XYZ線 **************
  var lines = [];
  material = new THREE.MeshLambertMaterial( {
      color: 0xffffff
  } );

  for (var i = 1; i < xyz.length; i++) {
    
    lines[i] = new THREE.Geometry();
    var x = 1.3*xyz[i].x;
    var y = 1.3*xyz[i].y;
    var z = 1.3*xyz[i].z;
    lines[i].vertices.push(new THREE.Vector3( 0, 0, 0 ));
    lines[i].vertices.push(new THREE.Vector3( x, y, z ));
    var line = new THREE.Line( lines[i], material );
    group.add( line );

  };
  // 東西南北線 **************
  var lines = [];
  material = new THREE.MeshLambertMaterial( {
      color: 0xffffff
  } );

  for (var i = 1; i < news.length; i++) {
    
    lines[i] = new THREE.Geometry();
    var x = news[i].x;
    var y = news[i].y;
    var z = news[i].z;
    lines[i].vertices.push(new THREE.Vector3( 0, 0, 0 ));
    lines[i].vertices.push(new THREE.Vector3( x, y, z ));
    var line = new THREE.Line( lines[i], material );
    group.add( line );

  };
  
  // ********* 天体線 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var body = new THREE.Geometry();
    
  var alpha = aDegree * 30;
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

  // 高度線
  deltaMat = new THREE.MeshLambertMaterial( {
    color: 0x00ff00
  } );
  var deltaLine = new THREE.Geometry();
    
  var alpha = aDegree * 30;
  var x = 0;
  var y = sphereRadius + 50;
  var z = 0;

  for (var delta=0; delta<=aDegree*45; delta+=aDegree){
      // x軸の周りを反時計回りで回す
      var x1 = 0;
      var y1 = y*Math.cos(delta) + z*Math.sin(delta);
      var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

      // z軸の周りを反時計回りで回す
      var x3 = x1*Math.cos(alpha) + y1*Math.sin(alpha);
      var y3 = x1*Math.sin(alpha) + y1*Math.cos(alpha);
      var z3 = z1;  

      deltaLine.vertices.push(
        new THREE.Vector3( x3, y3, z3 )
      );
  };
  var deltaLine = new THREE.Line( deltaLine, deltaMat );
  group.add( deltaLine );


  /* **** Points **** */

  // 座標xyz  
  var points = [];
  for (var i = 0; i < xyz.length; i++) {

    points[i] = new THREE.SphereGeometry( 4, 32, 32 );
    var x = xyz[i].x;
    var y = xyz[i].y;
    var z = xyz[i].z;
 
    var pointMesh = new THREE.Mesh( points[i], pointMaterial );
    pointMesh.position.set(x, y, z) ; 
    group.add(pointMesh);

  };

  // 東西南北  
  var points = [];
  for (var i = 0; i < news.length; i++) {

    points[i] = new THREE.SphereGeometry( 4, 32, 32 );
    var x = news[i].x;
    var y = news[i].y;
    var z = news[i].z;
 
    var pointMesh = new THREE.Mesh( points[i], pointMaterial );
    pointMesh.position.set(x, y, z) ; 
    group.add(pointMesh);

  };

    // 天体点
  var gamma = new THREE.SphereGeometry( 4, 32, 32 );
  var pointMesh = new THREE.Mesh( gamma, pointMaterial );

  var alpha = aDegree * 30;
  var delta = aDegree * 45;

  var x = 0;
  var y = sphereRadius;
  var z = 0;

  // x軸の周りを反時計回りで回す
  var x1 = 0;
  var y1 = y*Math.cos(delta) + z*Math.sin(delta);
  var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

  // z軸の周りを反時計回りで回す
  var x2 = x1*Math.cos(alpha) + y1*Math.sin(alpha);
  var y2 = x1*Math.sin(alpha) + y1*Math.cos(alpha);
  var z2 = z1;  

  pointMesh.position.set(x2, y2, z2);
  
  group.add(pointMesh);

  // 天体と天頂を通る大円と赤道の交点
  var point = new THREE.SphereGeometry( 4, 32, 32 );
  var pointMesh = new THREE.Mesh( point, pointMaterial );

  var alpha = aDegree * 30;

  var x = 0;
  var y = sphereRadius;
  var z = 0;

  // z軸の周りを反時計回りで回す
  var x3 = x*Math.cos(alpha) + y*Math.sin(alpha);
  var y3 = x*Math.sin(alpha) + y*Math.cos(alpha);
  var z3 = z;  

  pointMesh.position.set(x3, y3, z3);
  
  group.add(pointMesh);

  // 原点-交点
  var gLine = new THREE.Geometry();
    var x = 1.5*x3;
    var y = 1.5*y3;
    var z = 1.5*z3;
    gLine.vertices.push(new THREE.Vector3( 0, 0, 0 ));
    gLine.vertices.push(new THREE.Vector3( x, y, z ));
    var line = new THREE.Line( gLine, material );
  group.add( line );

  // g線
  var gLine = new THREE.Geometry();
    var x = 1.5*x2;
    var y = 1.5*y2;
    var z = 1.5*z2;
    gLine.vertices.push(new THREE.Vector3( 0, 0, 0 ));
    gLine.vertices.push(new THREE.Vector3( x, y, z ));
    var line = new THREE.Line( gLine, material );
  group.add( line );

  // **** 文字 *****
  var loader = new THREE.FontLoader();
  var font;
  loader.load( '{{site.url}}/fonts/helvetiker_regular.typeface.json',   
    function ( response ) {
      font = response;
      
      material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
      // axis
      for (var i = 0; i < xyz.length; i++) {
        
        var text = (i==0)?"O":(i==1)?"x":(i==2)?"y":"z";
        var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
        });    
        var textMesh1 = new THREE.Mesh( textGeo, material );

        textMesh1.position.x = 1.3*xyz[i].x; 
        textMesh1.position.y = 1.3*xyz[i].y;
        textMesh1.position.z = 1.3*xyz[i].z;

        textMesh1.rotation.x = pi2 / 4 ;
        if ( i== 0) {
          textMesh1.rotation.y = -aDegree*60;
        } else {
          textMesh1.rotation.y = -aDegree*(60+30*(3*i-2));
        }
        
        group.add(textMesh1);
      };

      // 東西南北
      for (var i = 0; i < news.length; i++) {
        
        var text = (i==0)?"S":(i==1)?"E":(i==2)?"N":"W";
        var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
        });    
        var textMesh1 = new THREE.Mesh( textGeo, material );

        textMesh1.position.x = 1.1*news[i].x; 
        textMesh1.position.y = 1.1*news[i].y;
        textMesh1.position.z = 1.1*news[i].z;

        textMesh1.rotation.x = pi2 / 4 ;
        if ( i== 0) {
          textMesh1.rotation.y = aDegree*90;
        } else if ( i== 2) {
          textMesh1.rotation.y = -aDegree*90;
        } else {
          textMesh1.rotation.y = aDegree*(90+45*(4*i-2));
        }
        
        group.add(textMesh1);
      };


     // 天頂
     var text = "Z";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
      });    
      var textMesh1 = new THREE.Mesh( textGeo, material );

      textMesh1.position.x = 1.1*xyz[3].x; 
      textMesh1.position.y = 1.1*xyz[3].y;
      textMesh1.position.z = 1.1*xyz[3].z;

      textMesh1.rotation.x = pi2 / 4 ;
      textMesh1.rotation.y = -aDegree*(60+30*(3*3-2));
        
      group.add(textMesh1);
 
     //天体
     var text = "X(l,m,n)";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
      }); 
      var textMesh5 = new THREE.Mesh( textGeo, material );   

      textMesh5.position.set(x2+15,y2+15,z2); 
 
      textMesh5.rotation.x =  aDegree*90;
      textMesh5.rotation.y =  aDegree*120;
      group.add(textMesh5);

     //g線
     var text = "g";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
      }); 
      var textMesh5 = new THREE.Mesh( textGeo, material );   

      textMesh5.position.set(1.5*x2+15,1.5*y2+15,1.5*z2); 

      textMesh5.rotation.x =  aDegree*90;
      textMesh5.rotation.y =  aDegree*120;
 
      group.add(textMesh5);

     //alpha
     var text = "A";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
      }); 
      var textMesh5 = new THREE.Mesh( textGeo, material );   

      var x = (sphereRadius/2)*Math.cos(aDegree*230);
      var y = (sphereRadius/2)*Math.sin(aDegree*230);
      textMesh5.position.set(x,y,0); 

      textMesh5.rotation.x =  aDegree*90;
      textMesh5.rotation.y =  aDegree*120;
 
      group.add(textMesh5);

     //delta
     var text = "h";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
      }); 
      var textMesh5 = new THREE.Mesh( textGeo, material );   

      var alpha = aDegree * 30;
      var delta = aDegree * 20; 

      var x = 0;
      var y = sphereRadius + 50;
      var z = 0;

      // x軸の周りを反時計回りで回す
      var x1 = 0;
      var y1 = y*Math.cos(delta) + z*Math.sin(delta);
      var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

      // z軸の周りを反時計回りで回す
      var x3 = x1*Math.cos(alpha) + y1*Math.sin(alpha);
      var y3 = x1*Math.sin(alpha) + y1*Math.cos(alpha);
      var z3 = z1;  
     
     　textMesh5.position.set(x3,y3,z3); 

      textMesh5.rotation.x =  aDegree*90;
      textMesh5.rotation.y =  aDegree*120;
 
      group.add(textMesh5);
        
  });

  group.rotation.z = -aDegree*120;
  group.rotation.x = aDegree*10;

  scene.add( group );
  
  function render() {
    requestAnimationFrame( render );

    renderer.render( scene, camera );

    controls.update();
  }

  render();
}

/**
   赤道座標と地平座標の関係　**/

var proc4 = function(){
  // oxyz座標
  var xyz = [];
  xyz.push(new Point(0,0,0));
  xyz.push(new Point(0,axisLength,0));
  xyz.push(new Point(-axisLength,0,0));
  xyz.push(new Point(0,0,axisLength));

  var xyz_ = [];
  // Origin
  xyz.push(new Point(0,0,0));
  // x axia
  var theta_ = aDegree * 45;
  var x_ = sphereRadius * Math.cos(theta_); 
  var y_ = sphereRadius * Math.sin(theta_);
  var z_ = 0;
  xyz_.push(new Point(x_, y_, z_));

  // y axia
  var theta_ = aDegree * 135;
  var x_ = sphereRadius * Math.cos(theta_); 
  var y_ = sphereRadius * Math.sin(theta_);
  var z_ = 0;
  xyz_.push(new Point(x_, y_, z_));

  // z axia
  var theta_ = aDegree * 45;
  var x_ = 0; 
  var y_ = 0;
  var z_ = sphereRadius;
  xyz_.push(new Point(x_, y_, z_));

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
  document.getElementById("canvas4").appendChild( renderer.domElement );
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

  /* *** Lines  ***** */

  // ********* 地平線 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0x00ff00
  } );

  var horison = new THREE.Geometry();
    
  var theta = 0;
  var r = sphereRadius * Math.cos(theta);
  var z = sphereRadius * Math.sin(theta); 

  for (var j=0; j<=pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);

      horison.vertices.push(
        new THREE.Vector3( x, y, z )
      );
  };
  var horisonLine = new THREE.Line( horison, material );
  group.add( horisonLine );

  // ********* 天の赤道 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xff0000
  } );

  var equator = new THREE.Geometry();
    
  var theta = aDegree*35;
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

  // ********* 子午線(meridian) ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var meridian = new THREE.Geometry();
    
  var theta = aDegree*35;
  var r = sphereRadius;

  var x = 0;

  for (var j=0; j<=pi2; j+=aDegree){
      var y = r*Math.cos(j);
      var z = r*Math.sin(j);

      meridian.vertices.push(
        new THREE.Vector3( x, y, z )
      );
  };
  var meridianLine = new THREE.Line( meridian, material );
  group.add( meridianLine );
 
  // ********* 経度度線 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0x00ff00
  } );

  var horison = new THREE.Geometry();
    
  var theta = 0;
  var r = sphereRadius/2;
  var z = r * Math.sin(theta); 

  for (var j=60*aDegree; j<=aDegree*360; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);

      horison.vertices.push(
        new THREE.Vector3( x, y, z )
      );
  };
  var horisonLine = new THREE.Line( horison, material );
//  group.add( horisonLine );
 
  // ****  axis **************
  var lines = [];
  material = new THREE.MeshLambertMaterial( {
      color: 0xffffff
  } );

  for (var i = 1; i < xyz.length; i++) {
    
    lines[i] = new THREE.Geometry();
    var x = xyz[i].x;
    var y = xyz[i].y;
    var z = xyz[i].z;
    lines[i].vertices.push(new THREE.Vector3( 0, 0, 0 ));
    lines[i].vertices.push(new THREE.Vector3( x, y, z ));
    var line = new THREE.Line( lines[i], material );
    group.add( line );

  };

  // ****  axis' **************
  var lines = [];
  material = new THREE.MeshLambertMaterial( {
      color: 0xff00ff
  } );

  for (var i = 1; i < xyz.length; i++) {
    
    lines[i] = new THREE.Geometry();
    var x = xyz[i].x;
    var y = xyz[i].y;
    var z = xyz[i].z;
    lines[i].vertices.push(new THREE.Vector3( 0, 0, 0 ));
    lines[i].vertices.push(new THREE.Vector3( x, y, z ));
    var line = new THREE.Line( lines[i], material );
    line.rotation.x = aDegree * 55;
    group.add( line );

  };

  // 東西南北線 **************
  var lines = [];
  material = new THREE.MeshLambertMaterial( {
      color: 0xffffff
  } );

  for (var i = 0; i < news.length; i++) {
    
    lines[i] = new THREE.Geometry();
    var x = news[i].x;
    var y = news[i].y;
    var z = news[i].z;
    lines[i].vertices.push(new THREE.Vector3( 0, 0, 0 ));
    lines[i].vertices.push(new THREE.Vector3( x, y, z ));
    var line = new THREE.Line( lines[i], material );
    group.add( line );

  };
  
  // ********* 天体線 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var body = new THREE.Geometry();
    
  var alpha = aDegree * 30;
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

  // 春分点　線 -------------------
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var equinox = new THREE.Geometry();
    
  var alpha = aDegree * 47;
  var theta_ = -aDegree * 55;
  var x = 0;
  var y = sphereRadius;
  var z = 0;

  for (var delta=-aDegree*15; delta<=pi2/4; delta+=aDegree){
      // x軸の周りを反時計回りで回す
      var x1 = 0;
      var y1 = y*Math.cos(delta) + z*Math.sin(delta);
      var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

      // z軸の周りを時計回りで回す
      var x2 = x1*Math.cos(alpha) + y1*Math.sin(alpha);
      var y2 = x1*Math.sin(alpha) + y1*Math.cos(alpha);
      var z2 = z1;  

      // x軸の周りを反時計回りで回す
      var x3 = x2;
      var y3 = y2*Math.cos(theta_) + z2*Math.sin(theta_);
      var z3 = -y2*Math.sin(theta_) + z2*Math.cos(theta_);  

      equinox.vertices.push(
        new THREE.Vector3( x3, y3, z3 )
      );
  };
  
  var equinoxLine = new THREE.Line( equinox, material );
  group.add( equinoxLine );

  // 高度線
  deltaMat = new THREE.MeshLambertMaterial( {
    color: 0x00ff00
  } );
  var deltaLine = new THREE.Geometry();
    
  var alpha = aDegree * 30;
  var x = 0;
  var y = sphereRadius + 50;
  var z = 0;

  for (var delta=0; delta<=aDegree*45; delta+=aDegree){
      // x軸の周りを反時計回りで回す
      var x1 = 0;
      var y1 = y*Math.cos(delta) + z*Math.sin(delta);
      var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

      // z軸の周りを反時計回りで回す
      var x3 = x1*Math.cos(alpha) + y1*Math.sin(alpha);
      var y3 = x1*Math.sin(alpha) + y1*Math.cos(alpha);
      var z3 = z1;  

      deltaLine.vertices.push(
        new THREE.Vector3( x3, y3, z3 )
      );
  };
  var deltaLine = new THREE.Line( deltaLine, deltaMat );
//  group.add( deltaLine );


  /* 
    **** Points **** */

  // 座標xyz  
  for (var i = 0; i < xyz.length; i++) {

    var x = xyz[i].x;
    var y = xyz[i].y;
    var z = xyz[i].z;
 
    var pointMesh = new THREE.Mesh( pointGeometry, pointMaterial );
    pointMesh.position.set(x, y, z) ; 
//    group.add(pointMesh);

  };

  var pointsData = [];
  // 点データ作成
  // 天頂(zenith)
  var x_z = 0;
  var y_z = 0;
  var z_z = sphereRadius;
  pointsData.push(new Point(x_z, y_z, z_z));
  
  // 天の北極(Pole)
  var phi = aDegree * 35;
  var theta = -(pi/2 - phi);
  var x_ = x_z;
  var y_ = y_z * Math.cos(theta) + z_z * Math.sin(theta);
  var z_ = y_z * Math.sin(theta) + z_z * Math.cos(theta);  
  pointsData.push(new Point(x_, y_, z_));
  
  // 点Q 子午線と赤道の交点
  var phi = aDegree * 35;
  var theta = pi/2 - phi;
  var x_ = x_z;
  var y_ = y_z * Math.cos(theta) + z_z * Math.sin(theta);
  var z_ = y_z * Math.sin(theta) + z_z * Math.cos(theta);  
  pointsData.push(new Point(x_, y_, z_));

  // 春分点　γ
  var A = aDegree * 45;
  var theta = aDegree * 35;
  var x = sphereRadius*Math.cos(A);
  var y = sphereRadius*Math.sin(A);
  var z = 0;//r*Math.sin(j);

  var x_ = x;
  var y_ = y * Math.cos(theta) + z * Math.sin(theta);;
  var z_ = y * Math.sin(theta) + z * Math.cos(theta);
  
  pointsData.push(new Point(x_, y_, z_));

  // 天体　X
  var alpha = aDegree * 30;
  var delta = aDegree * 45;

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

  pointsData.push(new Point(x_, y_, z_));

  // 東西南北データの結合
  pointsData  = pointsData.concat(news);


  for (var i = 0; i < pointsData.length; i++) {

    var x = pointsData[i].x;
    var y = pointsData[i].y;
    var z = pointsData[i].z;
 
    var pointMesh = new THREE.Mesh( pointGeometry, pointMaterial );
    pointMesh.position.set(x, y, z) ; 
    group.add(pointMesh);

  };

  // 天体と天頂を通る大円と赤道の交点
  var point = new THREE.SphereGeometry( 4, 32, 32 );
  var pointMesh = new THREE.Mesh( point, pointMaterial );

  var alpha = aDegree * 30;

  var x = 0;
  var y = sphereRadius;
  var z = 0;

  // z軸の周りを反時計回りで回す
  var x3 = x*Math.cos(alpha) + y*Math.sin(alpha);
  var y3 = x*Math.sin(alpha) + y*Math.cos(alpha);
  var z3 = z;  

  pointMesh.position.set(x3, y3, z3);
  
 // group.add(pointMesh);

  // 原点-交点
  var gLine = new THREE.Geometry();
    var x = 1.5*x3;
    var y = 1.5*y3;
    var z = 1.5*z3;
    gLine.vertices.push(new THREE.Vector3( 0, 0, 0 ));
    gLine.vertices.push(new THREE.Vector3( x, y, z ));
    var line = new THREE.Line( gLine, material );
//  group.add( line );

  // g線
/*  
  var gLine = new THREE.Geometry();
    var x = 1.5*x2;
    var y = 1.5*y2;
    var z = 1.5*z2;
    gLine.vertices.push(new THREE.Vector3( 0, 0, 0 ));
    gLine.vertices.push(new THREE.Vector3( x, y, z ));
    var line = new THREE.Line( gLine, material );
//  group.add( line );
*/
  // **** 文字 *****
  var loader = new THREE.FontLoader();
  var font;
  loader.load( '{{site.url}}/fonts/helvetiker_regular.typeface.json',   
    function ( response ) {
      font = response;
      
      material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
      // axis
      for (var i = 0; i < xyz.length; i++) {
        
        var text = (i==0)?"O":(i==1)?"x":(i==2)?"y":"z";
        var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
        });    
        var textMesh1 = new THREE.Mesh( textGeo, material );

        textMesh1.position.x = 1.2*xyz[i].x; 
        textMesh1.position.y = 1.2*xyz[i].y;
        textMesh1.position.z = 1.2*xyz[i].z;

        textMesh1.rotation.x = pi2 / 4 ;
        
        var theta_ = Math.asin(xyz[i].y/sphereRadius);
        
        //if ( xyz[i].x < 0) { theta_ += pi}
        textMesh1.rotation.y = theta_ + pi/2;
         
        group.add(textMesh1);
      };
      // 点ラベル表示
      material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
      for (var i = 0; i < pointsData.length; i++) {
        switch (i) {
            case 0:
                text = "Z";
                break;
            case 1:
                text = "P"
                break;
            case 2:
                text = "Q"
                break;
            case 3:
                text = "γ"
                break;
            case 4:
                text = "X(l,m,n)"
                break;
            case 5:
                text = "W"
                break;
            case 6:
                text = "S"
                break;
            case 7:
                text = "E"
                break;
            case 8:
                text = "N"
                break;
        }        
        var textGeo = new THREE.TextGeometry( text, {
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
        
        if ( pointsData[i].x < 0) { theta_ += pi}
        textMesh1.rotation.y = theta_ + pi/2;
 
        group.add(textMesh1);
      };

     // --- xyz' -----------
     var text = "Z'";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5,
      }); 
      material = new THREE.MeshPhongMaterial( { color: 0xff00ff } );
      var textMesh5 = new THREE.Mesh( textGeo, material );   

      var x_ = pointsData[1].x * 1.4;
      var y_ = pointsData[1].y * 1.4;
      var z_ = pointsData[1].z * 1.4; 
      textMesh5.position.set(x_,y_,z_); 

      textMesh5.rotation.x =  aDegree*90;
      textMesh5.rotation.y =  aDegree*120;
 
      group.add(textMesh5);
 
     var text = "Y'";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5,
      }); 
      material = new THREE.MeshPhongMaterial( { color: 0xff00ff } );
      var textMesh5 = new THREE.Mesh( textGeo, material );   

      var theta_ = -aDegree * 55;
      var x = 0;
      var y = sphereRadius * 1.4;
      var z = 0;
      
      var x_ = x;
      var y_ = y * Math.cos(theta_) + z * Math.sin(theta_);
      var z_ = -y * Math.sin(theta_) + z * Math.cos(theta_);; 
      textMesh5.position.set(x_,y_,z_); 

      textMesh5.rotation.x =  aDegree*90;
      textMesh5.rotation.y =  aDegree*120;
 
      group.add(textMesh5);
     
     var text = "X'";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5,
      }); 
      material = new THREE.MeshPhongMaterial( { color: 0xff00ff } );
      var textMesh5 = new THREE.Mesh( textGeo, material );   

      var theta_ = -aDegree * 55;
      var x_ = sphereRadius * 1.4;
      var y_ = 0;
      var z_ = 0;
      
      textMesh5.position.set(x_,y_,z_); 

      textMesh5.rotation.x =  aDegree*90;
      textMesh5.rotation.y =  aDegree*120;
 
      group.add(textMesh5);

     //alpha
     var text = "A";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
      }); 
      var textMesh5 = new THREE.Mesh( textGeo, material );   

      var x = (sphereRadius/2)*Math.cos(aDegree*230);
      var y = (sphereRadius/2)*Math.sin(aDegree*230);
      textMesh5.position.set(x,y,0); 

      textMesh5.rotation.x =  aDegree*90;
      textMesh5.rotation.y =  aDegree*120;
 
 //     group.add(textMesh5);

     //delta
     var text = "h";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
      }); 
      var textMesh5 = new THREE.Mesh( textGeo, material );   

      var alpha = aDegree * 30;
      var delta = aDegree * 20; 

      var x = 0;
      var y = sphereRadius + 50;
      var z = 0;

      // x軸の周りを反時計回りで回す
      var x1 = 0;
      var y1 = y*Math.cos(delta) + z*Math.sin(delta);
      var z1 = y*Math.sin(delta) + z*Math.cos(delta);  

      // z軸の周りを反時計回りで回す
      var x3 = x1*Math.cos(alpha) + y1*Math.sin(alpha);
      var y3 = x1*Math.sin(alpha) + y1*Math.cos(alpha);
      var z3 = z1;  
     
     　textMesh5.position.set(x3,y3,z3); 

      textMesh5.rotation.x =  aDegree*90;
      textMesh5.rotation.y =  aDegree*120;
 
  //    group.add(textMesh5);
        
  });

  group.rotation.z = -aDegree*120;
  group.rotation.x = aDegree*30;
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
proc2();
proc3();
proc4();


// 方向余弦の計算
var alpha=316.166396;
var delta=38.499750;

var LMN = getDirCosines(alpha, delta);

$("#L").html("L=" + LMN.L);
$("#M").html("M=" + LMN.M);
$("#N").html("N=" + LMN.N);





</script>