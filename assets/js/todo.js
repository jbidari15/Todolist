//check on/off specific todos by clicking on them
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
	});

//remove the todo by clicking on span
$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation()
});

//taking the input and adding as li.
$("input[type='text']").on("keypress",function(e){
	if(e.which===13){
		var newToDo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' ></i> </span>"+newToDo+ "</li>");
	}
})
//click on the plus sign to toggle the input
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});