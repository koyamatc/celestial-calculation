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

// 
var proc1 = function(){

  // variables
  var sphereRadius = 200,
      earthRadius = 4;

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

  // Earth(Origin)
  geometry = new THREE.SphereGeometry( earthRadius, 32, 32 );
  material = new THREE.MeshLambertMaterial( {
    color: 0x00ff00,
    transparent: false,
    opacity: 0.8
  } );
  var earth = new THREE.Mesh( geometry, material );
  group.add( earth );
  // XYZ
  var pointMaterial = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var xyz = [];
  xyz.push(new Point(sphereRadius,0,0));
  xyz.push(new Point(0,sphereRadius,0));
  xyz.push(new Point(0,0,sphereRadius));
  
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


  // 春分点

  var gamma = new THREE.SphereGeometry( 10, 32, 32 );
  var pointMesh = new THREE.Mesh( gamma, pointMaterial );

  /*
  L=cos δ cos α
  M=cos δ sin α
  N=sin δ
  */
  var alpha = aDegree * 30;
  var delta = pi/2- aDegree * 60;

  var y = sphereRadius * Math.cos(delta) * Math.cos(alpha);
  var z = sphereRadius * Math.cos(delta) * Math.sin(alpha);;
  var x = sphereRadius * Math.sin(delta);

  pointMesh.position.set(x, y, z);
  
  group.add(pointMesh);


  // ********* 地平線 ***********
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


  // ******** 春分点線 *******
  var equinox = new THREE.Geometry();
    
  var theta = 0;

  var r = sphereRadius;
  var alpha = aDegree * 0;
  //var delta = pi/2- aDegree * 60;

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
/*
*/
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

    
     //春分点
     var text = "r";
     var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
      }); 
      var textMesh5 = new THREE.Mesh( textGeo, material );   
      var h = aDegree * 27;
      var A = aDegree * -60;
      var x = (sphereRadius+10) * Math.cos(h)*Math.cos(A);
      var z = (sphereRadius+10) * -Math.cos(h)*Math.sin(A);
      var y = (sphereRadius+10) * Math.sin(h);

      textMesh5.position.set(x,y,z); 
 
      //textMesh5.rotation.y =  aDegree*35;
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
</script>