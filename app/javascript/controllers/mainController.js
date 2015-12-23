app.controller('mainController',function($scope,$http,$rootScope){
	$scope.name = "IdeaStore";
	$scope.ideas = {};
	$scope.allIdeas = function(){
		// console.log('Loading All Ideas');
		$http.get('/api/ideas').then(function(data){
			$scope.ideas = data;
		})
	}
	$rootScope.$on('databaseUpdated',function(){
		$scope.allIdeas();
	})

	$scope.delete = function(title){
		console.log('Deleted')
		$http.delete('/api/idea/'+ title,function(res){
			console.log(res);
		})
		$scope.allIdeas();
	}
	
})