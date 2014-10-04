var app = angular.module('toDo', []);

app.controller('mainCtrl', function($scope, mainService){
  $scope.addThings = function(item){
   $scope.items = mainService.addThings(item);
     $scope.thingsObj.thingsToDo = "";
  };

  $scope.removeItem = function(item){
  	console.log(item);
  	mainService.removeThings(item);
  }

});

app.service('mainService', function(){
	var items = [];

	this.addThings = function(item){
		items.push(item);
		console.log("add", items);
		return items;

	};

	this.removeThings = function(item){
		for (var i = 0; i < items.length; i++) {
			if (items[i] === item) {
				console.log("remove", item);
				items.splice(i, 1);
			}
		}
	};
	
});