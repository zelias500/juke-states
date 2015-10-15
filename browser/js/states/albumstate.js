app.config(function($stateProvider){
	$stateProvider.state('albums', {
		templateUrl: "js/states/albumStemplate.html",
		url: "/albums",
		controller: "AlbumsCtrl"
	})
})