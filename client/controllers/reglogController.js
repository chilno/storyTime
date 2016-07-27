myApp.controller('reglogController', function ($scope, $location, registerFactory, loginFactory, $cookies) {

	console.log($cookies);

	$scope.registerUser = function(){
		registerFactory.registerUser($scope.newUser, function(data){
			console.log(data);
			$scope.newUser = '';
		})
	}

	$scope.loginUser = function(){
		loginFactory.login($scope.user, function(data){
			console.log(data);
			if(data.errors){
				$scope.user = "";
				$scope.test = data;
			}else{
				$scope.user = "";
				$location.path('/dashboard');
			}


		})
	}
})
