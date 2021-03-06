(function() {
  
  var $;
  $ = jQuery;
  
  //what is this doing?
  $.fn.stratus = function(settings) {
    return $.stratus(settings);
  };
  
  $.stratus = function(settings) {
    var root_url, src;
    
	//if in dev mode, load example.com
	root_url = settings.env === 'development' ? 'http://example.com:3000' : 'player';
    
	//add the stratus css to the header
	$('head').append("<link rel='stylesheet' href='" + root_url + "/stratus.css' type='text/css'/>");
	
	//these 4 lines are adding styling info to the html
    if (settings.align === 'top') {
      $('head').append("<style>#stratus{ top: 0; }</style>");
    }
    if (settings.position === 'absolute') {
      $('head').append("<style>#stratus{ position: absolute; }</style>");
    }
    if (settings.offset) {
      $('head').append("<style>#stratus{ " + settings.align + ": " + settings.offset + "px !important; }</style>");
    }
	
	//add the stratus iframe to the page
    //$('body').append("<div id='stratus'><iframe allowtransparency='true' frameborder='0' scrolling='0'></div>");
	
	
	//$('body').append("player/player.html");

	$.get("player/player.html", function(data){
   		$(this).children("#strats").html(data);
	});
	
	//prepare the query which will be postMessage'd to stratus.sc
	// src = root_url + 'player?' + serialized settings + current location 
    //src = root_url + '/player?' + $.param(settings, true) + '&link=' + encodeURIComponent(document.location.href);
	
	//set the src of the stratus iframe to the above value
    /*
	$('#stratus iframe').attr({
      src: src
    });
	*/
	
	//loads into the iframe the player's css file and makes it visible
    /*
	$('#stratus iframe').load(function() {
      return $(this).css({
        visibility: 'visible'
      });
    });
    */
	
	//display stratus
	$('#stratus').show();
    
  };
  
}).call(this); //define the function and immediatelly call itself 
