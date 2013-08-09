App.Router = Backbone.Router.extend({
	routes: {
		"": "courses",
		"courses(/:id)": "courses"
    },
    courses: function(id){
    	App.CurrentView = new App.Views.Courses({
    		el: "#content",
    		id: id
    	});
    }
});