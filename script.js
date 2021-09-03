$(document).ready(function () {
  $("button").click(function () {
    let input = $("input").val();
    console.log(input);
  });
  $("input").keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
});
});