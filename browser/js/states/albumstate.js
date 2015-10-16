app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$locationProvider.html5Mode(true)

	
	$stateProvider.state('albums', {
		templateUrl: "js/states/albumStemplate.html",
		url: "/albums",
		resolve: {
			albums: function(AlbumFactory){
				return AlbumFactory.fetchAll();
			}
		},
		controller: "AlbumsCtrl"
	})

	$urlRouterProvider.when('/', '/albums');

  $stateProvider.state('oneAlbum', {
    templateUrl: "js/states/albumTemplate.html",
    url: "/albums/:album",
    resolve: {
    	album: function(AlbumFactory, $stateParams){
    		return AlbumFactory.fetchById($stateParams.album)
    	}
    },
    controller: "AlbumCtrl"
  })
})