
		var seed = document.getElementById('seed').value;

		var cardColours = [];

		function setWords() {
			document.getElementById('seedButton').value = 'Reset';
			seed = document.getElementById('seed').value;	
			var words = ["AFRICA","AGENT","AIR","ALIEN","ALPS","AMAZON","AMBULANCE","AMERICA","ANGEL","ANTARCTICA","APPLE","ARM","ATLANTIS","AUSTRALIA","AZTEC","BACK","BALL","BAND","BANK","BAR","BARK","BAT","BATTERY","BEACH","BEAR","BEAT","BED","BEIJING","BELL","BELT","BERLIN","BERMUDA","BERRY","BILL","BLOCK","BOARD","BOLT","BOMB","BOND","BOOM","BOOT","BOTTLE","BOW","BOX","BRIDGE","BRUSH","BUCK","BUFFALO","BUG","BUGLE","BUTTON","CALF","CANADA","CAP","CAPITAL","CAR","CARD","CARROT","CASINO","CAST","CAT","CELL","CENTAUR","CENTER","CHAIR","CHANGE","CHARGE","CHECK","CHEST","CHICK","CHINA","CHOCOLATE","CHURCH","CIRCLE","CLIFF","CLOAK","CLUB","CODE","COLD","COMIC","COMPOUND","CONCERT","CONDUCTOR","CONTRACT","COOK","COPPER","COTTON","COURT","COVER","CRANE","CRASH","CRICKET","CROSS","CROWN","CYCLE","CZECH","DANCE","DATE","DAY","DEATH","DECK","DEGREE","DIAMOND","DICE","DINOSAUR","DISEASE","DOCTOR","DOG","DRAFT","DRAGON","DRESS","DRILL","DROP","DUCK","DWARF","EAGLE","EGYPT","EMBASSY","ENGINE","ENGLAND","EUROPE","EYE","FACE","FAIR","FALL","FAN","FENCE","FIELD","FIGHTER","FIGURE","FILE","FILM","FIRE","FISH","FLUTE","FLY","FOOT","FORCE","FOREST","FORK","FRANCE","GAME","GAS","GENIUS","GERMANY","GHOST","GIANT","GLASS","GLOVE","GOLD","GRACE","GRASS","GREECE","GREEN","GROUND","HAM","HAND","HAWK","HEAD","HEART","HELICOPTER","HIMALAYAS","HOLE","HOLLYWOOD","HONEY","HOOD","HOOK","HORN","HORSE","HORSESHOE","HOSPITAL","HOTEL","ICE","ICE CREAM","INDIA","IRON","IVORY","JACK","JAM","JET","JUPITER","KANGAROO","KETCHUP","KEY","KID","KING","KIWI","KNIFE","KNIGHT","LAB","LAP","LASER","LAWYER","LEAD","LEMON","LEPRECHAUN","LIFE","LIGHT","LIMOUSINE","LINE","LINK","LION","LITTER","LOCH NESS","LOCK","LOG","LONDON","LUCK","MAIL","MAMMOTH","MAPLE","MARBLE","MARCH","MASS","MATCH","MERCURY","MEXICO","MICROSCOPE","MILLIONAIRE","MINE","MINT","MISSILE","MODEL","MOLE","MOON","MOSCOW","MOUNT","MOUSE","MOUTH","MUG","NAIL","NEEDLE","NET","NEW YORK","NIGHT","NINJA","NOTE","NOVEL","NURSE","NUT","OCTOPUS","OIL","OLIVE","OLYMPUS","OPERA","ORANGE","ORGAN","PALM","PAN","PANTS","PAPER","PARACHUTE","PARK","PART","PASS","PASTE","PENGUIN","PHOENIX","PIANO","PIE","PILOT","PIN","PIPE","PIRATE","PISTOL","PIT","PITCH","PLANE","PLASTIC","PLATE","PLATYPUS","PLAY","PLOT","POINT","POISON","POLE","POLICE","POOL","PORT","POST","POUND","PRESS","PRINCESS","PUMPKIN","PUPIL","PYRAMID","QUEEN","RABBIT","RACKET","RAY","REVOLUTION","RING","ROBIN","ROBOT","ROCK","ROME","ROOT","ROSE","ROULETTE","ROUND","ROW","RULER","SATELLITE","SATURN","SCALE","SCHOOL","SCIENTIST","SCORPION","SCREEN","SCUBA DIVER","SEAL","SERVER","SHADOW","SHAKESPEARE","SHARK","SHIP","SHOE","SHOP","SHOT","SINK","SKYSCRAPER","SLIP","SLUG","SMUGGLER","SNOW","SNOWMAN","SOCK","SOLDIER","SOUL","SOUND","SPACE","SPELL","SPIDER","SPIKE","SPINE","SPOT","SPRING","SPY","SQUARE","STADIUM","STAFF","STAR","STATE","STICK","STOCK","STRAW","STREAM","STRIKE","STRING","SUB","SUIT","SUPERHERO","SWING","SWITCH","TABLE","TABLET","TAG","TAIL","TAP","TEACHER","TELESCOPE","TEMPLE","THEATER","THIEF","THUMB","TICK","TIE","TIME","TOKYO","TOOTH","TORCH","TOWER","TRACK","TRAIN","TRIANGLE","TRIP","TRUNK","TUBE","TURKEY","UNDERTAKER","UNICORN","VACUUM","VAN","VET","WAKE","WALL","WAR","WASHER","WASHINGTON","WATCH","WATER","WAVE","WEB","WELL","WHALE","WHIP","WIND","WITCH","WORM","YARD"];

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
				block = "blockWord" + i;
				word = words.pop()
				document.getElementById(block).innerHTML = word;
				document.getElementById(block).style.background = 'rgba(256, 256, 256, 0.9)';			
			}
		}
		
		function randomiseCardColours(array) {
			seed = document.getElementById('seed').value;
			
			array = ['url("CodeNameCardDesignRed.jpg")', 'url("CodeNameCardDesignRed.jpg")', 'url("CodeNameCardDesignRed.jpg")', 'url("CodeNameCardDesignRed.jpg")', 'url("CodeNameCardDesignRed.jpg")', 'url("CodeNameCardDesignRed.jpg")', 'url("CodeNameCardDesignRed.jpg")', 'url("CodeNameCardDesignRed.jpg")', 'url("CodeNameCardDesignRed.jpg")', 'url("CodeNameCardDesignGreen.jpg")', 'url("CodeNameCardDesignGreen.jpg")', 'url("CodeNameCardDesignGreen.jpg")', 'url("CodeNameCardDesignGreen.jpg")', 'url("CodeNameCardDesignGreen.jpg")', 'url("CodeNameCardDesignGreen.jpg")', 'url("CodeNameCardDesignGreen.jpg")', 'url("CodeNameCardDesignGreen.jpg")', 'url("CodeNameCardDesignYellow.jpg")', 'url("CodeNameCardDesignYellow.jpg")', 'url("CodeNameCardDesignYellow.jpg")', 'url("CodeNameCardDesignYellow.jpg")', 'url("CodeNameCardDesignYellow.jpg")', 'url("CodeNameCardDesignYellow.jpg")', 'url("CodeNameCardDesignYellow.jpg")','url("CodeNameCardDesignBlack.jpg")'];			

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
			if (block.style.backgroundImage == "CodeNameCardDesignRed.jpg" || block.style.background == "green" || block.style.background == "yellow" || block.style.background == "black") {
			} 	else {

				cardColour = array[blockNumber]
				block.style.backgroundImage = cardColour;		
				block.style.fontSize = '1.8em';
				opac = 0;
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
				document.getElementById(block).style.backgroundImage = cardColour;
				document.getElementById(block).style.fontSize = '1em';
			}
		}

		function setColourToGray() {
			console.log('hi');
			for (i = 0; i < 25; i++) {
				block = "block" + i;
				cardBackground = 'url("CodeNameCardDesign.jpg")';
				document.getElementById(block).style.backgroundImage = cardBackground;
				document.getElementById(block).style.fontSize = '1em';
			}
		}		

		function random() {

		    var x = Math.sin(seed++) * 10000;
		    return x - Math.floor(x);
		}

		function showAndHideRules() {
			x = document.getElementById('rules')
			if (x.style.display == 'block') {
				x.style.display = 'none';
			} else {
				x.style.display = 'block';
			}
		}
