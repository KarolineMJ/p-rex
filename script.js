let startButton = document.querySelector(".startButton");
let mainFrame = document.querySelector(".mainframe");
let wind = document.querySelector("#wind");


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
    	console.log("hurray");
    	mainFrame.classList.remove("mainframe");
    	wind.play();

    }

}, true);






/*('click', startAnimation);

function startAnimation(){
	console.log("something is happening");
}
*/
