---
layout: post
title: using jekyll
---

{{ page.title }}
--------------------------------------------------------------------------------

<div class="page-date">{{ page.date | date_to_long_string}}</div>

I'm using jekyll!

I wonder how well it handles CoffeeScript?

{% highlight coffeescript %}
foo = ->
  console.log "foo"

foo()
{% endhighlight %}