$(document).ready(function() {
    var url = (window.location.pathname == '/www/pages/property.html') ? 'https://realty-serzh.rhcloud.com/getAllProperties' : 
                                                                         'https://realty-serzh.rhcloud.com/getAllHire';

    handlebarsRenderProperty(url);
});


function executeStateProperty(url) {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function handlebarsRenderProperty(url) {
    var data;
    
    $.ajax({
        async: false,
        global: false,
        url: url,
        dataType: 'json',
        success: function (d) {
            data = d;
        }
    });
    
    var template = Handlebars.compile($("#tableTemplate").html());
    
    $(".inserHere").append(template(data));
}