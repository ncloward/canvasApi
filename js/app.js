var App = {
	ApiToken: "9be624b4d5206a178fc56921d5bf2c2a",
	ApiUrl: "http://canvas-api.herokuapp.com/api/v1",
	Models: {},
	Collections: {},
	Router: {},
	Views: {},
	Templates: {},
	CurrentView: {},
	Init: function(){
		// Compile client side templates
		var templates = $("script[type='text/x-handlebars-template'][data-name]");
		for(var i = 0; i < templates.length; ++i){
			var template = $(templates[i]);
			App.Templates[template.data("name")] = Handlebars.compile(template.html());
		}

		// Setup Auth Api Header
		$.ajaxSetup({
			headers: {
				"Authorization": App.ApiToken
			}
		});

		//Initialize app router
		App.Router = new App.Router();

		// Start Backbone
		Backbone.history.start();
	}
};

$(function(){
	// Initialize the app.
	App.Init();
});
