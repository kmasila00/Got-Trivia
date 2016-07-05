app.config(function ($stateProvider) {
    $stateProvider.state('q-page', {
        url: '/q-page',
        templateUrl: 'js/q-page/q-page.html',
        controller: 'qPageCtrl'
    });
});

app.controller('qPageCtrl', function($scope, QuestionsFactory, $rootScope, $state){


	if($rootScope.difficulty === 'E'){
		QuestionsFactory.getEasyQs()
		.then(function(easyQuestions){
			console.log(easyQuestions[0].choices)
			$scope.theQuestions = easyQuestions;

		})
	}

	if($rootScope.difficulty === 'M'){
		QuestionsFactory.getMediumQs()
		.then(function(mediumQuestions){
			console.log(mediumQuestions[0].choices)
			$scope.theQuestions = mediumQuestions;
		})
	}

	if($rootScope.difficulty === 'H'){
		QuestionsFactory.getHardQs()
		.then(function(hardQuestions){
			console.log(hardQuestions);
			$scope.theQuestions = hardQuestions;
		})
	}

	$scope.theAnswer = {
		question:{}
	}

	$scope.score = 0;

	$scope.print = function(){
		var i = 0
		var obj = $scope.theAnswer.question
		console.log("++", obj)
		var correctAns = $scope.theQuestions
		console.log(correctAns);
		for(var key in obj){
			if(obj[key] === correctAns[i].answer){
				$scope.score++;
				i++;
			} else {
				i++;
			}
		}

		$rootScope.score = $scope.score
				$scope.easyPass = true;
				// setTimeout(function(){ $state.go('addScore'); }, 1000);

		console.log($scope.score);
		$scope.score = 0;
	}

	$scope.submit = function(){
		// if($rootScope === 'E'){
		// 	if($rootScope.score > 10){
		// 	} else {
		// 		$scope.easyFail = true;
		// 		setTimeout(function(){ $state.go('addScore'); }, 1000);
		// 	}
		// } else if($rootScope === 'M'){
		// 	if($rootScope.score > 10){
		// 		$scope.mediumPass = true;
		// 		setTimeout(function(){ $state.go('addScore'); }, 1000);
		// 	} else {
		// 		$scope.mediumFail = true;
		// 		setTimeout(function(){ $state.go('addScore'); }, 1000);
		// 	}
		// } else if($rootScope === 'H'){
		// 	if($rootScope.score > 10){
		// 		$scope.hardPass = true;
		// 		setTimeout(function(){ $state.go('addScore'); }, 1000);
		// 	} else {
		// 		$scope.hardFail = true;
		// 		setTimeout(function(){ $state.go('addScore'); }, 1000);
		// 	}
		// } 
		$state.go('addScore');
	}



})