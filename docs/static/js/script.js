

$(document).ready(function(){ 
    $("a.extern").attr({title:"Wird in neuem Fenster geöffnet"}).click(function(){
	var ziel = $(this).attr("href");
	var offen = $("a.open");
	var fenster;

	if(offen.hasClass("extern")){
	    fenster = offen.data("fenster");
	    fenster.close();
	    offen.removeClass("open").removeData();
	}
	fenster = window.open(ziel);
	$(this).addClass("open").data("fenster", fenster);	    
	return false;
    });



    /* Bilder ein- und ausblenden */
    $("div.hidden a.close").click(function(){
	$(this).parent("div").css({"left":"0"});
	return false;
    });

    // Rechts                                                                                                                                                                                                                                
    $("ul#vorschau img").click(function(){
	var box = "div#bild-" + $(this).parent("li").attr("id").split("-")[1];
	$(box).css({"left":"4000px"});
        $("html, body").animate({scrollTop:0}, 200);
	return false;
    });

    // Text                                                                                                                                                                                                                                  
    $("img.galerie").click(function(){
        var box = "div#bild-" + $(this).attr("id").split("-")[1];
        $(box).css({"left":"4000px"});
        $("html, body").animate({scrollTop:0}, 200);
        return false;
    });


    // Bilder-Galerie                                                                                                                                                                                                     
    $("div#galerie div img").click(function(){
        var box = "div#bild-" + $(this).attr("id").split("-")[1];
        $(box).css({"left":"4000px"});
        $("html, body").animate({scrollTop:0}, 200);
        return false;
    });





    /* Galerie-Modus */
    $("div.hidden").on("click", "a.prev", function(){
	$(this).parents("div.hidden").animate({left:"-=1000"}, 200, function(){
	    $(this).css({"left":"0"});
        });
	var prev = $(this).parents("div.hidden").prev("div.hidden").attr("id");
	if ( prev == undefined ) {
            prev = $(this).parents("div.hidden").siblings("div").last().attr("id");
        }
        $("div#" + prev).css({"left":"6000px"}).animate({left:"-=2000"}, 400);
	return false;
    });

    $("div.hidden").on("click", "a.next", function(){
        $(this).parents("div.hidden").animate({left:"+=1000"}, 200, function(){
            $(this).css({"left":"0"});
        });
        var prev = $(this).parents("div.hidden").next("div.hidden").attr("id");
	if ( prev == undefined ) {
            prev = $(this).parents("div.hidden").siblings("div").first().attr("id");
        }
        $("div#" + prev).css({"left":"2000px"}).animate({left:"+=2000"}, 400);
	return false;
    });

    $("div.hidden").on("click", "img", function(){
        $(this).parents("div.hidden").animate({left:"+=1000"}, 200, function(){
            $(this).css({"left":"0"});
        });
	var prev = $(this).parents("div.hidden").next("div.hidden").attr("id");
	if ( prev == undefined ) {
            prev = $(this).parents("div.hidden").siblings("div").first().attr("id");
	}
        $("div#" + prev).css({"left":"2000px"}).animate({left:"+=2000"}, 400);
        return false;
    });




    /* Bearbeiten Menü */
    $("ul#spezial").mouseenter(function(){
        $(this).attr("style", "left:0px;");
        return false;
    }).click(function(){
        $(this).removeAttr("style");
    });

   $("div#navigation ul li").click(function(){
       var ziel = $(this).children("a").attr("href");
       if (ziel != undefined) {window.location.assign(ziel)};
       return false;
    });

});

$(window).load(function(){ 
    var inhalt = $("div#inhalt").height();
    var top = $("div#inhalt").position();
    //var rubri = $("ul#menueblock-0").position();
    //alert(rubri.top);

    //var hoehe = inhalt + top.top + rubri.top - 120
    var hoehe = inhalt + top.top + 280

    $("body").height(hoehe);
    $("div#tidy").css("top", hoehe - 30 + "px" );


});

