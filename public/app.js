var app = function(){
	console.log('working');
	var view = document.querySelector('#view');
	console.log(view.scrollLeft, view.scrollTop);
	view.scrollLeft = 200;
	var content = document.querySelector("#content");
	console.log(content.scrollWidth);
	var hideDialogue = function(){
		console.log("called ok")
		// var dia1 = document.querySelector("#player1dia");
		// console.log(dia1.innerText);
		// var dia2 = document.querySelector("#player2dia");
		// dia1.style.visibility = "hidden;"
		// dia2.style.display = "none;"
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
		var destination2 = inputButton.value;
			var view = document.querySelector('#view');
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
					destination2 = 0;
					var bye = setTimeout(function(){
						var dia2 = document.querySelector("#player2dia");
						dia2.style.display = "none";
						move()
					}, 5000);

					console.log(view.scrollLeft);
				} else {
					view.scrollLeft = 0;
					console.log(view.scrollLeft);
				}

			}

			var move = function(destination){
			var scroller = function(destination){
				// console.log("in the view scroll function");
				
				var view = document.querySelector('#view');	
				console.log(view.scrollLeft);

				if (view.scrollLeft <= destination){
					var y = view.scrollLeft;
					view.scrollLeft = y+5;
			
					if(view.scrollLeft >= destination){
						dialogue();
						clearInterval(smoothScroll);
					} 
				} else if (view.scrollLeft >= destination){
					var y = view.scrollLeft;
					view.scrollLeft = y-5;
	
					if(view.scrollLeft <= destination){
						dialogue();
						clearInterval(smoothScroll);
					}

				}
			}
			
			var smoothScroll = setInterval(function(){scroller(destination2)}, 20);
			console.log(view.scrollLeft);
		};
		move(destination2);
		// }
	}
}
window.onload = app;