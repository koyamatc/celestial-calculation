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

+　Y軸を地平線上の東の向きに

+　Z軸を天頂の向きに

これが地平直行座標系

方位角A, 高度h で示される方向余弦（l,m,n）は

$$l = \cos h \cos A$$
$$m = -\cos h \sin A$$
$$n = \sin h$$

方向余弦から天体の方位角、高度を逆算するには
$$\tan\A = \frac{m}{l}$$
$$ \quad l \ge 0で、Aは第Ⅰ象限、または第Ⅳ象限$$
$$ \quad l \lt 0で、Aは第Ⅱ象限、または第Ⅲ象限$$
$$\sin h=n \quad -90°　\ge \h \ge +90°　$$

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
      earthRadius = 4;

  // カメラを追加
  var camera = new THREE.OrthographicCamera(  width / - 2, width / 2, height / 2, height / - 2, 1, 10000 );
  camera.position.y = -1000;

  // ライト追加
  var ambLight = new THREE.AmbientLight(0xffff00, 1.0);


  // Celestial Sphere
  var sphereGeo = new THREE.SphereGeometry( sphereRadius, 32, 32 );
  var sphereMat = new THREE.MeshLambertMaterial( {
    color: 0xffff00,
    transparent: true,
    opacity: 0.3
  } );

  // Earth(Origin)
  earthGeo = new THREE.SphereGeometry( earthRadius, 32, 32 );
  earthMat = new THREE.MeshLambertMaterial( {
    color: 0x00ff00,
    transparent: false,
    opacity: 0.8
  } );

  // point material
  var pointMaterial = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  // xyz座標
  var xyz = [];
  xyz.push(new Point(sphereRadius,0,0));
  xyz.push(new Point(0,sphereRadius,0));
  xyz.push(new Point(0,0,sphereRadius));

// 
var proc1 = function(){


  // シーン追加
  var scene = new THREE.Scene();
  // ライド追加
  scene.add(ambLight);

  // renderer 追加
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( width, height );
  document.getElementById("canvas1").appendChild( renderer.domElement );

  // control追加
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  
  // オブジェクト追加
  var group = new THREE.Group();
  
  // celestial sphere
  var sphere = new THREE.Mesh( sphereGeo, sphereMat );
  group.add( sphere );

  // Earth(Origin)
  var earth = new THREE.Mesh( earthGeo, earthMat );
  group.add( earth );


  
  var points = [];
  for (var i = 0; i < 3; i++) {

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

  // ******** 春分点線 *******
  var equinox = new THREE.Geometry();
    
  var theta = 0;

  var r = sphereRadius;
  var alpha = aDegree * 0;

  for (var delta=aDegree*0; delta<aDegree*360; delta+=aDegree){
      var y = sphereRadius * Math.cos(delta) * Math.cos(alpha);
      var z = sphereRadius * Math.cos(delta) * Math.sin(alpha);;
      var x = sphereRadius * Math.sin(delta);
      equinox.vertices.push(
        new THREE.Vector3( x, y, z )
      );
  };

  var color = 0xffffff;
  material = new THREE.MeshLambertMaterial( {
      color: color
  } );
  var line = new THREE.Line( equinox, material );
  line.rotation.y = -aDegree * 45;
  group.add( line );

  // XYZ線
  var lines = [];
  material = new THREE.MeshLambertMaterial( {
      color: 0xffffff
  } );

  for (var i = 0; i < 3; i++) {
    
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
      for (var i = 0; i < 3; i++) {
        
        var text = (i==0)?"Y":(i==1)?"Z":"X";
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
  
/*
*/  
  scene.add( group );
  
  function render() {
    requestAnimationFrame( render );

    renderer.render( scene, camera );

    controls.update();
  }

  render();
} 

proc1();


// 方向余弦の計算
var alpha=316.166396;
var delta=38.499750;

var LMN = getDirCosines(alpha, delta);

$("#L").html("L=" + LMN.L);
$("#M").html("M=" + LMN.M);
$("#N").html("N=" + LMN.N);





</script>