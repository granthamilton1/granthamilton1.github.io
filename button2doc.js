//this is where the second buttons variables are created/pulled in from the html

var buttonNum2 = $('#buttonNum2');
var neededNum2 = $('#neededNum2');
var secVal = $('#secVal');
var totalPts = $('#totalPts');
var examVal = $('#examVal');
var currentNum2 = $('#currentNum2');
var desiredNum2 = $('#desiredNum2');
//var neededNum2 = $('#neededNum2');
var anotherDiv = $('.anotherDiv');
var anotherDivSpan = anotherDiv.find('span');
var buttonNum2 = $('#buttonNum2');
var finalValAdd;
var mathPreRound;
var mathFinal;

$(buttonNum2).on('click', function() {

	anotherDiv.removeClass('standard');
	anotherDiv.removeClass('danger');
	anotherDiv.removeClass('warning');

	var currentNum2Value = parseInt(currentNum2.val()),
		desiredNum2Value = parseInt(desiredNum2.val()),
		examValValue = parseInt(examVal.val()),
		secValValue = parseInt(secVal.val()),
		totalPtsValue = parseInt(totalPts.val());

	//target.html(((current.val()*(.01*(100-finalVal.val())))-desired.val())/((-.01*finalVal.val())));
	if (currentNum2Value<=120 && currentNum2Value>=0
	 && desiredNum2Value<=100 && desiredNum2Value>=0
	 && examValValue<=1000 && examValValue>=0
	 && secValValue<=100 && secValValue>=0
	 && totalPtsValue<=1000 && totalPtsValue>=0
	 && totalPtsValue>=examValValue) {
		finalValAdd = (examValValue/totalPtsValue)*(secValValue/100);
		mathPreRound = (-((currentNum2Value*(1-finalValAdd))+(-desiredNum2Value))/(finalValAdd));
		mathFinal = mathPreRound.toFixed(2);

		if(mathFinal > 90 && mathFinal < 100.01) {
			anotherDiv.addClass('warning');
		}
		if(mathFinal >= 100.01){
			anotherDiv.addClass('danger');
		}
		anotherDivSpan.html(mathFinal);
	} else {
		anotherDivSpan.html("Invalid Input");
		anotherDiv.addClass('standard');
	}
});
