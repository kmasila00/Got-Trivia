app.factory('QuestionsFactory', function($http){

	return {

		getEasyQs: function(){
			return $http.get('/api/questions/easy')
			.then(function(qs){
				return qs.data
			})
		},

		getMediumQs: function(){
			return $http.get('/api/questions/medium')
			.then(function(qs){
				return qs.data
			})
		},

		getHardQs: function(){
			return $http.get('/api/questions/hard')
			.then(function(qs){
				return qs.data
			})
		}

	}

})