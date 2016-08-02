---
title: 天球座標
layout: post
date: 2016-07-20 21:00:00
postTitle: 赤道座標系と地平座標系の関係
categories: coordinates
---

-------

<div id="canvas1"></div>

$$O:観測点$$
$$N:北 \quad E:東 \quad S:南 \quad W:西$$
$$Z:天頂 \quad Z':天底$$
$$P:天の北極 \quad P':天の南極$$
$$\gamma : 春分点$$

$$緑色の円：地平線$$
$$NZSを通る円：子午線$$
$$赤い円：天の赤道$$

$$\angle{ZP\gamma}=\Theta \quad 恒星時(sidereal \quad time)\quad 時間とともに変化する$$
 
### 恒星時

天体の高度と方位角を計算するには、

天体の赤経、赤緯だけでなく、観測者の経緯度、時刻が必要

+ 視恒星時(apparent sidereal time) 
  
  これを使う

+ 平均恒星時(mean sidereal time)

#### 恒星時の計算

$$恒星時 \quad \Theta = \Theta_{0} + \lambda + t_{i} + 補正値$$
$$\Theta_{0}:その日の世界時0時のグリニッジ視恒星時$$
$$\lambda:観測者の東経$$
$$t_{i}:世界時0時からの経過時間$$

例題

観測点：東経139ﾟ31'53".6

時刻：1978/06/10 21時20分

東経の値を時間の値に変換する

東経139ﾟ31'53".6　= <span id="AU01"></span>

$$1978/06/10　世界時0時のグリニッジ視恒星時\Theta_{0}：17h 11m 58.714s$$
$$観測地の東経\lambda = 9h 18m 7.573s$$
$$世界時0時からの経過時間t_{i}:12h20m(21h20m-9h)$$
$$補正値:2m1.563s$$
$$合計=38h52m7.850s"$$
恒星時は角度
<div id="sidereal"></div>

### グリニッジ平均恒星時の計算

視恒星時がわからないときに、平均恒星時を使用できる

誤差は　１”　余り

$$平均恒星時 \bar{\Theta} とし、その誤差は１”余りで、$$
$$この差のことを分点差（equation \quad of \quad equinoxes）E_{q}$$
$$\Theta = \bar\Theta + E_{q}$$

平均恒星時を求める式は
$$\Theta_{0} = 6h38m45.836s + 8640184.542sT_{u} + 0.09297sT_{u}^{2}$$
$$T_{u}は、グリニッジでの1899/12/31正午（1900/1/0正午UT）から数えた経過日数を、
36525日を１として示した時間の単位$$

例題

1978/06/10　世界時0時グリニッジ平均恒星時を求める

経過日数を計算する

1899/12/31正午から1977/12/31 で





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

  // 春分点

  var gamma = new THREE.SphereGeometry( 4, 32, 32 );

  var pointMesh = new THREE.Mesh( gamma, pointMaterial );
  var h = aDegree * 27;
  var A = aDegree * -60;
  var x = sphereRadius * Math.cos(h)*Math.cos(A);
  var z = sphereRadius * -Math.cos(h)*Math.sin(A);
  var y = sphereRadius * Math.sin(h);

  pointMesh.position.set(x, y, z);
  
  group.add(pointMesh);


  // ********* 地平線 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0x00ff00
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

  // ******* 天の赤道 ********
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

  // ******** 子午線 *******
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

  // ******** 春分点線 *******
  var equinox = new THREE.Geometry();
    
  var theta = 0;
  var r = sphereRadius;
  var y = sphereRadius * Math.sin(theta); 

  for (var j=aDegree*60; j<aDegree*155; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);
      equinox.vertices.push(
        new THREE.Vector3( x, y, 0 )
      );
  };

  var color = 0xffffff;
  material = new THREE.MeshLambertMaterial( {
      color: color
  } );
  var line = new THREE.Line( equinox, material );
  line.rotation.x = aDegree * 45;
  //line.rotation.z = aDegree * 120;
  line.rotation.y = -aDegree * 27;
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
  
  scene.add( group );
  
  function render() {
    requestAnimationFrame( render );

    renderer.render( scene, camera );

    controls.update();
  }
  render();
} 

proc1();

// 恒星時の計算

var auH = 139,
    auM = 31,
    auS = 53.6;

var totalS = auH * 240 + 31 * 4 + auS * 0.0666667;
var AUH = Math.floor(totalS / 3600);
var AUM = Math.floor((totalS % 3600) / 60);
var AUS = (totalS % 3600) % 60;

$("#AU01").html(AUH + "h " + AUM + "m " + AUS + "s");    

//世界時0時視恒星時
var theta0 = 17*3600 + 11 * 60 + 58.714;
var lambda = totalS;
var t = 12 * 3600 + 20 * 60;
var fix = t * 0.00273791;

var siderealTime = theta0 + lambda + t + fix;

if (siderealTime >= 86400){
  siderealTime -= 86400;
}
var h = Math.floor(siderealTime / 3600);
var m = Math.floor((siderealTime % 3600) / 60);
var s = (siderealTime % 3600) % 60;

h *= 15; 
m *= 15;
s *= 15;

if (Math.floor(s / 60) > 0 ){
  m += Math.floor(s / 60);
  s -= Math.floor(s / 60)*60;  
}
if (Math.floor(m / 60) > 0 ){
  h += Math.floor(m / 60);
  m -= Math.floor(m / 60)*60;  
}

$("#sidereal").html(h + "ﾟ " + m + "' " + s + "”");   

// 観測日
var date0 = new Date(1978,6,20,22,32,17,0);
var theta0 = new Date(0,0,0,17,51,24,267);
var sidereal = getSiderealTime(date0,139,32,29.0325,theta0);
console.log(sidereal);

var date0 = new Date(1978,6,10,0,0,0,0);
var sidereal = getMeanSiderealTime(date0);
console.log(sidereal);


</script>