let startButton = document.querySelector(".startButton");
let mainFrame = document.querySelector(".mainframe");
let wind = document.querySelector("#wind");
let prex = document.querySelector(".prex");
let snowSound = document.querySelector("#snow");
let prexFront = document.querySelector(".prexFront")

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





/*('click', startAnimation);

function startAnimation(){
	console.log("something is happening");
}
*/
