---

---

<html>
	<head>
		<title>HydeSlides Launcher</title>

		{% include launcher-head %}
	</head>

	<body>
		<h1>HydeSlide Control Panel</h1>
		<ul>
			<li><a href="javascript:launchSlideDeck()">Launch</a></li>
		</ul>

		<ul class="controls">
			<li class="right"><a href="javascript:right()">
			</a></li>
			<li class="left"><a href="javascript:left()">
			</a></li>
			<li class="up"><a href="javascript:up()">
			</a></li>
			<li class="down"><a href="javascript:down()">
			</a></li>
		</ul>

		<div class="control">
			<ul id="toc">
				{% for ch in site.chapters %}
					{% assign chapterIndex = forloop.index0 %}
					{% assign coverInc = 0 %}

					<li><a class="toc-slide" href="#/{{ chapterIndex }}" rel="/{{ chapterIndex }}">{{ ch }}</a>

						{% for section in site.tags[ch] reversed %}
							{% if forloop.first %}
								{% if section.cover != false %}
									{% capture coverInc %}{{ coverInc | plus:1 }}{% endcapture %}
								{% endif %}
							{% endif %}

							{% assign slideIndex = forloop.index0 %}
							{% capture slideIndex %}{{ slideIndex | plus:coverInc }}{% endcapture %}

							<ul>
								<li>
									<a class="toc-slide" href="#/{{ chapterIndex }}/{{ slideIndex }}" rel="/{{ chapterIndex }}/{{ slideIndex }}">
										{{ section.title }}
										{% if section.title == '' %}
											No Title
										{% endif %}
									</a>
								</li>
							</ul>
						{% endfor %}
					</li>
				{% endfor %}
			</ul>
		</div>


		{% include launcher-script %}

	</body>
</html>