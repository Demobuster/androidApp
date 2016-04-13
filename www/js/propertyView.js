var propertyView = Backbone.view.extend({
    el: "#propertyTable",
    
    initialize: function() {
        this.render();
    },
    
    render: function() {
        var source = $("#tableTemplate").html();
        var template = Handlebars.compile(source);
        
        this.$el.html(template);
    }
    
});