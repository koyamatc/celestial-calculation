---
title: Celestial-calculation
layout: default
---

#天体の位置計算

- - -

===

###index

<div class="row">
	<div class="col-sm-4">
		<h3><span class="label label-info">天球座標</span></h3>
		<ol class="post-list">
 			{% for post in site.categories.coordinates %}
   				<li><a href="{{ post.url }}">{{ post.postTitle }}</a></li>
 			{% endfor %}
		</ol>			
	</div>
	<div class="col-sm-4">
		<h3><span class="label label-info">恒星位置のずれ</span></h3>
		<ol class="post-list">
 			{% for post in site.categories.difference %}
   				<li><a href="{{ post.url }}">{{ post.postTitle }}</a></li>
 			{% endfor %}
		</ol>			
	</div>
	<div class="col-sm-4">
		<h3><span class="label label-info">いろいろな時刻系</span></h3>
		<ol class="post-list">
 			{% for post in site.categories.time %}
   				<li><a href="{{ post.url }}">{{ post.postTitle }}</a></li>
 			{% endfor %}
		</ol>			
	</div>

</div>


