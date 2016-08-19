---
title: 恒星位置のずれ
layout: post
date: 2016-09-15 23:00:00
postTitle: 恒星位置のずれ
categories: difference
---

-------

天球座標の項で、天体の位置を計算してきたが

自然界では様々な理由により、計算結果からのずれが生じる

そのため、ずれを計算しないと恒星の位置を正確に求めることはできない

A. 恒星自身が運動しているためその位置が動いていく現象（固有運動）

B. 恒星位置を表す座標系が動いていまう

  1. 赤道座標系の動き --- 地球の歳差、章動

  2. 地平座標系の動き --- 地球の極運動

C.　幾何学的原因により見かけの位置がずれる現象

  1.　地球の公転、自転により観測点が変わることによる現象　--- 視差

D.　物理的原因による現象

  1.　公転、自転により観測点が変わることによる現象　--- 光行差

  2.　大気による光が屈折してずれる現象 --- 大気差    





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


</script>