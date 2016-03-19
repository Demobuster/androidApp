$(document).ready(function() {
    var source   = $("#table").html();
    var template = Handlebars.compile(source);
    
    var data = { "address": "Moscow", "description": "qwerty", "fee": "1600" };
    
    $("#insertion").append(template(data));
});
