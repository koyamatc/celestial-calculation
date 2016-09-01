---
title: 恒星位置のずれ
layout: post
date: 2016-09-15 21:00:00
postTitle: 歳差 (precession)
categories: difference
---

-------

### 春分点とその移動

++ 春分点の決め方

太陽の中心が天球上を通る道を黄道(ecliptic)と呼ぶ。

黄道は天の赤道とほぼ23.5°傾いていて2か所で交わっている。

太陽が天の赤道を南側から北側へ通る交点を春分点(vernal equinox)

一方の交点を秋分点(autumnal equinox)

<div id="canvas01"></div>

++ 春分点の移動

星の位置を表す赤道座標系は、地球の自転軸が天球の交わる天の北極と南極
および春分点を基準に決められている。

地球の自転軸の向きはゆっくりと変わってゆく、

そのために、天の北極と南極の位置が変わり、天の赤道の位置も動く

また、黄道もわずかだが動く、そのために、
天の赤道と黄道の交点である春分点も動く

### 歳差運動

地球の自転軸は、円を描くように向きを変えていく、これを歳差(precession)

この軸のこまかな振動を章動（nutatio）

<div id="canvas02"></div>

++ 歳差の原因
  
  + 日月歳差(luni-solar precession)
      
      太陽や月の引力が地球の傾いた自転軸に影響を及ぼして起こる

      日月歳差により天の北極は約25800年周期で天球上の半径約23.5°の小円を描いて回る

      これに伴い天の赤道も天球上で位置を変え、春分点は赤道上を１年に約50.3"西へ動く

  + 惑星歳差(planetary precession )
      
      惑星の引力が地球の軌道面に影響を与える、つまり黄道が動く

      この動きは春分点を1年で0.12"東へ動かす

日月歳差と惑星歳差は同時に起こる、この影響をまとめて 一般歳差(general precession) 　という      

章動を考えずに歳差だけを考えるとき

天の北極（南極）：平均極(mean pole)、
天の赤道:平均赤道(mean equator)、
春分点：平均春分点(mean vernal equinox)

### 歳差による恒星位置の変化

ある元期における恒星の位置変化

元期：\\( 1900.0 + t_{0} \\)

天の北極：\\( P_{0}\\)

天の赤道：\\( Q_{0} \\)

黄道：\\( C_{0} \\)

春分点:\\( \gamma_{0} \\)

その後　\\( t \\)時間経過後の

天の北極:\\( P\\)

天の赤道:\\( Q\\)

黄道:\\( C\\)

春分点:\\( \gamma \\)

<div id="canvas03"></div>

天の赤道 \\(Q_{0}とQはM\\)で交わる

$$
\gamma_{0}M = 90°-\zeta_{0}  
$$
$$
\gamma M = 90° - z
$$
$$
\theta は天の赤道Q_{0}とQの交わる角度。この角度はP_{0}とPの角度と同じ
$$

$$

\begin{eqnarray}
\zeta_{0} &=& 3 \\\
z &=& \\\
\theta &=
\end{eqnarray}

$$







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
      earthRadius = 150,
      axisLength = sphereRadius * 1.3;

  // point material
  var pointMaterial = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );
  var pointGeometry = new THREE.SphereGeometry( 4, 32, 32 );


/**
   春分点
          　**/

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
  // South Pole
  pointsData.push(new Point( 0, 0, -sphereRadius, "P'" ));
 
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

// ********* 黄道 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xffff00
  } );

  var ecliptic = new THREE.Geometry();
    
  var theta = aDegree*23.5;
  var r = sphereRadius;

  for (var j=0; j<=pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);
      var z = 0;//r*Math.sin(j);

      var x_e = x;
      var y_e = y * Math.cos(theta) + z * Math.sin(theta);;
      var z_e = y * Math.sin(theta) + z * Math.cos(theta);
      ecliptic.vertices.push(
        new THREE.Vector3( x_e, y_e, z_e )
      );
  };
  var eclipticLine = new THREE.Line( ecliptic, material );
  group.add( eclipticLine );


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

  group.rotation.z = -aDegree*130;
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

/**
   歳差運動
          　**/

var proc2 = function(){

  // シーン追加
  var scene = new THREE.Scene();
  // カメラを追加
  var camera = new THREE.OrthographicCamera(  width / - 2, width / 2, height / 2, height / - 2, 1, 10000 );

  camera.position.z = 1000;

  // ライト追加
  var ambLight = new THREE.AmbientLight(0xffff00, 1.0);
  scene.add(ambLight);

   // renderer 追加
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( width, height );
  document.getElementById("canvas02").appendChild( renderer.domElement );
  
  // グループ追加
  var group = new THREE.Group();
 
   // ** Celestial Sphere ******
  var sphereGeo = new THREE.SphereGeometry( 150, 32, 32 );
  var sphereMat = new THREE.MeshLambertMaterial( {
    color: 0x006699,
    transparent: true,
    opacity: 0.7
  } );
  // celestial sphere
  var sphere = new THREE.Mesh( sphereGeo, sphereMat );
  group.add( sphere );

  scene.add( group );

  /* 地軸 */
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var axis = new THREE.Geometry();
    
  axis.vertices.push( new THREE.Vector3( 0, 175*Math.cos(pi/2-11.75*aDegree), 175 ) );

  axis.vertices.push( new THREE.Vector3( 0, 175*Math.cos(pi/2-11.75*aDegree+pi), -175 ) );
  
  var axisLine = new THREE.Line( axis, material );
  group.add( axisLine );

  group.rotation.x = aDegree * -60;


function render() {
  requestAnimationFrame( render ); // 60フレーム/秒
  
  
  group.rotation.z -= 0.05;
  
  renderer.render( scene, camera );
}
render();
}

/**
   　　歳差
          　**/
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
  document.getElementById("canvas03").appendChild( renderer.domElement );
  // control追加
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  
  // グループ追加
  var group0 = new THREE.Group();
  var group1 = new THREE.Group();
 
   // ** Celestial Sphere ******
  var sphereGeo = new THREE.SphereGeometry( sphereRadius, 32, 32 );
  var sphereMat = new THREE.MeshLambertMaterial( {
    color: 0xffff00,
    transparent: true,
    opacity: 0.3
  } );
  // celestial sphere
  var sphere = new THREE.Mesh( sphereGeo, sphereMat );
  group0.add( sphere );

  /* 
      Points 
              */

  // points data 
  var pointsData0 = [];
  var pointsData1 = [];

  // Origin
  pointsData0.push(new Point( 0, 0, 0, "O" ));
  // North Pole
  pointsData0.push(new Point( 0, 0, sphereRadius, "P0" ));
  // South Pole
  pointsData0.push(new Point( 0, 0, -sphereRadius, "P'0" ));
  // North Pole
  var x = 0;
  var y = 0;
  var z = sphereRadius;
  var x_ = x;
  var y_ = y * Math.cos(theta) + z * Math.sin(theta);;
  var z_ = y * Math.sin(theta) + z * Math.cos(theta);

  pointsData1.push(new Point( 0, 0, sphereRadius, "P" ));
 
  // 春分点　γ0
  var A = aDegree * 0;
  var theta = aDegree * 0;
  var x = sphereRadius*Math.cos(A);
  var y = sphereRadius*Math.sin(A);
  var z = 0;

  var x_ = x;
  var y_ = y * Math.cos(theta) + z * Math.sin(theta);;
  var z_ = y * Math.sin(theta) + z * Math.cos(theta);
  
  pointsData0.push(new Point(x_, y_, z_, "γ0"));
 
  // 春分点　γ
  var A = aDegree * 0;
  var theta = aDegree * 0;
  var x = sphereRadius*Math.cos(A);
  var y = sphereRadius*Math.sin(A);
  var z = 0;

  var x_ = x;
  var y_ = y * Math.cos(theta) + z * Math.sin(theta);;
  var z_ = y * Math.sin(theta) + z * Math.cos(theta);
  
  pointsData1.push(new Point(x_, y_, z_, "γ"));

  // 交点　M
  var A = aDegree * 0;
  var theta = aDegree * 50;
  var x = sphereRadius*Math.cos(A);
  var y = sphereRadius*Math.sin(A);
  var z = 0;
 
  var x_ = x * Math.cos(theta) + y * Math.sin(theta);;
  var y_ = x * Math.sin(theta) + y * Math.cos(theta);
  var z_ = z;
  
  pointsData0.push(new Point(x_, y_, z_, "M"));

  //  Draw points 
  for (var i = 0; i < pointsData0.length; i++) {

    var r = (pointsData0[i].r==undefined)?4:pointsData[i].r;
    var pointGeometry = new THREE.SphereGeometry( r, 32, 32 );

    if (r) {

    var x = pointsData0[i].x;
    var y = pointsData0[i].y;
    var z = pointsData0[i].z;
 
    var pointMesh = new THREE.Mesh( pointGeometry, pointMaterial );
    pointMesh.position.set(x, y, z) ; 

    group0.add(pointMesh);
    }

  };

  for (var i = 0; i < pointsData1.length; i++) {

    var r = (pointsData1[i].r==undefined)?4:pointsData[i].r;
    var pointGeometry = new THREE.SphereGeometry( r, 32, 32 );

    if (r) {

    var x = pointsData1[i].x;
    var y = pointsData1[i].y;
    var z = pointsData1[i].z;
 
    var pointMesh = new THREE.Mesh( pointGeometry, pointMaterial );
    pointMesh.position.set(x, y, z) ; 

    group1.add(pointMesh);
    }

  };

  /* *** Lines  ***** */

  // ********* 天の赤道 Q0　***********
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
  group0.add( equatorLine );

  // ********* 天の赤道 Q　***********
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
  var equatorLine1 = new THREE.Line( equator, material );
  group1.add( equatorLine1 ); 


// ********* 黄道 0 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xffff00
  } );

  var ecliptic = new THREE.Geometry();
    
  var theta = aDegree*23.5;
  var r = sphereRadius;

  for (var j=0; j<=pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);
      var z = 0;//r*Math.sin(j);

      var x_e = x;
      var y_e = y * Math.cos(theta) + z * Math.sin(theta);;
      var z_e = y * Math.sin(theta) + z * Math.cos(theta);
      ecliptic.vertices.push(
        new THREE.Vector3( x_e, y_e, z_e )
      );
  };
  var eclipticLine = new THREE.Line( ecliptic, material );
  group0.add( eclipticLine );

  // ********* 黄道 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xffff00
  } );

  var ecliptic = new THREE.Geometry();
    
  var theta = aDegree*23.5;
  var r = sphereRadius;

  for (var j=0; j<=pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);
      var z = 0;//r*Math.sin(j);

      var x_e = x;
      var y_e = y * Math.cos(theta) + z * Math.sin(theta);;
      var z_e = y * Math.sin(theta) + z * Math.cos(theta);
      ecliptic.vertices.push(
        new THREE.Vector3( x_e, y_e, z_e )
      );
  };
  var eclipticLine1 = new THREE.Line( ecliptic, material );
  group1.add( eclipticLine1 );


  // **** 文字 *****
  // theta
  var theta = aDegree * 15;
  var alpha = aDegree * -10;
  var x = 0;
  var y = 0;
  var z = sphereRadius;
  var x0 = x * Math.cos(theta) + z * Math.sin(theta);;
  var y0 = y;
  var z0 = x * Math.sin(theta) + z * Math.cos(theta);
  
  var x_ = x0 * Math.cos(alpha) + y0 * Math.sin(alpha);;
  var y_ = x0 * Math.sin(alpha) + y0 * Math.cos(alpha);
  var z_ = z0;

  pointsData0.push(new Point( x_, y_, z_, "Θ" ));

  // theta
  var theta = aDegree * 93;
  var alpha = aDegree * 20;
  var x = 0;
  var y = 0;
  var z = sphereRadius;
  var x0 = x * Math.cos(theta) + z * Math.sin(theta);;
  var y0 = y;
  var z0 = x * Math.sin(theta) + z * Math.cos(theta);
  
  var x_ = x0 * Math.cos(alpha) + y0 * Math.sin(alpha);;
  var y_ = x0 * Math.sin(alpha) + y0 * Math.cos(alpha);
  var z_ = z0;

  pointsData0.push(new Point( x_, y_, z_, "Θ" ));

  // 90° + z
  var theta = aDegree * 105;
  var alpha = aDegree * 0;
  var x = 0;
  var y = 0;
  var z = sphereRadius;
  var x0 = x * Math.cos(theta) + z * Math.sin(theta);;
  var y0 = y;
  var z0 = x * Math.sin(theta) + z * Math.cos(theta);
  
  var x_ = x0 * Math.cos(alpha) + y0 * Math.sin(alpha);;
  var y_ = x0 * Math.sin(alpha) + y0 * Math.cos(alpha);
  var z_ = z0;

  pointsData0.push(new Point( x_, y_, z_, "90°+z" ));

  // 90° - zeta
  var theta = aDegree * 87;
  var alpha = aDegree * 25;
  var x = 0;
  var y = 0;
  var z = sphereRadius;
  var x0 = x * Math.cos(theta) + z * Math.sin(theta);;
  var y0 = y;
  var z0 = x * Math.sin(theta) + z * Math.cos(theta);
  
  var x_ = x0 * Math.cos(alpha) + y0 * Math.sin(alpha);;
  var y_ = x0 * Math.sin(alpha) + y0 * Math.cos(alpha);
  var z_ = z0;

  pointsData0.push(new Point( x_, y_, z_, "90°-ζ" ));

  var loader = new THREE.FontLoader();
  var font;
  loader.load( '{{site.url}}/fonts/helvetiker_regular.typeface.json',   
    function ( response ) {
      font = response;
      
      // 点ラベル表示
      material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
      for (var i = 0; i < pointsData0.length; i++) {
        var textGeo = new THREE.TextGeometry( pointsData0[i].label, {
          font: font,
          size: 13,
          height: 5
        });    
        var textMesh0 = new THREE.Mesh( textGeo, material );

        textMesh0.position.x = 1.1*pointsData0[i].x; 
        textMesh0.position.y = 1.1*pointsData0[i].y;
        textMesh0.position.z = 1.1*pointsData0[i].z;

        textMesh0.rotation.x = pi2 / 3 ;

        var theta_ = Math.asin(pointsData0[i].y/sphereRadius);
        

        textMesh0.rotation.y = theta_ + 2* pi/4;
 
        group0.add(textMesh0);
      };
   
      for (var i = 0; i < pointsData1.length; i++) {
        var textGeo = new THREE.TextGeometry( pointsData1[i].label, {
          font: font,
          size: 13,
          height: 5
        });    
        var textMesh1 = new THREE.Mesh( textGeo, material );

        textMesh1.position.x = 1.1*pointsData1[i].x; 
        textMesh1.position.y = 1.1*pointsData1[i].y;
        textMesh1.position.z = 1.1*pointsData1[i].z;

        textMesh1.rotation.x = pi2 / 4 ;

        var theta_ = Math.asin(pointsData1[i].y/sphereRadius);
        

        textMesh1.rotation.y = theta_ + 3* pi/4;
 
        group1.add(textMesh1);
      };
       
  });

  group0.rotation.z = -aDegree*100;
  group0.rotation.x = aDegree*30;
  group0.rotation.y = aDegree*00;
  
  group1.rotation.z = -aDegree*130;
  group1.rotation.x = aDegree*40;
  group1.rotation.y = aDegree*-12;

  scene.add( group0 );
  scene.add( group1 );
  
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

</script>