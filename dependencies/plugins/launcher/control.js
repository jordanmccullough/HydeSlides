(function(){
	var control = {},
			parentEvent,
			btnRight,
			btnLeft,
			btnUp,
			btnDown;

	control.parseMessage = function(event){
		parentEvent = event;

		var parsedData = JSON.parse(parentEvent.data),
				tocItem,
				activeItem,
				chapterTitle,
				chapterLink,
				chapterItem,
				toc;

		//Update the TOC highlighting
		if(parsedData.slide){
			//Workaround for RevealJS hash-shortening for first slide
			if(parsedData.slide.match('^/[0-9]$')){
				parsedData.slide = parsedData.slide + "/0";
			}
			tocItem = document.getElementById(parsedData.slide);
			activeItem = document.getElementsByClassName("active");
			if(activeItem[0]){
				activeItem[0].className = "";
			}
			tocItem.className = "active";
		}

		if(parsedData.chapters){
			toc = document.getElementById("toc");

			//Clear the Table of Contents if window is re-launched/refreshed
			toc.innerHTML = "";

			for(var i=0;i<parsedData.chapters.length;i++){
				var slideSet = document.createElement("ul");
				var slideHeader = document.createElement("h1");
				chapterTitle = document.createTextNode(parsedData.chapters[i].title);
				chapterItem = document.createElement("li");
				slideHeader.appendChild(chapterTitle);
				chapterItem.appendChild(slideHeader);
				toc.appendChild(chapterItem);

				if(parsedData.chapters[i].slides){
					for(var u=0;u<parsedData.chapters[i].slides.length;u++){
						
						var slideTitle = document.createTextNode(parsedData.chapters[i].slides[u].title);
						var slideLink = document.createElement("a");
						var slideItem = document.createElement("li");

						slideLink.setAttribute("href", "#/"+parsedData.chapters[i].slides[u].index);
						slideLink.setAttribute("id", parsedData.chapters[i].slides[u].index);
						slideLink.setAttribute("rel", parsedData.chapters[i].slides[u].index);
						slideLink.setAttribute("class", "toc-slide");
						slideLink.appendChild(slideTitle);
						slideItem.appendChild(slideLink);
						slideSet.appendChild(slideItem);
						chapterItem.appendChild(slideSet);
					}
				}
			}

			var a, allToc = document.getElementsByClassName("toc-slide");
			for(a in allToc){
				allToc[a].addEventListener("click", control.jumpToSlide, false);
			}
		}
	};

	control.sendMessage = function(data){
		parentEvent.source.postMessage(JSON.stringify(data), parentEvent.origin);
	};

	control.jumpToSlide = function(event){
		control.sendMessage({slide: this.rel});
	};

	control.clickDirection = function(event, direction){
		if(direction){
			control.sendMessage({direction: direction});
		}
		else{
			control.sendMessage({direction: event.target.id});
		}
	};

	control.keyDown = function(event){
		switch( event.keyCode ) {
			//Right
			case 39:
				control.clickDirection(event, "right");
				break;
			//Down
			case 40:
				control.clickDirection(event, "down");
				break;
			//Left
			case 37:
				control.clickDirection(event, "left");
				break;
			//Up
			case 38:
				control.clickDirection(event, "up");
				break;
		}
	};


	//Controls Binding
	btnRight = document.getElementById("right");
	btnLeft = document.getElementById("left");
	btnUp = document.getElementById("up");
	btnDown= document.getElementById("down");

	btnRight.addEventListener("click", control.clickDirection, false);
	btnLeft.addEventListener("click", control.clickDirection, false);
	btnUp.addEventListener("click", control.clickDirection, false);
	btnDown.addEventListener("click", control.clickDirection, false);

	//Warning! IE-unfriendly binding!
	window.addEventListener("message", control.parseMessage);
	document.addEventListener("keydown", control.keyDown, false);
})();