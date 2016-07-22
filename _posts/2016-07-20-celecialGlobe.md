---
title: 天球座標
layout: post
date: 2016-07-20 23:00:00
postTitle: 赤道座標系
categories: coordinates
---

-------

位置を表すために、　赤緯 、赤経 を用いる　赤道座標系(equatorial coordinates system)

恒星の位置が同じ数値で表せる座標系

座標系は恒星に対して固定であり、日周運動とともに動いていく。

### 天球
<div id="canvas1"></div>

天球:大きな球体

地球：小さな球体

地球の自転軸を南北に伸ばした線；ピンク色の線

天の北極：P

天の南極：P'

天の赤道：黄色い輪

### 赤緯(declination)
<div id="canvas2"></div>

天の赤道を　0°　として、天の北極を　90°　天の南極を -90°

### 赤経()
<div id="canvas3"></div>




<script src="//code.jquery.com/jquery-1.11.3.js"></script>
<script src="{{site.url}}/js/three.js"></script>
<script src="https://dl.dropboxusercontent.com/u/3587259/Code/Threejs/OrbitControls.js"></script>
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

var proc1 = function(){

  // シーン追加
  var scene = new THREE.Scene();
  
  // カメラを追加
  var camera = new THREE.OrthographicCamera(  width / - 2, width / 2, height / 2, height / - 2, 1, 10000 );
  camera.position.z = 1000;

  // ライト追加
/*
  var dirLight = new THREE.DirectionalLight(0x00ffff, 1);
  dirLight.position.set(0, 0, 1000);
  scene.add(dirLight);
  var dirLight = new THREE.DirectionalLight(0x00ffff, 1);
  dirLight.position.set(0, 0, -1000);
  scene.add(dirLight);
*/
  var ambLight = new THREE.AmbientLight(0xffff00, 1.0);
  scene.add(ambLight);

  // renderer 追加
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( width, height );
  document.getElementById("canvas1").appendChild( renderer.domElement );

  // control追加
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  // オブジェクト追加
  var group = new THREE.Group();
  
  // Celestial Sphere
  var geometry = new THREE.SphereGeometry( 200, 32, 32 );
  var material = new THREE.MeshLambertMaterial( {
    color: 0x00aaff,
    transparent: true,
    opacity: 0.3
  } );
  var shape = new THREE.Mesh( geometry, material );
  group.add( shape );

  // Earth
  var geometry = new THREE.SphereGeometry( 20, 32, 32 );
  var material = new THREE.MeshLambertMaterial( {
    color: 0x00ff00,
    transparent: false,
    opacity: 0.8
  } );
  var shape = new THREE.Mesh( geometry, material );
  group.add( shape );

  var geometry = new THREE.RingGeometry( 190, 200, 32 );
  var material = new THREE.MeshLambertMaterial( {
    color: 0xffff00
  } );
 
  var shape = new THREE.Mesh( geometry, material );
  group.add( shape );
  
  var shape2 = new THREE.Mesh( geometry, material );
  shape2.rotation.x = Math.PI;
  group.add( shape2 );

  var material = new THREE.LineBasicMaterial({
        color: 0xff00ff
    });
  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(0, 0, 200));
  geometry.vertices.push(new THREE.Vector3(0, 0, -200));
  var shape = new THREE.Line( geometry, material );
  group.add( shape );



  // 文字
  var loader = new THREE.FontLoader();
  var font;
  loader.load( '{{site.url}}/fonts/helvetiker_regular.typeface.json',   
    function ( response ) {
      font = response;
      var text = "P";
      var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 20,
          height: 20
      });    
      material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
      var textMesh1 = new THREE.Mesh( textGeo, material );
      textMesh1.position.z = 200;
      textMesh1.rotation.x =  Math.PI/180 * 90;
      group.add(textMesh1);

      text = "P'";
      textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 20,
          height: 20
      });
      var textMesh2 = new THREE.Mesh( textGeo, material );
      textMesh2.position.z = -220;
      textMesh2.rotation.x =  Math.PI/180 * 90;
      group.add(textMesh2);

    });

  
  group.rotation.x = Math.PI/180 * -85;
  
  scene.add( group );
  
  function render() {
    requestAnimationFrame( render );

    renderer.render( scene, camera );

    controls.update();
  }
  render();
} 

var proc2 = function(){

  // variables
  var sphereRadius = 200,
      earthRadius = 20;

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
  
  // オブジェクト追加
  var group = new THREE.Group();
  
  // Celestial Sphere
  var geometry = new THREE.SphereGeometry( sphereRadius, 32, 32 );
  var material = new THREE.MeshLambertMaterial( {
    color: 0x0033ff,
    transparent: true,
    opacity: 0.8
  } );
  var sphere = new THREE.Mesh( geometry, material );
  group.add( sphere );

  // Earth
  geometry = new THREE.SphereGeometry( earthRadius, 32, 32 );
  material = new THREE.MeshLambertMaterial( {
    color: 0x00ff00,
    transparent: false,
    opacity: 0.8
  } );
  var earth = new THREE.Mesh( geometry, material );
  group.add( earth );

  // 赤緯
  var pi2 = Math.PI * 2;
  var aDegree = Math.PI / 180;
  var decStep = Math.PI / 18;
  var z = -sphereRadius;

  
  var declinationGeo = [];
  for (var i=0; i < 18; i++){
    declinationGeo[i] = new THREE.Geometry();
    
    var theta = -Math.PI/2 + (i+1)*decStep;
    var r = sphereRadius * Math.cos(theta);
    z = sphereRadius * Math.sin(theta); 

    for (var j=0; j<=pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);

      declinationGeo[i].vertices.push(
        new THREE.Vector3( x, y, z )
      );
    };
  }

for (var i = 0; i < 18; i++) {
  var color = (i==8)?0xffffff:0xff00ff ;
  material = new THREE.MeshLambertMaterial( {
      color: color,
  } );
  var line = new THREE.Line( declinationGeo[i], material );
  group.add( line );
};


  // 文字
  var loader = new THREE.FontLoader();
  var font;
  loader.load( '{{site.url}}/fonts/helvetiker_regular.typeface.json',   
    function ( response ) {
      font = response;
      
      material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
      for (var i = 0; i < 7; i++) {
        
        var text = -90 + i*30;
        var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
        });    
        var textMesh1 = new THREE.Mesh( textGeo, material );
        var theta = -Math.PI/2 + i*decStep*3;
        var r = (sphereRadius+30) * Math.cos(theta);
        var z = (sphereRadius+20) * Math.sin(theta);
        var x = r*Math.cos(theta)
        if (text == "30") {z -=10} ;
        if (text == "60") {z -=20;x +=50;} ;
        if (text == "90") {z -=20;} ;
        if (text == "-60") {z +=15; x+=60;} ;
        textMesh1.position.x = x; 
        textMesh1.position.z = z;
        textMesh1.rotation.x = Math.PI/2;
        textMesh1.rotation.y = Math.PI/2;
        group.add(textMesh1);
      };

    });

  
  group.rotation.x = Math.PI/9;
  group.rotation.z = -Math.PI/2;
  
  scene.add( group );
  
  function render() {
    requestAnimationFrame( render );

    renderer.render( scene, camera );

    controls.update();
  }
  render();
} 

// 赤経
var proc3 = function(){

  // variables
  var sphereRadius = 200,
      earthRadius = 20;

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
  
  // オブジェクト追加
  var group = new THREE.Group();
  
  // Celestial Sphere
  var geometry = new THREE.SphereGeometry( sphereRadius, 32, 32 );
  var material = new THREE.MeshLambertMaterial( {
    color: 0x0033ff,
    transparent: true,
    opacity: 0.8
  } );
  var sphere = new THREE.Mesh( geometry, material );
  group.add( sphere );

  // Earth
  geometry = new THREE.SphereGeometry( earthRadius, 32, 32 );
  material = new THREE.MeshLambertMaterial( {
    color: 0x00ff00,
    transparent: false,
    opacity: 0.8
  } );
  var earth = new THREE.Mesh( geometry, material );
  group.add( earth );

  // 赤緯
  var pi2 = Math.PI * 2;
  var aDegree = Math.PI / 180;
  var decStep = Math.PI / 18;
  var z = -sphereRadius;

  
  var declinationGeo = [];
  for (var i=0; i < 18; i++){
    declinationGeo[i] = new THREE.Geometry();
    
    var theta = -Math.PI/2 + (i+1)*decStep;
    var r = sphereRadius * Math.cos(theta);
    z = sphereRadius * Math.sin(theta); 

    for (var j=0; j<=pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);

      declinationGeo[i].vertices.push(
        new THREE.Vector3( x, y, z )
      );
    };
  }

  for (var i = 0; i < 18; i++) {
    var color = (i==8)?0xffffff:0xff00ff ;
    material = new THREE.MeshLambertMaterial( {
      color: color,
    } );
    var line = new THREE.Line( declinationGeo[i], material );
    group.add( line );
  };

  // 赤経(right ascesion)
  var ascStep = 2 * Math.PI / 24;
  var ascesionGeo = [];
  for (var i=0; i < 24; i++){
    ascesionGeo[i] = new THREE.Geometry();
    
    var theta = i * ascStep;
    var r = sphereRadius;
    var z = sphereRadius * Math.sin(theta); 

    for (var j=0; j<=pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var z = r*Math.sin(j);
      var x1 = x*Math.cos(theta) - y*Math.sin(theta);
      var y1 = x*Math.sin(theta) + y*Math.cos(theta);
      var z1 = z;  

      ascesionGeo[i].vertices.push(
        new THREE.Vector3( x1, y1, z )
      );
    };
  }

  for (var i = 0; i < 24; i++) {
    var color = (i==0)?0xffffff:0xff00ff ;
    material = new THREE.MeshLambertMaterial( {
      color: color,
    } );
    var line = new THREE.Line( ascesionGeo[i], material );
    group.add( line );
  };



  // 文字
  var loader = new THREE.FontLoader();
  var font;
  loader.load( '{{site.url}}/fonts/helvetiker_regular.typeface.json',   
    function ( response ) {
      font = response;
      
      material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
      for (var i = 0; i < 7; i++) {
        
        var text = -90 + i*30;
        var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
        });    
        var textMesh1 = new THREE.Mesh( textGeo, material );
        var theta = -Math.PI/2 + i*decStep*3;
        var r = (sphereRadius+30) * Math.cos(theta);
        var z = (sphereRadius+20) * Math.sin(theta);
        var x = r*Math.cos(theta)
        if (text == "30") {z -=10} ;
        if (text == "60") {z -=20;x +=50;} ;
        if (text == "90") {z -=20;} ;
        if (text == "-60") {z +=15; x+=50;} ;
        textMesh1.position.x = x; 
        textMesh1.position.z = z;
        textMesh1.rotation.x = Math.PI/2;
        textMesh1.rotation.y = Math.PI/2;
        group.add(textMesh1);
      };

    });

  
  //group.rotation.x = Math.PI/9;
  group.rotation.z = -Math.PI/2;
  
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

</script>
