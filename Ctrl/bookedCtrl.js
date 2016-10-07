angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv){
  $scope.bookedData = mainSrv.travelInfo;

});
