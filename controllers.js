angular.module("examApp.controllers", [])
    .controller("mainCtrl", function($scope){})
    .controller("getCtrl", function(){
      $http.get("http://localhost:8080")	

    })
    .controller("postCtrl", function(){
	   $scope.post =function(){} 
    })
    .controller("updateCtrl", function(){
	  $http.put('/update', data).then(function (response) {
		if (response.data)
	  $scope.msg = "Updte Successfully";
			}, function (response) {
	  $scope.msg = "Updated";

	  console.log(data)
    })












        
        


