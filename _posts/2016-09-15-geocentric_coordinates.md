---
title: 2体問題
layout: post
date: 2016-09-15 19:00:00
postTitle: 地心座標系での天体位置
categories: 2bodies
---

-------

地球から見た天体の位置を計算する

それには、　目的の天体と地球の、その時刻における日心直行座標が必要となる

地球の日心直行座標を\\( (\xi_{c}, \eta_{c}, \zeta_{c}) \\) とすると

1950.0　の平均春分点と黄道により表された
太陽の横経、黄緯 \\( (\lambda_{s}, \beta_{s})\\) と
真地心距離 \\( r_{s} \\) で
$$
\left.
\begin{array}{l}
\xi_{c}= - r_{s} \cos \beta_{s} \cos \lambda_{s} \\\
\eta_{c}= - r_{s} \cos \beta_{s} \sin \lambda_{s} \\\
\zeta_{c}= - r \sin \beta_{s}
\end{array}
\right
\rbrace
$$

ただし \\( \beta_{s} \\) は非常に小さい値なので \\( \beta_{s}=0\\)として
$$
\left.
\begin{array}{l}
\xi_{c}= - r_{s} \cos \lambda_{s} \\\
\eta_{c}= - r_{s} \sin \lambda_{s} \\\
\zeta_{c}= 0
\end{array}
\right
\rbrace

太陽黄経\\( \lambda_{s} \\) がわかれば地球の座標は計算できる


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


</script>