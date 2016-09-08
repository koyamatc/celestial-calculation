---
title: 2体問題
layout: post
date: 2016-09-15 23:00:00
postTitle: 黄道座標系
categories: 2bodies
---

-------

<div id="canvas01"></div>

P: 天の北極
P': 天の南極
K: 黄道の北極
k': 黄道の南極
γ: 春分点



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
   黄道座標系
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
  var x = sphereRadius*Math.cos(A);
  var y = 0;//sphereRadius*Math.sin(A);
  var z = 0;
 
  pointsData.push(new Point(x, y, z, "γ"));
 
 // 秋分点
  var A = aDegree * 180;
  var x = sphereRadius*Math.cos(A);
  var y = 0;//sphereRadius*Math.sin(A);
  var z = 0;
 
  pointsData.push(new Point(x, y, z, " "));
 
  // ***** 黄道の北極
  var theta = aDegree * -23.5;　// 黄道の傾き
  // 天の北極座標 
  var x = 0;
  var y = 0;
  var z = sphereRadius;
  // X軸の回転
  var x_ = x;
  var y_ = y * Math.cos(theta) + z * Math.sin(theta);;
  var z_ = y * Math.sin(theta) + z * Math.cos(theta);
  
  pointsData.push(new Point(x_, y_, z_, "K"));

  // ******　黄道の南極
  // 天の南極座標
  var x = 0;
  var y = 0;
  var z = -sphereRadius;
  // x軸の回転
  var x_ = x;
  var y_ = y * Math.cos(theta) + z * Math.sin(theta);;
  var z_ = y * Math.sin(theta) + z * Math.cos(theta);
  
  pointsData.push(new Point(x_, y_, z_, "K'"));

  // ******* 天体X
  var A = aDegree * 30;
  var delta = aDegree * 60; 

  //　x軸回転
  var x = 0;
  var y = sphereRadius * Math.sin(delta);
  var z = sphereRadius * Math.cos(delta);
  // z軸回転    
  var x_0 = x*Math.cos(A) + y*Math.sin(A);
  var y_0 = x*Math.sin(A) + y*Math.cos(A);
  var z_0 = z;
  // x軸回転
  var x_ = x_0;
  var y_ = y_0*Math.cos(theta) + z_0*Math.sin(theta);
  var z_ = -y_0*Math.sin(theta) + z_0*Math.cos(theta);
 
  pointsData.push(new Point(x_, y_, z_, "X"));

  // C 
  var A = aDegree * 30;
  var theta = aDegree * -23.5;
  var r = sphereRadius;
  var delta = aDegree * 90; 

  var x = 0;
  var y = r*Math.sin(delta);
  var z = r*Math.cos(delta);
      
  var x_0 = x*Math.cos(A) + y*Math.sin(A);
  var y_0 = x*Math.sin(A) + y*Math.cos(A);
  var z_0 = z;
 
  var x_ = x_0;
  var y_ = y_0*Math.cos(theta) + z_0*Math.sin(theta);
  var z_ = -y_0*Math.sin(theta) + z_0*Math.cos(theta);
 
  pointsData.push(new Point(x_, y_, z_, "C"));

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

  // X,Y軸
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var theta = aDegree*23.5;
  var r = axisLength;

  for (var j=0; j<2; j++){
      
      var axis = new THREE.Geometry();
      
      var x = r*Math.cos(aDegree * 90 * j);
      var y = r*Math.sin(aDegree * 90 * j);
      var z = 0;//r*Math.sin(j);

      var x_e = x;
      var y_e = y * Math.cos(theta) + z * Math.sin(theta);;
      var z_e = y * Math.sin(theta) + z * Math.cos(theta);
      axis.vertices.push(
        new THREE.Vector3( 0, 0, 0 )
      );
      axis.vertices.push(
        new THREE.Vector3( x_e, y_e, z_e )
      );
      var axisLine = new THREE.Line( axis, material );
      group.add( axisLine );
  };

  // Z軸
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var A = aDegree * 0;
  var theta = aDegree * -23.5;
  var x = 0;
  var y = 0;
  var z = axisLength;

  var x_ = x;
  var y_ = y * Math.cos(theta) + z * Math.sin(theta);;
  var z_ = y * Math.sin(theta) + z * Math.cos(theta);

  axis.vertices.push(
     new THREE.Vector3( 0, 0, 0 )
  );
  axis.vertices.push(
     new THREE.Vector3( x_, y_, z_ )
  );
  var axisLine = new THREE.Line( axis, material );
  group.add( axisLine );

  // PKP'K'Y
  material = new THREE.MeshLambertMaterial( {
      color: 0x00ff00
  } );
  meridian = new THREE.Geometry();
    
  var theta = 0;
  var r = sphereRadius;
  //var y = r * Math.sin(theta); 

  for (var j=0; j<pi2; j+=aDegree){
      var z = r*Math.cos(j);
      var y = r*Math.sin(j);
      meridian.vertices.push(
        new THREE.Vector3( 0, y, z )
      );
  };

  var line = new THREE.Line( meridian, material );
  group.add( line );

  // KXK' X天体
  material = new THREE.MeshLambertMaterial( {
      color: 0xffffff
  } );
  xBody = new THREE.Geometry();
    
  var A = aDegree * 30;
  var theta = aDegree * -23.5;
  var r = sphereRadius;
  //var y = r * Math.sin(theta); 

  for (var j=0; j<pi; j+=aDegree){
      var x = 0;
      var y = r*Math.sin(j);
      var z = r*Math.cos(j);
      
      var x_0 = x*Math.cos(A) + y*Math.sin(A);
      var y_0 = x*Math.sin(A) + y*Math.cos(A);
      var z_0 = z;
 
      var x_ = x_0;
      var y_ = y_0*Math.cos(theta) + z_0*Math.sin(theta);
      var z_ = -y_0*Math.sin(theta) + z_0*Math.cos(theta);
 
      xBody.vertices.push(
        new THREE.Vector3( x_, y_, z_ )
      );
  };

  var xBodyLine = new THREE.Line( xBody, material );
  group.add( xBodyLine );

  // 天体X-O
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

 var A = aDegree * 30;
  var theta = aDegree * -23.5;
  var r = axisLength * 1.5;
  var j = aDegree * 60; 

  var x = 0;
  var y = r*Math.sin(j);
  var z = r*Math.cos(j);
      
  var x_0 = x*Math.cos(A) + y*Math.sin(A);
  var y_0 = x*Math.sin(A) + y*Math.cos(A);
  var z_0 = z;
 
  var x_ = x_0;
  var y_ = y_0*Math.cos(theta) + z_0*Math.sin(theta);
  var z_ = -y_0*Math.sin(theta) + z_0*Math.cos(theta);
 
  axis.vertices.push(
     new THREE.Vector3( 0, 0, 0 )
  );
  axis.vertices.push(
     new THREE.Vector3( x_, y_, z_ )
  );
  var axisLine = new THREE.Line( axis, material );
  group.add( axisLine );


  // **** 文字 *****
  pointsData.push( new Point(axisLength, 0, 0, "X") );
  pointsData.push( new Point(0, axisLength, 0, "Y") );
  
  var loader = new THREE.FontLoader();
  var font;
  loader.load( '{{site.url}}/fonts/helvetiker_regular.typeface.json',   
    function ( response ) {
      font = response;
      
      // 点ラベル表示
      material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
      for (var i = 0; i < 5; i++) {
        var textGeo = new THREE.TextGeometry( pointsData[i].label, {
          font: font,
          size: 13,
          height: 5
        });    
        var textMesh1 = new THREE.Mesh( textGeo, material );

        textMesh1.position.x = 1.1*pointsData[i].x; 
        textMesh1.position.y = 1.1*pointsData[i].y;
        textMesh1.position.z = 1.1*pointsData[i].z;

        textMesh1.rotation.x = aDegree * 90 ;

        var theta_ = Math.asin(pointsData[i].y/sphereRadius);
        

        textMesh1.rotation.y = theta_ + 3* aDegree * 30;
 
        group.add(textMesh1);

      };
       
  });

  group.rotation.z = -aDegree*100;
  group.rotation.x = aDegree*30;
  group.rotation.y = aDegree*0;

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