app.config(function($stateProvider){
	$stateProvider.state("artists", {
		templateUrl: "js/states/artistStemplate.html",
		url: "/artists",
		controller: "ArtistsCtrl"
	})
})