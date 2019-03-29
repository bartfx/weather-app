$('button').on('click', function() {
    $(this).prop('disabled', true);
});

 $.get("http://ipinfo.io", function (response) {
    $("#address").html("Twoja lokalizacja: " + response.city );
}, "jsonp");


$.get("http://ipinfo.io", function (response) { 
    document.getElementById("myText").value = response.city;
}, "jsonp");

$.get("http://ipinfo.io", function (response) { 
    actcity = response.city;
}, "jsonp");
