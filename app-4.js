var app = angular.module("myApp",[]);

app.controller("myController",['$scope',function($scope){
	$scope.count = 0;
	$scope.show = true;
	$scope.toggleShow = function(){
		$scope.show = !$scope.show;
	}
}])