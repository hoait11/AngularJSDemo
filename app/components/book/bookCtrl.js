app.controller('bookCtrl', function($scope, $http) {
    $scope.customer = {
    name: 'Quoc',
    address: 'Le Duan, Da Nang'
    };
    $http.get("data/data.json")
    .then(function(response) {
        $scope.users = response.data;
    }, function(error){
      console.log(error);
    })
    $scope.save = function () {
        console.log('save function');
    }
    $scope.cancel = function () {
        console.log('cancel function');
    }
})