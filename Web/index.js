// TODO: Fix regex pattern for input. Console gave error
// Funtoin if this is not defined ignore

const hoursInputId = "timeInputHours";
const minutesInputId = "timeInputMinutes";
const secondsInputId = "timeInputSeconds";
const hoursLeftDigit = "hoursLeft";
const hoursRightDigit = "hoursRight";
var hours;
var minutes;
var seconds;
var timeInputFields;

$(document).ready(function() {
    timeInputFields = $(".input-time");

    // timeInputFields.change(function() {
    //     var foo = document.getElementById(this.id).value;
    // }); 
    
    timeInputFields.change(function(){
        RefreshTimer(this);
    });
});

function RefreshTimer(obj) {
    // Get the values in each input field (array)
    // For each value update the images
    // Call function for what segments to load.
    var timeValue;
    var timeType;

    if (obj !== undefined) {
        timeValue = obj.value;
    }
}