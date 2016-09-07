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
<div class="row">
	<div class="col-sm-4">
		<h3><span class="label label-info">2体問題</span></h3>
		<ol class="post-list">
 			{% for post in site.categories.2bodies %}
   				<li><a href="{{ post.url }}">{{ post.postTitle }}</a></li>
 			{% endfor %}
		</ol>			
	</div>
	<div class="col-sm-4">
		<h3><span class="label label-info">地球上の観測点の位置</span></h3>
		<ol class="post-list">
 			{% for post in site.categories.location %}
   				<li><a href="{{ post.url }}">{{ post.postTitle }}</a></li>
 			{% endfor %}
		</ol>			
	</div>
	<div class="col-sm-4">
		<h3><span class="label label-info">2体問題からの発展</span></h3>
		<ol class="post-list">
 			{% for post in site.categories.2bodiesplus %}
   				<li><a href="{{ post.url }}">{{ post.postTitle }}</a></li>
 			{% endfor %}
		</ol>			
	</div>

</div>


