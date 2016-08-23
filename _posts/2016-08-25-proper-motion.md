---
title: 恒星位置のずれ
layout: post
date: 2016-09-15 22:00:00
postTitle: 固有運動 (Proper Motion)
categories: difference
---

-------

恒星自身が運動して、　天球上の位置を変えていくことを固有運動という。

固有運動は天体の相互作用によって複雑な動きをすると思われるが、

人間が観測している数千年の機関では、太陽系に対して

等速直線運動をしていると仮定することができる。

----

### 固有運動速度と視線速度

<div id="svg01"></div>


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


var svg01 = d3.select("#svg01").append("svg")
              .attr("height", 200)
              .attr("width", 500)
              .style("background","#000");

var lineData01 = [
{"x1":50,"y1":50,"x2":400,"y2":50,"stroke":"#fff"},
{"x1":50,"y1":50,"x2":450,"y2":150,"stroke":"#fff"}
];    
drawLine(svg01,lineData01);

var vecData01 = [
{"x1":400,"y1":50,"angles":64,"length":Math.sqrt(12500),"stroke":"#fff"},
{"x1":400,"y1":50,"angles":0,"length":50,"stroke":"#fff"},
{"x1":450,"y1":50,"angles":90,"length":100,"stroke":"#fff"}
];    
drawVectorA(svg01,vecData01);             

var mathData01 = [
{"x":45,"y":-15,"text":"$$O(観測者)$$","fontSize":16},
{"x":340,"y":-15,"text":"$$(恒星)Q$$","fontSize":16},
{"x":420,"y":-15,"text":"$$R_{a}$$","fontSize":16},
{"x":455,"y":50,"text":"$$T$$","fontSize":16},
{"x":425,"y":40,"text":"$$v$$","fontSize":16},
{"x":225,"y":20,"text":"$$\\mu$$","fontSize":16},
];
drawMathjax(svg01,mathData01);
</script>