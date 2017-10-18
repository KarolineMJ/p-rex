let clickCounter = 0;
let startButton = document.querySelector(".startButton");
let mainFrame = document.querySelector(".mainframe");
let wind = document.querySelector("#wind");
let prex = document.querySelector(".prex");
let snowSound = document.querySelector("#snow");
let prexFront = document.querySelector(".prexFront");
let helmet = document.querySelector(".prexhelmet");
let flying = document.querySelector(".flying");
let ballon = document.querySelector(".ballons");
let credit = document.querySelector(".credit");

startButton.addEventListener('click', function(happening){
    console.log("something is happening");
    startButton.classList.add("mainCSS");
    let audios = document.getElementsByTagName('audio');
    for(let i = 0, len = audios.length; i < len;i++){
        if(audios[i] != happening.target){
            audios[i].pause();
        }
    }
    if(startButton.classList.contains("mainCSS")){
    	console.log("hurray p-rex is moving");
    	mainFrame.classList.remove("mainframe");
    	wind.play();
    	snow.play();
    	prex.classList.add("prexCSS");
    	snow.addEventListener('ended', animationEnded);
    }

}, true);

	function animationEnded(){
		console.log("i am turning now");
		prex.style.display = "none";
		prexFront.style.display = "block";

	}

prexFront.addEventListener('click', giveOnHelmet);

function giveOnHelmet(){
	clickCounter = clickCounter + 1;

	if (clickCounter == 1){
		console.log("GIVE HIM A HELMET GOT DAMMIT!");
		prexFront.style.display = "none";
		helmet.style.display = "block";

	}
}

helmet.addEventListener('click', flyBaby);

function flyBaby(){
	clickCounter = clickCounter + 1;

	if (clickCounter == 2){
		console.log("Make baby flyyyyy");
		helmet.style.display = "none";
		flying.style.display = "block";
	}
}

flying.addEventListener('click', safePrex);

function safePrex(){
	clickCounter = clickCounter + 1;

	if (clickCounter == 3){
		console.log("Safe that little penguin");
		flying.style.display = "none";
		ballon.style.display = "block";
	}
}

ballon.addEventListener('click', creditGoesTo);

function creditGoesTo(){
	clickCounter = clickCounter + 1;

	if(clickCounter == 4){
		console.log("and the credit goes to.....");
		ballon.style.display = "none";
		mainFrame.style.display = "none";

	let audios = document.getElementsByTagName('audio');
    for(let i = 0, len = audios.length; i < len;i++){
        if(audios[i] != creditGoesTo.target){
            audios[i].pause();
        }

	}
}
}

/*('click', startAnimation);

function startAnimation(){
	console.log("something is happening");
}
*/
