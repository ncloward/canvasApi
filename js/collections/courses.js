App.Collections.Courses = Backbone.Collection.extend({
	links: [],
	url: App.ApiUrl + "/courses",
	parse: function(response, options){
		var linkHeader = options.xhr.getResponseHeader("link"),
			linkParts = linkHeader ? linkHeader.split(", ") : [];

		this.links = new Array(linkParts.length);

		// Regex might be better...
		for(var i = 0; i < linkParts.length; ++i){
			var linkStr = linkParts[i],
				linkInfo = linkStr.split(">; ");

			this.links[i] = {
				url: linkInfo[0].slice(1),
				name: linkInfo[1].slice(5).replace("\"", "")
			};
		}

		return response;
	}
});