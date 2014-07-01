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
        price: 0,
        bought: false
    };

    $scope.addItem =function(){
        $scope.products.push($scope.newItem);
        $scope.newItem = {
            name: '',
            description: '',
            quantity: 0,
            price: 0,
            bought: false
        };

    };
    $scope.remove = function(){
        var oldItems = $scope.products;
        $scope.products = [];
        angular.forEach(oldItems, function(product) {
            if (!product.bought) $scope.products.push(product);
        });
    };

    $scope.add_button = function(){
        $scope.add = !$scope.add;
    }
    $scope.edit_button = function(){
        $scope.edit = !$scope.edit;

    };
});


