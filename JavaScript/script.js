/**
 * Created by tlb on 6/27/2014.
 */


angular.module('list', []).controller('listController', function($scope) {
    $scope.edit = false;
    $scope.products =[];

    $scope.newItem = {
        name: '',
        description: '',
        quantity: 0,
        price: 0
    };

    $scope.addItem =function(){
        $scope.products.push($scope.newItem);
        $scope.newItem = {
            name: '',
            description: '',
            quantity: 0,
            price: 0
        };

    };

    $scope.add_button = function(){
        $scope.add = !$scope.add;
    }
    $scope.edit_button = function(){
        $scope.edit = !$scope.edit;
    };
});


