---
title: いろいろな時刻系
layout: post
date: 2016-09-10 23:00:00
postTitle: 恒星時系 (sidereal time system)
categories: time
---

-------

### 地球にによる恒星時時計

地球の自転を基にする時刻系である

地球の1回転を赤経の目盛り２４時間で表す（実際の1回転は23時間56分ほど）

この時系は地球の回転角度であり、地球の自転速度が変化しても変わらない

この時計の針を経度0ﾟのグリニッジ子午線に置いたとき、これをグリニッジ恒星時という

<div id="canvas01"></div>

### 各種の恒星時

ある観測地点で、春分点との時角をその地点の恒星時(sidereal time) という

時角を測る基準となる子午線が経度 °のグリニッジにある場合、
グリニッジ恒星時(Greenwich sidereal time) という

観測点がその他の場所のとき、その地点の地方恒星時(local sidereal time) という

春分点に真春分点をとった場合を視恒星時(apparant sidereal time) といい

平均春分点をとった場合を平均恒星時(mean sidereal time) という

各恒星時を下記のように表すとします

\begin{eqnarray}
 グリニッジ恒星時
  \begin{cases}
    グリニッジ視恒星時 &\Theta_{G} \\\
    グリニッジ平均恒星時 &\overline{\Theta}_{G}
  \end{cases}
\end{eqnarray}

\begin{eqnarray}
 地方恒星時
  \begin{cases}
    地方視恒星時 &\Theta \\\
    地方平均恒星時 &\overline{\Theta}
  \end{cases}
\end{eqnarray}

観測地点の天文経度を \\( \lambda \\) としたとき
グリニッジ恒星時と地方恒星時の差は

$$
\left.
\begin{array}{l}
\Theta=\Theta_{G}+\lambda \\\
\overline{\Theta}=\overline{\Theta}_{G}+\lambda
\end{array}
\right
\rbrace
$$

視恒星時と平均恒星時の差は分点差\\( E_{q}\\)であり

$$E_{q}=\Theta_{G} - \overline{\Theta}_{G}
=\Theta - \overline{\Theta}$$

平均恒星時の２４時間、つまり１平均恒星日は、歳差により平均春分点が西に動くため
１平均恒星時は地球の自転1周よりもほんのわずかに短い

------

### ユリウス恒星日　(Julian sidereal day)

BC 4714年12月31日のグリニッジ平均恒星時0時（世界時17h57m ごろ）を起点として
平均恒星日で何日経過したかを示す数値

1年に1度9月21日ごろに、0時が2回来る日がある、このときはユリウス日は2日増える。

-----

### 恒星時の決め方

赤経\\( \alpha \\)の恒星が子午線上に来たとき、時角 \\( t=0 \\) となるので
$$ t = \Theta - \alpha \quad \rightarrow  \quad \Theta = \alpha$$
となる 

ここである恒星の視位置の赤経、赤緯が\\( (\alpha, \delta) \\) であり、
観測地点が天文緯度経度\\( (\varphi, \lambda) \\)で、見かけ上子午線上に
来た瞬間の恒星時を考える

この恒星の赤経は、日周光行差により \\( \varDelta \alpha \\) だけ増すので
見かけ上の赤経は \\( \alpha + \varDelta \alpha \\) となるので

恒星時 \\( \Theta \\) は

$$
\Theta = \alpha + \varDelta \alpha 
\qquad ただし \quad 
\varDelta \alpha = k \cos \varphi / \cos \delta
$$ 

この時刻に対する分点差 \\( E_{q} \\) を使って地方平均恒星時を求めると
$$\overline{\Theta}=\Theta　-　E_{q}$$

この時点のグリニッジ恒星時は \\( \lambda \\) を引いて

$$
\left.
\begin{eqnarray}
グリニッジ視恒星時　 \Theta_{G} &= \Theta - \lambda 
&= \alpha + \varDelta \alpha - \lambda \\\
グリニッジ平均恒星時　\overline{\Theta}_{G} &=\overline{\Theta}-\lambda
&= \alpha + \varDelta \alpha - \lambda - E_{q}
\end{eqnarray}
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

var height = 500,
    width  = 700;
var pi2 = Math.PI * 2;
var pi = Math.PI;
var aDegree = Math.PI / 180;
var decStep = Math.PI / 18;

/**
   グリニッジ恒星時
          　**/

var proc1 = function(){

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
  document.getElementById("canvas01").appendChild( renderer.domElement );
  
  // グループ追加
  var group = new THREE.Group();
  var group1 = new THREE.Group();
   // オブジェクト追加
  var sphere;
  var loader = new THREE.TextureLoader();

  // load a resource
  loader.load(
    // resource URL
    '{{site.url}}/images/earth_ill.jpg',
    // Function when resource is loaded
    function ( texture ) {
      // do something with the texture
      var sphereMat = new THREE.MeshLambertMaterial( {
        map: texture
      } );
      var sphereGeo = new THREE.SphereGeometry(150,50,50);
      sphere = new THREE.Mesh(sphereGeo, sphereMat);
      //sphere.position.set(0,0,0);
      group.add(sphere);
    },
    // Function called when download progresses
    function ( xhr ) {
      console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    // Function called when download errors
    function ( xhr ) {
      console.log( 'An error happened' );
    }
  );


  /* 地軸 */
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var axis = new THREE.Geometry();
    
  axis.vertices.push( new THREE.Vector3( 0, 175, 0 ) );

  axis.vertices.push( new THREE.Vector3( 0, -175, 0 ) );
  
  var axisLine = new THREE.Line( axis, material );
  group.add( axisLine );

  /* 時計の針 */
  material = new THREE.MeshLambertMaterial( {
    color: 0xffffff
  } );

  var hand = new THREE.Geometry();
    
  hand.vertices.push( new THREE.Vector3( 0, 0, 0 ) );
  var z_ = 250 * Math.cos(aDegree*90);
  var x_ = 250 * Math.sin(aDegree*90);
  hand.vertices.push( new THREE.Vector3( x_, 0, z_ ) );
  hand.vertices.push( new THREE.Vector3( x_-30, 0, z_-20 ) );
  hand.vertices.push( new THREE.Vector3( x_-30, 0, z_+20 ) );
  hand.vertices.push( new THREE.Vector3( x_, 0, z_ ) );

  var handLine = new THREE.Line( hand, material );
  group.add( handLine );

  // グリニッジ子午線
  meridian = new THREE.Geometry();
    
  var theta = 0;
  var r = 150;
  var y = 150 * Math.sin(theta); 

  for (var j=0; j<pi2; j+=aDegree){
      var x = r*Math.cos(j);
      var y = r*Math.sin(j);
      meridian.vertices.push(
        new THREE.Vector3( x, y, 0 )
      );
  };

  var color = 0x00ff00;
  material = new THREE.MeshLambertMaterial( {
      color: color
  } );
  var line = new THREE.Line( meridian, material );
  group.add( line );

  // 時計
  time = new THREE.Geometry();
    
  var theta = 0;
  var r = 270;

  for (var j=0; j<pi2; j+=aDegree){
      var z = r*Math.cos(j);
      var x = r*Math.sin(j);
      time.vertices.push(
        new THREE.Vector3( x, 0, z )
      );
  };

  var color = 0xffffff;
  material = new THREE.MeshLambertMaterial( {
      color: color
  } );
  var timeLine = new THREE.Line( time, material );
  group1.add( timeLine );

  // 時間ラベル
  var r = 270;

  for (var j=0; j<pi2; j+=aDegree*15){
      var hour = new THREE.Geometry();
      var z = r*Math.cos(j);
      var x = r*Math.sin(j);
      hour.vertices.push(
        new THREE.Vector3( x, 30, z )
      );
       hour.vertices.push(
        new THREE.Vector3( x, -30, z )
      );
     material = new THREE.MeshLambertMaterial( {
        color: 0xffffff
      } );
      var hourLine = new THREE.Line( hour, material );
      group1.add( hourLine );
  };

  // 文字
  var loader = new THREE.FontLoader();
  var font;
  loader.load( '{{site.url}}/fonts/helvetiker_regular.typeface.json',   
    function ( response ) {
      font = response;
      
      material = new THREE.MeshPhongMaterial( { color: 0xffffff } );

      var r = 280;
      for (var i = 0; i < 24; i++) {
        
        var text = (i==0)?"γ":i+"h";
        var textGeo = new THREE.TextGeometry( text, {
          font: font,
          size: 15,
          height: 5
        });    
        var textMesh1 = new THREE.Mesh( textGeo, material );
        var theta = i*aDegree*15;
        var z = r*Math.cos(theta);
        var x = r*Math.sin(theta);

        textMesh1.position.x = x; 
        textMesh1.position.y = 0;
        textMesh1.position.z = z;
 
        //textMesh1.rotation.y = (i-1) * pi2 / 4 ;
        group1.add(textMesh1);
      };

  });

  group.rotation.x = aDegree * 15;
  group1.rotation.x = aDegree * 15;

  scene.add( group );
  scene.add( group1 );

function render() {
  requestAnimationFrame( render ); // 60フレーム/秒
  
  
  group.rotation.y += 0.005;
  
  renderer.render( scene, camera );
}
render();
}


proc1();



</script>