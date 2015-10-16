app.config(function($stateProvider){
	$stateProvider.state('albums', {
		templateUrl: "js/states/albumStemplate.html",
		url: "/albums",
		controller: "AlbumsCtrl"
	})

  $stateProvider.state('oneAlbum', {
    templateUrl: "js/states/albumTemplate.html",
    url: "/albums/:album",
    controller: "AlbumCtrl"
  })
})