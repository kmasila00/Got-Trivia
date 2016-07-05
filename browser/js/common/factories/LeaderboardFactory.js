app.factory('LeaderboardFactory', function($http){

	return {

		addScore: function(name, difficulty, score, sigil){
			return $http.post('/api/leaderboard/', {name:name, difficulty:difficulty, score:score, sigil:sigil})
			.then()
		},

		fetchEasyScores: function(){
			return $http.get('/api/leaderboard/easy')
			.then(function(res){
				return res.data;
			})
		},

		fetchMediumScores: function(){
			return $http.get('/api/leaderboard/medium')
			.then(function(res){
				return res.data;
			})
		},

		fetchHardScores: function(){
			return $http.get('/api/leaderboard/hard')
			.then(function(res){
				return res.data;
			})
		}

	}

})