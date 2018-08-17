



  $("#functionbold").click(
  function (){

$('#para').css("font-weight" , "bold");

}); 
 $("#functionitalic").click(
  function (){

$('#para').css("font-style" , "italic");

});  
 $("#functionunderline").click(
  function (){

$('#para').css("text-decoration" , "underline");

});  
 
$("#fonts").change (function() {
    var x = $("#fonts").val();
    $("#para").css("font-family" , x); 
    });   
$("#size").change (function() {
    var d = $("#size").val();
    $("#para").css("font-size" , d); 
    });   