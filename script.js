$(document).ready(function (){
    //display the current day
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    //save values for time blocks in local storage
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings("textarea").val()
        var time = $(this).parent().attr("id")
        //look up local storage set item
        console.log(text, time)
        localStorage.setItem(text, time)
    })
})

function timeChecker() {
    var currentTime=moment().hours();
    console.log(currentTime)

    $(".time-block").each(function(){
        var taskHour = parseInt( $(this).attr("id").split("hour")[1])
        console.log(taskHour)

        if(taskHour < currentTime){
            $(this).addClass("past");
    
        }
        else if(taskHour === currentTime){
            $(this).addClass("present")

        }
        else {
            $(this).addClass("future")

        }
    });


   

}

timeChecker();
