---
title: 2体問題
layout: post
date: 2016-09-15 20:00:00
postTitle: 日心直行座標系
categories: 2bodies
---

-------

天体が楕円軌道上のどの位置にいるか計算をしてきたが、
これだけでは天球上のどこに見えるかはわからない

そこで、
天体の軌道上の位置を太陽を原点とした日心直行座標系で表す

### 1.日心直行座標系

日心直行座標系には２種類ある

  + 日心黄道直行座標系 (heriocentric ecliptic rectangular coordinates)

    1950.0　の　黄道面を \\(X_{c},Y_{c} \\)　面として、

    その面上で\\(X_{c}\\)軸を平均春分点の方向に 、
    
    \\(Y_{c}\\)軸を黄道90°の方向に、

    \\(Z_{c}\\)軸を黄道の北極方向にとる

  + 日心赤道直行座標系 (heriocentric equatorial rectangular coordinates)

    1950.0　の　平均赤道面を \\(X_{q},Y_{q} \\)　面として、

    その面上で\\(X_{q}\\)軸を平均春分点の方向に 、

    \\(Y_{q}\\)軸を赤経6hの方向に、

    \\(Z_{q}\\)軸を点の北極方向にとる

\\(X_{c}\\)軸と\\(X_{q}\\)軸は一致している

楕円軌道上の位置\\( (x,y) \\) を、
日心黄道座標系の位置\\( (X_{c},Y_{c},Z_{c}) \\) に変換します

### 2. 軌道要素

<div id="canvas01"></div>

\\(xy\\)系も\\(X_{c}Y_{c}Z_{c}\\)系も太陽の重心が原点で一致している

楕円軌道を含む\\( xy \\)面が、　黄道面\\(X_{c}Y_{c}\\)　面と一致していない限り

２つの面は\\(NSN'\\)で交わる

\\(N\\): 昇交点　(ascending node) 軌道が黄道面を南側から北側に通過する

\\(N'\\): 降交点　(descending node) 軌道が黄道面を北側から南側に通過する

\\(N\\)の横径　\\(\angle\gamma SN\\) を
昇交点横径(the longitude of the ascendng node)といい、通常\\(\Omega\\)で表す

軌道面と黄道面の交わる角度を、軌道傾斜角(inclination)といい、　ふつうは\\(i\\)で表す。

軌道傾斜角\\(i\\)は、\\(N\\)の点でみて、 

黄道上の横径が増加する向きと軌道上を天体が運動する向きに挟まれた角として表す
\\( 0° \le i \le 180° \\)

楕円軌道の向きを指定するために、　
軌道面上の\\(x\\)軸を定める近日点の方向をAとして天球上に示す

Aは軌道面上にあり、このとき作られる角\\( \angle NSA \\) を
近日点引数(the argument of perihelion) といい　\\(\omega\\)で表す

軌道要素 (orbital elements)

  + 軌道長半径 : \\(a\\)

  + 離心率 : \\(e\\)

  + 昇交点横径 : \\( \Omega \\)

  + 軌道傾斜角 : \\(i\\)

  + 近日点引数 : \\( \omega \\)

  + 元期の平均近点角　：　\\(l_{0}\\) または　天体の近日点通過時刻 : \\(t_{0}\\)

### 3. 軌道面の\\(xy\\)座標から日心直行座標への変換

軌道上の座標を\\( (x,y,0) \\)で表す

これを３回の回転で日心黄道直行座標\\((X_{c},Y_{c},Z_{c})\\)に変換する

  a) 楕円軌道のz軸を軸として正の向きからみて時計回り \\(\omega\\) 回転

  b)　移動したx軸を軸として正の向きからみて時計回り \\(i\\) 回転

  c) 移動したz軸(\\(Z_{c}\\)軸)を軸として正の向きからみて時計回り \\(\Omega\\) 回転

\begin{eqnarray}
   \left(
     \begin{array}{c}
       X_{c} \\\
       Y_{c} \\\
       Z_{c}
     \end{array}
   \right)
 = R_{z}(-\Omega) \cdot R_{x}(-i) \cdot R_{z}(-\omega)
   \left(
     \begin{array}{c}
       x \\\
       y \\\
       0
     \end{array}
   \right) 
\end{eqnarray}

\begin{eqnarray}
\qquad
 = \left(
     \begin{array}{c}
       \cos\Omega & -\sin\Omega & 0 \\\
       \sin\Omega & \cos \Omega & 0 \\\
       0 & 0 & 1 \\\
     \end{array}
   \right)
   \left(
     \begin{array}{c}
       1 & 0 & 0 \\\
       0 & \cos i & -\sin i \\\
       0 & \sin i & \cos  i
     \end{array}
   \right)
   \left(
     \begin{array}{c}
       \cos\omega & \sin\omega & 0 \\\
       -\sin\omega & \cos \omega & 0 \\\
       0 & 0 & 1
     \end{array}
   \right)
   \left(
     \begin{array}{c}
       x \\\
       y \\\
       0
     \end{array}
   \right)
\end{eqnarray}

$$
\left.
\begin{array}{l}
X_{c}= x(\cos \Omega \cos \omega - \sin \Omega \cos i \sin \omega ) 
     - y(\cos \Omega \sin \omega + \sin \Omega \cos i \cos \omega) \\\
Y_{c}= x(\sin \Omega \cos \omega + \cos \Omega \cos i \sin \omega) 
     - y(\sin \Omega \sin \omega - \cos \Omega \cos i \cos \omega) \\\
Z_{c}= x\sin i \sin \omega + y\sin i \cos \omega
\end{array}
\right
\rbrace
$$

これを日心赤道直行座標系に変換するには

\\( X_{c}\\) 軸を軸として正の向きからみて時計周りに平均黄道傾角 \\(\varepsilon \\)回転する

\begin{eqnarray}
   \left(
     \begin{array}{c}
       X_{q} \\\
       Y_{q} \\\
       Z_{q}
     \end{array}
   \right)
 = R_{x}(-\varepsilon)
   \left(
     \begin{array}{c}
       X_{c} \\\
       Y_{c} \\\
       Z_{c}
     \end{array}
   \right) 
 = \left(
     \begin{array}{c}
       1 & 0 & 0 \\\
       0 & \cos \varepsilon & -\sin \varepsilon \\\
       0 & \sin \varepsilon & \cos  \varepsilon
     \end{array}
   \right)
   \left(
     \begin{array}{c}
       X_{c} \\\
       Y_{c} \\\
       Z_{c}
     \end{array}
   \right)  
\end{eqnarray}

$$
\left.
\begin{array}{l}
X_{q}= X_{c} \\\
Y_{q}= Y_{c}\cos \varepsilon - Z_{c}\sin \varepsilon \\\ 
Z_{q}= Y_{c}\sin \varepsilon + Z_{c}\cos \varepsilon
\end{array}
\right
\rbrace
$$

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
   日心黄道座標系
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
  pointsData.push(new Point( 0, 0, 0, "S" ));
  // 春分点　γ
  var A = aDegree * -20;
  var x = sphereRadius*Math.cos(0);
  var y = 0;
  var z = 0;
  var x_gamma = x*Math.cos(A) - y*Math.sin(A);
  var y_gamma = x*Math.sin(A) + y*Math.cos(A);
  var z_gamma = z;
  pointsData.push(new Point(x_gamma, y_gamma, z_gamma, "γ"));
  // Y_c axis  
  var A = aDegree * 70;
  var x = sphereRadius*Math.cos(0);
  var y = 0;
  var z = 0;
  var x_Yc = x*Math.cos(A) - y*Math.sin(A);
  var y_Yc = x*Math.sin(A) + y*Math.cos(A);
  var z_Yc = z;
  pointsData.push(new Point(x_Yc, y_Yc, z_Yc, null));

  // 昇交点
  var A = aDegree * 0;
  var x_N = sphereRadius*Math.cos(A);
  var y_N = 0;
  var z_N = 0;
  pointsData.push(new Point(x_N, y_N, z_N, "N"));

  // 降交点
  var A = aDegree * 180;
  var x_N1 = sphereRadius*Math.cos(A);
  var y_N1 = 0;
  var z_N1 = 0;
  pointsData.push(new Point(x_N1, y_N1, z_N1, "N'"));
  // North Pole
  pointsData.push(new Point( 0, 0, sphereRadius, "K" ));

  // 近日点
  var theta = aDegree*23.5;
  var theta2 = aDegree*150;
  var majorAxis = 100;
  var eccentricity = 0.7; 

  var r = majorAxis * (1 - eccentricity * eccentricity) / (1 + eccentricity * Math.cos(0));
  var x = r*Math.cos(0);
  var y = r*Math.sin(0);
  var z = 0;
 
  var x_ = x * Math.cos(theta2) - y * Math.sin(theta2);
  var y_ = x * Math.sin(theta2) + y * Math.cos(theta2);
  var z_ = z;

  var x_e = x_;
  var y_e = y_ * Math.cos(theta) + z_ * Math.sin(theta);
  var z_e = y_ * Math.sin(theta) + z_ * Math.cos(theta);
  pointsData.push(new Point(x_e, y_e, z_e, "perihelion"));

  // 軌道面のｘ軸方向　A
  var r = sphereRadius;
  var x = r*Math.cos(0);
  var y = r*Math.sin(0);
  var z = 0;

  var x_ = x * Math.cos(theta2) - y * Math.sin(theta2);
  var y_ = x * Math.sin(theta2) + y * Math.cos(theta2);
  var z_ = z;

  var x_x = x_;
  var y_x = y_ * Math.cos(theta) + z_ * Math.sin(theta);
  var z_x = y_ * Math.sin(theta) + z_ * Math.cos(theta);
  pointsData.push(new Point(x_x, y_x, z_x, "A"));
  
  // 軌道面のy軸方向　
  var theta2 = aDegree*240;

  var r = sphereRadius;
  var x = r*Math.cos(0);
  var y = r*Math.sin(0);
  var z = 0;

  var x_ = x * Math.cos(theta2) - y * Math.sin(theta2);
  var y_ = x * Math.sin(theta2) + y * Math.cos(theta2);
  var z_ = z;

  var x_y = x_;
  var y_y = y_ * Math.cos(theta) + z_ * Math.sin(theta);
  var z_y = y_ * Math.sin(theta) + z_ * Math.cos(theta);
  pointsData.push(new Point(x_y, y_y, z_y, "y"));
      

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

  // ********* 黄道 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xffff00
  } );

  var ecliptic = new THREE.Geometry();
    
  var theta = aDegree*0;
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

// ********* 軌道面 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0x00ff00
  } );

  var orbital = new THREE.Geometry();
    
  var theta = aDegree*23.5;
  var r = sphereRadius;

  for (var j=0; j<=pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);
      var z = 0;

      var x_e = x;
      var y_e = y * Math.cos(theta) + z * Math.sin(theta);;
      var z_e = y * Math.sin(theta) + z * Math.cos(theta);
      orbital.vertices.push(
        new THREE.Vector3( x_e, y_e, z_e )
      );
  };
  var orbitalLine = new THREE.Line( orbital, material );
  group.add( orbitalLine );
  
  // ********* 軌道 ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0x00ff00
  } );

  var orbit = new THREE.Geometry();
    
  var theta = aDegree*23.5;
  var theta2 = aDegree*150;
  var majorAxis = 100;
  var eccentricity = 0.7; 

  for (var j=0; j<=pi2; j+=aDegree){
      var r = majorAxis * (1 - eccentricity * eccentricity) / (1 + eccentricity * Math.cos(j));
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);
      var z = 0;
 
      var x_ = x * Math.cos(theta2) - y * Math.sin(theta2);
      var y_ = x * Math.sin(theta2) + y * Math.cos(theta2);
      var z_ = z;

      var x_e = x_;
      var y_e = y_ * Math.cos(theta) + z_ * Math.sin(theta);
      var z_e = y_ * Math.sin(theta) + z_ * Math.cos(theta);
      

      orbit.vertices.push(
        new THREE.Vector3( x_e, y_e, z_e )
      );
  };
  var orbitLine = new THREE.Line( orbit, material );
  group.add( orbitLine );

// ********* Omega Line ***********
  material = new THREE.MeshLambertMaterial( {
    color: 0xff00ff
  } );
  var Omega = new THREE.Geometry();
    
  var theta = aDegree*23.5;
  var r = sphereRadius * 0.8;

  for (var j=0; j<=aDegree*150; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);
      var z = 0;

      var x_e = x;
      var y_e = y * Math.cos(theta) + z * Math.sin(theta);;
      var z_e = y * Math.sin(theta) + z * Math.cos(theta);
      Omega.vertices.push(
        new THREE.Vector3( x_e, y_e, z_e )
      );
  };
  var OmegaLine = new THREE.Line( Omega, material );
  group.add( OmegaLine );
 
  // Xc,Yc軸
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var theta = aDegree*0;
  var r = axisLength;

  for (var j=0; j<2; j++){
      
      var axis = new THREE.Geometry();
      
      var x = r*Math.cos(aDegree * (90 * j - 20 ));
      var y = r*Math.sin(aDegree * (90 * j - 20 ));
      var z = 0;

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

  // Zc axis
  var axis = new THREE.Geometry();
  axis.vertices.push(
     new THREE.Vector3( 0, 0, 0 )
  );
  axis.vertices.push(
    new THREE.Vector3( 0, 0, axisLength )
  );
  var axisLine = new THREE.Line( axis, material );
  group.add( axisLine );

  // x軸
  material = new THREE.MeshLambertMaterial( {
    color: 0x00ff00
  } );

  var axis = new THREE.Geometry();
  axis.vertices.push(
     new THREE.Vector3( 0, 0, 0 )
  );
  axis.vertices.push(
     new THREE.Vector3( 1.3*x_x, 1.3*y_x, 1.3*z_x )
  );
  var axisLine = new THREE.Line( axis, material );
  group.add( axisLine );

  // y軸
  var axis = new THREE.Geometry();
  axis.vertices.push(
     new THREE.Vector3( 0, 0, 0 )
  );
  axis.vertices.push(
     new THREE.Vector3( 1.3*x_y, 1.3*y_y, 1.3*z_y )
  );
  var axisLine = new THREE.Line( axis, material );
  group.add( axisLine );
 
  // Z軸
  var A = aDegree * 0;
  var theta = aDegree * -23.5;
  var x = 0;
  var y = 0;
  var z = axisLength;

  var x_z = x;
  var y_z = y * Math.cos(theta) + z * Math.sin(theta);;
  var z_z = y * Math.sin(theta) + z * Math.cos(theta);

  axis.vertices.push(
     new THREE.Vector3( 0, 0, 0 )
  );
  axis.vertices.push(
     new THREE.Vector3( x_z, y_z, z_z )
  );
  var axisLine = new THREE.Line( axis, material );
  group.add( axisLine );

  // N-N'
  var NN = new THREE.Geometry();
  NN.vertices.push(
     new THREE.Vector3( x_N, y_N, z_N )
  );
  NN.vertices.push(
     new THREE.Vector3( x_N1, y_N1, z_N1 )
  );
  var NNLine = new THREE.Line( NN, material );
  group.add( NNLine );

  // **** 文字 *****

  pointsData.push( new Point( x_z, y_z, z_z, "z" ));
  pointsData.push( new Point( 0, 0, axisLength, "Zc" ));
  pointsData.push( new Point( 1.3*x_gamma, 1.3*y_gamma, 1.3*z_gamma, "Xc" ));
  pointsData.push( new Point( 1.05*x_Yc, 1.05*y_Yc, 1.05*z_Yc, "Yc" ));
  // North Pole
  pointsData.push(new Point( 0, 0, sphereRadius, "K" ));
  // 黄道
  var A = aDegree * 20;
  var x = sphereRadius*Math.cos(0);
  var y = 0;
  var z = 0;
  var x_E = x*Math.cos(A) - y*Math.sin(A);
  var y_E = x*Math.sin(A) + y*Math.cos(A);
  var z_E = 0;
  pointsData.push(new Point(x_E, y_E, z_E, "Ecliptic"));

  // Orbit
  var theta = aDegree*23.5;
  var theta2 = aDegree*150; // Omega
  var majorAxis = 100;
  var eccentricity = 0.7; 

      var r = majorAxis * (1 - eccentricity * eccentricity) / (1 + eccentricity * Math.cos(pi2/3));
      var x = r*Math.cos(pi2/3);
      var y = r*Math.sin(pi2/3);
      var z = 0;
 
      var x_ = x * Math.cos(theta2) - y * Math.sin(theta2);
      var y_ = x * Math.sin(theta2) + y * Math.cos(theta2);
      var z_ = z;

      var x_O = x_;
      var y_O = y_ * Math.cos(theta) + z_ * Math.sin(theta);
      var z_O = y_ * Math.sin(theta) + z_ * Math.cos(theta);
  pointsData.push(new Point(x_O, y_O, z_O, "Orbit"));

  // Omega
  var theta = aDegree*23.5;
  var r = sphereRadius * 0.8;
  var j=aDegree*30;
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);
      var z = 0;

      var x_omega = x;
      var y_omega = y * Math.cos(theta) + z * Math.sin(theta);;
      var z_omega = y * Math.sin(theta) + z * Math.cos(theta);
  pointsData.push(new Point(x_omega, y_omega, z_omega, "Ω"));

  // inclination
  var theta = aDegree*16
  var r = sphereRadius;
  var j=aDegree*15;
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);
      var z = 0;

      var x_omega = x;
      var y_omega = y * Math.cos(theta) + z * Math.sin(theta);;
      var z_omega = y * Math.sin(theta) + z * Math.cos(theta);
  pointsData.push(new Point(x_omega, y_omega, z_omega, "i"));

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

        textMesh1.position.x = 1.1*pointsData[i].x; 
        textMesh1.position.y = 1.1*pointsData[i].y;
        textMesh1.position.z = 1.1*pointsData[i].z;

        textMesh1.rotation.x = aDegree * 90 ;

        var theta_ = Math.asin(pointsData[i].y/sphereRadius);
        

        textMesh1.rotation.y = theta_ + 3* aDegree * 30;
 
        group.add(textMesh1);
        } 

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