app.config(function($stateProvider){
	$stateProvider.state('all-scores', {
		url: '/all-scores', 
		templateUrl: 'js/all-scores/all-scores.html',
		controller: 'allScores'
	})
})

app.controller('allScores', function($scope, LeaderboardFactory){

	LeaderboardFactory.fetchEasyScores()
	.then(function(scores){
		$scope.easyScores = scores;
	})

	LeaderboardFactory.fetchMediumScores()
	.then(function(scores){
		$scope.mediumScores = scores;
	})

	LeaderboardFactory.fetchHardScores()
	.then(function(scores){
		$scope.hardScores = scores;
	})

})