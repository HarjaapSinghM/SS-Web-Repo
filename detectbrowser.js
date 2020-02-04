document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
  

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    if(isIE == true) {
        alert("Note: This site does not support Internet Explorer. For an ideal viewing experience, please use a modern browser such as Microsoft Edge, Google Chrome, or Firefox");
    };

});