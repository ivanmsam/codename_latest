
		var seed = document.getElementById('seed').value;

		var cardColours = [];

		function setWords() {
			document.getElementById('seedButton').value = 'Reset';
			seed = document.getElementById('seed').value;	
			var words = ["House", "Chair", "Tomato", "Mouse", "Hard Drive", "Book", "Phone", "Eggs", "Shoes", "Computers", "Plant", "Picture", "Bowl", "Frame", "Car", "Carpet", "Table", "Movie", "Television", "Playground", "Space", "Stars", "Time Travel", "Planets", "Toilet", "Washing", "Clothes"];

			var currentIndex = words.length, temporaryValue, randomIndex;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {

				// Pick a remaining element...
			    randomIndex = Math.floor(random() * currentIndex);
			    currentIndex -= 1;

			    // And swap it with the current element.
			    temporaryValue = words[currentIndex];
			    words[currentIndex] = words[randomIndex];
			    words[randomIndex] = temporaryValue;
		  	}

			for (i = 0; i < 25; i++) {
				block = "block" + i;
				word = words.pop()
				document.getElementById(block).innerHTML = word;			
			}
		}
		
		function randomiseCardColours(array) {
			seed = document.getElementById('seed').value;
			
			array = ["CodeNameCardDesign.jpg", "#ffb4b4", "#ffb4b4", "#ffb4b4", "#ffb4b4", "#ffb4b4", "#ffb4b4", "#ffb4b4", "#ffb4b4", "#dcffdc", "#dcffdc", "#dcffdc", "#dcffdc", "#dcffdc", "#dcffdc", "#dcffdc", "#dcffdc", "#ffff87", "#ffff87", "#ffff87", "#ffff87", "#ffff87", "#ffff87", "#ffff87", "black"];			

			var currentIndex = array.length, temporaryValue, randomIndex;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {

				// Pick a remaining element...
			    randomIndex = Math.floor(random() * currentIndex);
			    currentIndex -= 1;

			    // And swap it with the current element.
			    temporaryValue = array[currentIndex];
			    array[currentIndex] = array[randomIndex];
			    array[randomIndex] = temporaryValue;
		  	}

			cardColours = array;  	
		}	

		function changeBlock(block,array,blockNumber) {
			for (i = 0; i < 25; i++) {
				resetBlock = "block" + i;
				document.getElementById(resetBlock).style.fontSize = '1em';
			}		
			if (block.style.background == "#ffb4b4" || block.style.background == "green" || block.style.background == "yellow" || block.style.background == "black") {
			} 	else {

				cardColour = array[blockNumber]
				block.style.background = cardColour;		
				block.style.fontSize = '1.8em';
				opac = 0.1;
				block.style.opacity = opac;
				var id = setInterval(fade,100);
				function fade() {
				if (block.style.opacity == 1.0) {
					clearInterval(id);
				} 	else {
					opac = opac + 0.1;
					block.style.opacity = opac;
					}
				}
			}

		}

		function showAnswers(array) {
			for (i = 0; i < 25; i++) {
				block = "block" + i;
				cardColour = array[i];
				if (cardColour == "black") {
					document.getElementById(block).style.color = 'white'
				}
				document.getElementById(block).style.background = cardColour;
				document.getElementById(block).style.fontSize = '1em';
			}
		}

		function setColourToGray() {
			console.log('hi');
			for (i = 0; i < 25; i++) {
				block = "block" + i;
				cardColour = '#f2f2f2';
				document.getElementById(block).style.background = cardColour;
				document.getElementById(block).style.fontSize = '1em';
			}
		}		

		function random() {

		    var x = Math.sin(seed++) * 10000;
		    return x - Math.floor(x);
		}
