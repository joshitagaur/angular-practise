var app = angular.module('myApp',[]);

app.controller('myController',['$scope',function($scope){
	$scope.fname = "Joshita";
	$scope.lname = "Gaur";
	$scope.fullname = function(){
		return $scope.fname + " " + $scope.lname;
	}
	$scope.isSpy= true;
	$scope.codeName = "Jossey"
}]);