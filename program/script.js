angular.module('myApp', [])
	.controller('myCtrl', function($scope, $http) {
		$scope.programList = []
		$scope.date = new Date();
		$http({
			method: 'GET',
			url: 'data.json'+$scope.data,
			dataType: 'json',
			contentType: "application/json"
		 }).then(function (success){
			 //alert(JSON.stringify(success))
			$scope.programList = success.data;
			//$scope.firstName = $scope.programList[0].Details;
			//console.log(JSON.stringify($scope.programList));
		 },function (error){
	  
		 });
		
		/* $scope.lastName = "Doe";
		
	alert(mydata[0].name);
	alert(mydata[0].age); */
	});


	