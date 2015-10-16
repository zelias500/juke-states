app.controller('AlbumCtrl', function ($scope, album, PlayerFactory) {

	$scope.album = album;
	
	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.album.songs);
	};

});