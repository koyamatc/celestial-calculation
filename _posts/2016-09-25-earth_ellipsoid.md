---
title: 地球上の観測点
layout: post
date: 2016-09-25 23:00:00
postTitle: 地球楕円体
categories: location
---

-------

地球は回転楕円体であり、南北にすこしつぶれた形をしている

この形を決めるには、回転する楕円の形を決めればよく

長半径\\(a\\) と　離心率\\(e\\) を与えればよい

回転楕円体が地球を表すとき、それを地球楕円体( earth ellipsoid)
、
その長半径\\(a\\)を赤道半径(equatorial radius)

### 1. ベッセルの楕円体 (Besselian ellipsoid)

日本でよく使われる楕円体で

赤道 半径　\\(a=6377.39715500km\\) 

離心率2乗 \\(e^2=0.0066743732230614\\)

### 2. 地球楕円上の位置

<div id="canvas01"></div>

回転楕円体を地球楕円体とすると、　

回転軸を極軸、　楕円の長軸が回転して作る平面を赤道面

極軸は赤道面と直交し地球楕円体表面の \((P,P'\\)) で交わる(北極、南極)

極軸上にない点\\(G\\) をとる、 GPP'を通る平面(グレー)をGの子午面という

平面と地表面が接する曲線の点\\(G\\)に近い方を\\(G\\)の子午線といい
経度を測る出発点とする

次に点\\(X\\)を地球楕円体表面またはその近くにとる、
XPP'を通る平面（ピンク）をXの子午面という

\\(G\\)の子午面と\\(X\\)の子午面とのなす角度 \\( \lambda \\) が\\(X\\)の経度

上図の向きに測った場合　\\(\lambda\\)は東経で、反対向きの場合は西経

ここでは東経は正で、西経は負の値で表す

経度\\(\lambda\\)が決まったので、極軸と\\(X\\)を含む子午面で考えていく

<div id="svg01"></div>

\\(X\\)点は、楕円の\\(H\\)点における法線上にあり、
その法線が赤道面と交わる点を\\(J\\)、
極軸と交わる点を\\(K\\)とします

\\( \angle AJX \\)が　\\(X\\)の緯度\\(\varphi\\)

\\(X\\)が赤道面より北側にある時\\(\varphi\\)は北緯で符号は正、
南側にあるときは南緯で符号は負

距離\\(HX\\)は高さで\\(h\\)、　楕円体の外側なら正、内側なら負

\\(HK\\)の長さを東西線曲率半径(radius of curvature in the prime vertical)
といい　しばしば　\\(N\\) で表す

東西線曲率半径は\\(H\\)の緯度によりへんかして以下の関係がある
$$
N = \frac{a}{\sqrt{1 - e^2 \sin^2 \varphi }}
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

var height = 600,
    width  = 700;
var pi2 = Math.PI * 2;
var pi = Math.PI;
var aDegree = Math.PI / 180;
var decStep = Math.PI / 18;

function Point3d(x,y,z,label, r){
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
   地球上の位置
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
  pointsData.push(new Point3d( 0, 0, 0, "O" ));
  // North Pole
  pointsData.push(new Point3d( 0, 0, sphereRadius, "P" ));
  // South Pole
  pointsData.push(new Point3d( 0, 0, -sphereRadius, "P'" ));

  // point G
  var lambda = aDegree * -30;
  var psi = aDegree * 45;
  var x = sphereRadius*Math.cos(psi);
  var y = 0;
  var z = sphereRadius*Math.sin(psi);

  var x_G = x*Math.cos(lambda) - y*Math.sin(lambda);
  var y_G = x*Math.sin(lambda) + y*Math.cos(lambda);
  var z_G = z;
  pointsData.push(new Point3d(x_G, y_G, z_G, "G"));

  // point G1
  var lambda = aDegree * -30;
  var psi = aDegree * 0;
  var x = sphereRadius*Math.cos(psi);
  var y = 0;
  var z = sphereRadius*Math.sin(psi);

  var x_G1 = x*Math.cos(lambda) - y*Math.sin(lambda);
  var y_G1 = x*Math.sin(lambda) + y*Math.cos(lambda);
  var z_G1 = z;
  pointsData.push(new Point3d(x_G1, y_G1, z_G1, null));

  // point X
  var r = sphereRadius * 1.2;
  var lambda = aDegree * 90;
  var psi = aDegree * 55;
  var x = r*Math.cos(psi);
  var y = 0;
  var z = r*Math.sin(psi);

  var x_X = x*Math.cos(lambda) - y*Math.sin(lambda);
  var y_X = x*Math.sin(lambda) + y*Math.cos(lambda);
  var z_X = z;
  pointsData.push(new Point3d(x_X, y_X, z_X, "X"));

  // point A
  var r = sphereRadius;
  var lambda = aDegree * 90;
  var psi = aDegree * 0;
  var x = r*Math.cos(psi);
  var y = 0;
  var z = r*Math.sin(psi);

  var x_A = x*Math.cos(lambda) - y*Math.sin(lambda);
  var y_A = x*Math.sin(lambda) + y*Math.cos(lambda);
  var z_A = z;
  pointsData.push(new Point3d(x_A, y_A, z_A, "A"));

  // point K
  var x_K = 0;
  var y_K = 0;
  var z_K = -60;
  pointsData.push(new Point3d(x_K, y_K, z_K, "K"));

  // point J
  var x_J = 0;
  var y_J = 40 / Math.tan(aDegree*52);
  var z_J = 0;
  pointsData.push(new Point3d(x_J, y_J, z_J, "J"));

  // point H
  var r = sphereRadius;
  var lambda = aDegree * 90;
  var psi = aDegree * 54;
  var x = r*Math.cos(psi);
  var y = 0;
  var z = r*Math.sin(psi);

  var x_H = x*Math.cos(lambda) - y*Math.sin(lambda);
  var y_H = x*Math.sin(lambda) + y*Math.cos(lambda);
  var z_H = z;
  pointsData.push(new Point3d(x_H, y_H, z_H, "H"));

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

  // ********* 赤道 ***********
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

  // ******* G 子午線　********
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var gMeridian = new THREE.Geometry();
  // point G
  var lambda = aDegree * -30;
 
  for (var psi=0; psi<=pi2; psi+=aDegree){
    
    var x_ = sphereRadius*Math.cos(psi);
    var y_ = 0;
    var z_ = sphereRadius*Math.sin(psi);

    var x_mG = x_*Math.cos(lambda) - y_*Math.sin(lambda);
    var y_mG = x_*Math.sin(lambda) + y_*Math.cos(lambda);
    var z_mG = z_;
    gMeridian.vertices.push(
          new THREE.Vector3( x_mG, y_mG, z_mG )
        );
  };
  
  var gMeridianLine = new THREE.Line( gMeridian, material );
  group.add( gMeridianLine );

  // ******* X 子午線　********
  var xMeridian = new THREE.Geometry();
  var lambda = aDegree * 90;
 
  for (var psi=0; psi<=pi2; psi+=aDegree){
    
    var x_ = sphereRadius*Math.cos(psi);
    var y_ = 0;
    var z_ = sphereRadius*Math.sin(psi);

    var x_mG = x_*Math.cos(lambda) - y_*Math.sin(lambda);
    var y_mG = x_*Math.sin(lambda) + y_*Math.cos(lambda);
    var z_mG = z_;
    xMeridian.vertices.push(
          new THREE.Vector3( x_mG, y_mG, z_mG )
        );
  };
  
  var xMeridianLine = new THREE.Line( xMeridian, material );
  group.add( xMeridianLine );

  // 極軸
  var axis = new THREE.Geometry();
  axis.vertices.push(
     new THREE.Vector3( 0, 0, sphereRadius )
  );
  axis.vertices.push(
     new THREE.Vector3( 0, 0, -sphereRadius )
  );
  var axisLine = new THREE.Line( axis, material );
  group.add( axisLine );

  // O - G1
  var line = new THREE.Geometry();
  line.vertices.push(
     new THREE.Vector3( 0, 0, 0 )
  );

  line.vertices.push(
     new THREE.Vector3( x_G1, y_G1, z_G1 )
  );
  var lineLine = new THREE.Line( line, material );
  group.add( lineLine );

  // O - A
  var line = new THREE.Geometry();
  line.vertices.push(
     new THREE.Vector3( 0, 0, 0 )
  );

  line.vertices.push(
     new THREE.Vector3( x_A, y_A, z_A )
  );
  var lineLine = new THREE.Line( line, material );
  group.add( lineLine );

  // X - K
  var line = new THREE.Geometry();
  line.vertices.push(
     new THREE.Vector3( x_X, y_X, z_X )
  );

  line.vertices.push(
     new THREE.Vector3( x_K, y_K, z_K )
  );
  var lineLine = new THREE.Line( line, material );
  group.add( lineLine );



  
 　// *** squares
  
  // Create a white basic material and activate the 'doubleSided' attribute.  
  var squareMaterial = new THREE.MeshBasicMaterial({ 
        color:0xFFFFFF, 
        side:THREE.DoubleSide,
        transparent: true,
        opacity:0.4 
  }); 
  
  // G 子午面
  var r = sphereRadius * 1.4;
  var lambda = aDegree * -30;
  var psi = aDegree * 45;
  var x_ = r*Math.cos(psi);
  var y_ = 0;
  var z_ = r*Math.sin(psi);

  var x_G_ = x_*Math.cos(lambda) - y_*Math.sin(lambda);
  var y_G_ = x_*Math.sin(lambda) + y_*Math.cos(lambda);
  var z_G_ = z_;
 
  var squareGeometry = new THREE.Geometry(); 
  squareGeometry.vertices.push(new THREE.Vector3( 0, 0 , r)); 
  squareGeometry.vertices.push(new THREE.Vector3( 0, 0, -r)); 
  squareGeometry.vertices.push(new THREE.Vector3(1.3*x_G_, 1.3*y_G_, -r)); 
  squareGeometry.vertices.push(new THREE.Vector3(1.3*x_G_, 1.3*y_G_ , r)); 
  squareGeometry.faces.push(new THREE.Face3(0, 1, 2)); 
  squareGeometry.faces.push(new THREE.Face3(0, 2, 3)); 
 
  // Create a mesh and insert the geometry and the material. Translate the whole mesh 
  // by 1.5 on the x axis and by 4 on the z axis and add the mesh to the scene. 
  var squareMesh = new THREE.Mesh(squareGeometry, squareMaterial); 
  group.add(squareMesh); 

  //  X 子午面
  // Create a white basic material and activate the 'doubleSided' attribute.  
  squareMaterial = new THREE.MeshBasicMaterial({ 
        color:0xff00ff, 
        side:THREE.DoubleSide,
        transparent: true,
        opacity:0.4 
  }); 
  var squareGeometry = new THREE.Geometry(); 
  squareGeometry.vertices.push(new THREE.Vector3( 0, 0 , r)); 
  squareGeometry.vertices.push(new THREE.Vector3( 0, 0, -r)); 
  squareGeometry.vertices.push(new THREE.Vector3(0, r, -r)); 
  squareGeometry.vertices.push(new THREE.Vector3(0, r , r)); 
  squareGeometry.faces.push(new THREE.Face3(0, 1, 2)); 
  squareGeometry.faces.push(new THREE.Face3(0, 2, 3)); 
 
  // Create a mesh and insert the geometry and the material. Translate the whole mesh 
  // by 1.5 on the x axis and by 4 on the z axis and add the mesh to the scene. 
  var squareMesh = new THREE.Mesh(squareGeometry, squareMaterial); 
  group.add(squareMesh); 

  // **** 文字 *****
  pointsData.push( new Point3d( 0, 0, sphereRadius*1.2, "λ" ));
  // Omega
  var r = sphereRadius/2;
  var lambda = aDegree * 90;
  var psi = aDegree * 25;
  var x = r*Math.cos(psi);
  var y = 0;
  var z = r*Math.sin(psi);

  var x_Omega = x*Math.cos(lambda) - y*Math.sin(lambda);
  var y_Omega = x*Math.sin(lambda) + y*Math.cos(lambda);
  var z_Omega = z;
  pointsData.push( new Point3d( x_Omega, y_Omega, z_Omega, "Ω" ));


  var loader = new THREE.FontLoader();
  var font;
  loader.load( '{{site.url}}/fonts/helvetiker_regular.typeface.json',   
    function ( response ) {
      font = response;
      
      // 点ラベル表示
      material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
      for (var i = 0; i < pointsData.length; i++) {
        if (pointsData[i].label!=null){

        var textGeo = new THREE.TextGeometry( pointsData[i].label, {
          font: font,
          size: 13,
          height: 5
        });    
        var textMesh1 = new THREE.Mesh( textGeo, material );

        textMesh1.position.x = 1.05*pointsData[i].x; 
        textMesh1.position.y = 1.05*pointsData[i].y;
        textMesh1.position.z = 1.05*pointsData[i].z;

        textMesh1.rotation.x = aDegree * 90 ;

        var theta_ = Math.asin(pointsData[i].y/sphereRadius);

        textMesh1.rotation.y = theta_ + 3* aDegree * 30;
 
        group.add(textMesh1);
        } 

      };
       
  });

  group.rotation.z = -aDegree*120;
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

var xScale = d3.scale.linear()
               .domain([-width/2,width/2])
               .range([120,width+120]);
var yScale = d3.scale.linear()
               .domain([0,height])
               .range([height/2,-height/2]);


var svg01 = d3.select("#svg01")
              .append("svg")               
              .attr("height",height)
              .attr("width",width)
              .style("background","#000");


// draw ellipse
var ellipsePath01 = [];
var r, x, y;
var e = 0.5;
var radius = sphereRadius * 1.3
var f = e * radius;

for (var i = 0; i < pi2; i+=aDegree) {
    
    r = radius * (1 - e*e)/(1+e*Math.cos(i));
    x = r * Math.cos(i);
    y = r * Math.sin(i);
    ellipsePath01.push( new Point(x,y) );

};
pathAttrs01 = {"stroke":"#fff","fillColor":"none"}; 
drawPath(svg01,ellipsePath01,pathAttrs01,xScale,yScale);

// draw points
circleData01 = [
  {"cx":-f,"cy":0,"r":4,"stroke":"#fff","fillColor":"#fff"},
];

for (var i = 0; i < pi2; i+=pi) {
    r = radius * (1 - e*e)/(1+e*Math.cos(i));
    x = r * Math.cos(i);
    y = r * Math.sin(i);
    circleData01.push(
      {"cx":x,"cy":y,"r":4,"stroke":"#fff","fillColor":"#fff"}
    )
};

var b = Math.sqrt(radius*radius*(1-e*e));
circleData01.push(
    {"cx":-f,"cy":b,"r":4,"stroke":"#fff","fillColor":"#fff"},
    {"cx":-f,"cy":-b,"r":4,"stroke":"#fff","fillColor":"#fff"}
)  
var i = pi/3;    
r = radius * (1 - e*e)/(1+e*Math.cos(i));
x0 = r * Math.cos(i);
y0 = r * Math.sin(i);
circleData01.push(
   {"cx":x0,"cy":y0,"r":4,"stroke":"#fff","fillColor":"#fff"}
)


// draw tangent line 接線
var tangentPath01 = [];
for (var i = 50; i < 110; i++) {
  // tangent formula of the ellipse
  var y_ = (b*b)/y0;
  y_ *= 1- ((x0+f)*(i+f)/(radius*radius));
  tangentPath01.push( new Point(i, y_));
};
pathAttrs01 = {"stroke":"#f00","fillColor":"none"}; 
drawPath(svg01,tangentPath01,pathAttrs01,xScale,yScale);

// draw normal line 法線
var normalPath01 = [];
var x1=0,x2=50,y1,y2;
var y1 = (b*b)/y0;
    y1 *= 1- ((x0+f)*(x1+f)/(radius*radius));
var y2 = (b*b)/y0;
    y2 *= 1- ((x0+f)*(x2+f)/(radius*radius));

var slope = - (x1 - x2) / (y1 - y2);
var C = y0 - slope * x0;

for (var i = -f; i <= 130; i+=130) {
  y = slope * i + C;
  normalPath01.push( new Point(i, y));
};

// point K
var x_K = -f;
var y_K = slope * x_K + C;
// point X
var x_X = 130;
var y_X = slope * x_X + C;
// point J
var y_J = 0;
var x_J =(y_J - C) / slope ;

circleData01.push(
   {"cx":x_K,"cy":y_K,"r":4,"stroke":"#fff","fillColor":"#fff"}
)
circleData01.push(
   {"cx":x_X,"cy":y_X,"r":4,"stroke":"#fff","fillColor":"#fff"}
)
circleData01.push(
   {"cx":x_J,"cy":y_J,"r":4,"stroke":"#fff","fillColor":"#fff"}
)

var lineData01 = [
{"x1":-f,"y1":b,"x2":-f,"y2":-b, "stroke":"#fff"},
{"x1":-radius-f,"y1":0,"x2":radius-f,"y2":0, "stroke":"#fff"},
{"x1":x_K,"y1":y_K,"x2":x_X,"y2":y_X, "stroke":"#0f0"},
{"x1":x_K,"y1":y_K,"x2":x_K-25,"y2":y_K + 30, "stroke":"#f00"},
];    
drawLine(svg01,lineData01,xScale,yScale);

var vecData01 = [
{"x1":x_K-10,"y1":y_K+20,"x2":x0-20,"y2":y0+10, "stroke":"#fff"},

];    
drawVectorW(svg01,vecData01,xScale,yScale);

drawCircle(svg01,circleData01,xScale,yScale);

var mathData01 = [
{"x":-125,"y":70,"text":"$$O$$","fontSize":16},
{"x":140,"y":55,"text":"$$A$$","fontSize":16},
{"x":-420,"y":55,"text":"$$A'$$","fontSize":16},
{"x":-85,"y":y_J+30,"text":"$$J$$","fontSize":16},
{"x":x_X+5,"y":y_X+60,"text":"$$X$$","fontSize":16},
{"x":x_K-25,"y":y_K+60,"text":"$$K$$","fontSize":16},
{"x":x0+5,"y":y0+50,"text":"$$H$$","fontSize":16},
{"x":-f-20,"y":b+70,"text":"$$P(北極)$$","fontSize":16},
{"x":-f-25,"y":-b+40,"text":"$$P'(南極)$$","fontSize":16},
{"x":-270,"y":20,"text":"$$a$$","fontSize":16},
{"x":-50,"y":130,"text":"$$N$$","fontSize":16},
{"x":-20,"y":80,"text":"$$\\varphi$$","fontSize":16},
];
    
drawMathjax(svg01,mathData01,xScale,yScale);

// line psi 
var psiData01 = []; 
for (var i=0; i<42; i++){
  var theta_ = aDegree*i;
  var x = 50 * Math.cos(theta_)+x_J;
  var y = 50 * Math.sin(theta_) ;
  psiData01.push( new Point(x,y) );
}
drawPath(svg01,psiData01,pathAttrs01,xScale,yScale);
 
// line a 
pathData01 = []; 
for (var i=180; i<360; i++){
  var x = i;
  var theta_ = aDegree*i;
  var y = 20 * Math.sin(theta_);
  pathData01.push( new Point(x,y) );
}

var xScale011 = d3.scale.linear()
               .domain([180,360])
               .range([85,340]);
pathAttrs01 = {"stroke":"#fff","fillColor":"none"}; 
drawPath(svg01,pathData01,pathAttrs01,xScale011,yScale);

</script>