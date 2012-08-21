This script works with the SymbolSet semantic symbol font to utilize their star symbol to display ratings while keeping an even more accessible text in the markup for machines and humans on old browsers.

It works best in conjunction with [Modernizr](https://github.com/Modernizr/Modernizr). It checks for Modernizr, and if it finds it, will stop the script from running in an outdated browser that doesn't support @font-face.

Reference the demo for an example of this script working with Schema.org microdata.

Instructions
-------

1. Load format_symbolset_stars.js.
2. Add your readable rating to any element. It must start with the number to be parsed, the extra text will be discarded.
3. Add the class "ss-star_fade" or "ss-star_half" to that element depending on your desired output (see examples below).
4. Call the function format_symbolset_stars() after the document is loaded.

Example 1
-------

The markup...

```html
<span class="ss-star_fade">4 stars</span>
```

Is converted by the browser to...

```html
<span class="ss-star_fade">star star star star <span class="unfilled">star </span></span>
```

Example 2
-------

The markup...

```html
<span class="ss-star_half">4.5 stars</span>
```

Is converted by the browser to...

```html
<span class="ss-star_half">star star star star halfstar</span>
```

Additional Notes
-------

This script was developed without any involvement from SymbolSet, but I hope they think it's great!

The demo is just to show how the script modifies the HTML, you'll need to purchase SymbolSet Standard and load it in yourself to get the full effect :-)

If you've got some ideas on how to make this script better, email me at [hello@tylerpaulson.com](mailto:hello@tylerpaulson.com) or send me a pull request.

**Links:**

- [SymbolSet](http://symbolset.com/)
- [Schema.org Rating](http://schema.org/Rating)

*This script is released under the [MIT License](http://opensource.org/licenses/MIT).*