var app = angular.module('ideaStore',['rt.encodeuri','ngRoute'],function($locationProvider){
	$locationProvider.html5Mode({
		enabled:true,
		requireBase : false
	});
});
