$(document).ready(function (){
    //display the current day
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    //save values for time blocks in local storage
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings("textarea").val()
        var time = $(this).parent().attr("id")
        //look up local storage set item
        console.log(text, time)
    })
})

