app.config(function ($stateProvider) {
    $stateProvider.state('difficulty', {
        url: '/difficulty',
        templateUrl: 'js/difficulty/difficulty.html',
        controller: 'difficultyCtrl'
    });
});

app.controller('difficultyCtrl', function($scope, $rootScope){

	$scope.makeEasy = function(){
		$rootScope.difficulty = 'E'
		console.log($rootScope.difficulty);
	}

	$scope.makeMedium = function(){
		$rootScope.difficulty = 'M'
		console.log($rootScope.difficulty);
	}

	$scope.makeHard = function(){
		$rootScope.difficulty = 'H'
	}
})