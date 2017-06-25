//<script src="js/talk-actions.js"></script> 
//onclick = "AskToTalk();">
/*
        <a-entity id="test"> 
        <a-sphere id="iAmTalk"
                        color="green"
                        position="-1 1 0"
                        scale="0.2 0.1 0.1"
                        visible = "true"
                        event-set__1="_event: mousedown; scale: .25 .15 .15; color: white"
                        event-set__2="_event: mouseup; scale: .2 .1 .1; color: green"
                        event-set__3="_event: mouseenter; scale: .25 .15 .15; color: white"
                        event-set__4="_event: mouseleave; scale: .2 .1 .1; color: green"       
                        </a-sphere>
                    <a-sphere id="iAmQuestion"
                        color="yellow"
                        visible = "true"
                        position="0 1 0"
                        scale="0.2 0.1 0.1">       
                        </a-sphere>
                    <a-sphere id="comradeQuestion"
                        color="red"
                        visible = "true"
                        position="1 1 0"
                        scale="0.2 0.1 0.1">       
                        </a-sphere>
        </a-entity>
        */

var isPresenter = true;
var wantsToTalk = false;

var player = document.querySelector('#player');

var iAmTalk = document.querySelector('#iAmTalk');
var iAmQuestion = document.querySelector('#iAmQuestion');
var comradeQuestion = document.querySelector('#comradeQuestion');

//hoping these get covered in the index
//iAmTalk.addEventListener('mouseenter', changeColor);
//iAmTalk.addEventListener('mouseleave', changeBack);
iAmTalk.addEventListener('click', AskToTalk);


start();

function start() {
	iAmTalk.setAttribute('visible', true);
	iAmQuestion.setAttribute('visible', true);
	comradeQuestion.setAttribute('visible', true);
	
	//if your ID is a certain thing at the beginning
	//if (true) {
		//isPresenter= true;
	//}

	//then if you click on stuff or someone clicks on you, isPresenter and wantsToTalk toggle true/false

	if (isPresenter) {
		wantsToTalk = false;
		iAmTalk.setAttribute('visible', true);
		iAmQuestion.setAttribute('visible', false);
		//comradeQuestion.setAttribute('visible', false);
	}
	/*
	if (wantsToTalk) {
		isPresenter = false;
		iAmTalk.setAttribute('visible', false);
		iAmQuestion.setAttribute('visible', true);
	} */
	if (!wantsToTalk && !isPresenter) {
		isPresenter = false;
		iAmTalk.setAttribute('visible', false);
		iAmQuestion.setAttribute('visible', false);
	}
	
	document.body.onkeyup = function (e) {
		//open bracket
        if (e.keyCode == 219) {
            isPresenter = !isPresenter;
        }
		//close bracket
        if (e.keyCode == 221) {
            wantsToTalk = !wantsToTalk;
        }
		//Tab
        if (e.keyCode == 9) {
            //backPano();
        }
		//Spacebar
        if (e.keyCode == 32) {
            //nextPano();
        }
    }
}

function AskToTalk () {
	//send message to Presenter you clicked on and let them know you would like to speak, sets their comradeQuestion visibility to true and:
	wantsToTalk = true;
}