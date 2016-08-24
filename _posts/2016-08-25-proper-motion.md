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

全固有運動速度は、
赤経方向に \\(\mu_{\alpha}\\) 
赤緯方向に \\(\mu_{\delta}\\)
がある。

赤経は s/年  赤緯は　"/年　で表すことが多い

<div id="canvas01"></div>

年周視差 \\(\pi = \frac{a}{d}\\) 

a:地球の軌道半径　
d:恒星までの距離

-----------

### 固有運動による位置変化



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

var lineData01 = [
{"x1":50,"y1":50,"x2":400,"y2":50,"stroke":"#fff"},
{"x1":50,"y1":50,"x2":450,"y2":150,"stroke":"#fff"}
];    
drawLine(svg01,lineData01);

var vecData01 = [
{"x1":400,"y1":50,"angles":64,"length":Math.sqrt(12500),"stroke":"#fff"},
{"x1":400,"y1":50,"angles":0,"length":50,"stroke":"#fff"},
{"x1":450,"y1":50,"angles":90,"length":100,"stroke":"#fff"}
];    
drawVectorA(svg01,vecData01);             

var arcData01 = [
{"startPos":90,"endPos":104,"innerRadius":200,"outerRadius":200,
"stroke":"#fff","xTranslate":50,"yTranslate":50},
];  
drawArc(svg01,arcData01);

var circleData01 = [
{"cx":50,"cy":50,"r":3,"stroke":"#fff","fillColor":"#fff"},
{"cx":400,"cy":50,"r":3,"stroke":"#fff","fillColor":"#fff"},
];

drawCircle(svg01,circleData01);
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


var height = 500,
    width  = 700;
var pi2 = Math.PI * 2;
var pi = Math.PI;
var aDegree = Math.PI / 180;
var decStep = Math.PI / 18;

function Point(x,y,z,label){
  this.x = x;
  this.y = y;
  this.z = z;
  this.label = label;
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
 
  // 天体　Q
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

  for (var i = 0; i < pointsData.length; i++) {

    var x = pointsData[i].x;
    var y = pointsData[i].y;
    var z = pointsData[i].z;
 
    var pointMesh = new THREE.Mesh( pointGeometry, pointMaterial );
    pointMesh.position.set(x, y, z) ; 
    group.add(pointMesh);

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
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
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
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
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
</script>