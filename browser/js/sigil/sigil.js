app.config(function ($stateProvider) {
    $stateProvider.state('sigil', {
        url: '/sigil',
        templateUrl: 'js/sigil/sigil.html',
        controller: 'sigilCtrl'
    });
});

app.controller('sigilCtrl', function($scope, $rootScope, $state){

	function sigilSelected(num){
		$scope.house = $scope.sigils[num];
		$rootScope.foughtFor = $scope.house
		setTimeout(function(){ $state.go('difficulty'); }, 100);
	}

	$scope.stark = function(){
		sigilSelected(0);
	}	

	$scope.targaryen = function(){
		sigilSelected(1);
	}

	$scope.tyrell = function(){
		sigilSelected(2);
	}

	$scope.lannister = function(){
		sigilSelected(3);
	}

	$scope.martell = function(){
		sigilSelected(4);
	}

	$scope.tully = function(){
		sigilSelected(5);
	}

	$scope.sigils = [
				"http://static1.squarespace.com/static/5365988be4b0a136223770fd/53685ba5e4b0b2200bedfac3/5368841ee4b0b3f114a9b382/1399358497535/5.jpg?format=1000w",
				"http://static1.squarespace.com/static/5365988be4b0a136223770fd/53685ba5e4b0b2200bedfac3/5368841ee4b08a77bceca8e2/1399358497298/11.jpg?format=1000w",
				"http://static1.squarespace.com/static/5365988be4b0a136223770fd/53685ba5e4b0b2200bedfac3/53688421e4b0b3f114a9b386/1399358500389/13.jpg?format=1000w",
				"http://static1.squarespace.com/static/5365988be4b0a136223770fd/53685ba5e4b0b2200bedfac3/53688421e4b08a77bceca8e8/1399358501365/12.jpg?format=1000w",
				"http://static1.squarespace.com/static/5365988be4b0a136223770fd/53685ba5e4b0b2200bedfac3/53688424e4b08a77bceca8ea/1399358503538/24.jpg?format=1000w",
				"http://static1.squarespace.com/static/5365988be4b0a136223770fd/53685ba5e4b0b2200bedfac3/53688424e4b0b3f114a9b389/1399358503740/28.jpg?format=1000w"
			];

})