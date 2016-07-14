var app = angular.module("myApp", []);

app.controller("myController",["$scope",function($scope){
	$scope.employees = [
	{
		fname : "Joshita",
		lname : "Gaur",
		salary : "50,000"
	},
	{
		fname : "Vini",
		lname : "Pandya",
		salary : "45,000"
	}
	]
}]);