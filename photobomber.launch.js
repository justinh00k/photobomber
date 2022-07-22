  // Initialization
  
  var useflickr = true;
  
  var roundnum = -1;
  greenlight = 0;

  var bombs = 5;
  count = mcount = mocount = pcount = bcount = 0;
  var anum = 0;
  var allhashtags = new Object();
  var preloadarray = new Array();
  var shuffle = true;
  var preload1 = new Image();
  preload1.src = "explosion.png?2";
  var preload2 = new Image();
  preload2.src = "shuffleoff.gif?1";
  var isnewgame = true;
  var skiplight = 1;
  var cnum = 0;
  var drops = new Array();
  allanswers = movies.concat(books, music, phrases);
  answerkey = Array.apply(null, Array(allanswers.length)).map(Number.prototype.valueOf, 0);
  
 

  $(".bombclass").draggable({
  	revert: true
  });

  $("input").keyup(
  	function() {
  		setTransparency();
  	});

  newround();

  function newround() {

  	roundnum++;
  	greenlight = 0;
  	anum = 0;
  	metricValue = 0;
  	nextround = 0;
  	highlight = 1;
	
	  if (useflickr)
 { maxresults = 15; flickrapi = true; }
  else
 { maxresults = 10; flickrapi = false; }
   counter = counter0 = counter1 = counter2 = Math.floor(Math.random() * maxresults);

  	xstring = "";

  	if (shuffle == true) {
  		answers = allanswers;

  	} else {

  		if (selectedcat == "movies")
  			answers = movies;
  		if (selectedcat == "books") {
  			answers = books;
  			anum = movies.length;
  		}
  		if (selectedcat == "music") {
  			answers = music;
  			anum = movies.length + books.length;
  		}
  		if (selectedcat == "phrases") {
  			answers = phrases;
  			anum = music.length + books.length + movies.length;
  		}

  	}

  	qnum = Math.floor(Math.random() * answers.length);
  	anum += qnum;

  	while (answerkey[anum] == 1) {
  		qnum = Math.floor(Math.random() * answers.length);
  		anum = qnum;
  		if (shuffle == false) {
  			if (selectedcat == "books")
  				anum += movies.length;

  			if (selectedcat == "music")
  				anum += movies.length + books.length;

  			if (selectedcat == "phrases")
  				anum += music.length + books.length + movies.length;
  		}
  	}

  	answerkey[anum] = 1;

  	if (shuffle == true) {
  		if (qnum < movies.length) {
  			$("#catname").html("Movies");
  			selectedcat = "movies";
  		}
  		if ((qnum > movies.length - 1) && (qnum < (movies.length + books.length))) {
  			$("#catname").html("Books");
  			selectedcat = "books";
  		}
  		if ((qnum > movies.length + books.length - 1) && (qnum < (movies.length + books.length + music.length))) {
  			$("#catname").html("Music");
  			selectedcat = "music";
  		}
  		if ((qnum > movies.length + books.length + music.length - 1)) {
  			$("#catname").html("Phrases");
  			selectedcat = "phrases";
  		}

  		$("li").show();
  		$("#c" + selectedcat).hide();

  	}

  	count++;
  	if (selectedcat == "books")
  		{ bcount++; cnum = 2; }
  	if (selectedcat == "music")
  		{ mcount++; cnum = 3; }
  	if (selectedcat == "phrases")
  		{ pcount++; cnum = 4; }
  		if (selectedcat == "movies")
  			{ mocount++; cnum = 1; }

  	if (mocount == movies.length) {
  		for (i = 0; i < movies.length; i++) {
  			answerkey[i] = 0;
  		};
  	}

  	if (bcount == books.length) {
  		for (i = 0; i < books.length; i++) {
  			answerkey[movies.length + i] = 0;
  		};
  	}

  	if (mcount == music.length) {
  		for (i = 0; i < music.length; i++) {
  			answerkey[movies.length + books.length + i] = 0;
  		};
  	}

  	if (pcount == phrases.length) {
  		for (i = 0; i < phrases.length; i++) {
  			answerkey[movies.length + books.length + music.length + i] = 0;
  		};
  	}


  	for (i = 1; i < answers[qnum].length; i++) {
  		xstring += answers[qnum][i];
  		if ((i + 1) < answers[qnum].length)
  			xstring += "|";
  	}
  	var re = new RegExp('(' + xstring + ')');
  	var fulltext = answers[qnum][0].split(re);

  	var allofit =
  		'<img src="whiteline.gif" width="1" height="310" id="line" />' + fulltext[0] + '<div class="resultwrap"><input type="text" id="resulttext0" value="" tabindex="1" /><div class="resultdiv" id="resultdiv0"><img id="results0" width="200" /></div><div id="photoby0" style="display: none;"></div></div>';
  	if (answers[qnum].length > 2) {
  		allofit += fulltext[2] + '<div class="resultwrap"><input type="text" id="resulttext1" tabindex="2" value="" /><div class="resultdiv" id="resultdiv1"><img id="results1" width="200" /></div><div id="photoby1" style="display: none;"></div></div>'
  	}
  	if (answers[qnum].length > 3) {
  		allofit += fulltext[4] + '<div class="resultwrap"><input type="text" id="resulttext2" tabindex="3" value="" /><div class="resultdiv" id="resultdiv2"><img id="results2" width="200" /></div><div id="photoby2" style="display: none;"></div></div>'
  	}

  	if (fulltext[fulltext.length - 1] != answers[qnum][answers[qnum].length - 1])
  		allofit += fulltext[fulltext.length - 1];

  	document.getElementById("clue").innerHTML = allofit;

  	for (i = 1; i < answers[qnum].length; i++) {
  		fetch(answers[qnum][i], (i - 1));
  	}

  	$("#results0").droppable({
  		hoverClass: "highlight",
  		drop: function(event, ui) {

			drops.push(ui.draggable.attr("id")); 
			$("#photoby0").hide("fade",600);
  			$(this).hide("fade", 600, function() {
  				fetch(answers[qnum][1], 0);

  			});
  			ui.draggable.draggable('option', 'revert', false);

  			ui.draggable.hide("explode", function() {
  				ui.draggable.css("visibility", "hidden");
  				ui.draggable.show();
  				ui.draggable.css("left", "0");
  				ui.draggable.css("top", "0");

  				bombs--;
  				if (bombs == 0)
  					$("#skipdiv").html("Give up");

  			});
  		}
  	});

  	$("#results1").droppable({
  		hoverClass: "highlight",
  		drop: function(event, ui) {
  					drops.push(ui.draggable.attr("id"));

			$("#photoby1").hide("fade",600);
  			$(this).hide("fade", 600, function() {
  				fetch(answers[qnum][2], 1);

  			});
  			ui.draggable.draggable('option', 'revert', false);

  			ui.draggable.hide("explode", function() {
  				ui.draggable.css("visibility", "hidden");
  				ui.draggable.show();
  				ui.draggable.css("left", "0");
  				ui.draggable.css("top", "0");

  				bombs--;
  				if (bombs == 0)
  					$("#skipdiv").html("Give up");

  			});
  		}
  	});

  	$("#results2").droppable({
  		hoverClass: "highlight",
  		drop: function(event, ui) {
  					drops.push(ui.draggable.attr("id"));
			$("#photoby2").hide("fade",600);


  			$(this).hide("fade", 600, function() {
  				fetch(answers[qnum][3], 2);

  			});
  			ui.draggable.draggable('option', 'revert', false);

  			ui.draggable.hide("explode", function() {
  				ui.draggable.css("visibility", "hidden");
  				ui.draggable.show();
  				ui.draggable.css("left", "0");
  				ui.draggable.css("top", "0");

  				bombs--;
  				if (bombs == 0)
  					$("#skipdiv").html("Give up");

  			});
  		}
  	});

  	$("#resulttext0").focus(function() {
  		$("#resultdiv0").css("opacity", ".5");
  	});

  	$("#resulttext1").focus(function() {
  		$("#resultdiv1").css("opacity", ".5");
  	});

  	$("#resulttext2").focus(function() {
  		$("#resultdiv2").css("opacity", ".5");
  	});

  	$("#resulttext0,#resulttext1,#resulttext2").focusout(function() {
  		setTransparency();
  	});

  	$('input').bind('input propertychange', function() {

  		greenlight = 0;

  		if (answers[qnum].length == 2) {
  			var ilength = $("#resulttext0").val();
  			if (ilength.length > 0)
  				greenlight = 1;
  		}

  		if (answers[qnum].length == 3) {
  			var ilength = $("#resulttext0").val();
  			var i2length = $("#resulttext1").val();

  			if ((ilength.length > 0) && (i2length.length > 0))
  				greenlight = 1;

  		}

  		if (answers[qnum].length == 4) {
  			var ilength = $("#resulttext0").val();
  			var i2length = $("#resulttext1").val();
  			var i3length = $("#resulttext2").val();

  			if ((ilength.length > 0) && (i2length.length > 0) && (i3length.length > 0))
  				greenlight = 1;

  		}

  		if (greenlight == 1)
  			guess();

  	});

  	
  	$("#results0,#results1,#results2").hide();
  	$("#clue").show();
  	
  	if (drops.length>0)
  	{
  	/*
  	bombs = bombs + drops.length;
  	 for (i = 0; i<drops.length; i++)
  	{
  	
  	$(drops[i]).css("visibility", "visible");
  	$(drops[i]).draggable({revert: true});
  	$(drops[i]).show("explode");
  	}
  	*/
console.log(drops);
  	  	drops = new Array();
  	
  	}
  	
  	
  	
  	setTimeout(function(){
	  	skiplight = 1; 
	  			},1200);

  }

  function fetch(hashtag, num) {

  	if (num == 0) {
  		counter0++;
  		if (counter0 == maxresults)
  			counter0 = 0;
  		counter = counter0;
  	}
  	if (num == 1) {
  		counter1++;
  		if (counter1 == maxresults)
  			counter1 = 0;
  		counter = counter1;
  	}
  	if (num == 2) {
  		counter2++;
  		if (counter2 == maxresults)
  			counter2 = 0;
  		counter = counter2;
  	}

  	/*  console.log("c0: "+counter0+" c1: "+counter1+" c2: "+counter2); */

  	var counterp = counter + 1;
  	if (counterp == maxresults)
  		counterp = 0;
  		
  	preloadarray[num] = new Image();

  	if (!(hashtag in allhashtags)) {

  		var searchterm = encodeURIComponent(hashtag);
  		
  		if (flickrapi)
  		var tagurl = "fcache/"+searchterm+".json";
  		else
  		var tagurl = "gcache/"+searchterm+".json";
  		

  		$.getJSON(tagurl, function(data) {
			
		if (flickrapi){
			allhashtags[hashtag] = data["photos"]["photo"];
			
			var flickr = allhashtags[hashtag][counter];

  		var flurl = 'https://farm' + flickr["farm"] + '.staticflickr.com/' + flickr["server"] + '/' + flickr["id"] + '_' + flickr["secret"] + '_c.jpg';
  		$("#photoby"+num).html('by <a class="photobya" target="_blank" href="https://www.flickr.com/people/' + flickr["owner"] + '">' + flickr["ownername"] + '</a>');
  		var flickr2 = allhashtags[hashtag][counterp];
  		preloadarray[num].src = 'https://farm' + flickr2["farm"] + '.staticflickr.com/' + flickr2["server"] + '/' + flickr2["id"] + '_' + flickr2["secret"] + '_c.jpg';

  			}
  			else
  			{
  			
  			allhashtags[hashtag] = data;
  			var flurl = allhashtags[hashtag][counter];
  			preloadarray[num].src = allhashtags[hashtag][counterp];
  			
}

$("#results" + num).on("load", function() {
  			$("#photoby" + num).show("fade",1200);
  			$("#results" + num).show("fade", 1200, function(){
  			$("#photoby" + num).show("fade",1200);
  			if ((num==0)&&(highlight==1))
			{ 
			$("#resulttext0").focus();
			highlight = 0;
			}
			
			
  			
  			
  			});
  		}).attr("src", flurl);

  	});
  	
  	
  		 
  	} else {
  	
  		if (flickrapi){
  		var flickr = allhashtags[hashtag][counter];
  		var flurl = 'https://farm' + flickr["farm"] + '.staticflickr.com/' + flickr["server"] + '/' + flickr["id"] + '_' + flickr["secret"] + '_c.jpg';
  		$("#photoby"+num).html('by <a class="photobya" target="_blank" href="https://www.flickr.com/people/' + flickr["owner"] + '">' + flickr["ownername"] + '</a>');
  		var flickr2 = allhashtags[hashtag][counterp];
  		preloadarray[num].src = 'https://farm' + flickr2["farm"] + '.staticflickr.com/' + flickr2["server"] + '/' + flickr2["id"] + '_' + flickr2["secret"] + '_c.jpg';
  		}
  		else
  		{
  		var flurl = allhashtags[hashtag][counter];
  		preloadarray[num].src = allhashtags[hashtag][counterp];
  		
  		}
  		
  		
  		$("#results" + num).on("load", function() {
  			
  			$("#photoby" + num).show("fade",1200);
  			$("#results" + num).show("fade", 1200,function(){
  			
			if ((num==0)&&(highlight==1))
			{ 
			$("#resulttext0").focus();
			highlight = 0;
			}


});
  		}).attr("src", flurl);
  		

  	}

  };

  function setTransparency() {

  	if (document.getElementById("resulttext0").value.length > 0)
  		document.getElementById("resultdiv0").style.opacity = "0.5";
  	else
  	if (!$("#resulttext0").is(":focus"))
  		document.getElementById("resultdiv0").style.opacity = "1";

  	if (answers[qnum].length > 2) {

  		if (document.getElementById("resulttext1").value.length > 0)
  			document.getElementById("resultdiv1").style.opacity = "0.5";
  		else {
  			if (!$("#resulttext1").is(":focus"))
  				document.getElementById("resultdiv1").style.opacity = "1";
  		}
  	}

  	if (answers[qnum].length > 3) {

  		if (document.getElementById("resulttext2").value.length > 0)
  			document.getElementById("resultdiv2").style.opacity = "0.5";
  		else {
  			if (!$("#resulttext2").is(":focus"))
  				document.getElementById("resultdiv2").style.opacity = "1";
  		}
  	}

  }

  function guess() {

  	if (greenlight == 0)
  		return;

  	greenlight =  0;

  	if (answers[qnum].length == 2) {
  		if (document.getElementById("resulttext0").value.toLowerCase() == answers[qnum][1])
  			youwin();

  	}

  	if (answers[qnum].length == 3) {
  		if ((document.getElementById("resulttext0").value.toLowerCase() == answers[qnum][1]) && (document.getElementById("resulttext1").value.toLowerCase() == answers[qnum][2]))
  			youwin();

  	}

  	if (answers[qnum].length == 4) {
  		if ((document.getElementById("resulttext0").value.toLowerCase() == answers[qnum][1]) && (document.getElementById("resulttext1").value.toLowerCase() == answers[qnum][2]) && (document.getElementById("resulttext2").value.toLowerCase() == answers[qnum][3]))
  			youwin();

  	}

  }

  function loseapoint() {

  	bombs--;
  	if (bombs == 0)
  		$("#skipdiv").html("Give up");

  	if ($("#bomb5").css("visibility") != "hidden") {
  		$("#bomb5").hide("explode", function() {
  			$("#bomb5").css("visibility", "hidden");
  			$("#bomb5").css("display", "inline-block");
  		});
  	} else {
  		if ($("#bomb4").css("visibility") != "hidden") {
  			$("#bomb4").hide("explode", function() {
  				$("#bomb4").css("visibility", "hidden");
  				$("#bomb4").css("display", "inline-block");
  			});

  		} else {
  			if ($("#bomb3").css("visibility") != "hidden") {
  				$("#bomb3").hide("explode", function() {
  					$("#bomb3").css("visibility", "hidden");
  					$("#bomb3").css("display", "inline-block");
  				});

  			} else {
  				if ($("#bomb2").css("visibility") != "hidden") {
  					$("#bomb2").hide("explode", function() {
  						$("#bomb2").css("visibility", "hidden");
  						$("#bomb2").css("display", "inline-block");
  					});

  				} else {
  					if ($("#bomb1").css("visibility") != "hidden") {
  						$("#bomb1").hide("explode", function() {
  							$("#bomb1").css("visibility", "hidden");
  							$("#bomb1").css("display", "inline-block");
  						});

  					} else
  						youlose();

  				}
  			}
  		}
  	}
  }

  function youwin() {

  	$(".num").html(roundnum + 1);
  	$("#catinfo").hide();
  	$("#correct").show();
  
  	$("#clue").hide("fade", 600, function(){
  	$("#photoby0,#photoby1,#photoby2").hide();
  	$("#points").show("fade", 600, function() {
  		$("#points").hide("fade", 1200, function(){
		  	$("#correct").hide();
		  	$("#catinfo").show(); 
		  	newround();
		  	
		  	
  			});
  		});
  	});
  	
  	
  	

  	 ga('send', 'event', 'next question', 'correct', answers[qnum][0]);


  }

  function youlose() {

  	greenlight = 0;
  	$("#catinfo").hide();
  	$("#gameover").show();

  	$("#resulttext0").val(answers[qnum][1]);
  	$("#resulttext0").prop('disabled', true);
  	document.getElementById("resultdiv0").style.opacity = "0.5";
  	if (answers[qnum].length > 2) {
  		$("#resulttext1").val(answers[qnum][2]);
  		$("#resulttext1").prop('disabled', true);
  		document.getElementById("resultdiv1").style.opacity = "0.5";
  	}
  	if (answers[qnum].length > 3) {
  		$("#resulttext2").val(answers[qnum][3]);
  		$("#resulttext2").prop('disabled', true);
  		document.getElementById("resultdiv2").style.opacity = "0.5";
  	}

  	isnewgame = true;
  	$("#skipdiv").html("New Game");
  	$("#skip").show("fade", 1200);

  }

  function newgame() {

  	roundnum = -1;
  	bombs = 5;
  	$("#skip").hide("fade", 600, function() {
  		$("#skipdiv").html("Skip");
  	});
  	
  	$("#bombwrapper").hide("fade", 600);

  	$("#clue").hide("fade", 600, function() {
  		
  		$("#gameover").hide();
  		  	$("#photoby0,#photoby1,#photoby2").hide();

  		$("#catinfo").show();

  		$(".bombclass").show();
  		$(".bombclass").css("visibility", "visible");
  		$(".bombclass").draggable({
  			revert: true
  		});

  		$(".num").html("0");

  		$("#bombwrapper").show("fade", 1200);
  		$("#skip").show("fade", 1200);

  		newround();

  	});

  }

  function skip() {
  
  if (nextround == 1)
  {$("#clue").hide("fade", 600, function() {
    	$("#photoby0,#photoby1,#photoby2").hide();
  		nextround = 0;

if (bombs==0)
$("#skipdiv").html("Give up");
else
$("#skipdiv").html("Skip");
  		newround();
  	});
  	return;
  	}
  	

  	if (isnewgame == true) {
  		isnewgame = false;
  		$("#instructions").hide("fade",600);
  		newgame();
  		return;
  	}
  	
  	if (skiplight == 0)
  	return;
  	
  	
  	 ga('send', 'event', 'next question', 'skip', answers[qnum][0]);
  	
  	skiplight = 0;
  	
  	$("#resulttext0").val(answers[qnum][1]);
  	$("#resulttext0").prop('disabled', true);
  	document.getElementById("resultdiv0").style.opacity = "0.5";
  	if (answers[qnum].length > 2) {
  		$("#resulttext1").val(answers[qnum][2]);
  		$("#resulttext1").prop('disabled', true);
  		document.getElementById("resultdiv1").style.opacity = "0.5";
  	}
  	if (answers[qnum].length > 3) {
  		$("#resulttext2").val(answers[qnum][3]);
  		$("#resulttext2").prop('disabled', true);
  		document.getElementById("resultdiv2").style.opacity = "0.5";
  	}

  	if (bombs == 0) {

  		youlose();
  		return;
  	}
  	roundnum--;
  	loseapoint();
  	
  	$("#skipdiv").html("Next Round");
  	nextround = 1;
  	
  	

  }

  function onshuffle() {

  	if (shuffle == true) {
  		$("#shuffleicon").attr("src", "shuffleoff.gif?1");
  		shuffle = false;
  	} else {
  		$("#shuffleicon").attr("src", "shuffleon.gif?1");
  		shuffle = true;
  	}

  }

  function menuopen()

  {

  	$("#select").show("fade", function() {

  		$("li").click(function() {

  			selectedcat = $(this).attr("data-name");
  			$("#catname").html(selectedcat);

  			if (shuffle)
  				onshuffle();

  		});

  		$(document).click(function() {
  			$("#select").hide("fade", "100", function() {
  				$("li").show();
  				$("#c" + selectedcat).hide();
  				$(document).unbind("click");
  				$("li").unbind("click");
  			});
  		});

  	});

  }
  
  function fswitch()
  {
  
  if (useflickr)
  {
  useflickr = false;
  $("#switch").html("This site is now using the Google API, but is not endorsed or certified by Google.");
  
  }
  else
   {
  useflickr = true;
  $("#switch").html("This site is now using the Flickr API, but is not endorsed or certified by Flickr.");
  
  }
  
  
  
  }

  // First run

  $("#resulttext0").val(answers[qnum][1]);
  $("#resulttext0").prop('disabled', true);
  document.getElementById("resultdiv0").style.opacity = "0.5";
  if (answers[qnum].length > 2) {
  	$("#resulttext1").val(answers[qnum][2]);
  	$("#resulttext1").prop('disabled', true);
  	document.getElementById("resultdiv1").style.opacity = "0.5";
  }
  if (answers[qnum].length > 3) {
  	$("#resulttext2").val(answers[qnum][3]);
  	$("#resulttext2").prop('disabled', true);
  	document.getElementById("resultdiv2").style.opacity = "0.5";
  }

  $("#skip").show("fade", 1200);