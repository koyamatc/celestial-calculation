---
title: 天球座標
layout: post
date: 2016-07-20 22:00:00
postTitle: 地平座標系
categories: coordinates
---

-------

地表座標系(horisontal coordinates system) は、

実際に観測者から見える天体の位置を表す座標系

### 地平座標系
<div id="canvas1"></div>

東(E)　西(W)　南(S)　北(N)

天頂(Z) 天底(Z')

地平線(horison)：東西南北を通る青線

子午線(meridian)：地平線の南北、天頂、天底を通る白線

X:　位置を表したい天体

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

// 
var proc1 = function(){

  // variables
  var sphereRadius = 200,
      earthRadius = 5;

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
    color: 0x0033ff,
    transparent: true,
    opacity: 0.8
  } );
  var sphere = new THREE.Mesh( geometry, material );
  //group.add( sphere );

  // Earth
  geometry = new THREE.SphereGeometry( earthRadius, 32, 32 );
  material = new THREE.MeshLambertMaterial( {
    color: 0x00ff00,
    transparent: false,
    opacity: 0.8
  } );
  var earth = new THREE.Mesh( geometry, material );
  group.add( earth );

  // 地平線
  var pi2 = Math.PI * 2;
  var aDegree = Math.PI / 180;
  var decStep = Math.PI / 18;

  
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

  for (var i = 0; i < 1; i++) {
    var color = 0x00ffff;
    material = new THREE.MeshLambertMaterial( {
      color: color
    } );
    var line = new THREE.Line( horison, material );
    group.add( line );
  };

  // 子午線と東西線
  var ascStep = pi2 / 4;
  var ascesionGeo = [];
  for (var i=0; i < 1; i++){
    ascesionGeo[i] = new THREE.Geometry();
    
    var theta = i * ascStep;
    var r = sphereRadius;
    var y = sphereRadius * Math.sin(theta); 

    for (var j=0; j<pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);
      ascesionGeo[i].vertices.push(
        new THREE.Vector3( x, y, 0 )
      );
    };
  }

  for (var i = 0; i < 2; i++) {
    var color = (i==0)?0xffffff:0xff00ff ;
    material = new THREE.MeshLambertMaterial( {
      color: color,
    } );
    var line = new THREE.Line( ascesionGeo[0], material );
    line.rotation.y = i * pi2 / 4;
    group.add( line );
  };

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
  line.rotation.y = pi2 / 3;
  group.add( line );

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

  // body X
  var bodyXline = new THREE.Geometry();
  var theta = pi2/6;
  var z = (sphereRadius) * Math.sin(theta);
  var x = (sphereRadius) * Math.cos(theta);
  var y = (sphereRadius) * Math.sin(theta);
  
  bodyXline.vertices.push(new THREE.Vector3( x, 0, z ));
  bodyXline.vertices.push(new THREE.Vector3( 0, 0, 0 ));
  bodyXline.vertices.push(new THREE.Vector3( x, y, z ));
  
  var line = new THREE.Line( bodyXline, material );
  group.add( line );


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
        var theta = i*ascStep;
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
     
     // body X
      for (var i = 0; i < 2; i++) {
        var text = (i==0)?"H":"X";
        var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
        }); 
        var textMesh3 = new THREE.Mesh( textGeo, material );   
        var theta = pi2/3;
        var z = (sphereRadius+15) * Math.sin(theta);
        var x = (sphereRadius+15) * Math.cos(theta);
        var y = (sphereRadius+15) * Math.sin(i*theta);

        textMesh3.position.x = -x; 
        textMesh3.position.y = y;
        textMesh3.position.z = z;
 
        textMesh3.rotation.y =  pi2/3 - pi2/4;
        group.add(textMesh3);
     }
        
  });

  group.rotation.x = 2*Math.PI/3;
  group.rotation.y = -Math.PI/8;
  
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