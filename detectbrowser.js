document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
  

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    if(isIE == true) {
        alert('IE not supported')
        console.log('Hello');
    };

});