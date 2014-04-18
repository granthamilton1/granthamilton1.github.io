var current = $('#current');
var desired = $('#desired');
var finalVal = $('#finalVal');
var mathDeci = new Number (0);
var mathD = new Number (0);
var target = $('.needed');
var targetSpan = target.find('span');
//var needed = $('#needed');
var button1 = $('#button1');




$(button1).on('click', function() {

	target.removeClass('standard');
	target.removeClass('danger');
	target.removeClass('warning');


	var currentTest1 = parseInt(current.val()),
		desiredTest1 = parseInt(desired.val()),
		mathD = 0,
		mathDeci = 0,
		finalValTest1 = parseInt(finalVal.val());

	//target.html(((current.val()*(.01*(100-finalVal.val())))-desired.val())/((-.01*finalVal.val())));
	if (currentTest1<=120 && currentTest1>=0
	 && desiredTest1<=100 && desiredTest1>=0 
	 && finalValTest1<=100 && finalValTest1>=0 )
{
	mathDeci = ((currentTest1*(1-(.01*finalValTest1)))-desired.val())/((-.01*finalValTest1));
	mathD = mathDeci.toFixed(2);

	var math2 = parseInt(mathD);

	if(math2 < 90) {
		target.addClass('standard');
	}
	
	else if(math2 >= 100.01) {
			target.addClass('danger');
		}

	else if(math2 >= 90 && math2 < 100.01) {
			target.addClass('warning');
		}

	targetSpan.html(mathD);
 }  
 else
{
	targetSpan.html("Invalid Input");
	target.addClass('standard');
}
   });


