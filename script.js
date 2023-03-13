// current day display //
let currentDayEl = $("#currentDay")

function dateandtime() {
  currentDayEl.text (moment().format('MMMM Do YYYY, h:mm:ss a'));  
  setTimeout(function(){dateandtime();}, 1000);
}
dateandtime();

$(document).ready( function() {
    timeBlockColor();
    renderText();
});

// Timeblock color-coded based on past, present, or future //
// let hour = moment().hours();
function timeBlockColor() {
    let currentHour = moment().hours();
   

    $("textarea").each(function() {
        let todoHour = parseInt($(this).attr("id"));
         console.log()
        if (currentHour > todoHour) {
            $(this).addClass("past");
        } else if (currentHour === todoHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    })
};

timeBlockColor();

$(".saveBtn").click(function() {
        
        let dataHour = $(this).attr("data-hour");
       
        let input = $(this).siblings(".textarea").val();
    //  console.log(input)
        localStorage.setItem(dataHour, JSON.stringify(input));

        
});
    
function renderText () {   
    var todoText9 = JSON.parse(localStorage.getItem("9AM"));
    $("#9").val("");
    $("#9").val(todoText9); 

    var todoText10= JSON.parse(localStorage.getItem("10AM"));
    $("#10").val("");
    $("#10").val(todoText10); 

    var todoText11= JSON.parse(localStorage.getItem("11AM"));
    $("#11").val("");
    $("#11").val(todoText11); 

    var todoText12= JSON.parse(localStorage.getItem("12PM"));
    $("#12").val("");
    $("#12").val(todoText12); 

    var todoText13= JSON.parse(localStorage.getItem("1PM"));
    $("#13").val("");
    $("#13").val(todoText13); 

    var todoText14= JSON.parse(localStorage.getItem("2PM"));
    $("#14").val("");
    $("#14").val(todoText14); 

    var todoText15= JSON.parse(localStorage.getItem("3PM"));
    $("#15").val("");
    $("#15").val(todoText15); 

    var todoText16= JSON.parse(localStorage.getItem("4PM"));
    $("#16").val("");
    $("#16").val(todoText16); 

    var todoText17= JSON.parse(localStorage.getItem("5PM"));
    $("#17").val("");
    $("#17").val(todoText17);


};

renderText ()


    

//     function usePlanner() {

//     $(".data-hour").each(function() {
//         var currHour = $(this).text();
//         var currPlan = localStorage.getItem(currHour);

//         // console.log(this);
//         console.log(currHour);

//         if(currPlan !== null) {
//             $(this).siblings(".plan").val(currPlan);
//         }
//     });
// }
// usePlanner();
/**
 * CALL FUNCTIONS
 */

// timeBlockColor();



//     const saveBtn = $(".form-group > button");
// saveBtn.on("click", function () {
//   const input = $(this).siblings(".form-control");
//   const inputValue = input.val();
//   const inputID = input.attr("id");

//   if (inputValue) {
//     input.attr("value", inputValue);
//     storeEventInLocalStorage(inputValue, inputID);
//   }
// });