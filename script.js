// current day display //
let currentDayEl = $("#currentDay")

function dateandtime() {
  currentDayEl.text (moment().format('MMMM Do YYYY, h:mm:ss a'));  
  setTimeout(function(){dateandtime();}, 1000);
}
dateandtime();

// Timeblock color-coded based on past, present, or future //

function timeBlockColor() {
    let hour = moment().hours();
   

    $(".row").each(function() {
        let currentHour = parseInt($(this).attr("id"));
        //  console.log(currentHour)
       

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

timeBlockColor()