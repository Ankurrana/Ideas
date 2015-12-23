app.controller('formController',function($scope,$http,$rootScope,formChecker){
	$scope.quote = "Whats on your mind today!";
	$scope.idea = {};
	$scope.formError = "";
	$scope.successMsg = "";
	$scope.submit = function(){
		$scope.formError = "";
		$scope.successMsg = "";	
		console.log(formChecker.lenCheck($scope.idea.title,3,10));	
		if( formChecker.lenCheck($scope.idea.title,1,10) != true || formChecker.lenCheck($scope.idea.desc,1,500) != true
		 ){
			$scope.formError = "Please check your inputs";
			return ;
		}
		var sucFunction = function(res){  
			if( res.data.code > 0 ){
				console.log(res.data.msg);
				$scope.successMsg = res.data.msg;
				$rootScope.$broadcast('databaseUpdated');
			}else{
				console.log(res.data.msg);
				$scope.formError = res.data.msg;
			}
		};
		var failFunction = function(res){ console.log("Failed" + res);}; 
		$http.post('/api/idea',$scope.idea).then(sucFunction,failFunction); /* This fail function runs when the request is failed, not database*/
		$scope.idea = {};

	}

	$scope.reset = function(){
		$scope.formError = "";
		$scope.successMsg = "";
		$scope.idea.title = "";
		$scope.idea.desc = "";
	}

})