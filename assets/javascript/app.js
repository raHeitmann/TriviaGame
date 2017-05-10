$( document ).ready(function() {
    console.log( "ready!" );



//setting our variables
var correct = 0;
var incorrect = 0;

var results = [correct, incorrect];

var answerKey = [
					[0,1,0,0], //	B
					[0,0,0,1], //	D
					[1,0,0,0], //	A
					[0,1,0,0], //	B
					[0,0,1,0], //	C
					[1,0,0,0], //	A
					[0,0,0,1], //	D
				];

var questions = [
					["Do u liek dogs"],
					["wat r cats"],
					["who's green?"],
					["r u okay"],
					["dnt wry b hpy"],
					["lol im all out"],
					["of things 2 say"]
				];

var answers = [
				['if i','had a dollar','for everytime','u sukd'],
				['i would','be a rich man','for sure','u sukr'],
				['if i','had a dollar','for everytime','u sukd'],
				['i would','be a rich man','for sure','u sukr'],
				['if i','had a dollar','for everytime','u sukd'],
				['i would','be a rich man','for sure','u sukr'],
				['if i','had a dollar','for everytime','u sukd'],
			];

var guess = 0;

var i = 0;


function debug()
{
	console.log(correct +" correct, "+ incorrect +
					" incorrect, "+ answerKey[i]+" question, "
					+ i+" guessed");
}

console.log('waiting....');




//this is where our game starts
$('#ohyeah').click(function myFunction()
{

		$('#ohyeah').hide();

	//STARTS THE TIMER
	setTimeout(function(){

		$('#ohyeah').show();
		$('#question').html('Game over man, game over!');

	},35000);




	//this will loop through all the answers, waiting for answer clicks
console.log("did we even start?");


function htmlChange()
			{
				$('#question').html(questions[i]);
					$('#a').html(answers[i][0]);
					$('#b').html(answers[i][1]);
					$('#c').html(answers[i][2]);
					$('#d').html(answers[i][3]);

			}
	htmlChange();


		$('#btn1').click(function()
			{
				guess = answerKey[i][0];
				scoreCounter();
				debug();
			});

			$('#btn2').click(function()
			{
				guess = answerKey[i][1];
				scoreCounter();
				debug();
			});

			$('#btn3').click(function()
			{
				guess = answerKey[i][2];
				scoreCounter();
				debug();
			});

			$('#btn4').click(function()
			{
				guess = answerKey[i][3];
				scoreCounter();
				debug();
			});



		function scoreCounter()
		{
		

			if (guess === 1)
				{
					correct++;
					i++;
					htmlChange();
					
				}
				else
				{
					incorrect++;
					i++;
					htmlChange();
					
				}

			if (i === answerKey.length)
			{
				end();
			}


		}

	
	console.log (i);

function end ()
{
	console.log("you got "+correct+" correct");
	console.log("you got "+incorrect+" incorrect");
	correct=0;
	incorrect=0;
	guess=0;
	i=0;
	myFunction();
}



});

//end of javascript
});
