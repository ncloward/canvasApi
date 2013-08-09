App.Views.Courses = Backbone.View.extend({
	initialize: function(options){
		this.collection = new App.Collections.Courses();
		this.listenTo(this.collection, "reset", this.render);
		
		this.$el.html(App.Templates["coursesTable"]());

		this.collection.fetch({ data: { per_page: 2 }, reset: true });
	},
	render: function(){
		var content = App.Templates["coursesRows"]({
			courses: this.collection.toJSON()
		});

		var paging = App.Templates["coursesPaging"]({
			links: this.collection.links
		});

		this.$el.find("tbody").html(content);
		this.$el.find("tfoot .btn-group").html(paging);
	},
	events: {
		"click tfoot button": "page",
		"click tbody tr td": "openCourse"
	},
	page: function(e){
		var target = $(e.target),
			url = target.data("url");
		this.collection.fetch({ reset: true, url: url });
	},
	openCourse: function(e){
		var target = $(e.target),
			id = target.closest("tr").data("id"),
			model = this.collection.get(id),
			modal = App.Templates["modal"]({
				title: "Course Details",
				body: App.Templates["courseDetails"](model.toJSON())
			});

		$(modal).modal();
	}
});