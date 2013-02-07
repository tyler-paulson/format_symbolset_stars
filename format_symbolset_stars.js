// https://github.com/tyler-paulson/format_symbolset_stars - released under the MIT License

window.format_symbolset_stars = function () {
	
	var supported = true;
	if(typeof Modernizr.fontface != 'undefined') { 
		if(! Modernizr.fontface) { supported = false; } 
	}
	
	function conversion(html,half) {
		var num = parseFloat(html);
		if(! isNaN(num)) {
			var output = '';
			if(half) {
				var count = num;
				for (var i=1; i <= num; i++) {
					output += 'star ';
					count -= 1;
				}
				if(count == .5) {
					output += 'halfstar';
				}
			} else {
				var count = Math.floor(num);
				for (var i=1; i <= 5; i++) {
					if(count >= i) {
						output += 'star ';
					} else {
						output += '<span class="unfilled">star </span>';
					} 
				}
			}
			return output;
		} else {
			return html;
		}
	}
	
	if(supported) { 
		
		var stars_fade = document.getElementsByClassName('ss-star_fade');
		for (i=0; i<stars_fade.length; i++) {
			stars_fade[i].innerHTML = conversion(stars_fade[i].innerHTML,false);
		}
		
		var stars_half = document.getElementsByClassName('ss-star_half');
		for (i=0; i<stars_half.length; i++) {
			stars_half[i].innerHTML = conversion(stars_half[i].innerHTML,true);
		}
		
	}
};