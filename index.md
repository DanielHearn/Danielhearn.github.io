---
layout: default
---

<section id="about">
	<h3>About Me</h3>
	<p>I’m currently in my first year at the University of Portsmouth
	studying computer science where I’m learning new tech and
	continuing to advance my existing skills. During the summer im focusing my time on learning NodeJS, digital art and 3d modelling.</p>
	<p>In my spare time I'm continuing to develop my main project <a href="/manytwitch">ManyTwitch</a>, while also creating new pens on my <a href="{{ site.codepen }}">Codepen</a> weekly. The source code for all my projects can be found on <a href="{{ site.github }}">Github</a>.<!-- I am also periodically writing articles about web development and gaming on <a href="https://medium.com/@danhearn">Medium</a>.--></p>
</section>
<section id="skills">
	<h3>Skills</h3>
	<ul id="skills-container">
		<li>
			<p>CSS3 <span>1+ year</span></p>
		</li>
		<li>
			<p>HTML5 <span>1+ year</span></p>
		</li>
		<li>
			<p>AngularJS <span>&lt;1 year</span></p>
		</li>
		<li>
			<p>Python 3 <span>1+ year</span></p>
		</li>
		<li>
			<p>Git <span>1+ year</span></p>
		</li>
		<li>
			<p>Photoshop <span>1+ year</span></p>
		</li>
		<li>
			<p>Java <span>&lt;1 year</span></p>
		</li>
		<li>
			<p>MYSQL <span>&lt;1 year</span></p>
		</li>
	</ul>
</section>
<section id="blog">
	<h3>Blog</h3>
	<a href="blog.html">My Blog</a>
	<ul id="posts">
		{% for post in site.posts %}
			<li><span>{{ post.date | date_to_string }}</span> » <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li>
		{% endfor %}
	</ul>
</section>
<section id="projects">
	<h3>Projects</h3>
	<p>These are the larger projects I have developed, to view my smaller projects and code experiments visit my <a href="{{ site.codepen }}">codepen</a>.</p>
	<section id="projects-list">
		{% for project in site.projects %}
			<article>
				<a href="{{ project.url }}" class="img-container"><img src="{{ project.img }}" alt="Image of the manytwitch website."></a>
				<section class="main-info">
					<h2>{{ project.title }}</h2>
					<p>{{ project.description }}</p>
					<a href="{{ project.url }}">VIEW PROJECT</a>
				</section>
			</article>
		{% endfor %}
	</section>
</section>