$( document ).ready(function() {
    console.log( "ready!" );



//setting our variables
var correct = 0;
var incorrect = 0;

var results = [correct, incorrect];

var answerKey = [
					[0,1,0,0], //	1.B
					[0,0,0,1], //	2.D
					[0,0,1,0], //	3.C
					[0,0,1,0], //	4.C
					[0,0,0,1], //	5.D
					[0,0,0,1], //	6.A
					[1,0,0,0], //	7.A
				];

var questions = [
					"This guitarist, originally named 'Johnny,' was born in 1942 in Seattle, Washington. He would go on to be arguably the greatest guitarist of all time, though he only lived to be twenty-seven. If I told you what band he was in, it would be way too obvious.",
					"This drummer died young, at age 32 in 1978. He was known for his intense style of playing and destructive behavior. On the 'Smothers Brothers Comedy Hour', he overloaded his drums with explosives. They went off at the end of the performance, leaving Pete Townshend with permanent hearing damage.",
					"This singer, originally named Stephen Tallarico, was part of the band who made hits such as 'Dream On' and 'Sweet Emotion.'",
					"This frontman was knighted in 2003 for 'services to popular music.' His bandmate Keith Richards criticized the honor, though this singer suspected that Richards was actually a bit jealous.",
					"This guitarist started with The Yardbirds, then moved on to become the lead guitarist of arguably the greatest rock band of all-time. Every rock fan should know this man, who played with Robert Plant, John Paul Jones, and John Bonham.",
					"This Beatle was born in 1942, had a successful career after the band broke up, and played bass.",
					"This singer began as a member of Black Sabbath, and also had a great solo career. He is one of the most famous men in rock and roll."
				];

var answers = [
				[ 'Jimmy Page', 'Jimi Hendrix', 'Angus Young', 'Chuck Berry'],
				[ 'John Bonham','Ringo Starr','Lars Ulrich','Keith Moon'],
				[ 'Robert Plant','Axl Rose','Steven Tyler','Jim Morrison'],
				[ 'Bono','Roger Daltrey','Mick Jagger','Sting'],
				[ 'Angus Young','George Harrison','David Gilmour','Jimmy Page'],
				[ 'Ringo Starr','John Lennon','George Harrison','Paul McCartney'],
				[ 'Ozzy Osbourne','James Hetfield','Bono','Kurt Cobain'],
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
		correct=0;
		incorrect=0;
		guess=0;
		i=0;
	debug();

	$('#answers').show();
	$('#multipleChoices').show();

		$('#ohyeah').hide();
		$('#instructions').hide();

	//STARTS THE TIMER
	var timer = setTimeout(function(){

		$('#ohyeah').show();
		$('#question').html('Game over man, game over! ');
		$('#question').append(correct+' correct, '+incorrect+' incorrect');
		i=0;

	},35000);




	//this will loop through all the answers, waiting for answer clicks
console.log("did we even start?"+questions);


function htmlChange()
			{
				console.log(i+" - i ");
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
								function end ()
					{
						$('#answers').hide();
						$('#multipleChoices').hide();
						console.log("you got "+correct+" correct");
						console.log("you got "+incorrect+" incorrect");

						$('#ohyeah').show();
							$('#question').html('Game over man, game over! ');
							$('#question').append(correct+' correct, '+incorrect+' incorrect');


								correct=0;
							incorrect=0;
							guess=0;
							i=0;

						$('#ohyeah').click(function (){
						
							myFunction();
						});
					}
		

			if (guess === 1)
				{
					correct++;
					i++;

						if (i === answerKey.length)
							{
								i=0;
								clearTimeout(timer);
								end();
							}

						else
							{
								htmlChange();
							}
					
				}
				else
				{
					incorrect++;
					i++;

						if (i === answerKey.length)
							{
								i=0;
								clearTimeout(timer);
								end();
							}
						else
							{
								htmlChange();
							}
				}

		


		}

	
	console.log (i);





});

//end of javascript
});
