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
		<h3><span class="label label-info">Tutorials</span></h3>
		<ol class="post-list">
 			{% for post in site.categories.tutorials %}
   				<li><a href="{{ post.url }}">{{ post.postTitle }}</a></li>
 			{% endfor %}
		</ol>			
	</div>
	<div class="col-sm-4">
		<h3><span class="label label-info">Compositions</span></h3>
		<ol class="post-list">
 			{% for post in site.categories.compositions %}
   				<li><a href="{{ post.url }}">{{ post.postTitle }}</a></li>
 			{% endfor %}
		</ol>			
	</div>

</div>


