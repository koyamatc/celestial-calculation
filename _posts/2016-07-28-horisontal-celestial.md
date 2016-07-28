---
title: 天球座標
layout: post
date: 2016-07-20 21:00:00
postTitle: 赤道座標系と地平座標系の関係
categories: coordinates
---

-------

<div id="canvas1"></div>



<script src="//code.jquery.com/jquery-1.11.3.js"></script>
<script src="{{site.url}}/js/three.js"></script>
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

// 
var proc1 = function(){

  // variables
  var sphereRadius = 200,
      earthRadius = 3;

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
  document.getElementById("canvas1").appendChild( renderer.domElement );

  // control追加
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  
  // オブジェクト追加
  var group = new THREE.Group();
  
  // Celestial Sphere
  var geometry = new THREE.SphereGeometry( sphereRadius, 32, 32 );
  var material = new THREE.MeshLambertMaterial( {
    color: 0xffff00,
    transparent: true,
    opacity: 0.3
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

  // 東西南北
  var pointMaterial = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );
  var news = [];
  for (var i = 0; i < 4; i++) {

    news[i] = new THREE.SphereGeometry( 4, 32, 32 );

    var theta = i*pi/2;
    var r = (sphereRadius) * Math.cos( theta );
    var z = (sphereRadius) * Math.sin( theta );
    var x = (sphereRadius) * Math.cos( theta )
 
    var pointMesh = new THREE.Mesh( news[i], pointMaterial );
    pointMesh.position.set(x, 0, z) ; 
    group.add(pointMesh);

  };

  // Zenith , nadir
  var zenith = [];
  for (var i = 0; i < 2; i++) {

    zenith[i] = new THREE.SphereGeometry( 4, 32, 32 );

    var theta = pi/2 - i*pi;
    var r = (sphereRadius) * Math.cos( theta );
    var y = (sphereRadius) * Math.sin( theta );
    var x = (sphereRadius) * Math.cos( theta )
 
    var pointMesh = new THREE.Mesh( zenith[i], pointMaterial );
    pointMesh.position.set(0, y, 0) ; 
    group.add(pointMesh);

  };

  // North pole, souith pole
  var poles = [];
  for (var i = 0; i < 2; i++) {

    poles[i] = new THREE.SphereGeometry( 4, 32, 32 );

    var theta = aDegree*145 - i*pi;
    var y = (sphereRadius) * Math.sin( theta );
    var x = (sphereRadius) * Math.cos( theta )

    var pointMesh = new THREE.Mesh( poles[i], pointMaterial );
    pointMesh.position.set(x, y, 0) ; 
    group.add(pointMesh);

  };

  // ssssssssssssssssssssssssssssssss
 var horison = new THREE.Geometry();
    
  var theta = aDegree*15;
  var r = sphereRadius;
  for (var j=0; j<=pi2; j+=aDegree){
      var x = r*Math.cos(theta)*Math.cos(j);
      var y = r*Math.cos(theta)*Math.sin(j);
      var z = r*Math.sin(theta)*Math.sin(j);

      horison.vertices.push(
        new THREE.Vector3( x, y, z )
      );
  };
  var horisonLine = new THREE.Line( horison, material );
  group.add( horisonLine );




  // 地平線
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

  // 天の赤道
  var equator = new THREE.Geometry();
    
  var theta = 0;
  var r = sphereRadius * Math.cos(theta);
  var y = sphereRadius * Math.sin(theta); 

  for (var j=0; j<=pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var z = r*Math.sin(j);

      equator.vertices.push(
        new THREE.Vector3( x, y, z )
      );
  };

  for (var i = 0; i < 1; i++) {
    var color = 0xff0000;
    material = new THREE.MeshLambertMaterial( {
      color: color
    } );
    var equatorLine = new THREE.Line( equator, material );
    equatorLine.rotation.z = aDegree*45;
    group.add( equatorLine );
  };

  // 子午線
  meridian = new THREE.Geometry();
    
  var theta = 0;
  var r = sphereRadius;
  var y = sphereRadius * Math.sin(theta); 

  for (var j=0; j<pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);
      meridian.vertices.push(
        new THREE.Vector3( x, y, 0 )
      );
  };

  var color = 0xffffff;
  material = new THREE.MeshLambertMaterial( {
      color: color
  } );
  var line = new THREE.Line( meridian, material );
  //line.rotation.y = i * pi2 / 4;
  group.add( line );


  
  // 天体X
  var bodyX = new THREE.Geometry();
    
  var theta = -aDegree*60;
  var r = sphereRadius;
  var y = sphereRadius * Math.sin(theta); 

  for (var j=0; j<pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);
      bodyX.vertices.push(
        new THREE.Vector3( x, y, 0 )
      );
  };
  material = new THREE.MeshLambertMaterial( {
      color: 0xffff00
  } );
  var line = new THREE.Line( bodyX, material );
  
  line.rotation.y = aDegree * 120;
  //line.rotation.x = -aDegree * 5;
  
//  group.add( line );

  // 東西南北線
  var lines = [];
  material = new THREE.MeshLambertMaterial( {
      color: 0xffffff
  } );

  for (var i = 0; i < 2; i++) {
    
    var theta = i*pi2/4;

    lines[i] = new THREE.Geometry();
    for (var j = 0; j < 2; j++) {
      var z = (sphereRadius) * Math.sin(theta);
      var x = (sphereRadius) * Math.cos(theta);
      lines[i].vertices.push(new THREE.Vector3( x, 0, z ));
      theta += pi2/2; 
    };

    for (var k = 0; k < 2; k++) {
      var line = new THREE.Line( lines[k], material );
      group.add( line );
    };

  };

  // 天頂　-　天底 line
  lines = [];
  lines[0] = new THREE.Geometry();
  for (var i = 0; i < 2; i++) {
    
    var theta = pi/2 - i*pi;
    var y = (sphereRadius) * Math.sin( theta );

    lines[0].vertices.push(new THREE.Vector3( 0, y, 0 ));
    var line = new THREE.Line( lines[0], material );
    group.add( line );

  };

  // 天の北極　-　天の南極 line
  lines = [];
  lines[0] = new THREE.Geometry();
  for (var i = 0; i < 2; i++) {
    
    var theta = aDegree*145 - i*pi;
    var y = (sphereRadius) * Math.sin( theta );
    var x = (sphereRadius) * Math.cos( theta )

    lines[0].vertices.push(new THREE.Vector3( x, y, 0 ));
    var line = new THREE.Line( lines[0], material );
    group.add( line );

  };


  // body X
  var bodyXline = new THREE.Geometry();
  var theta = pi2/6;
  var z = (sphereRadius) * Math.sin(theta);
  var x = (sphereRadius) * Math.cos(theta);
  var y = (sphereRadius) * Math.sin(theta);
  
  bodyXline.vertices.push(new THREE.Vector3( x, 0, z ));
  bodyXline.vertices.push(new THREE.Vector3( 0, 0, 0 ));
  bodyXline.vertices.push(new THREE.Vector3( x/2, y, z/2 ));
  
  var line = new THREE.Line( bodyXline, material );
//  group.add( line );


  // 文字
  var loader = new THREE.FontLoader();
  var font;
  loader.load( '{{site.url}}/fonts/helvetiker_regular.typeface.json',   
    function ( response ) {
      font = response;
      
      material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
      // direction
      for (var i = 0; i < 4; i++) {
        
        var text = (i==0)?"N":(i==1)?"W":(i==2)?"S":"E";
        var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
        });    
        var textMesh1 = new THREE.Mesh( textGeo, material );
        var theta = i*pi/2;
        var r = (sphereRadius+15) * Math.cos(theta);
        var z = (sphereRadius+15) * Math.sin(theta);
        var x = (sphereRadius+15) * Math.cos(theta)

        textMesh1.position.x = -x; 
        textMesh1.position.y = 0;
        textMesh1.position.z = z;
 
        textMesh1.rotation.y = (i-1) * pi2 / 4 ;
        group.add(textMesh1);
      };

      // Zenith
      for (var i = 0; i < 2; i++) {
        var text = (i==0)?"Z":"Z'";
        var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
        });    
        var textMesh2 = new THREE.Mesh( textGeo, material );
        var theta = pi2/4 - i*pi2/2;
        var r = (sphereRadius+15) * Math.cos(theta);
        var y = (sphereRadius+15) * Math.sin(theta);
        var x = (sphereRadius+15) * Math.cos(theta)

        textMesh2.position.x = -x; 
        textMesh2.position.y = y;
        textMesh2.position.z = 0;
 
        //textMesh2.rotation.y = (i-1) * pi2 / 4 ;
        group.add(textMesh2);
      }
     
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

     // poles
      for (var i = 0; i < 2; i++) {
        var text = (i==0)?"P":"P'";
        var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
        });    
        var textMesh5 = new THREE.Mesh( textGeo, material );
        var theta = aDegree*145 - i*pi;
        var r = (sphereRadius+15) * Math.cos(theta);
        var y = (sphereRadius+15) * Math.sin(theta);
        var x = (sphereRadius+15) * Math.cos(theta)

        textMesh5.position.x = x; 
        textMesh5.position.y = y;
        textMesh5.position.z = 0;
 
        //textMesh5.rotation.y = (i-1) * pi2 / 4 ;
        group.add(textMesh5);
      }
        
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

proc1();



</script>