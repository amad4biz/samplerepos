(function(){
    
  angular.module('HelloWorldApp', [])
   .controller('HelloWorldController', function($scope) {
       $scope.initial = 0;
       $scope.balance= 0;
       $scope.transactions=[];

      //alert("success")

        $scope.deposit = function(amount){

             $scope.balance = $scope.balance + $scope.initial;

        } 



});
})();