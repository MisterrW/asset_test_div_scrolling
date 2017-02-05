var app = function(){
	console.log('working');
	var view = document.querySelector('#view');
	console.log(view.scrollLeft, view.scrollTop);
	view.scrollLeft = 200;
	var content = document.querySelector("#content");
	console.log(content.scrollWidth);
	var hideDialogue = function(){
		console.log("called ok")
	};
	hideDialogue();
	var button = document.createElement('button');
	var body = document.querySelector('body');
	
	var inputButton = document.createElement("input");
	inputButton.value = 700;
	body.appendChild(inputButton);
	body.appendChild(button);
	button.innerText = "clickMe";
	button.onclick = function(){
		var view = document.querySelector('#view');
		var inputDestination = inputButton.value;
		var view = document.querySelector('#view');
		
		var stop = function(){
			console.log("stopped ok");
		};

		var dialogue = function(){
			console.log("here;")
			var view = document.querySelector('#view');
			console.log(view.scrollLeft);

			if(view.scrollLeft >= 680 && view.scrollLeft <= 720){
				console.log("wtf");
				var conv1 = setTimeout(function(){
					var dia1 = document.querySelector("#player1dia");
					dia1.style.display = "block";
					dia1.innerText = "wtf";
				}, 1000);
				var con2 = setTimeout(function(){
					var dia1 = document.querySelector("#player1dia");
					dia1.style.display = "none";
					var dia2 = document.querySelector("#player2dia");
					dia2.style.display = "block";
					dia2.innerText = "hello";
				}, 2000);
				var con3 = setTimeout(function(){
					var dia2 = document.querySelector("#player2dia");
					dia2.style.display = "none";
					var dia1 = document.querySelector("#player1dia");
					dia1.style.display = "block";
					dia1.innerText = "who r u";
				}, 3000);
				var con4 = setTimeout(function(){
					var dia1 = document.querySelector("#player1dia");
					dia1.style.display = "none";
					var dia2 = document.querySelector("#player2dia");
					dia2.style.display = "block";
					dia2.innerText = "i happy man";
				}, 4000);
				var bye = setTimeout(function(){
					var dia2 = document.querySelector("#player2dia");
					dia2.style.display = "none";
					scrollMaster(0, stop);
				}, 5000);

				console.log(view.scrollLeft);
			} else {
					// view.scrollLeft = 0;
					console.log(view.scrollLeft);
				}
			}

			var exampleInfo = function(){
				var divvy = document.createElement('div');
				divvy.innerHTML = "<p>I am some fascinating facts</p>";
				var container = document.querySelector("#container");
				container.appendChild(divvy);
				divvy.className = "fact-box";
			}

			var move = function(destination, event){
				var scroller = function(destination){
				
				var view = document.querySelector('#view');	
				console.log(view.scrollLeft);

				if (view.scrollLeft <= destination){
					var y = view.scrollLeft;
					view.scrollLeft = y+5;

					if(view.scrollLeft >= destination){
						event();
						clearInterval(smoothScroll);
					} 
				} else if (view.scrollLeft >= destination){
					var y = view.scrollLeft;
					view.scrollLeft = y-5;

					if(view.scrollLeft <= destination){
						event();
						clearInterval(smoothScroll);
					}
				}
			}
			
			var smoothScroll = setInterval(function(){scroller(destination)}, 20);
			console.log(view.scrollLeft);
		};

		var scrollMaster = function(destination, event){
			move(destination, event);
			console.log("back");
		}
		// scrollMaster(inputDestination, dialogue);
		scrollMaster(400, exampleInfo);
	}
}
window.onload = app;