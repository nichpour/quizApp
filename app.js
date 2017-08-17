 

function subclick(counter){
    $("body").on('click', '.submitter', function(event){
        $('.submitter').addClass('submitted');
        $(this).text("SUBMITTED");
        var valAnswer = ($('input[name=choice]:checked').val())
        if(valAnswer === 'correct'){
            
            counter = counter + 1;
            alert(counter);
        }
    })
} 

function answerCounter(){
    var counter = 0;
    subclick(counter);
}



$(document).ready(function(event){
	var answerCount = 0;
    answerCounter();
	
});