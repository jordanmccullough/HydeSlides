# HydeSlides

## Building from Existing Chapters

Creating a new slide deck and building "chapter" content is easy:

1. Create a new directory for your chapter content under _posts
2. Save slides in Markdown within your chapter directory
3. Add YAML front matter with `layout` (required), `tags` (required), `title` (optional), and `chapters` (optional) fields

`layout` must be set to `slidedeck`; `title` can be whatever you like; `chapters` is a quoted, comma separated list matching the corresponding directory in _posts.

## Creating new Chapter Content

Example "chapter" content is located in the `_posts` directory. Markdown files are used for content and grouped into folders to make everything as human-readable as possible.

A chapter consists of a `_posts/<yourchapter>` folder and markdown files. Each markdown file must begin with four YAML front matter fields: `chapter`, `layout`, `title`, `tags`:

* `chapter` serves as the string for the auto-generated cover slide
* `layout` controls the layout of the file `[TODO: correct this description. The field was missing in this list, so I added it, but I'm not really sure what it does]`
* `title` must be a string or, to hide the slide header, an empty string, or "false"
* `tags` for simplicity sake is only assigned one value, usually the same name as the chapter folder

### Notes

Speaker notes, only shown on the "split" screen, are displayed by pressing the S key. They are included on slides in an HTML wrapped element with `class="notes"`:

	{% include hydeslides/notes-open %}
	  Oh hey, these are some notes. They'll be hidden in your presentation, but you can see them
	  if you open the speaker notes window (hit 's' on your keyboard).
	{% include hydeslides/notes-close %}

### Slide Deck "What's Next" Feature

Pressing S will launch the slide deck with the "What's Next" feature (showing the next slide) alongside the presenter notes (if any notes are in the original slide markdown).

## Theming

Custom themes are forthcoming for HydeSlides.

## Dependencies 
* SASS theming is found under `/dependencies/theme/css` and controls all RevealJS and slide presentation overrides
* Graphical and JS dependencies are centrally stored in `/dependencies`
* Assets used throughout any slide deck should be stored in `/assets`

---

Thanks to the contributors of HydeSlide's core components and features: Tom Preston-Werner for Jekyll, Hakim El Hattab for Reveal-JS, and Dave Gandy for Font-Awesome.

---

<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">HydeSlides</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/jordanmccullough/hydeslides" property="cc:attributionName" rel="cc:attributionURL">Jordan McCullough</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/jordanmccullough/hydeslides" rel="dct:source">https://github.com/jordanmccullough/hydeslides</a>.
