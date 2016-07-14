var app = angular.module("myApp",[]);

app.controller("myController",['$scope',function($scope){
	$scope.form = [];
	$scope.submitForm = function(){
		$scope.reviews.push($scope.form);
		$scope.form = [];
	}
	$scope.reviews = [
		{
			comment: "This is awesome",
			by: "Chris"
		},
		{
			comment: "Thats pathetic",
			by: "Jose"
		}
	]
	}
]);