app.config(function($stateProvider){
	$stateProvider.state("artists", {
		templateUrl: "js/states/artistStemplate.html",
		url: "/artists",
		controller: "ArtistsCtrl"
	})

  $stateProvider.state("artist", {
    templateUrl: "js/states/artistTemplate.html",
    url: "/artists/:artist",
    controller: "ArtistCtrl"
  })
  .state("artist.albums", {
    url: "/albums",
    templateUrl: "js/states/artistAlbumsTemplate.html" 
  })
  .state("artist.songs", {
    url: "/songs",
    templateUrl: "js/states/artistSongsTemplate.html" 
  })


})