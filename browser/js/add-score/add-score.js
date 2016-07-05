app.config(function ($stateProvider) {
    $stateProvider.state('add-score', {
        url: '/add-score',
        templateUrl: 'js/add-score/add-score.html',
        controller: 'addScoreCtrl'
    });
});


app.controller('addScoreCtrl', function($scope, $rootScope, LeaderboardFactory, $state){

	var diff;
	if($rootScope.difficulty === 'E') diff = 'easy'
	if($rootScope.difficulty === 'M') diff = 'medium'
	if($rootScope.difficulty === 'H') diff = 'hard'

	if($rootScope.difficulty === 'E' && $rootScope.score <= 5) $scope.showing1 = true; 
	if($rootScope.difficulty === 'E' && $rootScope.score > 5) $scope.showing2 = true;
	if($rootScope.difficulty === 'M' && $rootScope.score <= 5) $scope.showing3 = true;
	if($rootScope.difficulty === 'M' && $rootScope.score > 5) $scope.showing4 = true;
	if($rootScope.difficulty === 'H' && $rootScope.score <= 5) $scope.showing5 = true;
	if($rootScope.difficulty === 'H' && $rootScope.score > 5) $scope.showing6 = true;

	$scope.thisPageScore = $rootScope.score;



	$scope.submitScore = function(){
		LeaderboardFactory.addScore($scope.name, diff, $rootScope.score, $rootScope.foughtFor)
		.then(function(){
			$state.go('all-scores');
		})	
	}
	
})
