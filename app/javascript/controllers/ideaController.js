app.controller('ideaController',function($scope,$location,$http,$routeParams){
	var ideaTitle = $location.path().split('/');
	$scope.title = ideaTitle[2].toString();
	var url = '/api/idea/'+$scope.title;
	console.log(url);
	
	$http.get(url).then(function(res){
		console.log(res);
		$scope.title = res.data.title,
		$scope.desc = res.data.desc
	});

})