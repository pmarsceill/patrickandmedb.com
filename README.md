StrapOn
=======

StrapOn is a responsive, static, HTML prototyping framework that uses the Serve gem to generate static websites using any number of markup languages.

StrapOn is supported by:
-------------------------
* SASS
* Compass
* Susy (for semantically-friendly responsive grids)
* Serve (local webserver, sass compiler, template assembler, etc..)
* Ruby (runs all of these wonderful tools)
* ERB, Haml, HTML, Markdown, Textile (Your markup language of choice..)

Usage
-----
_Requirements:_

1. Ruby

_On first use:_

`$ bundle install` 

Downloads all gem dependacies.

`$ rake start`

Starts webserver at http://localhost:4000, auto-compiles all SCSS and SASS (no need to run compass watch).
Ctrl+C Ends the web server process and generates a static version of the site at ./_site/

`$ rake export`

Generates a static version of the site at ./_site/ without starting the webserver.

_Structure_

* All layouts and partials are in the views directory
* _layout.html.erb in any directory is the default layout for all other files in that directory unless otherwise specified.


Recent Changes
-------
* Re-strucutred assets and scss files.

